interface HistoryBarProps {
  time: string;
  location: string;
}

const HistoryBar: React.FC<HistoryBarProps> = ({ time, location }) => {
  return (
    <div className="flex items-center justify-between p-2 border-b border-white/20 gap-2 flex-nowrap">
      <span className="text-white text-sm md:text-base">{time}</span>
      <span className="text-white text-sm md:text-base truncate max-w-[60%] text-right">
        {location}
      </span>
    </div>
  );
};

export default HistoryBar;
