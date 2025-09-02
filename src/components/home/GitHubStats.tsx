"use client";

import Wrapper from "@/lib/Wrappet";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";

const GitHubStats = () => {
  const [mobile, setMobile] = useState(false);
  const { resolvedTheme } = useTheme();
  const tenMonthsAgo = new Date();
  tenMonthsAgo.setMonth(tenMonthsAgo.getMonth() - 10);
  const sixMonthsAgo = new Date();
  sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 665) {
        setMobile(false);
      } else {
        setMobile(true);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Wrapper title="GitHub Stats">
      <div className="flex justify-center">
        <GitHubCalendar
          username="himanshubijja"
          blockSize={12}
          colorScheme={resolvedTheme === "dark" ? "dark" : "light"}
          transformData={(contributions) =>
            contributions.filter(
              (day) =>
                new Date(day.date) >= (mobile ? sixMonthsAgo : tenMonthsAgo)
            )
          }
        />
      </div>
    </Wrapper>
  );
};

export default GitHubStats;
