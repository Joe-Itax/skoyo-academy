import Header from "@/components/header/header";
import { Outlet } from "react-router";

export default function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
