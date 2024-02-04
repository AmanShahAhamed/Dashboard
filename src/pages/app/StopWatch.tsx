import { useEffect, useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";

const formatTime = (sec: number): string => {
  const hours = Math.floor(sec / 3600);
  const min = Math.floor((sec % 3600) / 60);
  const second = sec % 60;
  return `${String(hours).padStart(2, "0")}:${String(min).padStart(
    2,
    "0"
  )}:${String(second).padStart(2, "0")}`;
};

function StopWatch() {
  const [time, setTime] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(false);
  useEffect(() => {
    if (isActive) {
      const interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [isActive]);
  return (
    <div className="admin-container">
      <AdminSidebar />
      <main className="dashboard-app-container">
        <h1>Stopwatch</h1>
        <section>
          <div className="stop-watch">
            <h2>{formatTime(time)}</h2>
            <button onClick={() => setIsActive((prev) => !prev)}>
              {isActive ? "Stop" : "Start"}
            </button>
            <button
              onClick={() => {
                setTime(0);
                setIsActive(false);
              }}
            >
              Reset
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default StopWatch;
