import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h1>Home Page</h1>
        <ul>
            <li><Link to="/counter">Counter App</Link></li>
            <li><Link to="/stopwatch">StopWatch App</Link>Stop Watch</li>
        </ul>
    </div>
  )
}

export default Home