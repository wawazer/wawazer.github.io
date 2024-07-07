import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Freelancer() {
  const tasks = [
    {
      text: "Developed and Build a customizable website for Client.",
      keywords: ["Website"],
    },
    {
      text: "Monitored website performance and handled troubleshooting as SEO Specialist .",
      keywords: ["MOnitored","SEO"],
    },
    {
      text: "Managed company WordPress website including plugins, tools, and themes.",
      keywords: ["Wordpress"],
    },
    {
      text: "Designing and creating company visual requirements (flyer, infograph, logo etc.)",
      keywords: ["flyer", "infograph", "visual requirements","logo"],
    },
    {
      text: "Developed prototypes and mockups for new features, enhancing UX and UI design",
      keywords: ["UX", "UI", "Developed","mockups"],
    },
    {
      text: "Created multiple pages for mobile and desktop devices using HTML and CSS, as well as third-party libraries such as typescript, Angular and React the implementation of company applications",
      keywords: ["HTML","CSS", "Angular","typescript", "React"] ,
    },
    {
      text:  "Turning Figma Designs into a Polished Website Frontend  while ensuring that the UX and UI design are maintained",
      keywords: ["Figma", "Frontend"],
    },
    {
      text: "Define user personas, user journeys, and user flows to inform design decisions and improve product usability",
      keywords: ["user personas","user journeys","user flows"],
    },
    {
      text: "Designed intuitive and engaging product interfaces, increasing customer satisfaction",
      keywords: ["product interfaces"],
    },
    {
      text: "Designed wireframes, graphical user interfaces, and prototypes leading to an improved user experience for online customers",
      keywords: ["wireframe"],
    },
    
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            UI UX & Frontend Dev <span className="text-AAsecondary"></span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">2014 - Present</span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
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
