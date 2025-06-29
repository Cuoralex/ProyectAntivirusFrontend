import { useEffect, useRef, useState } from "react";
import { useNavigate } from "@remix-run/react";
import { useHydrated } from "../utils/useHydrated";

export default function Hero({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const hydrated = useHydrated();

  const handleClick = () => {
    navigate("/auth/register");
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      const canvas = containerRef.current?.querySelector("canvas");
      if (canvas) {
        canvas.classList.add("w-[200px]", "h-[200px]", "object-contain");
        canvas.style.width = "150px";
        canvas.style.height = "150px";
      }
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") handleClick();
      }}
      ref={containerRef}
      className={`fixed top-32 -right-40 z-50 inline-block cursor-pointer ${className}`}
    >
      {hydrated ? <SplineClientLazy scene="https://prod.spline.design/xyz/scene.splinecode" /> : null}
    </div>
  );
}

function SplineClientLazy({ scene }: { scene: string }) {
  const [Component, setComponent] = useState<null | React.ElementType>(null);

  useEffect(() => {
    import("../components/SplineClient").then((mod) => {
      setComponent(() => mod.default);
    });
  }, []);

  if (!Component) return null;

  return <Component scene={scene} />;
}
