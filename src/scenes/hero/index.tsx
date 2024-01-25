import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Hero = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");

  return (
    <>
      <section
        id="home"
        className="container flex flex-col items-center justify-between py-20 md:h-2/3 md:flex-row md:py-8"
      >
        <div className="relative md:w-2/5">
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
            <div className="absolute -left-16 -top-28 hidden text-[160px] font-bold tracking-widest text-gray-50 md:block">
              EVOLVE
            </div>
            <img
              className=" relative z-10"
              src={HomePageText}
              alt="text header"
            />
            <p className="my-8 text-xs text-gray-500">
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
          </motion.div>

          <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
          className="flex items-center gap-8 text-sm">
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className="text-primary-500 underline transition hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href="#contactus"
            >
              Learn More
            </AnchorLink>
          </motion.div>
        </div>

        <img className="md:w-2/5" src={HomePageGraphic} alt="image" />
      </section>

      {isAboveMediumScreen && (
        <section className="h-28 w-full bg-primary-300">
          <div className="container flex h-28 items-center gap-8">
            <img className="w-36" src={SponsorRedBull} alt="sponsor red bull" />
            <img className="w-36" src={SponsorFortune} alt="sponsor fortune" />
            <img className="w-36" src={SponsorForbes} alt="sponsor forbes" />
          </div>
        </section>
      )}
    </>
  );
};

export default Hero;
