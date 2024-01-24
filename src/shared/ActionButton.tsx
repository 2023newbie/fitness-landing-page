import { ReactNode } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./types";

type Props = {
  children: ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      className="rounded bg-secondary-500 px-6 py-2 hover:bg-primary-500 cursor-pointer transition duration-300 hover:text-white"
      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
      href="#contactus"
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
