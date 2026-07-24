import { useState, useRef, useEffect } from "react";
import song from "./assets/music/Song.mp3";

import OpeningScreen from "./components/Opening/OpeningScreen";
import BedroomScene from "./components/Room/BedroomScene";
import ScrapbookViewer from "./components/Scrapbook/ScrapbookViewer";
import OpeningBookAnimation from "./components/Scrapbook/OpeningBookAnimation";
function App() {

  const [stage,setStage]=useState("opening");
  const audioRef = useRef(null);
  useEffect(() => {
    if (!audioRef.current) return;
  
    audioRef.current.volume = 0.35;
  
    const handleVisibility = () => {
      if (document.hidden) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(() => {});
      }
    };
  
    document.addEventListener("visibilitychange", handleVisibility);
  
    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);
  return(

<>
{stage==="opening" && (
  <OpeningScreen
  onOpen={() => {

    if (audioRef.current) {
      audioRef.current.play();
    }

    setStage("room");

  }}
/>
)}

{stage==="room" && (
  <BedroomScene
  onScrapbookOpen={() => {
    setStage("openingBook");

    setTimeout(() => {
      setStage("book");
    }, 3000);
  }}
/>
)}
{stage === "openingBook" && (
  <OpeningBookAnimation />
)}
{stage === "book" && (
  <ScrapbookViewer
  onFinish={() => setStage("room")}
/>
)}

{stage === "ending" && (
  <h1
    style={{
      color: "white",
      background: "#0e0b08",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    Ending Scene
  </h1>
)}
<audio
      ref={audioRef}
      src={song}
      loop
    />
</>

);

}

export default App;