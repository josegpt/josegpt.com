import React from "react"

import Icon from "./Icon"

type SocialMediaItemProps = {
  href: string
  iconName: string
}

const socialMedia: SocialMediaItemProps[] = [
  {
    iconName: "mail",
    href: "mailto:josegpt27@gmail.com",
  },
  {
    iconName: "linkedin",
    href: "https://www.linkedin.com/in/josegpt",
  },
  {
    iconName: "github",
    href: "https://github.com/josegpt",
  },
  {
    iconName: "gitlab",
    href: "https://gitlab.com/josegpt",
  },
  {
    iconName: "codepen",
    href: "https://codepen.io/josegpt",
  },
  {
    iconName: "facebook",
    href: "https://www.facebook.com/josegpt27",
  },
  {
    iconName: "twitter",
    href: "https://twitter.com/josegpete",
  },
  {
    iconName: "instagram",
    href: "https://www.instagram.com/josegpt/",
  },
]

const SocialMediaItem = ({ href, iconName }: SocialMediaItemProps) => (
  <a
    key={href}
    href={href}
    target="_blank"
    rel="noreferrer"
    className="flex items-center justify-center w-10 h-10 mx-2 my-1 text-red-500 transition duration-300 ease-in-out bg-red-200 rounded-full hover:text-white hover:bg-red-500 dark:bg-red-800 dark:text-red-500 dark:hover:text-black dark:hover:bg-red-500"
  >
    <Icon name={iconName} />
  </a>
)

const SocialMedia = () => (
  <div className="flex flex-wrap justify-center px-6">
    {socialMedia.map(SocialMediaItem)}
  </div>
)

export default SocialMedia
