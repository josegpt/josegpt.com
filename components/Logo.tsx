import React from "react"
import Link from "next/link"

interface iLogo {
  brandName: string
  logoPath: string
}

function Logo({ brandName, logoPath }: iLogo): JSX.Element {
  return (
    <Link href="/">
      <a className="block">
        <img
          src={logoPath}
          alt={brandName}
          className="w-24 h-24 sm:h-32 sm:w-32"
        />
      </a>
    </Link>
  )
}

export default Logo
