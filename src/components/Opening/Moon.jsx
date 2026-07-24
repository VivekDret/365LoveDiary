import { motion } from "framer-motion";

function Moon() {
  return (
    <motion.div
      aria-hidden="true"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, ease: "easeOut" }}
      style={{
        position: "absolute",
        top: "8%",
        right: "10%",
        width: "90px",
        height: "90px",
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 35% 35%, #fff9e6 0%, #f5e6a8 40%, #e8d088 100%)",
          boxShadow:
            "0 0 40px rgba(255, 249, 230, 0.5), 0 0 80px rgba(245, 230, 168, 0.25)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "18%",
          left: "22%",
          width: "14px",
          height: "14px",
          borderRadius: "50%",
          background: "rgba(200, 180, 120, 0.3)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "45%",
          left: "55%",
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          background: "rgba(200, 180, 120, 0.25)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "62%",
          left: "30%",
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          background: "rgba(200, 180, 120, 0.2)",
        }}
      />
    </motion.div>
  );
}

export default Moon;
