import React from "react";
import styled from "styled-components";
import codeBg from "./images/image-qr-code.png";
import { QRCode } from "./index";

export default {
  title: "Components/QR Code",
  component: QRCode,
  argTypes: {
    codeBg: {
      control: "text",
      description: "url of qr code",
    },
    codeAlt: {
      control: "text",
      description: "the alternate text for the qr code img",
    },
    title: {
      control: "text",
      description: "the title of the card",
    },
    description: {
      control: "text",
      description: "the description of the card",
    },
  },
  args: {
    codeBg: codeBg,
    codeAlt: "QR code to Frontend Mentor website",
    title: "Improve your front-end skills by building projects",
    description:
      "Scan the QR code to visit Frontend Mentor and take your coding skills to the next level",
  },
  parameters: {
    layout: "fullscreen",
  },
};

const StyledWrapper = styled.div`
  align-items: center;
  background-color: hsl(212, 45%, 89%);
  display: flex;
  font-family: "Outfit", serif;
  height: 100%;
  justify-content: center;
  padding: 16px 16px 40px 16px;
`;

const Template = (args) => (
  <StyledWrapper>
    <QRCode {...args} />
  </StyledWrapper>
);

export const Default = Template.bind({});
Default.args = {};
