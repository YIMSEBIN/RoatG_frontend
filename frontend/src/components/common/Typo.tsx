import React from "react";

type Props = {
  style?: React.CSSProperties;
  children: React.ReactNode;
};

export default function Typo({ style, children }: Props) {
  return <div style={{ ...style }}>{children}</div>;
}
