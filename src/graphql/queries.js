/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser_status = /* GraphQL */ `
  query GetUser_status($id: Int!) {
    getUser_status(id: $id) {
      id
      short_name
      description
    }
  }
`;
export const listUser_statuss = /* GraphQL */ `
  query ListUser_statuss {
    listUser_statuss {
      id
      short_name
      description
    }
  }
`;
export const getUser_type = /* GraphQL */ `
  query GetUser_type($id: Int!) {
    getUser_type(id: $id) {
      id
      short_name
      description
    }
  }
`;
export const listUser_types = /* GraphQL */ `
  query ListUser_types {
    listUser_types {
      id
      short_name
      description
    }
  }
`;
export const getUsers = /* GraphQL */ `
  query GetUsers($id: Int!) {
    getUsers(id: $id) {
      id
      create_date
      last_update_dt
      email
      last_login_dt
      two_factor_id
      master_user_id
      user_status_id
      user_type_id
      cognito_id
    }
  }
`;
export const listUserss = /* GraphQL */ `
  query ListUserss {
    listUserss {
      id
      create_date
      last_update_dt
      email
      last_login_dt
      two_factor_id
      master_user_id
      user_status_id
      user_type_id
      cognito_id
    }
  }
`;
