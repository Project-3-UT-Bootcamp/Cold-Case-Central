import gql from "graphql-tag";

export const QUERY_COMMENTS = gql`
  query comments($username: String) {
    comments(username: $username) {
      _id
      commentText
      createdAt
      username
    }
  }
`;

export const QUERY_CASES = gql`
  {
    cases {
      _id
      name
      description
      category {
        name
      }
    }
  }
`;

export const QUERY_CASE = gql`
  query case($id: ID!) {
    case(_id: $id) {
      _id
      caseText
      createdAt
      username
      commentCount
      comments {
        _id
        createdAt
        username
        commentBody
      }
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      commentCount
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;