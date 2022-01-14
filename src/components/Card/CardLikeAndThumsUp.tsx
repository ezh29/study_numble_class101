import React from "react";
import { Badge, Icon, Colors } from "@class101/ui";

interface CardLikeAndThumsUpProps {
  thumsUp: number;
  like: number;
}

function CardLikeAndThumsUp({ like, thumsUp }: CardLikeAndThumsUpProps) {
  return (
    <>
      {!!like && (
        <Badge
          icon={<Icon.Heart fillColor={Colors.gray400} />}
          backgroundColor="transparent"
          color={Colors.gray600}
          size="sm"
        >
          {like}
        </Badge>
      )}
      {!!thumsUp && (
        <Badge
          icon={<Icon.Like fillColor={Colors.gray400} />}
          backgroundColor="transparent"
          color={Colors.gray600}
          size="sm"
        >
          {thumsUp}%
        </Badge>
      )}
    </>
  );
}

export default CardLikeAndThumsUp;
