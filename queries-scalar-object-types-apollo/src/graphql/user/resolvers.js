const user = () => {
  return {
    id: '1',
    username: 'Kevin',
  }
}

const users = () => {
  return [
    {
      id: '1',
      username: 'Kevin',
    },
    {
      id: '2',
      username: 'Kevin',
    },
    {
      id: '3',
      username: 'Kevin',
    },
  ]
}

export const userResolvers = {
  Query: {
    user,
    users,
  },
}
