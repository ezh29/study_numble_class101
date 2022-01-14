import React, { useState, useEffect } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Card, Caption1 } from "@class101/ui";
import dayjs from "dayjs";
import dayOfYear from "dayjs/plugin/dayOfYear";

interface CardPopularEventProps {
  title: string;
  img: string;
  startDate: string;
  finishDate: string;
}

function CardPopularEvent({
  title,
  img,
  startDate,
  finishDate,
}: CardPopularEventProps) {
  const getDateFormat = (date: string) => {
    const week = ["일", "월", "화", "수", "목", "금", "토"];
    return {
      date: dayjs(`20${date}`).format("MM.DD"),
      day: week[dayjs(`20${date}`).get("day")],
      dayOfYear: dayjs(`20${date}`).dayOfYear(),
    };
  };
  const getDdayFromToday = (dateParam: string) => {
    //dayOfYear를 사용하기위해 확장
    dayjs.extend(dayOfYear);
    const toDay = dayjs();
    const date = dayjs(`20${dateParam}`);
    const toDayYear = toDay.year();
    const dateYear = date.year();
    const toDayDayOfYear = toDay.dayOfYear();
    const dateDayOfYear = date.dayOfYear();
    //내년
    if (toDayYear < dateYear) {
      return Math.abs(
        toDayDayOfYear - dateDayOfYear + (dateYear - toDayYear) * 365
      );
    }
    //작년 거나 지난 이벤트이면
    if (toDayYear > dateYear || toDayDayOfYear > dateDayOfYear) {
      return 0;
    }
    //올해
    if (toDayYear === dateYear) {
      return Math.abs(toDayDayOfYear - dateDayOfYear);
    }
  };

  return (
    <Card
      to={"/"}
      coverImage={img}
      extraTop={
        <>
          <div
            css={css`
              font-size: 14px;
              font-weight: 700;
              color: rgb(26, 26, 26);
              line-height: 20px;
              letter-spacing: -0.15px;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
            `}
          >
            {title}
          </div>
          <div
            css={css`
              display: flex;
            `}
          >
            <Caption1
              color="red"
              fontWeight="700"
              css={css`
                margin-right: 4px;
              `}
            >
              D-{getDdayFromToday(finishDate)}
            </Caption1>
            <Caption1>
              {getDateFormat(startDate).date} ({getDateFormat(startDate).day}) ~{" "}
              {getDateFormat(finishDate).date} ({getDateFormat(finishDate).day}){" "}
            </Caption1>
          </div>
        </>
      }
    ></Card>
  );
}

export default CardPopularEvent;
