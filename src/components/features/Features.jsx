import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe, FaBars } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from "../layouts/Title";
import Card from "./Card";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I do"></Title>

      <div className="grid grid-cols-3 gap-20">
        <Card
          title="Business Strategy"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nemo, labore unde voluptates dolores officiis."
          icon={<FaBars></FaBars>}
        ></Card>
        <Card
          title="App Development"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nemo, labore unde voluptates dolores officiis."
          icon={<AiFillAppstore></AiFillAppstore>}
        ></Card>
        <Card
          title="Ui Design"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nemo, labore unde voluptates dolores officiis."
          icon={<SiProgress></SiProgress>}
        ></Card>
        <Card
          title="Mobile Development"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nemo, labore unde voluptates dolores officiis."
          icon={<FaMobile></FaMobile>}
        ></Card>
        <Card
          title="Business Strategy"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nemo, labore unde voluptates dolores officiis."
          icon={<SiAntdesign></SiAntdesign>}
        ></Card>
        <Card
          title="Business Strategy"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nemo, labore unde voluptates dolores officiis."
          icon={<FaGlobe></FaGlobe>}
        ></Card>
      </div>
    </section>
  );
};

export default Features;
