import "./BedroomScene.css";
import "./parallax.css";
import { motion } from "framer-motion";
import useMouseParallax from "./useMouseParallax";
import Window from "./Window";
import WallPhotos from "./WallPhotos";
import Desk from "./Desk";
import Rose from "../Ending/Rose";
import Envelope from "../Ending/Envelope";
import Frog from "../Room/Frog";
import DietCoke from "../Room/Dietcoke"
import FairyLights from "./FairyLights";
import Plushie from "./Plushie";
function BedroomScene({
  onScrapbookOpen,
  showEndingItems = false,
}) {
  const { ref, onMouseMove, onMouseLeave } = useMouseParallax();

  return (
    <motion.div
      ref={ref}
      className="room"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2.2, ease: "easeOut" }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <div className="room-backdrop" aria-hidden="true" />
      <div className="room-floor" aria-hidden="true" />

      <Window />
      <FairyLights/>
      
      <Desk onScrapbookClick={onScrapbookOpen} />
      <Plushie />
      <DietCoke/>
      <Frog/>
      <Rose />
      <Envelope />
  

      <div className="room-vignette" aria-hidden="true" />
      <div className="room-grain" aria-hidden="true" />
    </motion.div>
  );
}

export default BedroomScene;
