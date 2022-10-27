import React from "react";
import { data } from "../../data";
import Card from "../component/Card";
import Content from "../component/layout/Content";
import Layout from "../component/layout/Layout";
import SidebarLeft from "../component/layout/SidebarLeft";

const Dashboard = () => {
  return (
    <Layout>
      <div className="flex items-center justify-center">
        <div className="bg-gradian lg:h-[300px] h-[150px] lg:w-full w-[200px]  rounded-2xl relative p-5">
          <span className="text-xl font-bold text-slate-50  block absolute ">
            Welcome to SoLBuzz
          </span>
        </div>
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
