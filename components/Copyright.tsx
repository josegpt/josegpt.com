import React from "react"

const Copyright = () => {
  const currentYear = new Date().getFullYear()

  return (
    <div className="flex justify-center my-4 font-light">
      <span className="font-semibold text-red-500 lowercase">josegpt</span>{" "}
      &copy; 1992 &mdash; {currentYear}
    </div>
  )
}

export default Copyright
