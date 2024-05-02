import Tag from "./Tag";
import type { Meta, StoryObj } from "@storybook/react";
import { Title, Subtitle, Stories } from "@storybook/blocks";

const meta = {
  title: "Chakra/Tag",
  component: Tag,
  argTypes: {
    name: { control: { type: "text" } },
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
          <Subtitle children={"태그 컴포넌트에 대한 문서 페이지 입니다."} />
          <Stories />
        </div>
      ),
      toc: true,
    },
  },
} satisfies Meta<typeof Tag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "사용자 이름",
  },
};
