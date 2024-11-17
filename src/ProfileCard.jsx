//props destructuring
function ProfileCard({ title, handle, imagePath }) {
  return (
    //css style inside element, css properties are represented as JS objects
    <div style={{ border: "2px solid red", margin: 20 }}>
      <h2>Name:{title}</h2>
      <h4>Handle:{handle}</h4>
      {/* props used for image source attribute */}
      <img src={imagePath} alt="logo" />
    </div>
  );
}

export default ProfileCard;
