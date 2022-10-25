import React from "react";

const ItemCate = ({ item, index }) => {
  return (
    <div className="p-2 flex items-center justify-between">
      <div className="info flex items-center gap-2 text-slate-50">
        <span>{index}.</span>
        <img
          src={item.image}
          className="w-[25px] rounded-full h-[25px]"
          alt=""
        />
        <p className="flex flex-col">
          <span>{item.name}</span>
          <span className="text-sm text-gray-500 font-semibold">
            {item.auth}
          </span>
        </p>
      </div>
      <div className="py-2 px-4 cursor-pointer hover:bg-purple-700 rounded-lg text-slate-50 bg-purple-500">
        Follow
      </div>
    </div>
  );
};

export default ItemCate;
