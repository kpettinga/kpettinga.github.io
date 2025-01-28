import { useRef, useState, useEffect } from "preact/hooks";
import { cn } from "./utilities";

export default function Stage({ className, id, children, ...restProps }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.4 }
      // { threshold: Array.from({ length: ref.current.offsetHeight }, (_, i) => i / ref.current.offsetHeight) }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={ref}
      id={id}
      className={cn(
        "group/stage flex flex-col items-center justify-center w-dvw min-h-dvh p-8",
        (isVisible ? 'is-visible' : ''),
        className
      )}
      style={{perspective: "2000px"}}
      {...restProps}
    >
      {children}
    </article>
  );
}
