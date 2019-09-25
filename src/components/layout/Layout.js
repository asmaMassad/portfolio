import React from "react";
import Header from "./Header";

const Layout = ({ className, children }) => {
  const divStyle = {
    marginTop: "100px"
  };
  return (
    <div className="container ">
      <Header />

      <div className={className} style={divStyle}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
