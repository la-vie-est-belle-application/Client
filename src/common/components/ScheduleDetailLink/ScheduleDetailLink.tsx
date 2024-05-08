import Typography from "@components/Typography/Typography";
import { COLORS } from "@constants/color";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface ScheduleDetailLinkProps {
  scheduleDate: string;
  $isCanceled: boolean;
  $isFixed: boolean;
  to?: string;
}

interface ScheduleStatusProps {
  $isFixed: boolean;
}

const ScheduleDetailLink = ({
  scheduleDate,
  $isCanceled,
  $isFixed,
  to,
}: ScheduleDetailLinkProps) => {
  return (
    <ScheduleDetailLinkWrap $isCanceled={$isCanceled}>
      <ScheduleLink to={to || "/"}>
        <Typography type="subtitle6" color={"white"}>
          {scheduleDate}
        </Typography>
        <ScheduleStatus $isFixed={$isFixed} />
      </ScheduleLink>
    </ScheduleDetailLinkWrap>
  );
};

export default ScheduleDetailLink;

const ScheduleDetailLinkWrap = styled.div<
  Pick<ScheduleDetailLinkProps, "$isCanceled">
>`
  position: relative;
  width: 100%;
  border-radius: 0.8rem;
  background-color: ${COLORS.purple300};
  ${(props) =>
    props.$isCanceled &&
    `
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: ${COLORS.gray900};
      opacity: 0.4;
      border-radius: 0.8rem;
    }
  `}
`;

const ScheduleStatus = styled.div<ScheduleStatusProps>`
  position: absolute;
  top: 50%;
  right: 1.2rem;
  transform: translateY(-50%);
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: ${(props) =>
    props.$isFixed ? COLORS.success : COLORS.gray100};
`;

const ScheduleLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.8rem 1.2rem;
  width: 100%;
  height: 100%;
`;
