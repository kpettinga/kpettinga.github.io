import { useEffect, useRef, useState } from "preact/hooks"

export default function Terminal() {

  return (
    <pre
      role="presentation"
      className="font-mono text-2xl md:text-[4vw] !leading-loose p-4 md:px-[2vw] md:py-[1.5vw] rounded-xl shadow-2xl origin-top"
      style={{
        backgroundImage: `linear-gradient(7deg,rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0.12) 100%)`
      }}
    >
      <code>~/ Hey,</code>
      <br /><code>~/ it's <mark className="bg-mint-400 text-midnight-800">Kirk :)</mark></code> <code className="animate-blink">_</code>
    </pre>
  )
}