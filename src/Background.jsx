import { useEffect, useState } from "preact/hooks";

export default function Background() {

  const [radialCenterX, setRadialCenterX] = useState(0.2)
  const [radialCenterY, setRadialCenterY] = useState(0.8)
  // const [radialColorTo, setRadialColorTo] = useState(195)
  // const [radialColorAngle, setRadialColorAngle] = useState(45)
  
  const [linearColorTo, setLinearColorTo] = useState(195)
  const [linearColorAngle, setLinearColorAngle] = useState(45)

  useEffect(() => {
    function setLinearGradient() {
      setLinearColorAngle(linearColorAngle + window.scrollY * 0.03)
      // setLinearColorTo(linearColorTo - window.scrollY * 0.01)
      const phase = window.scrollY * 0.001
      const radialCenterXValue = 0.5 + Math.sin(phase) * 0.3
      const radialCenterYValue = 0.5 + Math.cos(phase) * 0.3
      setRadialCenterX(radialCenterXValue)
      setRadialCenterY(radialCenterYValue)
      requestAnimationFrame(setLinearGradient)
    }
    requestAnimationFrame(setLinearGradient)
  }, []) 

  return (
    <>
      <div
        className="fixed top-0 left-0 min-w-full min-h-full z-[-2]"
        style={{
          backgroundImage:
            `radial-gradient(circle at ${radialCenterX * 100}% ${radialCenterY * 100}%, #fca5ff 0%, #38386A 80%)`,
        }}
      />
      <div
        className="fixed top-0 left-0 min-w-full min-h-full z-[-1]"
        style={{
          backgroundImage:
            `linear-gradient(${linearColorAngle}deg, transparent 29%, hsl(${linearColorTo},86%,49%))`,
        }}
      />
    </>
  );
}
