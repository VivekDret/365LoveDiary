import "./Desk.css";
import Scrapbook from "./Scrapbook";
import Lamp from "./Lamp";
import Coffee from "./Coffee";

function Desk({ onScrapbookClick }) {
  return (
    <div className="desk-anchor">
      <div
        className="desk parallax-layer"
        style={{ "--parallax-depth": 5 }}
      >
        <div className="desk__surface">
          <div className="desk__items">
            <Lamp />
            <Scrapbook onClick={onScrapbookClick} />
            <Coffee />
          </div>
        </div>
        <div className="desk__front" aria-hidden="true" />
        <div className="desk__shadow" aria-hidden="true" />
      </div>
    </div>
  );
}

export default Desk;
