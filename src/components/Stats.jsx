"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: "9",
    text: "Years of experience",
  },
  {
    num: "30",
    text: "Projects completed",
  },
  {
    num: "40",
    text: "Technologies mastered",
  },
  {
    num: "1000",
    text: "Code commits",
  },
];

const Stats = () => {
  return (
    <section>
      <div className="mx-auto container">
        <div className="flex flex-wrap gap-6 mx-auto max-w-[80vw] xl:max-w-none">
          {stats.map((stat, index) => {
            return (
              <div
                key={index}
                className="flex flex-1 justify-center xl:justify-start items-center gap-4"
              >
                <CountUp
                  end={stat.num}
                  duration={5}
                  delay={2}
                  className="font-extrabold text-4xl xl:text-6xl"
                />
                <p
                  className={`${
                    stat.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/80`}
                >
                  {stat.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
