import { COLORS, Colors } from "@constants/color";
import styled, { CSSProperties, css } from "styled-components";

const fontDesignSystem = {
  subtitle1: css`
    font-size: 4rem;
    line-height: 1.5;
    font-weight: 700;
  `,
  subtitle2: css`
    font-size: 3.2rem;
    line-height: 1.5;
    font-weight: 700;
  `,
  subtitle3: css`
    font-size: 2.8rem;
    line-height: 1.5;
    font-weight: 700;
  `,
  subtitle4: css`
    font-size: 2.4rem;
    line-height: 1.5;
    font-weight: 700;
  `,
  subtitle5: css`
    font-size: 2rem;
    line-height: 1.5;
    font-weight: 700;
  `,
  subtitle6: css`
    font-size: 1.6rem;
    line-height: 1.5;
    font-weight: 700;
  `,
  body1: css`
    font-size: 1.8rem;
    line-height: 1.5;
  `,
  body2: css`
    font-size: 1.6rem;
    line-height: 1.5;
  `,
  body3: css`
    font-size: 1.4rem;
    line-height: 1.5;
  `,
  body4: css`
    font-size: 1.2rem;
    line-height: 1.5;
    font-weight: 700;
  `,
  caption1: css`
    font-size: 1.2rem;
    line-height: 1.5;
  `,
  caption2: css`
    font-size: 1rem;
    line-height: 1.5;
  `,
};
type FontDesignSystem = keyof typeof fontDesignSystem;

interface TypographyProps {
  fontType?: FontDesignSystem;
  color?: Colors;
  textAlign?: CSSProperties["textAlign"];
  fontWeight?: CSSProperties["fontWeight"];
  cursor?: CSSProperties["cursor"];
}

const Typography = styled.span<TypographyProps>(
  ({ color = COLORS.black900, textAlign = "center", fontWeight, cursor }) => ({
    color: COLORS[color as keyof typeof COLORS],
    textAlign,
    fontWeight: fontWeight && fontWeight,
    cursor,
  }),
  ({ fontType = "body3" }) => fontDesignSystem[fontType],
);

export default Typography;
