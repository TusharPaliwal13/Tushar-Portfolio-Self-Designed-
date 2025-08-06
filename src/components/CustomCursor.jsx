import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const cursorX = useMotionValue(-100); // offscreen initial
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 20, stiffness: 200 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 10);
      cursorY.set(e.clientY - 10);
    };

    const handleMouseOver = (e) => {
      if (e.target.closest(".cursor-hover-target")) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.closest(".cursor-hover-target")) {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className={`fixed top-0 left-0 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference`}
      style={{
        x,
        y,
        width: isHovering ? "40px" : "20px",
        height: isHovering ? "40px" : "20px",
        transition: "width 0.2s ease, height 0.2s ease",
      }}
    />
  );
};

export default CustomCursor;
