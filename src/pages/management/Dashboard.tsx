import AdminSidebar from "../../components/AdminSidebar";
import { BsSearch } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";
import userImage from "../../assets/images/user.png";
import data from "../../assets/data.json";
import Chart, { DoughnutChart } from "../../components/Chart";
import { BiMaleFemale } from "react-icons/bi";

import DashboardTable from "../../components/DashboardTable";

function Dashboard() {
  return (
    <div className="admin-container">
      <AdminSidebar />
      <main className="dashboard">
        <div className="bar">
          <BsSearch />
          <input type="text" placeholder="Search for data, users, docs" />
          <FaRegBell />
          <img src={userImage} alt="user image" />
        </div>
        <section className="widget-container">
          <WidgetItem
            percent={40}
            amount={true}
            value={340000}
            heading="Revenue"
            color="rgb(0,115,255)"
          />
          <WidgetItem
            percent={-14}
            amount={false}
            value={400}
            heading="Users"
            color="rgb(0,198,202)"
          />
          <WidgetItem
            percent={80}
            amount={false}
            value={23000}
            heading="Transaction"
            color="rgb(225,196,0)"
          />
          <WidgetItem
            percent={30}
            amount={false}
            value={1000}
            heading="Products"
            color="rgb(76,0,255)"
          />
        </section>

        <section className="graph-container">
          <div className="revenue-chart">
            <h2>Revenue & Transaction</h2>
            <Chart
              data_1={[300, 144, 433, 655, 237, 755, 190]}
              data_2={[200, 444, 343, 556, 778, 455, 990]}
              title1="Revenue"
              title2="Transaction"
              bgColor1="rgb(0,115,255)"
              bgColor2="rgb(53,162,235,0.8)"
            />
          </div>
          <div className="dashboard-categories">
            <h2>Inventory</h2>
            <div>
              {data.categories.map(
                (cat: { heading: string; value: number }) => (
                  <Category
                    key={cat.heading}
                    heading={cat.heading}
                    value={cat.value}
                    color={`hsl(${cat.value * 4},${cat.value}%, 50%)`}
                  />
                )
              )}
            </div>
          </div>
        </section>

        <section className="transaction-container">
          <div className="gender-chart">
            <h2>Gender Ratio</h2>
            {/* Chart */}
            <DoughnutChart
              labels={["Female", "Male"]}
              data={[12, 19]}
              bgColor={["hsl(340,82%,56%)", "rgba(53,162,235,0.8)"]}
              cutout={90}
            />
            <p>
              <BiMaleFemale />
            </p>
          </div>
          {/* table */}
          <DashboardTable data={data.transaction} />
        </section>
      </main>
    </div>
  );
}

interface IWidgetProps {
  heading: string;
  value: number;
  percent: number;
  color: string;
  amount?: boolean;
}

const WidgetItem = ({
  heading,
  value,
  percent,
  color,
  amount,
}: IWidgetProps) => (
  <article className="widget">
    <div className="widget-info">
      <p>{heading}</p>
      <h4>{amount ? `$${value}` : value}</h4>
      {percent > 0 ? (
        <span className="green">
          <HiTrendingUp /> +{percent} %
        </span>
      ) : (
        <span className="red">
          <HiTrendingDown />
          {percent} %
        </span>
      )}
    </div>
    <div
      className="widget-circle"
      style={{
        background: `conic-gradient(
         ${color} ${(Math.abs(percent) / 100) * 360}deg,
         rgb(255,255,255)
        )`,
      }}
    >
      <span style={{ color: "white" }}>{percent}%</span>
    </div>
  </article>
);

interface ICategoryProps {
  color: string;
  value: number;
  heading: string;
}

const Category = ({ color, value, heading }: ICategoryProps) => (
  <div className="category-item">
    <h5>{heading}</h5>
    <div>
      <div
        style={{
          backgroundColor: color,
          width: `${value}%`,
        }}
      ></div>
    </div>

    <span>{value}%</span>
  </div>
);

export default Dashboard;
