import axios from 'axios'
import List from '../components/List'

const Index = ({ repos }) => (
  <List
    data={repos}
  />
)

Index.getInitialProps = async () => {
  const { data } = await axios.get('https://api.github.com/users/josegpt/repos')

  return {
    repos: data
  }
}

export default Index
