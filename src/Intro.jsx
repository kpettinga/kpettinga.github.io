import { useState } from "preact/hooks";
import SmoothScroll from "./SmoothScroll";
import Stage from "./Stage";
import Terminal from "./Terminal";
import { cn } from "./utilities";

export default function Intro() {

  const [ready, setReady] = useState(false)

  const handleFinish = () => {
    setReady(true)
    document.body.style.overflow = "auto"
  }

  return (
    <Stage id="intro" className="gap-16">
      <h1 className="sr-only">Hey, it's Kirk Pettinga :)</h1>
      <Terminal onFinish={handleFinish} />
      <h2 className={cn(
          "w-full max-w-xl px-4 transition-all duration-500 ease-out",
          ( ready ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0" )
        )}>
        I'm Kirk Pettinga, a software engineer, designer, dad and husband, and general nerd. I build software for the web, among other things.
      </h2>
      <p className={cn(
          "w-full max-w-xl px-4 transition-all duration-500 ease-out",
          ( ready ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0" )
        )}>
        <SmoothScroll to="#contact" className="inline-block transition-all hover:bg-black/30" >{'Contact me'}</SmoothScroll>
        &nbsp;&nbsp;<span className="opacity-30 font-bold">/</span>&nbsp;&nbsp;
        <a href="/assets/KirkPettinga.pdf" target={"_blank"} rel="noopener noreferrer" className="inline-block transition-all hover:bg-black/30">{'View Resume'}</a>
      </p>
      <p className={cn(
          "w-full max-w-xl px-4 transition-all duration-500 ease-out",
          ( ready ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0" )
        )}>
        <SmoothScroll
          to="#cvr"
          className="rounded-sm transition-all border border-transparent -ml-4 px-4 py-3 hover:bg-black/30"
        >
          Scroll to see some of my work&nbsp;&nbsp;
          <span className="align-sub">&#10549;</span>
        </SmoothScroll>
      </p>
    </Stage>
  );
}
