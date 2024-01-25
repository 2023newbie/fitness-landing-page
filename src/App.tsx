import Navbar from "@/scenes/navbar";
import { useState, useEffect } from "react";
import { SelectedPage } from "./shared/types";
import Hero from "./scenes/hero";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home,
  );
  const [isScreenTop, setIsScreenTop] = useState<boolean>(true);

  useEffect(() => {
    const scrollHandle = () => {
      if (window.scrollY === 0) {
        setIsScreenTop(true)
        setSelectedPage(SelectedPage.Home)
      } else {
        setIsScreenTop(false)
      }
    }
    window.addEventListener("scroll", scrollHandle)
    return () => window.removeEventListener("scroll", scrollHandle)
  }, []);

  return (
    <div className="app bg-gray-20">
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isScreenTop={isScreenTop}
      />
      <Hero setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
