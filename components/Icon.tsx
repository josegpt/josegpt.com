import React from "react"

interface iIcon {
  name: string
}

function Icon({ name }: iIcon): JSX.Element {
  return (
    <svg className="w-5 h-5 fill-current sm:h-6 sm:w-6">
      <use xlinkHref={`/img/sprite.svg#icon-${name}`}></use>
    </svg>
  )
}

export default Icon
