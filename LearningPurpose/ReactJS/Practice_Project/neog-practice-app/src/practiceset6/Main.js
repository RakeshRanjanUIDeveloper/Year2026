import React from 'react'
import Products from './Products'
import Todos from './Todos'
import Habits from './Habits'
import Videos from './Videos'
import Posts from './Posts'
import Unarchived from './Unarchived'
import Projects from './Projects'
import UserProfile from './UserProfile'
import VideoScreen from './VideoScreen'
import SocialMedia from './SocialMedia'

const Main = () => {
  return (
    <div>
       <Products />
       <Todos />
       <Habits />
       <Videos />
       <Posts />
       <Unarchived />
       <Projects />
       <UserProfile />
       <VideoScreen />
       <SocialMedia />
    </div>
  )
}

export default Main