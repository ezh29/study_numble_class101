import { useMemo } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button, Icon } from "@class101/ui";

interface sliderProps {
  /** 슬라이더 아이템 요소 */
  children: React.ReactNode;
  /** 커스텀 클래스 */
  className?: string;
  /** 자동재생 (속도 설정시 number 타입으로) */
  autoplay?: boolean | number;
  /** 슬라이더 속도 */
  speed?: number;
  /** 반복 여부 */
  loop?: boolean;
  // 보여질 슬라이드 갯수
  Show?: number;
  //스크롤 될 슬라이드 갯수
  Scroll?: number;
}

function SamplePrevArrow({ onClick }: any) {
  return (
    <Button
      css={css`
        position: absolute;
        left: -70px;
        z-index: 9;
        top: 50%;
        transform: translateY(-50%);
      `}
      onClick={onClick}
    >
      <Icon.ChevronLeft />
    </Button>
  );
}
function SampleNextArrow({ onClick }: any) {
  return (
    <Button
      css={css`
        position: absolute;
        right: -70px;
        z-index: 9;
        top: 50%;
        transform: translateY(-50%);
      `}
      onClick={onClick}
    >
      <Icon.ChevronRight />
    </Button>
  );
}

function Slick({
  children,
  className,
  autoplay = false,
  loop = false,
  Show = 4,
  Scroll = 1,
}: sliderProps) {
  const settings = useMemo<Settings>(
    () => ({
      dots: false,
      infinite: loop,
      autoplay: Boolean(autoplay),
      slidesToShow: Show,
      slidesToScroll: Scroll,
      prevArrow: <SamplePrevArrow />,
      nextArrow: <SampleNextArrow />,
    }),
    [autoplay, loop, Show, Scroll]
  );
  return (
    <div className={className}>
      <Slider {...settings}>{children}</Slider>
    </div>
  );
}

export default Slick;
