import { COLORS } from "@constants/color";
import { FONT_DESIGN_SYSTEM, FontDesignSystem } from "@constants/typography";
import styled, { CSSProperties } from "styled-components";

interface TypographyProps {
  type?: FontDesignSystem;
  color?: string;
  $textAlign?: CSSProperties["textAlign"];
  $bold?: boolean;
  $cursor?: CSSProperties["cursor"];
}

const Typography = styled.span<TypographyProps>(
  ({
    color = COLORS.gray900,
    $textAlign = "center",
    $bold = false,
    $cursor,
  }) => ({
    color,
    $textAlign,
    fontWeight: $bold ? 700 : 400,
    $cursor,
  }),
  ({ type = "body4" }) => FONT_DESIGN_SYSTEM[type],
);

export default Typography;
