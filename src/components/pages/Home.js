import React from 'react'

export default function Home() {
  return (
    <div className='home'>
        <div className='container'>
            <h1 className="home-title">BY LIFTERS</h1> <h1 className="home-title">FOR LIFTERS</h1>
            <div>
              <p>Lifting weights with mates since 2015</p>
            </div>
            <div>
              <a href="/membership" className="button1">membership options</a>
              <a href="/events" className="button1">upcoming events</a>
            </div>
        </div>
    </div>
  )
}
