import Link from "next/link"
import React from 'react'

function Services() {
  return (
    <>
      <h1>All Services</h1>
      <Link href= "/services/web-app">Web App</Link>
      <Link href= "/services/mobile-app">Mobile App</Link>

    </>
  )
}

export default Services