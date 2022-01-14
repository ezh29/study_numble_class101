import React, { useState, useEffect, useRef } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import dayjs from "dayjs";
import dayOfYear from "dayjs/plugin/dayOfYear";
import relativeTime from "dayjs/plugin/relativeTime";

import {
  Card,
  Caption1,
  Colors,
  Button,
  ButtonColor,
  Divider,
} from "@class101/ui";
import CardGoalScore from "./CardGoalScore";

interface CardOpenSoonProps {
  title: string;
  creator: string;
  img: string;
  goal: number;
  score: number;
  finishDate: string;
}

function CardOpenSoon({
  title,
  creator,
  img,
  goal,
  score,
  finishDate,
}: CardOpenSoonProps) {
  const [finishDateDday, setFinishDateDday] = useState<string>("");
  const interval = useRef<any>();
  //TODO 타이머 작업하기
  const differ = useRef<any>();
  const hours = useRef<any>();
  const minutes = useRef<any>();
  const seconds = useRef<any>();

  const getFinishDateDday = (date: string) => {
    dayjs.extend(dayOfYear);
    const dDay = dayjs().dayOfYear() - dayjs(date).dayOfYear();
    //이미 지난 오픈예정이면 -> 0
    if (dDay > 0) return 0;
    //하루 이하면 -> 초 타이머
    if (dDay === -1) {
      return getTimer(date);
    }
    //하루 초과면 -> 디데이
    if (dDay < -1) {
      return getDday(date);
    }
  };
  //TODO 타이머 작업하기
  const getTimer = (date: string) => {
    interval.current = setInterval(() => {
      console.log("타이머");
      differ.current = dayjs(date).diff(dayjs(), "second");
      hours.current = Math.floor((differ.current / (1000 * 60 * 60)) % 24); //시
      minutes.current = Math.floor(((differ.current / 1000) * 60) % 60); //분
      seconds.current = Math.floor((differ.current / 1000) % 60); //초
      setFinishDateDday(
        `${hours.current}:${minutes.current}:${seconds.current}`
      );
    }, 1000);
  };
  const getDday = (date: string) => {};

  useEffect(() => {
    getFinishDateDday(finishDate);
    return () => clearInterval(interval.current);
  }, []);
  return (
    <Card
      to={"/"}
      title={title}
      coverImage={img}
      extraTop={
        <>
          <Caption1 fontWeight={600} color={Colors.gray900}>
            {creator}
          </Caption1>
        </>
      }
    >
      <CardGoalScore goal={goal} score={score} />
      <Divider
        css={css`
          margin: 8px 0;
        `}
      />
      <div
        css={css`
          display: flex;
        `}
      >
        <Caption1 color={Colors.gray600}>응원 마감까지</Caption1>
        <Caption1 color={Colors.red600}>{finishDateDday}남음</Caption1>
      </div>

      <Button
        fill
        color={ButtonColor.ORANGE_LIGHT}
        css={css`
          margin-top: 8px;
        `}
      >
        응원하기
      </Button>
    </Card>
  );
}

export default CardOpenSoon;
