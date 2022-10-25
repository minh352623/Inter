import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Content from "./component/layout/Content";
import SidebarLeft from "./component/layout/SidebarLeft";
import Dashboard from "./pages/Dashboard";
import TrendChartPage from "./pages/TrendChartPage";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/" element={<Dashboard></Dashboard>}></Route>
        <Route
          path="/chart"
          element={<TrendChartPage></TrendChartPage>}
        ></Route>
      </Routes>
    </Fragment>
  );
}

export default App;
