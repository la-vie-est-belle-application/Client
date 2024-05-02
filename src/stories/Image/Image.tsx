import chart from "/assets/chart.svg";
import chat from "/assets/chat.svg";
import clipboard from "/assets/clipboard.svg";
import glass from "/assets/glass.svg";
import hand from "/assets/hand.svg";
import main from "/assets/main.svg";
import megaphone from "/assets/megaphone.svg";
import scheduleBlue from "/assets/schedule-blue.svg";
import scheduleRed from "/assets/schedule-red.svg";
import profile from "/assets/profile.svg";
import setting from "/assets/setting.svg";
import signOut from "/assets/sign-out.svg";
import tiger from "/assets/tiger.svg";

const Image = () => {
  const imageArr = [
    main,
    chat,
    setting,
    signOut,
    chart,
    clipboard,
    glass,
    hand,
    megaphone,
    profile,
    scheduleBlue,
    scheduleRed,
    tiger,
  ];
  return (
    <>
      {imageArr.map((image, index) => {
        return (
          <div style={{ marginBottom: "15px" }}>
            <img key={index} src={image} alt="" />
          </div>
        );
      })}
    </>
  );
};

export default Image;
