import React from 'react'

import dynamic from 'next/dynamic'

const Hero = dynamic(() => import('../components/Hero'))
const index = () => {
  return (
    <div>
      <Hero/>
    
    </div>
  )
}

export default index