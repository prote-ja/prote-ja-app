import { useMemo } from "react";

const getTimeBasedGreeting = () => {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return "Bom dia";
  if (hour >= 12 && hour < 18) return "Boa tarde";
  return "Boa noite";
};

const Greeting = ({ name }: { name?: string }) => {
  const randomGreeting = useMemo(() => {
    const timeGreeting = getTimeBasedGreeting();

    return `${timeGreeting}`;
  }, []);

  return (
    <div>
      <span className="text-white">{randomGreeting} </span>
      <h1 className="text-xl md:text-3xl font-semibold text-white">{name}</h1>
    </div>
  );
};

export default Greeting;
