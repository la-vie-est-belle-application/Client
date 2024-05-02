import type { Meta, StoryObj } from "@storybook/react";
import Typography from "./Typography";
import { FONT_DESIGN_SYSTEM } from "@constants/typography";
import { COLORS } from "@constants/color";

const meta = {
  title: "Components/Typography",
  component: Typography,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    type: {
      control: {
        type: "select",
      },
      options: Object.keys(FONT_DESIGN_SYSTEM),
      defaultValue: "body4",
      description: "폰트 디자인 시스템",
      table: {
        type: {
          summary: "string",
          defaultValue: { summary: "body4" },
        },
      },
    },
    color: {
      control: {
        type: "select",
      },
      options: COLORS,
      defaultValue: COLORS.gray900,
    },
    $bold: {
      control: {
        type: "boolean",
      },
      options: [true, false],
      defaultValue: false,
    },
  },
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    children: "Hello World!",
  },
  render() {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        {Object.keys(FONT_DESIGN_SYSTEM).map((type, index) => (
          <Typography
            key={index}
            type={type as keyof typeof FONT_DESIGN_SYSTEM}
          >
            Hello World! {type}
          </Typography>
        ))}
      </div>
    );
  },
};
