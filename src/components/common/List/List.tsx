import { HTMLAttributes, ReactNode } from "react";

type Props<T> = {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export default function List<T>({ items = [], renderItem }: Props<T>) {
  return <>{items.map((item, index) => renderItem(item, index))}</>;
}
