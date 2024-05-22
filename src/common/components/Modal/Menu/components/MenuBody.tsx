import styled from "styled-components";
import Typography from "@components/Typography/Typography.tsx";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { ReactNode } from "react";
import { COLORS } from "@constants/color.ts";

interface MenuBodyViewProps {
  renderLink: () => ReactNode;
}

const MenuBody = () => {
  const linkText = [
    "일정관리",
    "공지사항",
    "급여계산",
    "프로필",
    "출석관리",
    "전체 스케줄 조회",
    "일정등록",
  ];

  const renderLink = () => {
    return linkText.map((text, index) => {
      const additionalStyle =
        text === "일정등록"
          ? { borderTop: "1px solid #D9D9D9", paddingTop: "1.8rem" }
          : {};
      return (
        <MenuLink key={index} style={additionalStyle}>
          <Typography type="caption1">{text}</Typography>
          <ChevronRightIcon fontSize={13} color={COLORS.gray400} />
        </MenuLink>
      );
    });
  };

  const props = {
    renderLink,
  };

  return <MenuBodyView {...props} />;
};

const MenuBodyView = ({ renderLink }: MenuBodyViewProps) => {
  return <LinkContainer>{renderLink()}</LinkContainer>;
};

const LinkContainer = styled.ul`
  flex: 5;
  margin-top: 3.6rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #d9d9d9;
`;
const MenuLink = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem 0 1rem;
  margin-top: 1.8rem;
`;

export default MenuBody;
