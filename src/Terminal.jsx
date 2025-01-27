import { useEffect, useState } from "preact/hooks";
import TypedString from "./TypedString";
import { cn } from "./utilities";

export default function Terminal({ onFinish = () => null }) {

  const [ready, setReady] = useState(false)
  const [canAnimate, setCanAnimate] = useState(false)

  useEffect(() => {
    setReady(true)
    setTimeout(() => {
      setCanAnimate(true)
    }, 700)
  }, [])

  return (
    <pre
      role="presentation"
      className={cn(
        "font-mono text-[7vw] md:text-[6vw] lg:text-[5vw] xl:text-[4vw] py-[0.5em] px-[1em] !leading-loose rounded-sm shadow-2xl",
        "transition-all duration-1000 ease-snappy",
        (ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full")
      )}
      style={{
        backgroundImage: `linear-gradient(7deg,rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.4) 100%)`
      }}
    >
      { canAnimate ? 
        <code>~/{' '}
          <TypedString string="Hey, " delayAfter={800}>
            <br />~/{' '}
            <TypedString string="it's " >
              <mark>
                <TypedString string="Kirk :)" delayAfter={800} then={() => onFinish()} />
              </mark>
            </TypedString>
          </TypedString>
          <span className="animate-blink">_</span>
        </code>
        :
        <code>~/{' '}<span className="animate-blink">_</span></code>
      }
      
    </pre>
  )
}