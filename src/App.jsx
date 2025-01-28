import Stage from "./Stage";
import Background from "./Background";
import { projects } from "./data";
import Intro from "./Intro";
import { cn } from "./utilities";

export function App() {

  return (
    <>
      <Background />

      <Intro />

      {projects.map((project) => (
        <Stage
          key={project.id}
          id={project.id}
          className="gap-8 md:gap-16"
        >
          <div
            className="
              w-full max-w-6xl p-0 rounded-sm shadow-2xl overflow-hidden 
              transition-all ease-in-out duration-[1000ms]
              opacity-0 group-[.is-visible]/stage:opacity-100
              scale-80 group-[.is-visible]/stage:scale-100
              -rotate-x-15 group-[.is-visible]/stage:rotate-x-0
              group-[.is-visible]/stage:animate-dialUp
            "
          >
            <video
              loop
              muted
              preload="preload"
              autoplay
              poster={project.video.poster}
              width={project.video.width}
              height={project.video.height}
              class={cn(
                "object-cover w-full h-auto",
                project.id === "gibney" ? "aspect-[16/10.8]" : "aspect-video"
              )}
            >
              {project.video.webm && (
                <source src={project.video.webm} type="video/webm" />
              )}
              {project.video.mp4 && (
                <source src={project.video.mp4} type="video/mp4" />
              )}
            </video>
          </div>
          <div
            className="
            max-w-4xl px-4 md:px-8 grid gap-x-12 md:gap-x-16 gap-y-4 md:gap-y-8 grid-cols-1 lg:grid-cols-12
            transition-all ease-in-out duration-500 delay-500
            opacity-0 group-[.is-visible]/stage:opacity-100
            translate-y-12 group-[.is-visible]/stage:translate-y-0
          "
          >
            <div className="lg:col-span-8">
              <div className="opacity-50 font-mono mb-2">
                <small>
                  <strong>Product</strong>
                </small>
              </div>
              <h2 className="text-3xl lg:text-4xl font-thin">
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/project-link inline-block relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all hover:after:w-full"
                  >
                    {project.title}
                    <svg
                      className="absolute left-0 bottom-0 -translate-x-[calc(100%+0.75em)] size-8 opacity-50 ml-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.16488 17.6505C8.92513 17.8743 8.73958 18.0241 8.54996 18.1336C7.62175 18.6695 6.47816 18.6695 5.54996 18.1336C5.20791 17.9361 4.87912 17.6073 4.22153 16.9498C3.56394 16.2922 3.23514 15.9634 3.03767 15.6213C2.50177 14.6931 2.50177 13.5495 3.03767 12.6213C3.23514 12.2793 3.56394 11.9505 4.22153 11.2929L7.04996 8.46448C7.70755 7.80689 8.03634 7.47809 8.37838 7.28062C9.30659 6.74472 10.4502 6.74472 11.3784 7.28061C11.7204 7.47809 12.0492 7.80689 12.7068 8.46448C13.3644 9.12207 13.6932 9.45086 13.8907 9.7929C14.4266 10.7211 14.4266 11.8647 13.8907 12.7929C13.7812 12.9825 13.6314 13.1681 13.4075 13.4078M10.5919 10.5922C10.368 10.8319 10.2182 11.0175 10.1087 11.2071C9.57284 12.1353 9.57284 13.2789 10.1087 14.2071C10.3062 14.5492 10.635 14.878 11.2926 15.5355C11.9502 16.1931 12.279 16.5219 12.621 16.7194C13.5492 17.2553 14.6928 17.2553 15.621 16.7194C15.9631 16.5219 16.2919 16.1931 16.9495 15.5355L19.7779 12.7071C20.4355 12.0495 20.7643 11.7207 20.9617 11.3787C21.4976 10.4505 21.4976 9.30689 20.9617 8.37869C20.7643 8.03665 20.4355 7.70785 19.7779 7.05026C19.1203 6.39267 18.7915 6.06388 18.4495 5.8664C17.5212 5.3305 16.3777 5.3305 15.4495 5.8664C15.2598 5.97588 15.0743 6.12571 14.8345 6.34955"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                    </svg>
                  </a>
                ) : (
                  project.title
                )}
              </h2>
            </div>
            <div className="lg:col-span-4">
              <div className="opacity-50 font-mono mb-2">
                <small>
                  <strong>Role</strong>
                </small>
              </div>
              <h3 className="text-3xl font-thin">{project.role}</h3>
            </div>
            <div className="lg:col-span-8 order-2 lg:order-1">
              <div className="opacity-50 font-mono mb-2">
                <small>
                  <strong>About</strong>
                </small>
              </div>
              <p className="text-lg leading-relaxed">{project.description}</p>
            </div>
            <div className="lg:col-span-4 order-1 lg:order-2">
              <div className="opacity-50 font-mono mb-2">
                <small>
                  <strong>Stack</strong>
                </small>
              </div>
              <ul>
                {project.stack.map((tech) => (
                  <li key={tech} className="text-base font-mono">
                    <mark>{tech}</mark>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Stage>
      ))}

      <Stage id="contact" className="gap-16">
        <a target="_blank" rel="noreferrer" aria-label={"GitHub: @kpettinga"} href="https://github.com/kpettinga" className="group/social flex items-center flex-col gap-2 transition-all opacity-0 -translate-x-16 ease-out group-[.is-visible]/stage:opacity-80 group-[.is-visible]/stage:hover:opacity-100 group-[.is-visible]/stage:translate-x-0 ">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 512 512"><path fill="currentColor" d="M256.004 6.321c-141.369 0-256.004 114.609-256.004 255.999 0 113.107 73.352 209.066 175.068 242.918 12.793 2.369 17.496-5.555 17.496-12.316 0-6.102-0.24-26.271-0.348-47.662-71.224 15.488-86.252-30.205-86.252-30.205-11.641-29.588-28.424-37.458-28.424-37.458-23.226-15.889 1.755-15.562 1.755-15.562 25.7 1.805 39.238 26.383 39.238 26.383 22.836 39.135 59.888 27.82 74.502 21.279 2.294-16.543 8.926-27.84 16.253-34.232-56.865-6.471-116.638-28.425-116.638-126.516 0-27.949 10.002-50.787 26.38-68.714-2.658-6.45-11.427-32.486 2.476-67.75 0 0 21.503-6.876 70.42 26.245 20.418-5.674 42.318-8.518 64.077-8.617 21.751 0.099 43.668 2.943 64.128 8.617 48.867-33.122 70.328-26.245 70.328-26.245 13.936 35.264 5.175 61.3 2.518 67.75 16.41 17.928 26.347 40.766 26.347 68.714 0 98.327-59.889 119.975-116.895 126.312 9.182 7.945 17.362 23.523 17.362 47.406 0 34.254-0.298 61.822-0.298 70.254 0 6.814 4.611 14.797 17.586 12.283 101.661-33.888 174.921-129.813 174.921-242.884 0-141.39-114.617-255.999-255.996-255.999z" /></svg>
          <strong><small>@kpettinga</small></strong>
        </a>
        <a target="_blank" rel="noreferrer" aria-label={"X: @kirkpettinga"} href="https://x.com/KirkPettinga" className="group/social flex items-center flex-col gap-2 transition-all opacity-0 -translate-x-16 ease-out group-[.is-visible]/stage:opacity-80 group-[.is-visible]/stage:hover:opacity-100 group-[.is-visible]/stage:translate-x-0 ">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 1024 1024"><path fill="currentColor" d="M778.411 96h141.141l-308.352 352.427 362.752 479.573h-284.032l-222.464-290.859-254.549 290.859h-141.227l329.813-376.96-347.989-455.040h291.243l201.088 265.856zM728.875 843.52h78.208l-504.832-667.477h-83.925z" /></svg>
          <strong><small>@kirkpettinga</small></strong>
        </a>
        <a target="_blank" rel="noreferrer" aria-label={"View Linkedin profile"} href="https://www.linkedin.com/in/kirk-pettinga/" className="group/social flex items-center flex-col gap-2 transition-all opacity-0 -translate-x-16 ease-out group-[.is-visible]/stage:opacity-80 group-[.is-visible]/stage:hover:opacity-100 group-[.is-visible]/stage:translate-x-0 ">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 512 512"><path fill="currentColor" d="M464 0h-416c-26.4 0-48 21.6-48 48v416c0 26.4 21.6 48 48 48h416c26.4 0 48-21.6 48-48v-416c0-26.4-21.6-48-48-48zM192 416h-64v-224h64v224zM160 160c-17.7 0-32-14.3-32-32s14.3-32 32-32c17.7 0 32 14.3 32 32s-14.3 32-32 32zM416 416h-64v-128c0-17.7-14.3-32-32-32s-32 14.3-32 32v128h-64v-224h64v39.7c13.2-18.1 33.4-39.7 56-39.7 39.8 0 72 35.8 72 80v144z" /></svg>
          <strong><small>Linkedin profile</small></strong>
        </a>
        <a target="_blank" rel="noreferrer" aria-label={"Email kirk.pettinga@gmail.com"} href="mailto:kirk.pettinga@gmail.com" className="group/social flex items-center flex-col gap-2 transition-all opacity-0 -translate-x-16 ease-out group-[.is-visible]/stage:opacity-80 group-[.is-visible]/stage:hover:opacity-100 group-[.is-visible]/stage:translate-x-0 ">
          <svg width="64px" height="64px" viewBox="0 -2.5 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="currentColor"><g transform="translate(-300.000000, -922.000000)" fill="currentColor"><g id="icons" transform="translate(56.000000, 160.000000)"><path d="M262,764.291 L254,771.318 L246,764.281 L246,764 L262,764 L262,764.291 Z M246,775 L246,766.945 L254,773.98 L262,766.953 L262,775 L246,775 Z M244,777 L264,777 L264,762 L244,762 L244,777 Z" id="email-[#1573]" /></g></g></svg>
          <strong><small>Email me</small></strong>
        </a>
      </Stage>
    </>
  );
}
