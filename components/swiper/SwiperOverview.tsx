'use client';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';
import TextAnimation from '../gsap/TextAnimations';
import { useInView } from 'react-intersection-observer';
import { forwardRef, memo, ReactNode, useRef, useState } from 'react';
import Button, { ButtonProps } from '../button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const slides = [
  {
    title: "Professionals around the world shared how they feel about technology and I’ve listened. Now it’s your turn.",
    button: {
      text: 'Continue',
      variant: 'outline'
    }
  },
  {
    title: "I’ll ask you a handful of meaningful questions and compare your responses with people in your industry.",
    button: {
      text: 'Continue',
      variant: 'outline'
    }
  },
  {
    title: "You’ll get insights into current industry sentiments and a reality check about technology in a few minutes. Deal? Great!",
    button: {
      text: 'Get started',
      variant: 'secondary'
    }
  }
];

const SlideContent = ({ content, children }: { content: typeof slides[0]; children?: ReactNode }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  return (
    <div className='w-full h-full min-h-[200px] bg-black space-y-5' ref={ref}>
      <TextAnimation
        text={content.title}
        startAnimate={inView}
        className='text-center text-2xl leading-7 tracking-wide'
      />
      {children}
    </div>
  )
}

const SwiperComponent = memo(forwardRef(({
  setCurrentIndex
}: {
  setCurrentIndex: (i: number) => void
}, swiperRef) => <Swiper
  spaceBetween={50}
  slidesPerView={1}
  pagination={{ clickable: true }}
  scrollbar={{ draggable: true }}
  className='w-full text-white'
  loop={true}
  modules={[Pagination, Navigation]}
  style={{
    // @ts-ignore
    '--swiper-pagination-color': '#CDAAFF',
    '--swiper-pagination-bottom': '0px',
    '--swiper-pagination-bullet-inactive-opacity': '0.4',
    '--swiper-pagination-bullet-inactive-color': '#FFF',
  }}
  onSwiper={(swiper) => {
    // @ts-ignore
    swiperRef.current = swiper;
    setCurrentIndex(swiper.activeIndex)
  }}
>
    {
      slides.map((s, i) => (
        <SwiperSlide key={i}>
          <SlideContent content={s}>
          </SlideContent>
        </SwiperSlide>
      ))
    }
  </Swiper>))

const SwiperOverview = () => {
  const swiperRef = useRef(null);
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const onClickButton = () => {
    const nextIndex = currentIndex + 1;

    if (nextIndex === slides.length) {
      router.push('/form')
    } else {
      setCurrentIndex(nextIndex)
      // @ts-ignore
      swiperRef.current?.slideNext()
    }

  }

  return (
    <div className='w-full min-h-screen flex flex-col space-y-8 relative'>
      {/* <LogoAnimation /> */}
      <div className='flex items-center justify-center w-full'>
        <Image
          src="/icons/hexagon.svg"
          width={146}
          height={155}
          alt='Hexagon'
        />
      </div>
      <SwiperComponent setCurrentIndex={setCurrentIndex} ref={swiperRef} />
      <div className='fixed bottom-3 w-full p-4'>
        <Button
          onClick={onClickButton}
          variant={slides[currentIndex]?.button?.variant as ButtonProps['variant']}
        >
          {slides[currentIndex]?.button?.text}
        </Button>
      </div>
    </div>
  );
};

export default SwiperOverview;