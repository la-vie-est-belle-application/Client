import AvatarComponent, { AvatarProps } from "./Avatar";
import type { Meta, StoryObj } from "@storybook/react";
import { Title, Subtitle, Stories } from "@storybook/blocks";
import { AvatarBadge } from "@chakra-ui/react";

const meta = {
  title: "Chakra/Avatar",
  component: AvatarComponent,
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
          <Subtitle children={"아바타 컴포넌트에 대한 문서 페이지 입니다."} />
          <Stories />
        </div>
      ),
      toc: true,
    },
  },
} satisfies Meta<typeof AvatarComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    badge: null,
  },
};

export const Badge: StoryObj<AvatarProps> = {
  args: {
    badge: <AvatarBadge boxSize="1.25em" bg="green.500" />,
  },
};
