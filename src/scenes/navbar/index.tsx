import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "./Link";
import Logo from "@/assets/Logo.png";
import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import { useState } from "react";
import ActionButton from "@/shared/ActionButton";

export type NavbarProps = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({
  selectedPage,
  setSelectedPage,
  isScreenTop,
}: NavbarProps & { isScreenTop: boolean }) => {
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
  const [isShowMenu, setIsShowMenu] = useState<boolean>(false);
  const flexBetween = "flex justify-between items-center";

  return (
    <nav
      className={`fixed top-0 z-20 w-full py-3 transition ${isScreenTop ? "" : "bg-primary-100 drop-shadow"}`}
    >
      <div className={`${flexBetween} mx-auto w-5/6 max-w-6xl gap-16`}>
        {/* LEFT SIDE */}
        <img src={Logo} alt="logo" />

        {/* RIGHT SIDE */}
        {isAboveMediumScreen ? (
          <div className={`${flexBetween} w-full text-sm`}>
            <div className={`${flexBetween} gap-8`}>
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Benefits"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Our Classes"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Contact Us"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>

            <div className={`${flexBetween} gap-8`}>
              <Link
                page="Sign In"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <ActionButton setSelectedPage={setSelectedPage}>
                Become a Member
              </ActionButton>
            </div>
          </div>
        ) : (
          <button
            className="rounded-full bg-secondary-500 p-2 text-slate-100"
            onClick={() => setIsShowMenu((prev) => !prev)}
          >
            <Bars3Icon className="w-5" />
          </button>
        )}

        {/* MOBILE MENU MODAL */}
        {!isAboveMediumScreen && isShowMenu && (
          <div className="fixed bottom-0 right-0 top-0 h-screen z-30 flex w-1/2 min-w-72 flex-col gap-8 bg-primary-100 p-16 text-sm drop-shadow-lg">

            <button
              className="absolute right-8 top-8 rounded-full p-1 transition duration-300 hover:bg-primary-300/30"
              onClick={() => setIsShowMenu((prev) => !prev)}
            >
              <XMarkIcon className="w-6" />
            </button>

            <div className="flex flex-col gap-8">
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Benefits"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Our Classes"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Contact Us"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>

            <div className="flex flex-col gap-8">
              <Link
                page="Sign In"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <ActionButton setSelectedPage={setSelectedPage}>
                Become a Member
              </ActionButton>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
