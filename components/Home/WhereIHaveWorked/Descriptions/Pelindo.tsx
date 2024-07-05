import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Pelindo() {
  const tasks = [
    {
      text: "Create a website, PHP, Illustrator, Digital Marketing",
      keywords: ["PHP", "Illustrator", "Digital Marketing"],
    },
    {
      text: "Designing and creating company visual requirements (flyer, Company Profile, etc.)",
      keywords: ["flyer", "Company Profile", "visual requirements"],
    },
    {
      text: "Maintenance a Hardware.",
      keywords: ["Hardware"],
    },
    {
      text: "Maintenance social media",
      keywords: ["social media"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            UI/UX & Frontend Dev
            <span className="text-AAsecondary">@ Pelindo Regional 3</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            Maret 2020 - Present
          </span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() => window.open("https://pelindo.co.id", "_blank")}
          >
            pelindo.co.id
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
