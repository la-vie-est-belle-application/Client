import SelectComponent from "./Select";
import type { Meta, StoryObj } from "@storybook/react";
import { Title, Subtitle, Stories } from "@storybook/blocks";

const meta = {
  title: "Chakra/Select",
  component: SelectComponent,
  argTypes: {
    selectValue: {
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
          <Subtitle children={"셀렉트 컴포넌트에 대한 문서 페이지 입니다."} />
          <Stories />
        </div>
      ),
      toc: true,
    },
  },
} satisfies Meta<typeof SelectComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    selectValue: "전체 보기",
    optionValue: ["스케줄", "피드백", "공지사항"],
  },
};
