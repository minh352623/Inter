import React from "react";
import { data } from "../../../data";
import ItemCate from "./ItemCate";

const TopCate = () => {
  return (
    <div className="p-3 bg-slate-800 rounded-lg">
      <p className="text-slate-50 font-semibold">Top Collections</p>
      {data &&
        data.map((item, index) =>
          index <= 3 ? (
            <ItemCate key={item.name} index={index + 1} item={item}></ItemCate>
          ) : (
            ""
          )
        )}
    </div>
  );
};

export default TopCate;
