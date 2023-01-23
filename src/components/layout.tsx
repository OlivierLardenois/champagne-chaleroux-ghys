import * as React from "react";
import Footer from "./footer";
import Header from "./header";

type LayoutProps = {
  children?: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
