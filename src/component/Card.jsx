import React from "react";
import RenderAvartar from "./RenderAvartar";
const Card = ({ item }) => {
  return (
    <div className="col-span-4 max-[800px]:col-span-6 max-[600px]:col-span-12 p-2 bg-slate-800 rounded-lg pb-8">
      <div className="image relative">
        <img
          src={item.image}
          className="h-[150px] object-cover w-full rounded-lg"
          alt=""
        />
        <div className="absolute top-[4px] rounded-lg p-1 hover:bg-[rgba(0,0,0,0.7)] transition-all bg-[rgba(0,0,0,0.5)] font-semibold cursor-pointer text-slate-50 left-[8px]">
          Review
        </div>
        <div className="absolute top-[4px] rounded-lg p-1 hover:bg-[rgba(0,0,0,0.7)] transition-all bg-[rgba(0,0,0,0.5)] font-semibold cursor-pointer text-slate-50 right-[8px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </div>
        <div className="absolute bottom-0  rounded-lg p-1 hover:bg-[rgba(0,0,0,0.5)] transition-all bg-[rgba(0,0,0,0.7)] font-semibold cursor-pointer text-slate-50 right-0 left-0 text-center">
          hello
        </div>
      </div>
      <div className="content text-slate-50 py-3 pb-5 border-b border-gray-500">
        <div className="flex justify-between">
          <span>{item.name}</span>
          <span className="font-semibold text-orange-500">
            {item.totalView}
          </span>
        </div>
        <div className="text-xl flex  gap-1 font-semibold my-3 ">
          <span>{item.sale} Sales</span>
          {item.sale > 0 && (
            <span className="flex gap-2 items-center">
              <span> (1 hours) </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-red-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          )}
        </div>
      </div>
      <RenderAvartar size={4}></RenderAvartar>
    </div>
  );
};

export default Card;
