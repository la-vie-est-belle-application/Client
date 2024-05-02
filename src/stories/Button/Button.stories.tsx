import type { Meta, StoryObj } from "@storybook/react";
import Button, { ButtonProps } from "./Button";
import { COLORS } from "@constants/color";
import chat from "/assets/chat.svg";
import signOut from "/assets/sign-out.svg";
import { AddIcon, DeleteIcon, EditIcon, PhoneIcon } from "@chakra-ui/icons";
import { Title, Subtitle, Stories } from "@storybook/blocks";
import { FONT_DESIGN_SYSTEM } from "@constants/typography";

const meta = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    disabled: {
      control: { type: "boolean" },
    },
    size: {
      control: { type: "radio" },
      options: ["small", "midium", "large"],
    },
    fontType: {
      control: { type: "select" },
      options: Object.keys(FONT_DESIGN_SYSTEM),
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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <Title />
          <Subtitle children={"버튼 컴포넌트에 대한 문서 페이지 입니다."} />
          <Stories />
        </div>
      ),
      toc: true,
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
- 프로젝트에서 사용되는 모든 버튼 컴포넌트들을 모아 놓았습니다.
**/

export const AllButton: StoryObj<ButtonProps> = {
  render: (): JSX.Element => (
    <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
      {buttonArr.map((args: ButtonProps, index) => {
        return <Button key={index} {...args} />;
      })}
    </div>
  ),
};

/**
- 로그인 버튼 입니다.
**/

export const SignIn: Story = {
  args: {
    label: "카카오 로그인",
    type: "signIn",
    fontType: "subtitle6",
  },
};

const Call: Story = {
  args: {
    icon: <PhoneIcon key={1} color={COLORS.purple600} marginRight={8} />,
    label: "전화걸기",
    type: "large",
    fontType: "body3",
  },
};

const Chat: Story = {
  args: {
    icon: (
      <img
        key={1}
        style={{
          width: "14px",
          height: "14px",
          marginRight: "8px",
        }}
        src={chat}
        color={COLORS.purple600}
      />
    ),
    label: "대화하기",
    type: "large",
    fontType: "body3",
  },
};

const SignOut: Story = {
  args: {
    icon: <img key={1} style={{ marginRight: "0.5rem" }} src={signOut} />,
    label: "로그아웃",
    type: "signOut",
    fontType: "caption1",
  },
};

export const IconButton: StoryObj<ButtonProps> = {
  render: (): JSX.Element => (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <Button {...Call.args} />
      <Button {...Chat.args} />
      <Button {...SignOut.args} />
    </div>
  ),
};

const Toggle: Story = {
  args: {
    icon: <AddIcon width={14} height={14} color={COLORS.white} />,
    type: "toggle",
  },
};

const ScheduleRegister: Story = {
  args: {
    icon: <EditIcon width={20} height={20} color={COLORS.white} />,
    type: "toggle",
  },
};

const ScheduleCancle: Story = {
  args: {
    icon: <DeleteIcon width={20} height={20} color={COLORS.gray700} />,
    type: "scheduleCancle",
  },
};

export const ToggleButton: StoryObj<ButtonProps> = {
  render: (): JSX.Element => (
    <div style={{ display: "flex", gap: "10px" }}>
      <Button {...Toggle.args} />
      <Button {...ScheduleRegister.args} />
      <Button {...ScheduleCancle.args} />
    </div>
  ),
  argTypes: {
    size: {
      control: { type: "radio" },
      options: ["toggleSmall", "toggleMidium", "toggleLarge"],
    },
  },
};

const buttonArr: ButtonProps[] = [
  SignIn.args,
  Call.args,
  Chat.args,
  Toggle.args,
  ScheduleRegister.args,
  ScheduleCancle.args,
  SignOut.args,
];
