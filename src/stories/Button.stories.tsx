import type { Meta, StoryObj } from "@storybook/react";
import Button from "../components/Button/Button";

const meta = {
  title: "Button",
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

//storyの名前を決める
export const Default: Story = {
  args: {
    children: "Hello World",
  },
};

export const ClickButton: Story = {
  args: {
    children: "click",
  },
};


export const Danger: Story = {
  args: {
    children: 'Danger',
    color: 'danger',
  },
};

export const PrimarySmall: Story = {
  args: {
    children: 'Primary',
    color: 'primary',
    size: 'sm',
  },
};

export const PrimaryLarge: Story = {
  args: {
    children: 'Primary',
    color: 'primary',
    size: 'lg',
  },
};