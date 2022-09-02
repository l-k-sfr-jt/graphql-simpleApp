const {buildSchema} = require('graphql');

module.exports = buildSchema(`
    type Post {
        _id: ID!
        title: String!
        content: String!
        imageUrl: String!
        creator: String!
        createdAt: String!
        updatedAt: String!
    }
    type User {
        _id: ID!
        name: String!
        email: String!
        password: String!
        status: String!
        posts: [Post!]
    }
    input UserData {
        email: String!
        name: String!
        password: String!
    }
    
    type RootMutation {
        createUser(userInputData: UserData): User!
    }
    schema {
        mutation: RootMutation
    }
`);