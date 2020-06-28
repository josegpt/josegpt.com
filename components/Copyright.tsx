import React from "react"

interface iCopyright {
  brandName: string
  startingYear: number
}

function Copyright({ brandName, startingYear }: iCopyright): JSX.Element {
  const currentYear = new Date().getFullYear()
  return (
    <p className="text-sm sm:text-base">
      <span className="font-bold text-red-500">{brandName} </span>
      <span className="font-medium">
        &copy; {startingYear} &mdash; {currentYear}
      </span>
    </p>
  )
}

export default Copyright
