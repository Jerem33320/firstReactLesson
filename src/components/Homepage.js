import React from 'react'

const homepage = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",

  height: "100vh",
  width: "100vw",

  backgroundColor: 'rgb(237, 90, 119)',
  color: 'white'
}

const hpTitle = {
  marginBottom: "40px",
  fontSize: "3rem"
}

function Homepage() {
  return (
    <main style={homepage}>
      <h1 style={hpTitle}>Welcome !</h1>
    </main>
  )
}

export default Homepage
