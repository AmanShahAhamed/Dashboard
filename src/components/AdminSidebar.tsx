import { Link, Location, useLocation } from "react-router-dom";
import { RiDashboardFill, RiShoppingBag3Fill } from "react-icons/ri";
import { AiFillFileText } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { FaChartBar, FaChartPie, FaStopwatch, FaGamepad } from "react-icons/fa";
import { IconType } from "react-icons";
import Logo from "../assets/images/logo.png";

function AdminSidebar() {
  const location = useLocation();
  return (
    <aside>
      <img src={Logo} alt="Logo." style={{ height: "70px" }} />
      <DashboardItem location={location} />
      <ChartItem location={location} />
      <AppItem location={location} />
    </aside>
  );
}

interface ILiProps {
  url: string;
  name: string;
  Icon: IconType;
  location: Location;
}

const Li = ({ url, name, Icon, location }: ILiProps) => {
  return (
    <li
      style={{
        backgroundColor: location.pathname.includes(url)
          ? "rgba(0,115,255, 0.1)"
          : "white",
      }}
    >
      <Link to={url}>
        <Icon />
        {name}
      </Link>
    </li>
  );
};

const DashboardItem = ({ location }: { location: Location }) => (
  <div>
    <h5>Dashboard</h5>
    <ul>
      <Li
        url="/admin/dashboard"
        name="Dashboard"
        Icon={RiDashboardFill}
        location={location}
      />
      <Li
        url="/admin/product"
        name="Product"
        Icon={RiShoppingBag3Fill}
        location={location}
      />
      <Li
        url="/admin/customer"
        name="Customer"
        Icon={IoIosPeople}
        location={location}
      />
      <Li
        url="/admin/transaction"
        name="Transaction"
        Icon={AiFillFileText}
        location={location}
      />
    </ul>
  </div>
);

const ChartItem = ({ location }: { location: Location }) => (
  <div>
    <h5>Charts</h5>
    <ul>
      <Li
        url="/admin/chart/bar"
        name="Bar"
        Icon={FaChartBar}
        location={location}
      />
      <Li
        url="/admin/chart/pie"
        name="Pie"
        Icon={FaChartPie}
        location={location}
      />
    </ul>
  </div>
);
const AppItem = ({ location }: { location: Location }) => (
  <div>
    <h5>Apps</h5>
    <ul>
      <Li
        url="/app/stopwatch"
        name="Stop Watch"
        Icon={FaStopwatch}
        location={location}
      />
      <Li url="/app/chat" name="Chat" Icon={FaGamepad} location={location} />
    </ul>
  </div>
);

export default AdminSidebar;
