import { useEffect, useState } from "react";

function DashBoard() {
  const [isLoading, setLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState({
    posts: "null",
    likes: "null",
    followers: "null",
    following: "null",
  });

  useEffect(() => {
    async function fetchDashboardData() {
      const response = await fetch(`http://localhost:4000/dashboard`);
      const data = await response.json();
      setDashboardData(data);
      setLoading(false);
    }

    fetchDashboardData();
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h2>Dashboard</h2>
      <h2>Posts - {dashboardData.posts}</h2>
      <h2>Likes - {dashboardData.likes}</h2>
      <h2>Followers - {dashboardData.followers}</h2>
      <h2>Following - {dashboardData.following}</h2>
    </div>
  );
}

export default DashBoard;
