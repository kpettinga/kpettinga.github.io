import { useRef, useState, useEffect } from "preact/hooks";
import { cn } from "./utilities";

export default (props) => {
  const { className, children, ...restProps } = props;

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
      { threshold: 0.5 } // Trigger when 10% of the image is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={ref}
      className={cn(
        "group flex flex-col items-center justify-center w-dvw min-h-dvh p-8",
        (isVisible ? 'is-visible' : ''),
        className
      )}
      style={{perspective: "2000px"}}
      {...restProps}
    >
      {children}
    </article>
  );
};
