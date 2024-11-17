// static images are typically imported as 'default import' because each image file is treated as the default export of its path and its useful for bundling benefits, cache optimization and ease of path management
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

function App() {
  return (
    <div>
      <h1>Personal Digital Assistants</h1>
      {/* If props value is string we can pass it as plain string within quotes, for other values we have to pass it inside curly braces (JavaScript land) */}
      <ProfileCard title="Alexa" handle="@alexa99" imagePath={AlexaImage} />
      <ProfileCard
        title="Cortana"
        handle="@cortana32"
        imagePath={CortanaImage}
      />
      <ProfileCard title="Siri" handle="@siri01" imagePath={SiriImage} />
    </div>
  );
}

export default App;
