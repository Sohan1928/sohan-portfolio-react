import { HiArrowRight } from "react-icons/hi";

const Card = ({ title, des, icon }) => {
  return (
    <div className="w-full px-8 h-80 py-10 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100 group">
      <div className="h-76 overflow-y-hidden">
        <div className="flex h-full flex-col gap-8 translate-y-14 group-hover:translate-y-0 transition-transform duration-500">
          <div>
            <span className="text-5xl text-designColor">{icon}</span>
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-xl font-titleFont font-bold text-gray-300">
              {title}
              <p className="base">{des}</p>
              <span className="text-2xl text-designColor">
                <HiArrowRight></HiArrowRight>
              </span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
