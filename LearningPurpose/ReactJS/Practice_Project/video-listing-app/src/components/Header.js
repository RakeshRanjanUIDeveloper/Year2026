import React from 'react'
import { NavLink } from 'react-router'

const Header = () => {
  return (
   <React.Fragment>
        <div className='header'>
            <h1>Video Listing App</h1>
            <nav>
                <ul>
                    <li><NavLink to=''>Home</NavLink></li>
                    <li><NavLink to='videos'>Videos</NavLink></li>
                    <li><NavLink to='likedVideos'>Liked Videos</NavLink></li>
                    <li><NavLink to='watchlater'>Watch Later</NavLink></li>
                    <li><NavLink to='individualVideo/:id'>Individual Video</NavLink></li>
                </ul>
            </nav>
        </div>
   </React.Fragment>
  )
}

export default Header