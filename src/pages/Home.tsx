import ButtonItem from "@components/Button/Button";
import ScheduleDetailLink from "@components/ScheduleDetailLink/ScheduleDetailLink";

const Home = () => {
  return (
    <div>
      <ScheduleDetailLink
        scheduleDate="20203"
        $isScheduleStatus={false}
        $isDone={false}
      ></ScheduleDetailLink>
      <ButtonItem type="signIn">asdasdasd</ButtonItem>
    </div>
  );
};

export default Home;
