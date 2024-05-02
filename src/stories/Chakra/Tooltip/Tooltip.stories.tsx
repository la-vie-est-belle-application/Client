import TooltipComponent from "./Tooltip";
import type { Meta, StoryObj } from "@storybook/react";
import { Title, Subtitle, Stories } from "@storybook/blocks";

const meta = {
  title: "Chakra/Tooltip",
  component: TooltipComponent,
  argTypes: {
    label: { control: { type: "text" } },
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
          <Subtitle children={"툴팁 컴포넌트에 대한 문서 페이지 입니다."} />
          <Stories />
        </div>
      ),
      toc: true,
    },
  },
} satisfies Meta<typeof TooltipComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "툴팁 내용",
  },
};
