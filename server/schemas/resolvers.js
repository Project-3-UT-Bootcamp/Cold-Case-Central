// // imports
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { User, Case } = require('../models');

const resolvers = {
  Query: {
    me: async(parent, args, context) => {
      if(context.user){
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('cases')
          .populate('friends');
        
        return userData;
      }
      throw new AuthenticationError('Not logged in');
        
    },
    // get all cases
    cases: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Case.find(params).sort({ createdAt: -1 });
    },
    // get one case by ID
    case: async (parent, { _id }) => {
      return Case.findOne({ _id });
    },
    // get all users
    users: async () => {
      return User.find()
        .select('-__v -password')
        .populate('friends')
        .populate('cases');
    },
    // get a user by username
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
        .populate('friends')
        .populate('cases');
    }
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },
    addCase: async (parent, args, context) => {
      if (context.user) {
        const coldCase = await Case.create({ ...args, username: context.user.username });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { cases: coldCase._id } },
          { new: true }
        );

        return coldCase;
      }
    
    throw new AuthenticationError('You need to be logged in');
    },
    addComment: async (parent, { caseId, commentText }, context) => {
      if (context.user) {
        const updatedCase = await Case.findOneAndUpdate(
          { _id: caseId },
          { $push: { comments: { commentText, username: context.user.username } } },
          { new: true, runValidators: true }
        );

        return updatedCase;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    addFriend: async (parent, { friendId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { friends: friendId } },
          { new: true }
        ).populate('friends');

        return updatedUser;
      }

      throw new AuthenticationError('You need to be logged in!');
    }
  }
};
// // resolvers - incomplete
// const resolvers = {
//   Query: {
//     me: async (parent, args, context) => {
//       if (context.user) {
//         const userData = await User.findOne({ _id: context.user._id })
//           .select('-__v -password')
//           .populate('thoughts')
//           .populate('friends');
    
//         return userData;
//       }
    
//       throw new AuthenticationError('Not logged in');
//     }
//   },
//   Mutation: {
//     addUser: async (parent, args) => {
//       const user = await User.create(args);
//       const token = signToken(user);

//       return { token, user };
//     },
//     login: async (parent, { email, password }) => {
//       const user = await User.findOne({ email });

//       if (!user) {
//         throw new AuthenticationError('Incorrect username or password')
//       }

//       const correctPw = await user.isCorrectPassword(password);

//       if (!correctPw) {
//         throw new AuthenticationError('Incorrect username or password')
//       }

//       const token = signToken(user);
//       return { token, user };
//     },

//     addComment: async (parent, args, context) => {
//       if (context.user) {
//         const comment = await Comment.create({ ...args, username: context.user.username });
    
//         await User.findByIdAndUpdate(
//           { _id: context.user._id },
//           { $push: { comments: comment._id } },
//           { new: true }
//         );
    
//         return comment;
//       }
    
//       throw new AuthenticationError('You need to be logged in!');
//     },

//     addFriend: async (parent, { friendId }, context) => {
//       if (context.user) {
//         const updatedUser = await User.findOneAndUpdate(
//           { _id: context.user._id },
//           { $addToSet: { friends: friendId } },
//           { new: true }
//         ).populate('friends');
    
//         return updatedUser;
//       }
    
//       throw new AuthenticationError('You need to be logged in!');
//     }
//   }
// };

// // exports
module.exports = resolvers;
