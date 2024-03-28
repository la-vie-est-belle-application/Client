import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { COLORS } from "@constants/color";
import {
  AddIcon,
  HamburgerIcon,
  BellIcon,
  EditIcon,
  DeleteIcon,
  PhoneIcon,
} from "@chakra-ui/icons";
import Typography from "@components/Typography/Typography";
import ButtonStyles from "@components/Button/buttonStyle";
import chat from "@assets/chat.svg";
import signOut from "@assets/sign-out.svg";
import setting from "@assets/setting.svg";

const meta = {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SignIn: Story = {
  args: {
    label: <Typography type="subtitle6">카카오 로그인</Typography>,
    ...ButtonStyles.signIn,
  },
};

export const Alarm: Story = {
  args: {
    label: <BellIcon width={16} height={19.5} color={COLORS.white} />,
    ...ButtonStyles.icon,
  },
};

export const Menu: Story = {
  args: {
    label: <HamburgerIcon width={20.3} height={14} color={COLORS.white} />,
    ...ButtonStyles.icon,
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
    ...ButtonStyles.large,
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
    ...ButtonStyles.large,
  },
};

export const Toggle: Story = {
  args: {
    label: <AddIcon width={14} height={14} color={COLORS.white} />,
    ...ButtonStyles.toggle,
  },
};

export const ScheduleRegister: Story = {
  args: {
    label: <EditIcon width={20} height={20} color={COLORS.white} />,
    ...ButtonStyles.toggle,
  },
};

export const ScheduleCancle: Story = {
  args: {
    label: <DeleteIcon width={20} height={20} color={COLORS.gray700} />,
    ...ButtonStyles.scheduleCancle,
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
    ...ButtonStyles.signOut,
  },
};

export const Setting: Story = {
  args: {
    label: <img src={setting} width={18} height={18} />,
    ...ButtonStyles.icon,
    backgroundColor: "white",
  },
};
