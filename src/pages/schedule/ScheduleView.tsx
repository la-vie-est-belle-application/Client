import { Avatar, HStack, Select } from "@chakra-ui/react";
import Container from "@components/Container/Container";
import Typography from "@components/Typography/Typography";
import Header from "@layout/Header";
import { getCurrentDate } from "@utils/getCurrentDate";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface ScheduleViewProps {
  scheduleMonths: string[];
  formattedThisMonth: string;
  navigateToSelectedDate: (selectedDate: string) => void;
}

const ScheduleView = () => {
  const navigate = useNavigate();
  const { thisMonth, currentYear, currentMonth } = getCurrentDate();

  const formattedThisMonth = addDotToThisMonth(thisMonth);
  const scheduleMonths = calculateScheduleMonths();

  function addDotToThisMonth(thisMonth: string): string {
    const year = thisMonth.slice(0, 4);
    const month = thisMonth.slice(4);
    return `${year}.${month}`;
  }

  function calculateScheduleMonths() {
    const startDate = new Date(currentYear, currentMonth - 7);
    const endDate = new Date(currentYear, currentMonth);

    const scheduleMonths: string[] = [];

    const current = new Date(startDate);
    while (current <= endDate) {
      const year = current.getFullYear();
      const month = String(current.getMonth() + 1).padStart(2, "0");
      scheduleMonths.push(`${year}.${month}`);
      current.setMonth(current.getMonth() + 1);
    }

    return scheduleMonths;
  }

  function navigateToSelectedDate(selectedDate: string) {
    const currentUrl = window.location.pathname;
    const pattern = /\/schedule\/view\/.*/;
    const baseUrl = currentUrl.replace(pattern, "/schedule/view/");
    const formattedDate = selectedDate.replace(/\./g, "");
    const newUrl = `${baseUrl}${formattedDate}`;
    navigate(newUrl);
  }

  useEffect(() => {
    // 잘못된 url 접속 방지 및 새로고침시 현재 달 옵션으로 이동
    if (!scheduleMonths.includes(thisMonth)) {
      navigateToSelectedDate(thisMonth);
    }
  }, []);

  const props = {
    scheduleMonths,
    formattedThisMonth,
    navigateToSelectedDate,
  };

  return <ScheduleComponentView {...props} />;
};

const ScheduleComponentView = ({
  scheduleMonths,
  formattedThisMonth,
  navigateToSelectedDate,
}: ScheduleViewProps) => {
  return (
    <>
      <Header title="전체 스케줄 조회" />
      <Container>
        <HStack justifyContent={"space-between"} alignItems={"center"}>
          <Select
            w={"10rem"}
            defaultValue={formattedThisMonth}
            onChange={(e) => {
              navigateToSelectedDate(e.target.value);
            }}
          >
            {scheduleMonths?.map((data, index) => {
              return (
                <option key={index} value={data}>
                  {data}
                </option>
              );
            })}
          </Select>
          <HStack>
            <HStack>
              <Avatar />
              <Avatar />
              <Avatar />
            </HStack>
            <Typography type="caption2" color="gray800">
              태관님 외 5명이 확인했습니다
            </Typography>
          </HStack>
        </HStack>
      </Container>
    </>
  );
};

export default ScheduleView;
