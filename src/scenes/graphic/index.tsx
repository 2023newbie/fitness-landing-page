import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";
import GraphicImage from '@/assets/BenefitsPageGraphic.png'
import Waves from '@/assets/AbstractWaves.png'
import Sparkles from '@/assets/Sparkles.png'
import { motion } from 'framer-motion'

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const Graphic = ({ setSelectedPage }: Props) => {
  return (
    <section className="bg-white pb-24">
      <div className="container flex flex-col gap-8 justify-between items-center md:flex-row md:gap-16">
        <img src={GraphicImage} alt="graphic image" />

        <div className="relative">
          <div className="relative z-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 }
              }}
            >
              <HText>
                MILLIONS OF HAPPY MEMBERS GETTING{" "}
                <span className="text-primary-500">FIT</span>.
              </HText>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 }
              }}
            >
              <p className="my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident laudantium sit qui sapiente pariatur unde. Debitis, cumque nostrum nobis quibusdam assumenda rerum, non optio facilis architecto possimus vitae dolorem ducimus.</p>
              <p className="mb-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consectetur cumque repellendus numquam beatae dolores minima architecto quo eius itaque.</p>
            </motion.div>
            <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
          </div>
          <img className="absolute -top-16 -left-12 w-24 z-10" src={Waves} alt="waves" />
          <img className="absolute z-10 left-12 -bottom-24" src={Sparkles} alt="sparkles" />
        </div>
      </div>
    </section>
  );
};

export default Graphic;
