import ProfileCard from "./ProfileCard";
import DashboardNav from "./DashboardNav";

function Dashboard() {
  return (
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 z-40 w-80 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
      aria-label="Sidebar"
    >
      {/* Profile Card */}
      <ProfileCard />

      {/* Dashboard Nav */}
      <DashboardNav />
    </aside>
  );
}

export default Dashboard;
