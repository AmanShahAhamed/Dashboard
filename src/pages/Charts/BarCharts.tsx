import AdminSidebar from "../../components/AdminSidebar";
import Chart from "../../components/Chart";

const months: string[] = [
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

function BarCharts() {
  return (
    <div className="admin-container">
      <AdminSidebar />
      <main className="chart-container">
        <h1>Bar Charts</h1>
        <section>
          <Chart
            data_1={[240, 114, 278, 876, 89, 345, 654]}
            data_2={[67, 78, 897, 536, 78, 876, 89]}
            title1="Products"
            title2="User"
            bgColor1="hsl(260,50%,30%)"
            bgColor2="hsl(360,90%,90%)"
          />
          <h2>Top Selling Product & Top Customer</h2>
        </section>
        <section>
          <Chart
            horizontal={true}
            data_1={[240, 114, 278, 876, 89, 345, 654, 119, 467, 765, 876, 256]}
            data_2={[]}
            title1="Products"
            title2=""
            bgColor1="hsl(460,50%,30%)"
            bgColor2=""
            labels={months}
          />
          <h2>Ordered throughout the years</h2>
        </section>
      </main>
    </div>
  );
}

export default BarCharts;
