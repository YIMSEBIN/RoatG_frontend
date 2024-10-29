import styled from "@emotion/styled";
import { ReactNode } from "react";

type Props = {
  width: string;
  height: string;
  children: ReactNode;
};
// TODO : 미디어쿼리
export default function Card({ width, height, children, ...rest }: Props) {
  return (
    <CardContainer width={width} height={height} {...rest}>
      {children}
    </CardContainer>
  );
}

const CardContainer = styled.div<Omit<Props, "children">>`
  display: inline-block;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding: 15px 30px;
  box-shadow: 4px 4px 5px #eee;
  border-radius: 12px;
`;
