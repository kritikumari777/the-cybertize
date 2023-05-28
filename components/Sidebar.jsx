import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useMemo } from "react";
import logo from "../asserts/logo.svg"
import arrowdown from "../asserts/arrow-down.svg"
import Image from "next/image";

import {
  AnalyticsIcon,
  ArticleIcon,
  DashboardIcon,
  LogoutIcon,
  SetingIcon,
  UsersIcon,
  VideosIcon,
} from "./icons";


const menuItems = [
  // { id: 1, label: "DASHBOARD", icon: DashboardIcon, link: "/" },
  { id: 1, label: "USERS", icon: UsersIcon, link: "/Users" },
  { id: 2, label: "ANALYTICS", icon: AnalyticsIcon, link: "/Analytics" },
  { id: 4, label: "CREATEREPORTS", icon:ArticleIcon, link: "/Analytics" },
  { id: 5, label: "DOCUMENTATION", icon:ArticleIcon, link:  "/Analytics" },
  { id: 6, label: "SETTINGS", icon: SetingIcon, link:  "/Analytics" },
  { id: 7, label: "ALERTS", icon: VideosIcon, link:  "/Analytics" },
];

const Sidebar = () => {
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);

  const router = useRouter();

  // const activeMenu = useMemo(
  //   () => menuItems.find((menu) => menu.link === router.pathname),
  //   [router.pathname]
  // );

  const wrapperClasses = classNames(
    "h-screen px-4 pt-8 pb-4 bg-light flex justify-between flex-col",
    {
      ["w-70"]: !toggleCollapse,
      ["w-20"]: toggleCollapse,
    }
  );
  const arrowClasses = classNames(
    "",
    {
      ["border-2 border-slate-300 rounded-full w-[70px] h-[70px] shadow-amber-50 "]: !toggleCollapse,
      ["h-[30px] w-[30px] ml-2"]: toggleCollapse,
    }
  );
  const barmanueClasses = classNames(
    "mt-6",
    {
      ["border-2 border-sky-500 rounded-[10px] px-2 items-center"]: !toggleCollapse,
      [""]: toggleCollapse,
    }
  );

  const logoutClasses = classNames(
    "flex text-center pl-2 place-items-center ",
    {
      ["mt-[62px] w-[231px] h-[48px] p-4 text-white rounded-[12px] bg-[#007AFF]"]: !toggleCollapse,
      [""]: toggleCollapse,
    }
  );

  // const getNavItemClasses = (menu) => {
  //   return classNames(
  //     "flex items-center cursor-pointer hover:bg-light-lighter rounded w-full overflow-hidden whitespace-nowrap",
  //     {
  //       ["bg-light-lighter"]: activeMenu.id === menu.id,
  //     }
  //   );
  // };

  const onMouseOver = () => {
    setIsCollapsible(!isCollapsible);
  };

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };

  return (
    <div
      className={wrapperClasses}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseOver}
      style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-between relative">
          <div className="flex items-center pl-1 gap-4">
            <Image src={logo}/>

          </div>
          {/* {isCollapsible && ( */}
            <button
              className={arrowClasses}
              onClick={handleSidebarToggle}
            >
              <Image src={arrowdown} className=""/>
            </button>
          {/* )} */}
        </div>

        <div className="flex flex-col items-start mt-24">
        <div className={barmanueClasses}>
        <Link href={"./"}>
                  <a className="flex h-[47px] w-[217px] text-center place-items-center ">
                    <div style={{ width: "2.5rem" }}>
                      <DashboardIcon/>
                    </div>
                    {!toggleCollapse && (
                      <span
                        className={classNames(
                          "text-md font-medium text-text-light"
                        )}
                      >
                        DASHBOARD
                      </span>
                    )}
                  </a>
                </Link>
             </div>
             <div className=" mt-[40px]">
          {menuItems.map(({ icon: Icon, ...menu }) => {
          //  const classes = getNavItemClasses(menu);
            return (
              <div className="">
                <Link href={menu.link}>
                  <a className="flex h-[47px] w-[217px] text-center place-items-center ">
                    <div style={{ width: "2.5rem" }}>
                      <Icon />
                    </div>
                    {!toggleCollapse && (
                      <select
                        className={classNames(
                          "text-md font-medium text-text-light"
                        )}
                      >
                        <option>{menu.label}</option>
                      </select>
                    )}
                  </a>
                </Link>
              </div>
            );
          })}
          </div>
        </div>
      </div>

      <div className={logoutClasses}>
        <div style={{ width: "2.5rem" }}>
          <LogoutIcon />
        </div>
        {!toggleCollapse && (
          <span className={classNames(" text-md font-medium  text-text-light")}>
            Logout
          </span>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
