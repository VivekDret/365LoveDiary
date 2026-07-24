import { useEffect, useState } from "react";

function Typewriter({
  text,
  speed = 45,
  delay = 500,
  style,
  onComplete,
}) {
  const [displayed, setDisplayed] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setDisplayed("");
    setIsComplete(false);

    let index = 0;
    let intervalId;

    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        index += 1;
        setDisplayed(text.slice(0, index));

        if (index >= text.length) {
          clearInterval(intervalId);
          setIsComplete(true);
          onComplete?.();
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [text, speed, delay, onComplete]);

  return (
    <span style={style}>
      {displayed}
      {!isComplete && (
        <span
          style={{
            marginLeft: "2px",
            opacity: 0.8,
            animation: "blink 1s step-end infinite",
          }}
        >
          |
        </span>
      )}
    </span>
  );
}

export default Typewriter;
