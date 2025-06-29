// app/components/SplineClient.tsx
import { useEffect, useState } from "react";

export default function SplineClient({ scene }: { scene: string }) {
  const [Spline, setSpline] = useState<null | React.ElementType>(null);

  useEffect(() => {
    import("@splinetool/react-spline").then((mod) => {
      setSpline(() => mod.default);
    });
  }, []);

  if (!Spline) return null;

  return <Spline scene={scene} />;
}
