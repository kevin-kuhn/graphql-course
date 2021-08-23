import { ApolloServer, gql } from 'apollo-server'

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      user: User!
      users: [User!]!
    }

    type User {
      id: ID!
      userName: String
    }
  `,
  resolvers: {
    Query: {
      user: () => {
        return {
          id: 'dsadas-234',
          userName: 'Kevin',
        }
      },
      users: () => {
        return [
          {
            id: 'dsadas-234',
            userName: 'Kevin',
          },
        ]
      },
    },
  },
})

server.listen(4003).then(({ url }) => {
  console.log(`Server listening on url ${url}`)
})
