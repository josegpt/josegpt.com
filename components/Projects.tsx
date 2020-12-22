import useSWR from "swr"
import classnames from "classnames"
import React, { useEffect, useState } from "react"

import Icon from "./Icon"

type ProjectItemsProps = {
  html_url: string
  name: string
}

const ProjectItems = ({ html_url, name }: ProjectItemsProps) => (
  <a
    key={name}
    href={html_url}
    target="_blank"
    rel="noreferrer"
    className="relative flex items-center justify-center w-full h-full px-4 py-20 text-xl font-semibold text-red-200 text-red-500 transition duration-300 ease-in-out bg-red-200 rounded-xl dark:bg-red-800 dark:text-red-400 hover:text-white hover:bg-red-500 dark:text-red-500 dark:hover:text-black dark:hover:bg-red-500"
  >
    <div className="absolute top-0 right-0 m-4">
      <Icon name="arrow-up-right" />
    </div>
    {name.length > 13 ? `${name.substr(0, 13)}...` : name}
  </a>
)

type ProjectsProps = {
  isOpen: boolean
  hideMenu: () => void
}

const Projects = ({ isOpen, hideMenu }: ProjectsProps) => {
  const { data, error } = useSWR("https://api.github.com/users/josegpt/repos")

  if (error) return <h1>Sorry :(</h1>
  if (!data) return <h1>Loading...</h1>

  return (
    <div>
      <div
        onClick={hideMenu}
        className={classnames(
          "fixed inset-0 bg-black opacity-25 dark:bg-white",
          isOpen ? "block" : "hidden"
        )}
      />
      <div
        className={classnames(
          "fixed bottom-0 z-10 w-full max-w-xl transition duration-300 pb-16 ease-in-out transform -translate-x-1/2 bg-gray-100 inset-x-1/2 h-5/6 rounded-tl-xl rounded-tr-xl dark:bg-black",
          isOpen ? "translate-y-0" : "translate-y-full"
        )}
      >
        <header className="flex items-center justify-between h-16 mx-6">
          <h2 className="text-3xl font-semibold capitalize">projects</h2>
          <button
            onClick={hideMenu}
            className="text-gray-800 transition duration-300 ease-in-out hover:text-red-500"
          >
            <Icon name="x" />
          </button>
        </header>
        <div className="grid justify-center h-full grid-cols-1 gap-2 px-6 overflow-y-auto sm:grid-cols-2 md:grid-cols-3">
          {data.map(ProjectItems)}
        </div>
      </div>
    </div>
  )
}

export default Projects
