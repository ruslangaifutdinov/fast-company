import React from "react";
import Table from "./table";
import Header from "./header";
import Users from "./users";

const Container = () => {
  return (
    <div className="container">
      <Header />
      <Table />
    </div>
  );
};

export default Container;
