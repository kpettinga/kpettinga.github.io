import { useEffect, useState } from "preact/hooks";

export default function Background() {

  const [radialCenterX, setRadialCenterX] = useState(0)
  const [radialCenterY, setRadialCenterY] = useState(1)
  const [radialColorFrom, setRadialColorFrom] = useState(0)
  const [radialColorTo, setRadialColorTo] = useState(80)
  // const [radialColorAngle, setRadialColorAngle] = useState(45)
  
  const [linearColorTo, setLinearColorTo] = useState(195)
  const [linearColorAngle, setLinearColorAngle] = useState(45)

  useEffect(() => {
    function setLinearGradient() {
      setLinearColorAngle(linearColorAngle + window.scrollY * 0.03)
      setLinearColorTo(linearColorTo + window.scrollY * 0.01)
      const phase = window.scrollY * 0.001
      const radialCenterXValue = 0.5 + Math.sin(phase) * 0.5
      const radialCenterYValue = 0.5 + Math.cos(phase) * 0.5
      const radialColorFromValue = 0.2 + Math.sin(phase) * 0.2
      const radialColorToValue = 0.7 + Math.cos(phase) * 0.3
      setRadialCenterX(radialCenterXValue)
      setRadialCenterY(radialCenterYValue)
      setRadialColorFrom(radialColorFromValue * 100)
      setRadialColorTo(radialColorToValue * 100)
      requestAnimationFrame(setLinearGradient)
    }
    requestAnimationFrame(setLinearGradient)
  }, [linearColorAngle, linearColorTo]) 

  return (
    <>
      <div
        className="fixed top-0 left-0 min-w-full min-h-full z-[-2]"
        style={{
          backgroundImage:
            `radial-gradient(circle at ${radialCenterX * 100}% ${radialCenterY * 100}%, hsla(265,60%,32%,50%) ${radialColorFrom}%, black 50%, hsl(240,38%,20%) ${radialColorTo}%)`,
        }}
      />
      <div
        className="fixed top-0 left-0 min-w-full min-h-full z-[-1]"
        style={{
          backgroundImage:
            `linear-gradient(${linearColorAngle}deg, transparent 0% 29%, hsl(${linearColorTo},86%,49%) 90%, black)`,
        }}
      />
    </>
  );

}
