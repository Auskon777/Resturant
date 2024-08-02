import React from "react";
import Header from "./header";
import Footer from "./Footer";

export default function Layout({children}) {
  return (
    <div style={{background: "#f1f1f2"}}>
      <Header />
      <div style={{marginTop: "100px"}}>{children}</div>
      <Footer />
    </div>
  );
}
