import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Benefit from "./Benefit";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 }
  }
}

const Benifits = ({ setSelectedPage }: Props) => {
  return (
    <section className="bg-white">
      <motion.section
        id="benefits"
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
        className="container min-h-full py-20"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
        >
          <HText>More than just a gym.</HText>
          <p className="my-5 max-w-xl text-sm">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
         className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
          <Benefit
            image="home"
            heading="State of the Art Facilities"
            setSelectedPage={setSelectedPage}
          />
          <Benefit
            image="user"
            heading="100's Diverse Classes"
            setSelectedPage={setSelectedPage}
          />
          <Benefit
            image="home"
            heading="Expert and Pro Trainers"
            setSelectedPage={setSelectedPage}
          />
        </motion.div>
      </motion.section>
    </section>
  );
};

export default Benifits;
