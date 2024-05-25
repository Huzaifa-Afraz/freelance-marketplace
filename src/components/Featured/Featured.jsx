import React from 'react'
import './featured.scss'
export default function Featured() {
  return (
    <div className='featured'>
        <div className="container">
            <div className="row">
            <div className="left col-md-6">
                <h1>Find the right freelance service, right away</h1>
                <div className="search">
                    <div className="searchInput">
                        <img src="./images/search.png" alt="search icon" />
                        <input type="text"  placeholder='Search For Any Service...'/>
                    </div>
                    <button>Search</button>
                </div>
                <div className="popular">
                    <span>Popular:</span>
                    <button>Web Design</button>
                    <button>Wordpress</button>
                    <button>logo Design</button>
                    <button>AI services</button>
                </div>
            </div>
            <div className="right col-md-4 mx-auto">
                <img src="./images/banner.png" alt="banner image" />
            </div>
            </div>
        </div>
      
    </div>
  )
}
