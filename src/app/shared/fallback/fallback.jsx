import { InfinityLoadingCircular } from "app/shared/loading";

const Fallback = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <InfinityLoadingCircular />
    </div>
  );
};
export default Fallback;
