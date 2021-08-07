import {
  faCalendarAlt,
  faCarSide,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.div`
  ${tw`
    w-full
    flex
    flex-col
    items-center
    pt-3
    pb-3 
    lg:pt-6 
    lg:pb-6  
`}
`;

const Title = styled.h2`
  ${tw`
    text-3xl
    lg:text-5xl 
    text-black
    font-black
`}
`;

const StepsContainer = styled.div`
  ${tw`
flex
justify-evenly
flex-wrap
mt-7 
lg:mt-16 
`}
`;

const StepContainer = styled.div`
  ${tw`
flex
flex-col
w-96 
md:w-96 
items-center
transition-colors
hover:text-red-500
`}
`;
const Step = styled.div`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  ${tw`
flex
rounded-lg
items-center
justify-center
p-6 
`}
`;
const StepTitle = styled.h4`
  ${tw`
text-black
text-lg
font-semibold
mt-4
`}
`;
const StepDescription = styled.p`
  ${tw`
w-10/12
text-xs
md:text-sm
text-center
text-gray-600
`}
`;

const StepIcon = styled.span`
  ${tw`
text-red-500
text-3xl
`}
`;

export function BookingSection() {
  return (
    <Container>
      <Title>Our Working steps</Title>
      <StepsContainer>
        <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faMapMarkedAlt} />
            </StepIcon>
          </Step>
          <StepTitle>Choose Location</StepTitle>
          <StepDescription>
            Find the nearest Yourcar point and book your car
          </StepDescription>
        </StepContainer>
        <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faCalendarAlt} />
            </StepIcon>
          </Step>
          <StepTitle>Pick-Up Date</StepTitle>
          <StepDescription>
            Pickup the best date to rent a car for you.
          </StepDescription>
        </StepContainer>
        <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faCarSide} />
            </StepIcon>
          </Step>
          <StepTitle>Book your Car</StepTitle>
          <StepDescription>Book your nice car with</StepDescription>
        </StepContainer>
      </StepsContainer>
    </Container>
  );
}
