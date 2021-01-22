// imports
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

// resolvers - incomplete
const resolvers = {
  Query: {},
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      return user;
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect username or password')
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect username or password')
      }

      return user;
    }
  }
};

// exports
module.exports = resolvers;
