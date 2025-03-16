import { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(useGSAP);

type TextAnimationProps = {
    text: string;
    startAnimate?: boolean;
    className?: string;
}

const TextAnimation = ({ text, startAnimate = true, className }: TextAnimationProps) => {
    const textRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      const chars = textRef?.current?.querySelectorAll?.('.char');
      
      if (startAnimate && chars) {
        gsap.to(chars, {
          duration: 1,
          opacity: 1,
          ease: "power3.inOut",
          color: "#f0f0f0",
          stagger: 0.1
        });
      }
    }, [startAnimate]);
  
    const chars = useMemo(() => text.split('').map((char, index) => (
        <span key={index} className="char" style={{ opacity: 0.4 }}>
          {char}
        </span>
      )), [text]);
  
    return (
      <div ref={textRef} className={cn("text-lg", className)}>
        {chars}
      </div>
    );
  };
  export default TextAnimation;
  