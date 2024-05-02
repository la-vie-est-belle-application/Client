import Typography from "@components/Typography/Typography";
import { Colors } from "@constants/color";
import { FontDesignSystem } from "@constants/typography";
import styled from "styled-components";

interface CardProps {
  label: string;
  backgroundColor: Colors;
  boxShadow: string;
  width: number;
  height: number;
  color: string;
  fontType: FontDesignSystem;
}

interface CardStyleProps {
  backgroundColor: Colors;
  boxShadow: string;
  width: number;
  height: number;
  color: string;
}

const Card = ({
  label,
  backgroundColor,
  boxShadow,
  width,
  height,
  color,
  fontType,
}: CardProps) => {
  return (
    <CardItem
      backgroundColor={backgroundColor}
      boxShadow={boxShadow}
      width={width}
      height={height}
      color={color}
    >
      <Typography type={fontType}>{label}</Typography>
    </CardItem>
  );
};

const CardItem = styled.article<CardStyleProps>(
  ({ backgroundColor, boxShadow, width = 105, height, color }) => ({
    backgroundColor,
    boxShadow,
    width,
    height,
    textAlign: "center",
    color,
    borderRadius: "15px",
  }),
);

export default Card;
