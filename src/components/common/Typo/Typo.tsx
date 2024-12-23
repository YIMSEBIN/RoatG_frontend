import React, { HTMLAttributes } from "react";

type Props = {
  color?: string;
  bold?: boolean;
  size?: string;
  children: React.ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export default function Typo({ color = "#000", bold, size, children, style }: Props) {
  const fontWeight = bold ? "SpoqaHanSansNeoBold" : "SpoqaHanSansNeoLight";

  return <div style={{ fontFamily: fontWeight, color: color, fontSize: size, ...style }}>{children}</div>;
}
