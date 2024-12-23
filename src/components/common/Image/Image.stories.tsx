import { Meta, StoryObj } from "@storybook/react";
import Image from "./Image";

const meta: Meta<typeof Image> = {
  title: "common/Image",
  component: Image,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Image>;

export const Default: Story = {
  args: {
    url: "https://ibb.co/rkYFy5D",
    size: { width: "30px", height: "30px" },
  },
  render: (args) => <Image {...args} />,
};
