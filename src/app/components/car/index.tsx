import {
  faEllipsisH,
  faFillDrip,
  faTachometerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ICar } from "../../../typings/car";
import { Button } from "../button";

interface IcarProps extends ICar {}

const CarContainer = styled.div`
  width: 17em;
  min-height: 22.2em;
  max-height: 23em;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
    rgba(17, 17, 26, 0.05) 0px 8px 32px;
  ${tw`
    flex
    flex-col
    items-center
    p-3
    pb-4
    bg-white
    rounded-md
    m-1 
    sm:m-3 
    md:m-6 
`};
`;

const CarThumbnail = styled.div`
    width:100%;
    height:auto;

    img{
        width: 100%
        height: 100%
    }
`;
const CarName = styled.h3`
  ${tw`
    text-base
    font-bold
    text-black
    mt-1
    mb-1 
`}
`;

const PricesContainer = styled.div`
  ${tw`
w-full
flex
justify-end
mt-3 

`}
`;

const SmallText = styled.p`
  color: inherit;
  ${tw`
        inline-flex
        text-xs
        font-thin
    `}
`;
const DailyPrice = styled.h5`
  ${tw`
    text-red-500 
    font-bold
    text-sm
    mr-3 
`}
`;

const MonthlyPrice = styled.h5`
  ${tw`
    text-gray-500 
    font-bold
    text-sm
    
`}
`;
const SmallIcon = styled.span`
  ${tw`
text-gray-500 
text-sm
mr-1
`}
`;

const CarDetailContainer = styled.div`
  ${tw`
flex
w-full
justify-between
my-2
`}
`;
const CarDetail = styled.span`
  ${tw`
    flex
    items-center
`}
`;
const CarInfo = styled.h6`
  ${tw`
    text-gray-400
    text-xs
`}
`;
const Seperator = styled.div`
  min-width: 100%;
  min-height: 1px;
  ${tw`
flex
bg-gray-300

`}
`;
const RentButton = styled(Button)`
  ${tw`
    min-w-full
    mt-5
`}
`;
export function Car(props: IcarProps) {
  const {
    thumbnailSrc,
    mileage,
    name,
    gearType,
    dailyPrice,
    monthlyPrice,
    gas,
  } = props;
  return (
    <CarContainer>
      <CarThumbnail>
        <img src={thumbnailSrc} alt="" />
      </CarThumbnail>
      <CarName>{name}</CarName>
      <PricesContainer>
        <DailyPrice>
          ${dailyPrice} <SmallText>/Day</SmallText>
        </DailyPrice>
        <MonthlyPrice>
          ${monthlyPrice}
          <SmallText>/Month</SmallText>
        </MonthlyPrice>
      </PricesContainer>
      <Seperator />
      <CarDetailContainer>
        <CarDetail>
          <SmallIcon>
            <FontAwesomeIcon icon={faTachometerAlt} />
          </SmallIcon>
          <CarInfo>{mileage}</CarInfo>
        </CarDetail>
        <CarDetail>
          <SmallIcon>
            <FontAwesomeIcon icon={faEllipsisH} />
          </SmallIcon>
          <CarInfo>{gearType}</CarInfo>
        </CarDetail>
        <CarDetail>
          <SmallIcon>
            <FontAwesomeIcon icon={faFillDrip} />
          </SmallIcon>
          <CarInfo>{gas}</CarInfo>
        </CarDetail>
      </CarDetailContainer>
      <RentButton text="Rent Now" />
    </CarContainer>
  );
}
