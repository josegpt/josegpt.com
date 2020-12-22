const Index = () => (
  <div>
    <h1 className="font-semibold capitalize text-7xl sm:text-8xl">jose g</h1>
    <h2 className="-mt-2 text-xl tracking-wider text-center text-red-500 lowercase">
      software engineer
    </h2>
  </div>
)

export const getServerSideProps = () => {
  const now = new Date()
  const hours = now.getHours() % 12
  const period = now.getHours() >= 12 ? "pm" : "am"

  return {
    props: {
      theme: hours >= 6 && period === "pm" ? "dark" : "light",
    },
  }
}

export default Index
