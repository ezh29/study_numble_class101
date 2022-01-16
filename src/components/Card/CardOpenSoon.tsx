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
          margin-bottom: 10px;
        `}
      >
        <Caption1
          color={Colors.gray600}
          css={css`
            padding-right: 4px;
          `}
        >
          응원 마감까지
        </Caption1>
        <Caption1 color={Colors.black}>
          {dayjs(finishDate).diff(dayjs(), "day")}일 남음
        </Caption1>
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
