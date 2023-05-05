import { Outlet } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import Header from "./Header";
import Dashboard from "./Dashboard";

function Layout() {
  const user = useUser();

  if (user) {
    return (
      <>
        <Header />
        <Dashboard />
      </>
    );
  } else {
    return (
      <>
        <Header />
        <Outlet />
      </>
    );
  }
}

export default Layout;
