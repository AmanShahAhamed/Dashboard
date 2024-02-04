import AdminSidebar from "../../components/AdminSidebar";
import { PieChart } from "../../components/Chart";
import { categories } from "../../assets/data.json";

function PieCharts() {
  return (
    <div className="admin-container">
      <AdminSidebar />
      <main className="chart-container">
        <h1>Pie Charts</h1>
        <section>
          <div>
            <PieChart
              labels={["Processing", "Shipped", "Delivered"]}
              data={[12, 9, 13]}
              bgColor={[
                "hsl(110,80%,80%)",
                "hsl(110,80%,50%)",
                "hsl(110,40%,80%)",
              ]}
              offset={[0, 0, 50]}
            />
          </div>
          <h2>Order Fulfillment Ratio</h2>
        </section>

        <section>
          <div>
            <PieChart
              labels={categories.map((i) => i.heading)}
              data={categories.map((i) => i.value)}
              bgColor={categories.map(
                (i) => `hsl(${i.value * 4},${i.value}%,50%)`
              )}
              offset={[0, 0, 50]}
            />
          </div>
          <h2>Product Categories Ratio</h2>
        </section>

        <section>
          <div>
            <PieChart
              labels={[
                "Marketing Cost",
                "Discount",
                "Production Cost",
                "Net Margin",
              ]}
              data={[32, 19, 5, 20]}
              bgColor={[
                "hsl(110,80%,40%)",
                "hsl(19,80%,40%)",
                "hsl(69,80%,40%)",
                "hsl(53,162,255)",
              ]}
              offset={[0, 0, 50, 90]}
            />
          </div>
          <h2>Revenue Distribution</h2>
        </section>
      </main>
    </div>
  );
}

export default PieCharts;
