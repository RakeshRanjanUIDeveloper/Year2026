import React from 'react';
const user = {
  name: 'Jane Doe',
  bio: 'Frontend developer who loves React and coffee ☕️',
  image: 'https://do6gp1uxl3luu.cloudfront.net/question-webp/dummyUser.jpg'
};
class UserProfile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showBio:false
        }
    }
    toggleBio = () =>{
        this.setState((prevState) =>{
            return {
                showBio: !prevState.showBio
            }
        })
    }
    render(){
        return (
            <div className="user-profile">
                <h2>{user.name}</h2>
                <img src={user.image} alt={user.name} className='profile-img' />
                 <button onClick={this.toggleBio}>{this.state.showBio ? "Hide Bio" : "Show Bio"}</button>
                {
                    this.state.showBio && <p>{user.bio}</p>

                }
               
            </div>
        )
    }
}

export default UserProfile;