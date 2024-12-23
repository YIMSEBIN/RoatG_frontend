import styled from "@emotion/styled";
import { HTMLAttributes } from "react";

type Props = {
  url: string;
  size: {
    width: string;
    height: string;
  };
} & HTMLAttributes<HTMLDivElement>;

export default function Image({ url, size, ...rest }: Props) {
  return <Container size={size} url={url} {...rest} />;
}

const Container = styled.div<Props>`
  background-image: url(${({ url }) => url});
  background-size: cover;
  background-position: center;
  min-width: ${({ size }) => size.width};
  min-height: ${({ size }) => size.height};
`;
