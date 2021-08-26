import { gql } from 'apollo-server'
import { userResolvers } from './user/resolvers'
import { userTypedefs } from './user/typeDefs'

export const rootTypedefs = gql`
  type Query {
    _empty: Boolean
  }
`

export const rootResolvers = {
  Query: {
    _empty: () => true,
  },
}

export const typeDefs = [rootTypedefs, userTypedefs]

export const resolvers = [rootResolvers, userResolvers]
