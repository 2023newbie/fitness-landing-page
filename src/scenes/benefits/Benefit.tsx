import { SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  image: "home" | "user" | "academic";
  heading: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 }
}

const Benefit = ({ image, heading, setSelectedPage }: Props) => {
  const Icon =
    image === "home"
      ? HomeModernIcon
      : image === "user"
        ? UserGroupIcon
        : AcademicCapIcon;

  return (
    <motion.div 
    variants={childVariant}
    className="flex flex-col items-center rounded border-2 border-gray-100 px-8 py-16">
      <Icon className="w-10 rounded-full border-2 border-gray-100 bg-primary-100 p-2" />
      <h3 className="my-4 font-semibold">{heading}</h3>
      <p className="my-4 text-center">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum sapiente
        accusantium, voluptatem sequi laboriosam ad.
      </p>
      <AnchorLink
        className="text-primary-500 underline transition hover:text-secondary-500"
        href="#contactus"
        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        Learn More
      </AnchorLink>
    </motion.div>
  );
};

export default Benefit;
