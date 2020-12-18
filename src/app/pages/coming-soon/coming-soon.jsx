import { InfinityLoadingBar } from "app/shared/loading";

import { ReactComponent as LogoGreen } from "assets/images/svg/logo-green.svg";

import "./coming-soon.scss";

const ComingSoon = () => {
  return (
    <div className="ComingSoon-container container d-flex flex-column justify-content-center align-items-center">
      <div>
        <LogoGreen className="ComingSoon-image" />
      </div>
      <div className="ComingSoon-description mt-2">Cold Pressed Juice</div>
      <div className="mt-5 ComingSoon-image">
        <InfinityLoadingBar />
      </div>
      <div className="ComingSoon-caption mt-5">
        Something good is coming to you
      </div>
    </div>
  );
};

export default ComingSoon;
