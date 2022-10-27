import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { data } from "../../../data";
import Card from "../Card";
import TopCate from "../cate/TopCate";
import HeaderSearch from "../HeaderSearch";
import Recent from "../Recent";
import { NavLink } from "react-router-dom";
import TrendChart from "../TrendChart";

const Content = ({ children }) => {
  const containerMenu = useRef();
  const contentMenu = useRef();
  const content = useRef();
  const [show, setShow] = useState(false);
  const [fixed, setFixed] = useState(false);
  const hadnleShowMenu = () => {
    setShow(true);
  };
  useEffect(() => {
    const fixedHeader = () => {
      if (content.current.scrollTop > 60) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    };
    content.current.addEventListener("scroll", fixedHeader);

    return () => {
      // window.removeEventListener("scroll", fixedHeader);
    };
  }, []);

  useEffect(() => {
    const handleHiddenMenu = (e) => {
      if (!contentMenu.current.contains(e.target)) {
        setShow(false);
      }
    };
    containerMenu.current.addEventListener("click", handleHiddenMenu);
  }, []);
  return (
    <>
      <div
        ref={content}
        className="p-3 bg-slate-700  w-full xl:w-[94%] h-screen overflow-y-auto"
      >
        <HeaderSearch fixed={fixed} fn={hadnleShowMenu}></HeaderSearch>
        <div className="grid grid-cols-12 mt-3">
          <div className="xl:col-span-9 lg:col-span-8  col-span-12">
            {children}
          </div>
          <div className="xl:col-span-3 lg:col-span-4 xl:pl-3 lg:pl-3 col-span-12">
            <TopCate></TopCate>
            <Recent></Recent>
          </div>
        </div>
      </div>
      <div
        ref={containerMenu}
        className={`${
          show ? "visibble" : "invisible"
        } transition-all fixed z-20 cursor-pointer top-0 bottom-0 right-0 left-0 bg-[rgba(0,0,0,0.5)]`}
      >
        <div
          ref={contentMenu}
          className={`${
            show ? "translate-x-0" : "-translate-x-full"
          } fixed  transition-all top-0 bottom-0 sm:w-1/3 max-[640px]:w-3/5 w-3/5 max-[400px]:w-4/5 bg-slate-800`}
        >
          <p className="py-3 px-2 border-b border-gray-500 text-slate-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8 cursor-pointer"
              onClick={() => setShow(false)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </p>
          <p className="px-2 my-3">
            <input
              type="text"
              className="outline-none text-slate-50 bg-slate-500 w-full rounded-lg px-4 py-2"
              placeholder="Search..."
            />
          </p>

          <nav>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? " p-3 flex items-center gap-5 pl-6 bg-slate-400"
                  : " p-3 flex items-center gap-5 pl-6"
              }
              to="/dashboard"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#737909"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8 text-slate-50"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5"
                />
              </svg>
              <span className="text-slate-50 font-semibold">Dashboard</span>
            </NavLink>{" "}
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? " p-3 flex items-center gap-5 pl-6 bg-slate-400"
                  : " p-3 flex items-center gap-5 pl-6"
              }
              to="/chart"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8 text-slate-50"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
                />
              </svg>
              <span className="text-slate-50 font-semibold">
                Trending Chart
              </span>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? " p-3 flex items-center gap-5 pl-6 bg-slate-400"
                  : " p-3 flex items-center gap-5 pl-6"
              }
              to="/c"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8 text-slate-50"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"
                />
              </svg>
              <span className="text-slate-50 font-semibold">Activity</span>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? " p-3 flex items-center gap-5 pl-6 bg-slate-400"
                  : " p-3 flex items-center gap-5 pl-6"
              }
              to="/a"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8 text-slate-50"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46"
                />
              </svg>
              <span className="text-slate-50 font-semibold">Trending</span>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? " p-3 flex items-center gap-5 pl-6 bg-slate-400"
                  : " p-3 flex items-center gap-5 pl-6"
              }
              to="/b"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8 text-slate-50"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="text-slate-50 font-semibold">Setting</span>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? " p-3 flex items-center gap-5 pl-6 bg-slate-400"
                  : " p-3 flex items-center gap-5 pl-6"
              }
              to="/e"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8 text-slate-50"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                />
              </svg>
              <span className="text-slate-50 font-semibold">My profile</span>
            </NavLink>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Content;
