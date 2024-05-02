import Icon from "./Icon";
import type { Meta, StoryObj } from "@storybook/react";
import { Title, Subtitle, Stories } from "@storybook/blocks";
import { COLORS } from "@constants/color";

const meta = {
  title: "Chakra/Icon",
  argTypes: {
    color: {
      control: { type: "radio" },
      options: [COLORS.gray900, COLORS.white],
    },
    backgroundColor: {
      control: { type: "radio" },
      options: [COLORS.purple400, COLORS.white],
    },
  },
  component: Icon,
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
          <Subtitle children={"아이콘 컴포넌트에 대한 문서 페이지 입니다."} />
          <Stories />
        </div>
      ),
      toc: true,
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Icons: Story = {};
