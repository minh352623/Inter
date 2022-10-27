import React, { useEffect } from "react";

const HeaderSearch = ({ fn, fixed }) => {
  return (
    <div
      className={`flex items-center z-[10] ${
        fixed
          ? "max-[800px]:fixed max-[800px]:top-0 max-[800px]:left-0 max-[800px]:right-0 max-[800px]:py-2 max-[800px]:bg-slate-900"
          : "max-[800px]:static"
      } `}
    >
      <div className="flex xl:flex-none flex-1 w-[75%] items-center  gap-3">
        <div className="xl:hidden text-slate-50 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8"
            onClick={fn}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </div>
        <div className="relative flex-1">
          <span className="absolute top-1/2 -translate-y-1/2 left-[4px] text-slate-50 font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-6 font-bold"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </span>
          <input
            type="text"
            className="pr-4 w-full pl-[40px] outline-0 text-slate-50 py-3 rounded-lg bg-slate-500"
            placeholder="Search"
          />
        </div>
        <div className="xl:flex hidden p-3   min-w-[200px]  text-gray-300 gap-2 bg-slate-500 rounded-lg">
          <img
            src="logo-chu-S-s-1.jpg"
            className="w-[30px] h-[25px] rounded-full"
            alt=""
          />
          <span>38.5k</span>
        </div>
      </div>

      <div className="flex pl-3 gap-3">
        <span className="bg-slate-500 p-1 rounded-full text-gray-300">
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
              d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
            />
          </svg>
        </span>
        <span className="bg-slate-500 p-1 rounded-full text-gray-300">
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
              d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
            />
          </svg>
        </span>
        <span className="flex items-center gap-2 text-slate-50 font-semibold">
          <img src="./avatar.jpg" className="w-[32px] h-[32px]" alt="" />
          <span className="xl:block hidden"> Hi! Admin</span>
        </span>
      </div>
    </div>
  );
};

export default HeaderSearch;
