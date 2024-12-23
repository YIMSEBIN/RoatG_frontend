import styled from "@emotion/styled";
import { HTMLAttributes, ReactNode } from "react";

type Props = {
  width?: string;
  height?: string;
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;
// TODO : 미디어쿼리
export default function Card({ width, height, children, ...rest }: Props) {
  return (
    <CardContainer width={width} height={height} {...rest}>
      {children}
    </CardContainer>
  );
}

const CardContainer = styled.div<Omit<Props, "children">>`
  background-color: white;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  box-shadow: 4px 4px 5px #eee;
  border-radius: 12px;
`;
