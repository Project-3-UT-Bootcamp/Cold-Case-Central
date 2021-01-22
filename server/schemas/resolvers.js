// imports

// resolvers - incomplete
const resolvers = {
  Query: {},
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      return user;
    },
    login: async () => {

    }
  }
};

// exports
module.exports = resolvers;
