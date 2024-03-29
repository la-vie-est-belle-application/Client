import Typography from "@components/Typography/Typography";
import { COLORS } from "@constants/color";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface ScheduleDetailLinkProps {
  scheduleDate: string;
  $isScheduleStatus: boolean;
  $isDone: boolean;
  to?: string;
}

interface ScheduleStatusProps {
  $isScheduleStatus: boolean;
}

const ScheduleDetailLink = ({ ...props }: ScheduleDetailLinkProps) => {
  const { scheduleDate, $isScheduleStatus, to } = props;

  return (
    <ScheduleDetailLinkWrap>
      <Link to={to || "/"}>
        <Typography type="subtitle6" color={"white"}>
          {scheduleDate}
        </Typography>
        <ScheduleStatus $isScheduleStatus={$isScheduleStatus} />
      </Link>
    </ScheduleDetailLinkWrap>
  );
};

export default ScheduleDetailLink;

const ScheduleDetailLinkWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.8rem 1.2rem;
  border-radius: 0.8rem;
  background-color: ${COLORS.purple300};
  width: 100%;
`;

const ScheduleStatus = styled.div<ScheduleStatusProps>`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: ${(props) =>
    props.$isScheduleStatus ? COLORS.success : COLORS.gray100};
  margin-left: auto;
`;
