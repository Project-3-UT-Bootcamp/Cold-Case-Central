// imports
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
    type Case {
        _id: ID
        caseTitle: String
        caseDescription: String
        caseStartDate: String
        caseStatus: String
        caseAuthor: String
        createdAt: String
        username: String
    }

    type Query {
        cases: [Case]
    }
`;


// // incomplete
// const typeDefs = gql`
//     type User {
//         _id: ID
//         username: String
//         email: String
//         friendCount: Int
//         friends: [User]
//     }

//     type Query {
//         me: User
//         users: [User]
//         user(username: String!): User
//     }

//     type Mutation {
//         login(email: String!, password: String!): User
//         addUser(username: String!, email: String!, password: String!): User
//         addFriend(friendId: ID!): User
//         addComment(commentText: String!): Comment
//     }

//     type Auth {
//         token: ID!
//         user: User
//       }
      
// `;

module.exports = typeDefs;