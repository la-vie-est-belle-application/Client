import type { Meta, StoryObj } from "@storybook/react";
import Image from "./Image";
import { Title, Subtitle, Stories } from "@storybook/blocks";

const meta = {
  title: "Components/Image",
  component: Image,
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
          <Subtitle children={"이미지 컴포넌트에 대한 문서 페이지 입니다."} />
          <Stories />
        </div>
      ),
      toc: true,
    },
  },
} satisfies Meta<typeof Image>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
- 프로젝트에서 사용되는 모든 이미지 컴포넌트들을 모아 놓았습니다.
**/

export const Images: Story = {};
