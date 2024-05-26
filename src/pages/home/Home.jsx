import React from 'react'
import Featured from '../../components/Featured/Featured'
import TrustedBy from '../../components/trustedBy/TrustedBy'
import Slide from '../../components/slide/Slide'

export default function Home() {
  return (
    <div>
      <div className="Home">
        <Featured/>
        <TrustedBy/>
        <Slide/>
      </div>
    </div>
  )
}
