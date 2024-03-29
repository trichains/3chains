import React from 'react';

const InsightRoll = ({ insights }) => {
  return (
    <div className="w-full mt-16 bg-darkSurface text-accentText whitespace-nowrap overflow-hidden">
      <div className="animate-roll flex items-center justify-center w-full py-2 sm:py-3 capitalize font-semibold tracking-wider text-sm sm:text-base">
        {insights.map((text) => (
          <div key={text}>
            {text} <span className="px-4">|</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsightRoll;
