import { Meta, StoryObj } from "@storybook/react";
import Card from "./Card";

const meta: Meta<typeof Card> = {
  title: "common/Card",
  component: Card,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    width: "100px",
    height: "50px",
    children: <p>Hello World!</p>,
  },
  render: (args) => <Card {...args}>{args.children}</Card>,
};
