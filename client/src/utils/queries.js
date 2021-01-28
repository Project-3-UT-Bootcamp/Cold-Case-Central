import gql from 'graphql-tag';

export const QUERY_CASES = gql`
  query cases($username: String) {
    cases(username: $username) {
      _id
      caseTitle
      caseSummary
      caseDescription
      caseStatus
      caseStartDate
      createdAt
      username
      commentCount
      comments {
        _id
        createdAt
        username
        commentText
      }
    }
  }
`;

export const QUERY_CASE = gql`
  query case($id: ID!) {
    case(_id: $id) {
      _id
      caseTitle
      caseDescription
      caseStatus
      caseStartDate
      createdAt
      username
      commentCount
      comments {
        _id
        createdAt
        username
        commentText
      }
    }
  }
`;


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

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      friendCount
      friends {
        _id
        username
      }
      cases {
        _id
        caseTitle
        caseDescription
        caseStatus
        caseStartDate
        createdAt
        commentCount
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
    friendCount
    cases {
      _id
      caseTitle
      caseDescription
      caseStatus
      caseStartDate
      createdAt
      commentCount
      comments {
        _id
        createdAt
        commentText
        username
      }
    }
    friends {
      _id
      username
    }
  }
}
`;

export const QUERY_ME_BASIC = gql`
  {
    me {
      _id
      username
      email
      friendCount
      friends {
        _id
        username
      }
    }
  }
`;