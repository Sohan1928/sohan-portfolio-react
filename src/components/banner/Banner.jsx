const Banner = () => {
  return (
    <section
      id="home"
      className="w-full pb-20 flex border-b-[1px] font-titleFont border-b-black"
    >
      <div className="w-1/2">
        <div className="flex flex-col gap-5">
          <h4 className="text-lg font-normal">WELCOME TO MY WORLD</h4>
          <h1 className="text-6xl font-bodyFont text-white">
            Hi, I'm{" "}
            <span className="text-designColor capitalize">
              SK Sohanur Rahman
            </span>
          </h1>
          <h2 className="text-4xl font-bold text-white">
            a <span>Web Developer</span>
          </h2>
          <p>
            I use animation as a third dimension by which to simplify
            experiences and kuiding thro each and every interaction. I'm not
            adding motion just to spruce things up, but doing it in ways that.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
