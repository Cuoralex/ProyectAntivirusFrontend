import { useEffect, useState } from "react";


// ✅ Esto ya no dará error si swiper está bien instalado
export default function SwiperClient() {
  const [Swiper, setSwiper] = useState<React.ElementType | null>(null);
  const [SwiperSlide, setSwiperSlide] = useState<React.ElementType | null>(null);

  useEffect(() => {
    const load = async () => {
      const mod = await import("swiper/react");


      setSwiper(() => mod.Swiper);
      setSwiperSlide(() => mod.SwiperSlide);
    };

    load();
  }, []);

  if (!Swiper || !SwiperSlide) return null;

  return (
    <Swiper spaceBetween={50} slidesPerView={1}>
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
    </Swiper>
  );
}
