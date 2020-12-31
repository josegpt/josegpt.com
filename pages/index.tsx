import axios from "axios"

import Projects from "../components/Projects"

const Index = ({ repository, isMenuOpen, hideMenu }) => (
  <div>
    <h1 className="font-semibold capitalize text-7xl sm:text-8xl">jose g</h1>
    <h2 className="-mt-2 text-xl tracking-wider text-center text-red-500 lowercase">
      software engineer
    </h2>
    <Projects repository={repository} isOpen={isMenuOpen} hideMenu={hideMenu} />
  </div>
)

export const getServerSideProps = async () => {
  try {
    const { data } = await axios.get(
      "https://api.github.com/users/josegpt/repos"
    )
    return {
      props: { repository: { projects: data, err: null } },
    }
  } catch (err) {
    return { props: { repository: { projects: [], err } } }
  }
}

export default Index
