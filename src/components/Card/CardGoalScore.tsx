import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Card, Caption1, Badge, Icon, Colors } from "@class101/ui";

interface CardGoalScoreProps {
  goal: number;
  score: number;
}

function CardGoalScore({ goal, score }: CardGoalScoreProps) {
  return (
    <>
      {!!goal && (
        <Badge
          icon={<Icon.Clap fillColor={Colors.red600} />}
          backgroundColor="transparent"
          color={Colors.red600}
          size="sm"
          css={css`
            padding: 0;
            padding-right: 6px;
          `}
        >
          {goal}% 달성
        </Badge>
      )}{" "}
      {!!score && (
        <Badge
          icon={<Icon.Heart fillColor={Colors.gray400} />}
          backgroundColor="transparent"
          color={Colors.gray600}
          size="sm"
          css={css`
            padding: 0;
            padding-right: 6px;
          `}
        >
          {score}%
        </Badge>
      )}
    </>
  );
}

export default CardGoalScore;
