import { ReactNode } from "react";

interface Props<T> {
  items: T[];
  renderItem: (item: T) => ReactNode;
}

export default function List<T>({ items = [], renderItem }: Props<T>) {
  console.log(items);
  console.log(typeof items);
  console.log(typeof []);
  console.log("-----------------");
  return <>{items.map(renderItem)}</>;
}
