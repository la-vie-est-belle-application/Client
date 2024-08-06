import { Colors, THEME_COLORS } from "@constants/color";
import { Font, THEME_FONT } from "@constants/font";
import styled, { CSSProperties } from "styled-components";

interface TypographyProps {
  type?: Font;
  color?: Colors;
  $textAlign?: CSSProperties["textAlign"];
  $bold?: boolean;
  $cursor?: CSSProperties["cursor"];
}

const Typography = styled.span<TypographyProps>(
  ({ color = "gray900", $textAlign = "center", $bold = false, $cursor }) => ({
    color: THEME_COLORS[color as keyof typeof THEME_COLORS],
    $textAlign,
    fontWeight: $bold ? 700 : 400,
    $cursor,
  }),
  ({ type = "body4" }) => THEME_FONT[type],
);

export default Typography;
