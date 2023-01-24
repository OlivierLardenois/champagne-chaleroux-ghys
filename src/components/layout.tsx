import * as React from "react";
import Footer from "./footer";
import Header from "./header";

type LayoutProps = {
  children?: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div
      className={`flex flex-col min-h-screen ${
        isMenuOpen ? "h-screen overflow-hidden" : ""
      }`}
    >
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main className="grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
