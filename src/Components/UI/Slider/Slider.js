import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import classes from "./Slider.module.css";
import "react-awesome-slider/dist/custom-animations/fold-out-animation.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import image from "../../../Assets/cooler.png";
import image2 from "../../../Assets/iphone14pro.jpg";
import image3 from "../../../Assets/macBookPro.jpg";

const Slider = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  const slider = (
    <AutoplaySlider
      bullets={false} // alsó kis körök elrejtése
      play={true}
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={5000}
      animation="foldOutAnimation"
      className={classes.awsBtn}
    >
      <div data-src={image} />
      <div data-src={image2} />
      <div data-src={image3} />
    </AutoplaySlider>
  );

  const mobileSlider = (
    <AutoplaySlider
      bullets={false} // alsó kis körök elrejtése
      play={true}
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={5000}
      animation="foldOutAnimation"
      className={classes.awsBtn}
    >
      <div data-src={image} />
      <div data-src={image2} />
      <div data-src={image3} />
    </AutoplaySlider>
  );

  return (
    <>
      <div className={classes.desktop}>{slider}</div>
      <div className={classes.mobile}>{mobileSlider}</div>
    </>
  );
};

export default Slider;
