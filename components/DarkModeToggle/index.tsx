import React from "react";
import { toggleDarkMode } from "../../utils/helpers";
import { DarkMode } from "../../utils/icons";

const DarkModeToggle = ({ className }: { className?: string }) => {
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    setIsDark(localStorage.getItem("theme") === "dark");
  }, []);

  React.useEffect(() => {
    toggleDarkMode(isDark);
  }, [isDark]);

  return (
    <div
      className={`${className} cursor-pointer`}
      onClick={() => setIsDark(!isDark)}
    >
      <DarkMode className="dark:text-yellow" />
    </div>
  );
};

export default DarkModeToggle;
