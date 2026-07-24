import "./Window.css";

function Window() {
  return (
    <div
      className="window parallax-layer"
      style={{ "--parallax-depth": 14 }}
      aria-hidden="true"
    >
      <div className="moonlight-beam" />

      <div className="window-frame">
        <div className="window-sky">
          <div className="window-moon" />
          <span className="window-star window-star--1" />
          <span className="window-star window-star--2" />
          <span className="window-star window-star--3" />
        </div>
        <div className="window-mullion window-mullion--vertical" />
        <div className="window-mullion window-mullion--horizontal" />
      </div>

      <div className="window-sill" />
    </div>
  );
}

export default Window;
