import React from "react";
class UserClass extends React.Component {
    constructor(props){
        super(props);
        //super() is used to call the constructor of the parent class (React.Component), 
        //to access this.props within the constructor you must pass props to the parent constructor using super(props)
        //console.log(this.props)

        this.state={
            count:0,
            userInfo:{
                name:'Dummy',
                location:'Default',
                avatar_url:'https://avatars.githubusercontent.com/u/24638176?v=4'
            }
        }
        console.log("child constructor");
    }

    async componentDidMount(){
        console.log("child componentdidmount");
        const data = await  fetch('https://api.github.com/users/RakeshRanjanUIDeveloper');
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo:json
        })
    }
    componentDidUpdate(){
        console.log('component did update')
    }
    componentWillUnmount(){
        console.log('component will unmount')
    }
  render() {

 /*    const {name} = this.props; */
    //const {count} = this.state;
    const {name, location, avatar_url} = this.state.userInfo;
   console.log("child render");
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        
      </div>
    );
  }
}

export default UserClass
