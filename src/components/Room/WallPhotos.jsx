import "./WallPhotos.css";
import PhotoFrame from "./PhotoFrame";

const photos = [
  { id: 1, rotation: -7, offsetY: 6, tint: "#c9a88a" },
  { id: 2, rotation: 4, offsetY: -10, tint: "#a8b5c9" },
  { id: 3, rotation: -2, offsetY: 14, tint: "#c9b8a8" },
];

function WallPhotos() {
  return (
    <div className="wall-photos-anchor">
      <div
        className="wall-photos parallax-layer"
        style={{ "--parallax-depth": 10 }}
      >
        {photos.map((photo) => (
          <PhotoFrame
            key={photo.id}
            rotation={photo.rotation}
            offsetY={photo.offsetY}
            tint={photo.tint}
          />
        ))}
      </div>
    </div>
  );
}

export default WallPhotos;
