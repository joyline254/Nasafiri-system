
function Profile(props) {
    return (
      <div>
        <img src={props.profilePic} alt="Profile picture" />
        <h2>{props.name}</h2>
        <p>{props.bio}</p>
      </div>
    );
  }
  
  export default Profile;