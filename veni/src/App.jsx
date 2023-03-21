import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Planet from "./components/Planet";
import SideNav from "./components/sideNav";

function App() {
  const [selectedButtons, setSelectedButtons] = useState([]);
  const [randomImageUrl, setRandomImageUrl] = useState("");
  const [randomName, setRandomName] = useState();
  const [attributes, setAttributes] = useState([]);
  const [bannedAttributes, setBannedAttributes] = useState([]);

  const getRandomDate = () => {
    const start = new Date("2017-01-01");
    const end = new Date("2021-12-31");
    const randomDate = new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
    return randomDate.toISOString().slice(0, 10);
  };

  const API_KEY = "WhAN15SJRcZfxjzOzTZz0bUyRbtRXlkZmwfYhUqH";
  const API_ENDPOINT = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${getRandomDate()}`;

  useEffect(() => {
    async function fetchRandomImage() {
      const response = await fetch(API_ENDPOINT);
      const data = await response.json();
      setRandomImageUrl(data.url);
      setRandomName(data.title);
      let attrs = [data.date, data.copyright, data.media_type];
      setAttributes(attrs);
    }
    fetchRandomImage();
  }, []);

  const handleDiscoverClick = async () => {
    const response = await fetch(API_ENDPOINT);
    const data = await response.json();

    console.log(data);
    setRandomImageUrl(data.url);
    setRandomName(data.title);
    let attrs = [data.date, data.copyright, data.media_type];
    setAttributes(attrs);
  };

  const handleButtonClick = (buttonName) => {
    setSelectedButtons([...selectedButtons, buttonName]);
    setBannedAttributes([...bannedAttributes, buttonName]);
  };

  return (
    <div id="root">
      <div className="whole-page">
        <h1>Space Explorer</h1>
        <h3>Discover planets and stars far and beyond 🪐🌌🚀</h3>
        <button onClick={handleDiscoverClick}>Discover 🚀👩🏽‍🚀</button>

        <Planet
          name={randomName}
          attributes={attributes}
          image={randomImageUrl}
          onAttributeClick={handleButtonClick}
          bannedAttributes={bannedAttributes}
        />
      </div>

      <SideNav selectedButtons={selectedButtons} />
    </div>
  );
}

export default App;
