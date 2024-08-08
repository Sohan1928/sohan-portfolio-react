import { Cursor, useTypewriter } from "react-simple-typewriter";
import { FaFacebookF, FaTwitter, FaLinkedin, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiFigma } from "react-icons/si";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "Front-End Developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });
  return (
    <div className="w-1/2 flex flex-col gap-10">
      <div className="flex flex-col gap-5">
        <h4 className="text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bodyFont font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">SK Sohanur Rahman</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          ></Cursor>
        </h2>
        <p>
          I use animation as a third dimension by which to simplify experiences
          and kuiding thro each and every interaction. I'm not adding motion
          just to spruce things up, but doing it in ways that.
        </p>
      </div>
      <div>
        <div className="flex justify-between">
          <div>
            <h1 className="text-base uppercase font-titleFont mb-4">
              Find me in
            </h1>
            <div className="flex gap-4">
              <span className="bannerIcon">
                <FaFacebookF></FaFacebookF>
              </span>
              <span className="bannerIcon">
                <FaTwitter></FaTwitter>
              </span>
              <span className="bannerIcon">
                <FaLinkedin></FaLinkedin>
              </span>
            </div>
          </div>
          <div className="">
            <h1 className="text-base uppercase font-titleFont mb-4">
              Best skills on
            </h1>
            <div className="flex gap-4">
              <span className="bannerIcon">
                <FaReact></FaReact>
              </span>
              <span className="bannerIcon">
                <SiTailwindcss></SiTailwindcss>
              </span>
              <span className="bannerIcon">
                <SiFigma></SiFigma>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
