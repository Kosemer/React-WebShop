import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import teszt from "../../../Assets/ram.png";

import {
  Provider,
  Link,
  withNavigationContext,
  withNavigationHandlers,
} from "react-awesome-slider/dist/navigation";

// Wrapp the AwesomeSlider component with the navigationHandlers
const NavigationSlider = withNavigationHandlers(AwesomeSlider);

function Slider() {
  return (
    <NavigationSlider
      className="awesome-slider"
      media={[
        {
          slug: "page-one",
          className: "page-one",
          children: () => (
            <div>
              <p>Page One</p>
              <img src={teszt} alt="video card" />
            </div>
          ),
        },
        {
          slug: "page-two",
          className: "page-two",
          children: () => (
            <div>
              <p>Page One</p>
              <img src={teszt} alt="video card" />
            </div>
          ),
        },
      ]}
    />
  );
}

// Page header navigation
const Header = () => {
  return (
    <Header>
      <nav>
        <Link href="page-one">Page One</Link>
        <Link href="page-two">Page Two</Link>
      </nav>
    </Header>
  );
};

// Wrapp the aplication with the navigation Provider passing down the current page slug.
const App = () => {
  const slug = "[THE INITIAL RENDERED SLUG]";

  return (
    <Provider slug={slug}>
      <Header />
      <NavigationSlider />
    </Provider>
  );
};

export default Slider;
