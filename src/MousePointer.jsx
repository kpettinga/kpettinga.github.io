import { useEffect, useState } from "preact/hooks";

export default function MousePointer() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    function handleMouseMove(e) {
      if ( opacity !== 1 ) {
        setOpacity(1)
      }
      setX(e.pageX);
      setY(e.pageY);
    }
    function handleScroll() {
      setOpacity(0)
    }
    document.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [opacity]);

  return (
    <div
      className="absolute -top-4 -left-4 rounded-full size-8 border-4 border-midnight-800 mix-blend-difference transition-opacity duration-200 ease-out"
      style={{ transform: `translate3d(${x}px,${y}px,0)`, opacity }}
    />
  );
}
