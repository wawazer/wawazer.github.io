import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Distrive() {
  const tasks = [
    {
      text: "Created visual elements such as logos, icons, and graphics that improved the overall aesthetic of the company's online presence.",
      keywords: ["logos","icons","graphics"],
    },
    {
      text: "Arranging the layout, colors and typography of the interface display;",
      keywords: ["layout", "colors", "interface display"],
    },
    {
      text:  "As Consultans Designs into a Polished Frontend  while ensuring that the UX and UI design are maintained",
      keywords: ["Consultans", "Frontend"],
    },
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            User Interface & Assets Creator <span className="text-AAsecondary">@ Distrive</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">June 2021 - Present</span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            // set text size on style attribute
            style={{ fontSize: "0.6rem" }}
            onClick={() => window.open("https:///www.distrive.id", "_blank")}
          >
            www.distrive.id
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
            {/* Tasks Description 1 */}
            {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
                <ArrowIcon className={"h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords),
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
