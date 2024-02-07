import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "./components/Loader";
const Dashboard = lazy(() => import("./pages/management/Dashboard"));
const Product = lazy(() => import("./pages/management/Product"));
const Customer = lazy(() => import("./pages/management/Customer"));
const Transaction = lazy(() => import("./pages/management/Transaction"));
const BarCharts = lazy(() => import("./pages/Charts/BarCharts"));
const PieCharts = lazy(() => import("./pages/Charts/PieCharts"));

const StopWatch = lazy(() => import("./pages/app/StopWatch"));
const Chat = lazy(() => import("./pages/app/Chat"));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/product" element={<Product />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/transaction" element={<Transaction />} />
          {/* charts */}
          <Route path="/admin/chart/bar" element={<BarCharts />} />
          <Route path="/admin/chart/pie" element={<PieCharts />} />

          {/* App */}

          <Route path="/app/stopwatch" element={<StopWatch />} />
          <Route path="/app/chat" element={<Chat />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
