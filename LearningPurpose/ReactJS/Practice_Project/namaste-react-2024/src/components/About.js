import React, { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {
    constructor(props){
      super(props)
      //console.log("Parent Constructor")
    }

    componentDidMount(){
      //console.log("Parent ComponentDidMount")
    }
    
    render(){
       // console.log("Parent Render")
        return (
          <div className="content-area">
            <UserClass name="Rakesh Ranjan (Class)" />
          
          </div>
        );
    }
}
// const About = () => {
//   return (
//     <div className='content-area'>
//       <UserClass name="Rakesh Ranjan (Class)" />
//     </div>
//   )
// }

export default About;
