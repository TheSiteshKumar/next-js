import React from 'react'
import Link  from "next/link"


function About() {
  return (
    <>
      <h1>About</h1>
      <Link href= "/">Home</Link>
      <Link href= "/services">Services</Link>

    </>
  )
}

export default About