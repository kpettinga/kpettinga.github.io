import { useEffect, useState } from 'preact/hooks'
import Cursor from './Cursor'

const TypedString = ({string, speed = 100, delayAfter = 0, then, children}) => {
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
          }, delayAfter)
        } else {
          setShowChildren(true)
        }
        if ( typeof then === 'function' ) {
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

const Intro = ({progress, then = () => null}) => {
  const [hello, setHello] = useState(false)

  return (
    <div data-section="intro" className="relative w-full h-dvh">
      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
        <pre className="font-mono tracking-tighter text-white leading-loose transition-all ease-[cubic-bezier(.95,0,.45,1)] duration-[400ms]" style="font-size: 1.5rem">
          <Intro.Loader progress={progress} then={() => setHello(true)} />
          { hello && <><br/><span><TypedString string="it's Kirk :) " /></span></>}
          <Cursor />
        </pre>
      </div>
    </div>
  )
}

Intro.Loader = ({progress, then = () => null}) => {
  const xStates = ["⠇", "⠋", "⠙", "⠸", "⠴", "⠦"]
  const [x, setX] = useState(0)
  const [status, setStatus] = useState("loading")

  useEffect(() => {
    const interval = setInterval(() => {
      setX( _x => (_x + 1) % xStates.length )
    }, 50)
    
    return () => {
      clearInterval(interval)
    }
  }, [])

  useEffect(() => {
    if ( progress === 100 ) {
      const timeoutId = setTimeout(() => {
        setStatus("done")
      }, 1000)
      return () => {
        clearTimeout(timeoutId)
      }
    }
  }, [progress])

  useEffect(() => {
    if ( status === 'done' ) {
      then()
    }
  }, [status])

  return (
    <span className="opacity-50">
      { status === 'loading' && 
        (`${xStates[x]} Loading...${progress}%`)
      }
      { status === 'done' && 
        <TypedString string="Hey," />
      }
    </span>
  )
}

export default Intro