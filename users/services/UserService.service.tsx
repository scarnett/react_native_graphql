import request, { gql } from 'graphql-request'
import { logger } from 'react-native-logs'
import { toCamel, toSnake } from 'snake-camel'
import { GRAPHQL_URL } from '@app/AppConfig'

export async function fetchUsers() {
  const log = logger.createLogger()
  const query = gql`
  query UsersQuery {
    users {
      id
      first_name
      last_name
      email
    }
  }`

  try {
    const results = await request(GRAPHQL_URL, query)
    return results['users'].map((user: any) => toCamel(user))
  } catch (error) {
    log.error(error)
    return []
  }
}

export async function createUser(user: User) {
  const mutation: string = gql`
  mutation ($user: users_insert_input!) {
    insert_users_one(
      object: $user
    ) {
      id
      first_name
      last_name
      email
    }
  }`

  const variables: any = {
    user: { ...toSnake(user), },
  }

  await request(GRAPHQL_URL, mutation, variables)
}

export async function updateUser(user: User) {
  const mutation: string = gql`
  mutation ($identifier: Int!, $user: users_set_input!) {
    update_users_by_pk(pk_columns: {id: $identifier}, _set: $user) {
      id
      first_name
      last_name
      email
    }
  }`

  const variables: any = {
    identifier: user.id,
    user: { ...toSnake(user), },
  }

  await request(GRAPHQL_URL, mutation, variables)
}

export async function deleteUser(userId: number) {
  const mutation: string = gql`
  mutation ($identifier: Int!) {
    delete_users(where: {id: {_eq: $identifier}}) {
      affected_rows
    }
  }`

  const variables: any = {
    identifier: userId,
  }

  await request(GRAPHQL_URL, mutation, variables)
}
