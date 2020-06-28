import React from "react"
import Icon from "./Icon"

interface iSocialNetworkItem {
  link: string
  iconName: string
}

function SocialNetworkItem({
  link,
  iconName,
}: iSocialNetworkItem): JSX.Element {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="flex items-center justify-center p-3 m-1 text-red-500 bg-red-200 rounded-full hover:bg-red-500 hover:text-gray-200"
    >
      <Icon name={iconName} />
    </a>
  )
}

interface iSocialNetwork {
  socialNetwork: iSocialNetworkItem[]
}

function SocialNetwork({ socialNetwork }: iSocialNetwork): JSX.Element {
  return (
    <section className="flex flex-wrap justify-center m-4">
      {socialNetwork.map((element) => (
        <SocialNetworkItem
          key={element.iconName}
          link={element.link}
          iconName={element.iconName}
        />
      ))}
    </section>
  )
}

export default SocialNetwork
