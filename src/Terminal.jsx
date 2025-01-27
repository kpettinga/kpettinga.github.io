import { useEffect, useRef, useState } from "preact/hooks"

export default function Terminal() {

  return (
    <pre
      role="presentation"
      className="font-mono text-[7vw] md:text-[6vw] lg:text-[5vw] xl:text-[4vw] py-[0.5em] px-[1em] !leading-loose rounded-xl shadow-2xl"
      style={{
        backgroundImage: `linear-gradient(7deg,rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.4) 100%)`
      }}
    >
      <code>~/ Hey,</code>
      <br /><code>~/ it's <mark className="bg-mint-400 text-midnight-800">Kirk :)</mark></code> <code className="animate-blink">_</code>
    </pre>
  )
}