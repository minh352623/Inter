import React from "react";
import { data } from "../../data";
import Card from "../component/Card";
import Content from "../component/layout/Content";
import Layout from "../component/layout/Layout";
import SidebarLeft from "../component/layout/SidebarLeft";

const Dashboard = () => {
  return (
    <Layout>
      <div className="bg-gradian h-[300px] rounded-lg relative">
        <span className="text-xl font-bold text-slate-50  block absolute top-[30px] left-[20px]">
          Welcome to SoLBuzz
        </span>
      </div>
      <div className="explore my-5">
        <p className="text-xl text-slate-50 font-semibold">Explore</p>
        <div className="grid grid-cols-12 gap-y-10 gap-x-3 my-2">
          {data &&
            data.map((item) => <Card key={item.name} item={item}></Card>)}
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
