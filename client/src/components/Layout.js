import React from "react";
import Footer from "./Footer";
import Navigation from "./Navigation";

import "./Layout.scss";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navigation />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
}
