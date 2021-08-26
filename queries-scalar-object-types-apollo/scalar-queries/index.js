import { ApolloServer, gql } from 'apollo-server'

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      id: ID!
      name: String!
      age: Int!
      average: Float!
      married: Boolean!
      arrayString: [String!]!
    }
  `,
  resolvers: {
    Query: {
      id: () => 'dsdds-2324',
      name: () => 'Kevin',
      age: () => 21,
      average: () => 50.55,
      married: () => true,
      arrayString: () => ['A', 'B'],
    },
  },
})

server.listen(4003).then(({ url }) => {
  console.log(`Server listening on url ${url}`)
})
