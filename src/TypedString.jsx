import { useEffect, useState } from "preact/hooks"

export default function TypedString({string, speed = 100, delayAfter = 0, then = () => null, children = null}) {
  const [typed, setTyped] = useState('')
  const [showChildren, setShowChildren] = useState(false)

  useEffect(() => {
    let i = 0
    const typeIntervalId = setInterval(() => {
      i++
      if (i > string.length) {
        clearInterval(typeIntervalId)
        if ( delayAfter > 0 ) {
          setTimeout(() => {
            setShowChildren(true)
            then()
          }, delayAfter)
        } else {
          setShowChildren(true)
          then()
        }
      }
      setTyped(string.slice(0, i))
    }, speed)

    return () => {
      clearInterval(typeIntervalId)
    }
  }, [])

  return <>
    {typed}
    { showChildren && children }
  </>
}