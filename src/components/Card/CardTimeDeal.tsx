import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Card, Caption1, Badge, Icon, Colors } from "@class101/ui";
import CardPrice from "./CardPrice";

interface postData {
  title: string;
  img: string;
  creator: string;
  salePrice: number;
  originalPrice: number;
  installment: number;
  thumsUp: number;
  like: number;
  coupon: number;
}

function CardTimeDeal({
  title,
  img,
  creator,
  salePrice,
  originalPrice,
  installment,
  thumsUp,
  like,
  coupon,
}: postData) {
  return (
    <div
      css={css`
        margin-right: 10px;
      `}
    >
      <Card
        to={"/"}
        title={title}
        coverImage={img}
        extraTop={
          <>
            <Badge
              icon={<Icon.Timer fillColor={Colors.white} />}
              color={Colors.white}
              backgroundColor="#5820CF"
              size="sm"
              css={css`
                width: 100%;
                display: flex;
                justify-content: flex-start;
                margin-bottom: 6px;
              `}
            >
              <span>타임딜 종료까지</span>
              <span
                css={css`
                  position: absolute;
                  right: 5px;
                `}
              >
                00:00:00
              </span>
            </Badge>
            <Caption1 fontWeight={600} color={Colors.gray900}>
              {creator}
            </Caption1>
          </>
        }
        extraBottom={
          <div style={{ marginLeft: "-4px", lineHeight: "0" }}>
            <Badge
              icon={<Icon.Heart fillColor={Colors.gray400} />}
              backgroundColor="transparent"
              color={Colors.gray400}
              size="sm"
            >
              {like}
            </Badge>{" "}
            <Badge
              icon={<Icon.Like fillColor={Colors.gray400} />}
              backgroundColor="transparent"
              color={Colors.gray400}
              size="sm"
            >
              {thumsUp}%
            </Badge>
          </div>
        }
      >
        <CardPrice
          salePrice={salePrice}
          originalPrice={originalPrice}
          installment={installment}
        ></CardPrice>
        <Badge
          color={Colors.white}
          backgroundColor="#5820CF"
          css={css`
            position: absolute;
            top: 10px;
            left: 10px;
          `}
        >
          {coupon}만원 쿠폰
        </Badge>
        <Icon.HeartOutline
          size={24}
          fillColor={Colors.white}
          css={css`
            position: absolute;
            top: 7px;
            right: 7px;
            padding: 5px 4px 3px 5px;
            border-radius: 50px;
            &:hover {
              background: #ffffff44;
              transition: all 0.3s;
            }
          `}
        />
      </Card>
    </div>
  );
}

export default CardTimeDeal;
