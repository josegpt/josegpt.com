import React from "react"

interface iTitle {
  text: string
}

function Title({ text }: iTitle): JSX.Element {
  return (
    <h1 className="block -m-6 font-bold tracking-wider capitalize text-7xl sm:text-8xl">
      {text}
    </h1>
  )
}

export function Subtitle({ text }: iTitle): JSX.Element {
  return (
    <h2 className="block text-lg font-semibold tracking-wider text-red-500 lowercase sm:text-xl">
      {text}
    </h2>
  )
}

export default Title
