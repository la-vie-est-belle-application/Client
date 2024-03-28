import ScheduleDetailLink from "@components/ScheduleDetailLink/ScheduleDetailLink";

const Home = () => {
  return (
    <div>
      <ScheduleDetailLink
        scheduleDate="20203"
        $isScheduleStatus={false}
        $isDone={false}
      ></ScheduleDetailLink>
    </div>
  );
};

export default Home;
