import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function RsBedah() {
  const tasks = [
    {
      text: " Designed a range of digital assets for a medical company, contributing to a successful re-branding ",
      keywords: ["digital","branding"],
    },
    {
      text: "Maintenance a Hardware.",
      keywords: ["Hardware"],
    },
    {
      text: "Database administrator ",
      keywords: ["Database"],
    },
    {
      text: "Designed and developed marketing materials such as brochures, flyers, and email campaigns that helped increase brand awareness",
      keywords: ["Designed", "brochures","flyers"],
    },
    {
      text: "Created visual elements such as logos, icons, and graphics that improved the overall aesthetic of the company's online presence.",
      keywords: ["logos","icons"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            IT Staff & UI Graphic Designer
            <span className="text-AAsecondary">@ RS Bedah Manyar</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            Oct 2018 - Jan 2020
          </span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() => window.open("https://rsmmcsby.co.id", "_blank")}
          >
            rsmmcsby.co.id
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-1">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(
                      item.text,
                      item.keywords
                    ),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
