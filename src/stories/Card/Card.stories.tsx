import Card from "./Card";
import type { Meta, StoryObj } from "@storybook/react";
import { Title, Subtitle, Stories } from "@storybook/blocks";
import { COLORS, Colors } from "@constants/color";

const meta = {
  title: "Components/Card",
  component: Card,
  argTypes: {
    label: {
      control: { type: "text" },
    },
  },
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      page: () => (
        <div>
          <Title />
          <Subtitle children={"모달 컴포넌트에 대한 문서 페이지 입니다."} />
          <Stories />
        </div>
      ),
      toc: true,
    },
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "content",
    backgroundColor: COLORS.purple400 as Colors,
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    width: 375,
    height: 61,
    color: "white",
    fontType: "subtitle2",
  },
};

export const Small: Story = {
  args: {
    label: "content",
    backgroundColor: COLORS.white as Colors,
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    width: 105,
    height: 105,
    color: "black",
    fontType: "subtitle5",
  },
};

export const Large: Story = {
  args: {
    label: "content",
    backgroundColor: COLORS.white as Colors,
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    width: 375,
    height: 174,
    color: "black",
    fontType: "subtitle1",
  },
};
