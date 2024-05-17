import classNames from "classnames";
import calculator from "../img/icon-calculator.svg";
import karma from "../img/icon-karma.svg";
import supervisor from "../img/icon-supervisor.svg";
import teamBuilder from "../img/icon-team-builder.svg";

const Card = ({ name, description, border, src, position }) => {
  const img = {
    calculator: calculator,
    karma: karma,
    supervisor: supervisor,
    teamBuilder: teamBuilder,
  };

  const marginLR = {
    r: "md:mr-auto md:col-span-1  md:mt-28 md:row-span-2 md:hidden",
    rv: "md:mr-auto md:col-span-1 md:mt-28 md:row-span-2 md:block",
    l: "md:ml-auto md:col-span-1 md:row-span-2  mt-28",
    a: "md:mx-auto",
    col: "col-span-1 mx-auto md:block hidden",
  };

  const marginAuto = marginLR[position];

  const imageSrc = img[src];

  const borderClass = classNames({
    "border-t-4": true,
    "border-main-Red": border === "red",
    "border-main-Blue": border === "blue",
    "border-main-Orange": border === "orange",
  });

  return (
    <div
      className={`w-mobile-container h-mobile-card bg-white mb-6 ${borderClass} border-main-red border-solid rounded-lg md:mb-5 text-start md:shadow-xl md:w-full max-w-desktop-w-card md:h-desktop-h-card relative ${marginAuto}`}
    >
      <h2 className=" text-Very-Dark-Blue  text text-lg pt-8 pl-7  tracking-wide leading-8 font-semibold  m-auto">
        {name}
      </h2>
      <p className="text-Grayish-Blue tracking-tighter text-sm pl-8  m-auto pr-8 leading-6 font-medium">
        {description}
      </p>
      <img src={imageSrc} alt={name} className=" absolute right-7 bottom-7" />
    </div>
  );
};

export default Card;
