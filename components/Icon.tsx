import React from "react"

type IconProps = {
  name: string
}

const Icon = ({ name }: IconProps) => (
  <svg className="w-6 h-6 fill-current">
    <use xlinkHref={`/img/sprite.svg#icon-${name}`}></use>
  </svg>
)

export default Icon
