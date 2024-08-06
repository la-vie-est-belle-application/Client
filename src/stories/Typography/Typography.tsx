import { Colors } from "@constants/color";
import styled, { CSSProperties } from "styled-components";
import { Font, THEME_FONT } from "@constants/font";
import "./Typography.css";

interface TypographyProps {
  type?: Font;
  color?: Colors;
  $textAlign?: CSSProperties["textAlign"];
  $bold?: boolean;
  $cursor?: CSSProperties["cursor"];
}

const Typography = styled.span<TypographyProps>(
  ({ color = "gray900", $textAlign = "center", $bold = false, $cursor }) => ({
    color,
    $textAlign,
    fontWeight: $bold ? 700 : 400,
    $cursor,
  }),
  ({ type = "body4" }) => THEME_FONT[type],
);

export default Typography;
