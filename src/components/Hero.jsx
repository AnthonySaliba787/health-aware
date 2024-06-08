import { TbHealthRecognition } from "react-icons/tb";
import HeroBG from "../assets/herobg.svg";

export const Hero = () => {
  const heroBg = {
    backgroundImage: `url(${HeroBG})`,
    backgroundSize: "cover",
  };

  return (
    <>
      <div
        style={heroBg}
        className="w-full min-h-screen flex flex-col justify-center items-center text-center px-4 py-4"
      >
        <TbHealthRecognition className="text-pink-700 text-5xl md:text-7xl drop-shadow-sm" />
        <h1 className="text-3xl md:text-5xl font-bold text-pink-700 drop-shadow-sm">
          Health Aware
        </h1>
        <h2 className="text-base md:text-lg font-medium uppercase py-2 text-pink-500">
          because your health matters
        </h2>
        <button className="w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 rounded-md py-3 my-2 px-2 uppercase bg-pink-700 shadow-md text-white font-medium hover:shadow-lg hover:bg-pink-600 focus:shadow-lg focus:bg-pink-600 active:scale-95 active:bg-pink-800 duration-300">
          learn more
        </button>
        <div></div>
      </div>
    </>
  );
};
