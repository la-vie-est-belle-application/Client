import { COLORS, Colors } from "@constants/color";
import { FONT_DESIGN_SYSTEM, FontDesignSystem } from "@constants/typography";
import styled, { CSSProperties } from "styled-components";

interface TypographyProps {
  fontType?: FontDesignSystem;
  color?: Colors;
  textAlign?: CSSProperties["textAlign"];
  bold?: boolean;
  cursor?: CSSProperties["cursor"];
}

const Typography = styled.span<TypographyProps>(
  ({ color = COLORS.black900, textAlign = "center", bold, cursor }) => ({
    color: COLORS[color as keyof typeof COLORS],
    textAlign,
    fontWeight: bold ? 700 : 400,
    cursor,
  }),
  ({ fontType = "body4" }) => FONT_DESIGN_SYSTEM[fontType],
);

export default Typography;
