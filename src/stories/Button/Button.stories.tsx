import type { Meta, StoryObj } from "@storybook/react";
import Button, { Props } from "./Button";
import chat from "@assets/chat.svg";
import setting from "@assets/setting.svg";
import signOut from "@assets/sign-out.svg";
import Typography from "@components/Typography/Typography";
import {
  AddIcon,
  BellIcon,
  DeleteIcon,
  EditIcon,
  HamburgerIcon,
  PhoneIcon,
} from "@chakra-ui/icons";
import { COLORS } from "@constants/color";

const meta = {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AllButton: StoryObj<Props> = {
  render: (): JSX.Element => (
    <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
      {buttonArr.map((button: Props, index) => {
        return <Button key={index} {...button} />;
      })}
    </div>
  ),
};

export const SignIn: Story = {
  args: {
    label: <Typography type="subtitle6">카카오 로그인</Typography>,
    type: "signIn",
  },
};

export const Alarm: Story = {
  args: {
    label: <BellIcon width={16} height={19.5} color={COLORS.white} />,
    type: "headerIcon",
  },
};

export const Menu: Story = {
  args: {
    label: <HamburgerIcon width={20.3} height={14} color={COLORS.white} />,
    type: "headerIcon",
  },
};

export const Call: Story = {
  args: {
    label: [
      <PhoneIcon
        width={14}
        height={14}
        color={COLORS.purple600}
        marginRight={7}
      />,
      <Typography type="body3">전화걸기</Typography>,
    ],
    type: "large",
  },
};

export const Chat: Story = {
  args: {
    label: [
      <img
        style={{ marginRight: "0.438rem" }}
        src={chat}
        width={20}
        height={20}
        color={COLORS.purple600}
      />,
      <Typography type="body3">대화하기</Typography>,
    ],
    type: "large",
  },
};

export const Toggle: Story = {
  args: {
    label: <AddIcon width={14} height={14} color={COLORS.white} />,
    type: "toggle",
  },
};

export const ScheduleRegister: Story = {
  args: {
    label: <EditIcon width={20} height={20} color={COLORS.white} />,
    type: "toggle",
  },
};

export const ScheduleCancle: Story = {
  args: {
    label: <DeleteIcon width={20} height={20} color={COLORS.gray700} />,
    type: "scheduleCancle",
  },
};

export const SignOut: Story = {
  args: {
    label: [
      <img
        style={{ marginRight: "0.438rem" }}
        src={signOut}
        width={18}
        height={18}
      />,
      <Typography type="caption1">로그아웃</Typography>,
    ],
    type: "signOut",
  },
};

export const Setting: Story = {
  args: {
    label: <img src={setting} width={18} height={18} />,
    type: "icon",
  },
};

const buttonArr: Props[] = [
  SignIn.args,
  Alarm.args,
  Menu.args,
  Call.args,
  Chat.args,
  Toggle.args,
  ScheduleRegister.args,
  ScheduleCancle.args,
  SignOut.args,
  Setting.args,
];
