import React from "react";

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

interface ContributionGraphProps {
  contributions: ContributionDay[];
}

export function ContributionGraph({ contributions }: ContributionGraphProps) {
  // Pad contributions to complete full weeks if necessary (91 days total = 13 weeks * 7 days)
  const totalDays = 91;
  const days = [...contributions];
  
  while (days.length < totalDays) {
    days.unshift({
      date: "",
      count: 0,
      level: 0
    });
  }

  // Chunk into 13 weeks of 7 days
  const weeks: ContributionDay[][] = [];
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }

  const getLevelColor = (level: number) => {
    switch (level) {
      case 1:
        return "bg-highlight/20";
      case 2:
        return "bg-highlight/40";
      case 3:
        return "bg-highlight/70";
      case 4:
        return "bg-highlight";
      default:
        return "bg-bg-tertiary";
    }
  };

  return (
    <div className="p-6 rounded-lg bg-bg-secondary border border-border-subtle select-none">
      <h5 className="font-mono text-xs font-semibold text-text-secondary uppercase tracking-wider mb-4">
        Recent Activity (Last 90 Days)
      </h5>

      <div className="flex space-x-1.5 overflow-x-auto no-scrollbar pb-2">
        {weeks.map((week, wIdx) => (
          <div key={wIdx} className="flex flex-col space-y-1.5 flex-shrink-0">
            {week.map((day, dIdx) => (
              <div
                key={day.date || `${wIdx}-${dIdx}`}
                className={`w-3 h-3 rounded-sm transition-all duration-200 hover:scale-110 ${getLevelColor(
                  day.level
                )}`}
                title={
                  day.date
                    ? `${day.count} contributions on ${new Date(
                        day.date
                      ).toLocaleDateString(undefined, {
                        month: "short",
                        day: "numeric",
                        year: "numeric"
                      })}`
                    : "No data available"
                }
              />
            ))}
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex items-center justify-end space-x-2 mt-4 text-[10px] text-text-tertiary font-mono">
        <span>Less</span>
        <div className="w-2.5 h-2.5 rounded-sm bg-bg-tertiary border border-border-subtle" />
        <div className="w-2.5 h-2.5 rounded-sm bg-highlight/20" />
        <div className="w-2.5 h-2.5 rounded-sm bg-highlight/40" />
        <div className="w-2.5 h-2.5 rounded-sm bg-highlight/70" />
        <div className="w-2.5 h-2.5 rounded-sm bg-highlight" />
        <span>More</span>
      </div>
    </div>
  );
}
