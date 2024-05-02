import ButtonComponent from "./Button";
import type { Meta, StoryObj } from "@storybook/react";
import { Title, Subtitle, Stories } from "@storybook/blocks";
import { DeleteIcon } from "@chakra-ui/icons";
import { COLORS } from "@constants/color";

const meta = {
  title: "Chakra/Button",
  component: ButtonComponent,
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
} satisfies Meta<typeof ButtonComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    backgroundColor: COLORS.purple400,
    label: "Text",
  },
};

export const Wirting: Story = {
  args: {
    backgroundColor: COLORS.purple400,
    label: "글쓰기",
  },
};

export const Delete: Story = {
  args: {
    backgroundColor: COLORS.purple300,
    label: <DeleteIcon width={13} height={14} />,
  },
};

export const Cancel: Story = {
  args: {
    color: COLORS.gray900,
    backgroundColor: COLORS.gray400,
    label: "취소",
  },
};
