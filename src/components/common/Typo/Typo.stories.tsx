import { Meta, StoryObj } from "@storybook/react";
import Typo from "./Typo";

const meta: Meta<typeof Typo> = {
  title: "common/Typo",
  component: Typo,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Typo>;

export const Default: Story = {
  args: {
    children: "Hello World!",
  },
};
