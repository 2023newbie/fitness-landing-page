import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import Class from "./Class";

export type Cl = {
  name: string;
  description: string;
  image: string;
};

const classes: Cl[] = [
  {
    name: "Something special",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero nam tempore iure at fuga impedit pariatur amet quae laboriosam. Ipsum.",
    image: image1,
  },
  {
    name: "Something special 2",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero nam tempore iure at fuga impedit pariatur amet quae laboriosam. Ipsum.",
    image: image2,
  },
  {
    name: "Something special 3",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero nam tempore iure at fuga impedit pariatur amet quae laboriosam. Ipsum.",
    image: image3,
  },
  {
    name: "Something special 4",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero nam tempore iure at fuga impedit pariatur amet quae laboriosam. Ipsum.",
    image: image4,
  },
  {
    name: "Something special 5",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero nam tempore iure at fuga impedit pariatur amet quae laboriosam. Ipsum.",
    image: image5,
  },
  {
    name: "Something special 6",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero nam tempore iure at fuga impedit pariatur amet quae laboriosam. Ipsum.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section className="bg-primary-100 py-20">
      <motion.div
        id="ourclasses"
        className="container"
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>OUR CLASSES</HText>
          <p className="my-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, odit
            nesciunt atque quod rem blanditiis soluta! Aliquid id, laudantium
            reprehenderit ratione non possimus fugiat quasi explicabo
            praesentium sint temporibus ut.
          </p>
        </motion.div>
        <div className="flex h-fit gap-4 overflow-y-auto">
          {classes.map((cl, index) => (
            <Class key={index} {...cl} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
