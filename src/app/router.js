import { lazy, Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Fallback } from "app/shared/fallback";

const Router = () => {
  const ComingSoon = lazy(() =>
    import("app/pages/coming-soon").then(({ ComingSoon }) => ({
      default: ComingSoon,
    }))
  );

  return (
    <BrowserRouter>
      <Switch>
        <Suspense fallback={<Fallback />}>
          <Route exact path="/" render={() => <ComingSoon />} />
          <Route path="*" render={() => <Redirect to="/" />} />
        </Suspense>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
