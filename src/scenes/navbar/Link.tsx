import AnchorLink from "react-anchor-link-smooth-scroll";
import { type NavbarProps } from ".";
import { SelectedPage } from "@/shared/types";

type Props = { page: string; } & NavbarProps;

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage
  const subClass = selectedPage === lowerCasePage ? "text-primary-500" : "";
  const setNewPage = () => setSelectedPage(lowerCasePage);

  return (
    <AnchorLink
      className={`transition duration-300 hover:text-primary-300 ${subClass}`}
      href={"#" + lowerCasePage}
      onClick={setNewPage}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
