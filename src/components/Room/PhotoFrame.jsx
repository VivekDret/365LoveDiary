import "./PhotoFrame.css";

function PhotoFrame({ rotation, offsetY = 0, tint }) {
  return (
    <div
      className="photo-frame"
      style={{
        transform: `rotate(${rotation}deg) translateY(${offsetY}px)`,
        "--photo-tint": tint,
      }}
    >
      <div className="photo-frame__mat" />
      <div className="photo-frame__image" />
    </div>
  );
}

export default PhotoFrame;
