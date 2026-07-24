import { useCallback, useRef } from "react";

function useMouseParallax() {
  const ref = useRef(null);

  const onMouseMove = useCallback((event) => {
    const room = ref.current;
    if (!room) return;

    const { left, top, width, height } = room.getBoundingClientRect();
    const x = ((event.clientX - left) / width - 0.5) * 2;
    const y = ((event.clientY - top) / height - 0.5) * 2;

    room.style.setProperty("--mouse-x", x.toFixed(4));
    room.style.setProperty("--mouse-y", y.toFixed(4));
  }, []);

  const onMouseLeave = useCallback(() => {
    const room = ref.current;
    if (!room) return;

    room.style.setProperty("--mouse-x", "0");
    room.style.setProperty("--mouse-y", "0");
  }, []);

  return { ref, onMouseMove, onMouseLeave };
}

export default useMouseParallax;
