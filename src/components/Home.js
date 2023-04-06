import React from 'react'
import MainComponent from './MainComponent'
import Header1 from './Header1'

const Home = () => {
  return (
    <>
      <div style={{height:"fit-content",display:"flex",flexWrap:"wrap"}}>
        <Header1 />
        <MainComponent />
      </div>


    </>
  )
}

export default Home