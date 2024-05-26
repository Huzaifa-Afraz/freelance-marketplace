import React from 'react'
import Featured from '../../components/Featured/Featured'
import TrustedBy from '../../components/trustedBy/TrustedBy'

export default function Home() {
  return (
    <div>
      <div className="Home">
        <Featured/>
        <TrustedBy/>
      </div>
    </div>
  )
}
