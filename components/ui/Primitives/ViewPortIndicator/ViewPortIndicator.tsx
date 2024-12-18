"use client";

import { useState, useEffect } from "react";

export function ViewPortIndicator() {
  if (process.env.NODE_ENV === "production") return null;

  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [bottomPosition, setBottomPosition] = useState("bottom-12");

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
      setViewportHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isHovered) {
      const timer = setTimeout(() => {
        setIsExpanded(true);
      }, 200);

      return () => clearTimeout(timer);
    } else {
      setIsExpanded(false);
    }
  }, [isHovered]);

  useEffect(() => {
    const checkLocalStorage = () => {
      const indicatorValue = localStorage.getItem(
        "__NEXT_DISMISS_PRERENDER_INDICATOR"
      );
      if (indicatorValue && Number(indicatorValue) > Date.now()) {
        setBottomPosition("bottom-4");
      } else {
        setBottomPosition("bottom-12");
      }
    };

    checkLocalStorage();
  }, []);

  const getBgColor = () => {
    if (viewportWidth < 640) return "bg-red-500";
    if (viewportWidth >= 640 && viewportWidth < 768) return "bg-blue-500";
    if (viewportWidth >= 768 && viewportWidth < 1024) return "bg-green-500";
    if (viewportWidth >= 1024 && viewportWidth < 1280) return "bg-yellow-500";
    if (viewportWidth >= 1280 && viewportWidth < 1536) return "bg-purple-500";
    return "bg-pink-500";
  };

  return (
    <div
      className={`fixed ${bottomPosition} min-[320px]:left-5 xs:left-5 left-3 z-[99] flex items-center justify-center`}
    >
      <div
        className="relative group flex items-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`text-white text-xs h-[30px] w-[30px] rounded-full transition-all duration-300 ease-in-out group-hover:w-40 group-hover:rounded-full flex items-center overflow-hidden ${getBgColor()}`}
        >
          <div className="h-[30px] w-[30px] flex items-center justify-center">
            <span>
              <span className="block sm:hidden">XS</span>
              <span className="hidden sm:block md:hidden">SM</span>
              <span className="hidden md:block lg:hidden">MD</span>
              <span className="hidden lg:block xl:hidden">LG</span>
              <span className="hidden xl:block 2xl:hidden">XL</span>
              <span className="hidden 2xl:block">2XL</span>
            </span>

            {isExpanded && (
              <div
                className={`absolute left-10 text-center flex justify-center text-white flex-shrink-0 transition-opacity duration-300 ${
                  isHovered ? "opacity-100" : "opacity-0"
                }`}
              >
                {`w: ${viewportWidth}px h: ${viewportHeight}px`}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
