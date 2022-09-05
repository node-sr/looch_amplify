/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const deleteUser_status = /* GraphQL */ `
  mutation DeleteUser_status($id: Int!) {
    deleteUser_status(id: $id) {
      id
      short_name
      description
    }
  }
`;
export const createUser_status = /* GraphQL */ `
  mutation CreateUser_status($createUser_statusInput: CreateUser_statusInput!) {
    createUser_status(createUser_statusInput: $createUser_statusInput) {
      id
      short_name
      description
    }
  }
`;
export const updateUser_status = /* GraphQL */ `
  mutation UpdateUser_status($updateUser_statusInput: UpdateUser_statusInput!) {
    updateUser_status(updateUser_statusInput: $updateUser_statusInput) {
      id
      short_name
      description
    }
  }
`;
export const deleteUser_type = /* GraphQL */ `
  mutation DeleteUser_type($id: Int!) {
    deleteUser_type(id: $id) {
      id
      short_name
      description
    }
  }
`;
export const createUser_type = /* GraphQL */ `
  mutation CreateUser_type($createUser_typeInput: CreateUser_typeInput!) {
    createUser_type(createUser_typeInput: $createUser_typeInput) {
      id
      short_name
      description
    }
  }
`;
export const updateUser_type = /* GraphQL */ `
  mutation UpdateUser_type($updateUser_typeInput: UpdateUser_typeInput!) {
    updateUser_type(updateUser_typeInput: $updateUser_typeInput) {
      id
      short_name
      description
    }
  }
`;
export const deleteUsers = /* GraphQL */ `
  mutation DeleteUsers($id: Int!) {
    deleteUsers(id: $id) {
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
export const createUsers = /* GraphQL */ `
  mutation CreateUsers($createUsersInput: CreateUsersInput!) {
    createUsers(createUsersInput: $createUsersInput) {
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
export const updateUsers = /* GraphQL */ `
  mutation UpdateUsers($updateUsersInput: UpdateUsersInput!) {
    updateUsers(updateUsersInput: $updateUsersInput) {
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
