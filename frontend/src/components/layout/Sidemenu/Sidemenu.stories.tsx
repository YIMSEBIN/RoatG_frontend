import { Meta, StoryObj } from "@storybook/react";
import Sidemenu from "./Sidemenu";

const meta: Meta<typeof Sidemenu> = {
  title: "common/Sidemenu",
  component: Sidemenu,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Sidemenu>;

export const Default: Story = {
  render: () => <Sidemenu />,
};
