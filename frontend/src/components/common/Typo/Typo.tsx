import styled from "@emotion/styled";
import React from "react";

type Props = {
  color?: string;
  children: React.ReactNode;
};

export default function Typo({ color = "#000", children, ...rest }: Props) {
  return (
    <TypoContainer color={color} {...rest}>
      {children}
    </TypoContainer>
  );
}

const TypoContainer = styled.div<Omit<Props, "style, children">>`
  font-family: "SpoqaHanSansNeoLight";
  color: ${({ color }) => color};
`;
