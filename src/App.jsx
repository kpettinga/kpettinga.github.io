import { useEffect, useState } from "preact/hooks";
import Intro from "./Intro.dep";
import Stage from "./Stage";
import MousePointer from "./MousePointer";
import SmoothScroll from "./SmoothScroll";
import Terminal from "./Terminal";
import { projects } from "./data";
import Background from "./Background";

export function App() {

  return (
    <>
      
      <Background />

      {/* <MousePointer /> */}

      <Stage className="gap-16">
        <h1 className="sr-only">Hey, it's Kirk Pettinga :)</h1>
        <Terminal />
        <h2 className="w-full max-w-xl px-4">
          I'm <span>Kirk Pettinga</span>, a{" "}
          <SmoothScroll to="#wallcore">
            <span>software engineer</span>
          </SmoothScroll>
          ,{" "}
          <SmoothScroll to="#wallcore">
            <span>designer</span>
          </SmoothScroll>
          , <span>dad and husband</span>, and general <span>nerd</span> .{" "}
          <span>I build software the web</span>, among{" "}
          <span>other things</span>.
        </h2>
        <p className="w-full max-w-xl px-4">
          <SmoothScroll
            to="#wallcore"
            className="rounded-lg transition-all border border-transparent -ml-4 px-4 py-3 hover:border-black/5 hover:shadow-xl hover:scale-[1.05]"
          >
            Scroll to see some of my work&nbsp;&nbsp;
            <span className="align-sub">&#10549;</span>
          </SmoothScroll>
        </p>
      </Stage>
      
      {/* { projects.map((project) => 
        <Stage id={project.id}>{}</Stage>
      ) } */}

      {projects.map((project) => (
        <Stage id={project.id} className="gap-8 md:gap-16">
          <div
            className="
              w-full max-w-6xl p-0 rounded-xl shadow-2xl overflow-hidden 
              transition-all ease-snappy 
              opacity-0 group-[.is-visible]:opacity-100
              scale-75 group-[.is-visible]:scale-100
              -rotate-x-45 group-[.is-visible]:rotate-x-0
              translate-y-1/4 group-[.is-visible]:translate-y-0
            "
            style={{transition: 'all 400ms ease-out'}}
          >
            <video loop muted preload="preload" autoplay
              poster={project.video.poster}
              width={project.video.width}
              height={project.video.height}
              class="aspect-video object-cover w-full h-auto"
            >
              { project.video.webm && <source src={project.video.webm} type="video/webm" /> }
              { project.video.mp4 && <source src={project.video.mp4} type="video/mp4" /> }
            </video>
          </div>
          <div className="max-w-4xl px-4 md:px-8 grid gap-4 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <div className="sm:col-span-1 lg:col-span-2">
              <div className="opacity-50"><small><strong>Product</strong></small></div>
              <h2 className="text-3xl font-extralight">{project.title}</h2>
            </div>
            <div className="sm:col-span-1">
              <div className="opacity-50"><small><strong>Role</strong></small></div>
              <h3 className="text-3xl font-extralight">{project.role}</h3>
            </div>
            <div className="sm:col-span-1 lg:col-span-2">
              <div className="opacity-50"><small><strong>About</strong></small></div>
              <p className="text-base">{project.description}</p>
            </div>
            <div className="sm:col-span-1">
              <div className="opacity-50"><small><strong>Stack</strong></small></div>
              <ul>
                { project.stack.map(tech => (
                  <li className="text-sm"><mark>{tech}</mark></li>
                )) }
              </ul>
            </div>
          </div>
        </Stage>
      ))}
    </>
  );
}
