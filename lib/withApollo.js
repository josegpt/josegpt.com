import ApolloClient from 'apollo-boost'
import withApollo from 'next-with-apollo'

function createClient({ headers }) {
  return new ApolloClient({
    uri: 'http://localhost:4000',
    ssrMode: !process.browser,
    request: async operation => {
      operation.setContext({
        fetchOptions: {
          credentials: 'include'
        },
        headers
      })
    }
  })
}

export default withApollo({ client: createClient })
