import Link from "next/link";
import Nav from "./Nav";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="py-8 text-white xl:py-12">
      <div className="container flex items-center justify-between mx-auto">
        <Link href={"/"}>
          <h1 className="text-4xl font-semibold">
            Kartik<span className="text-accent">.</span>
          </h1>
        </Link>
        {/* Desktop navigation menu */}
        <div className="items-center hidden gap-8 xl:flex">
          <Nav />
          <Link href={"/contact"}>
            <Button className="text-black bg-accent hover:bg-accent-hover">
              Hire me
            </Button>
          </Link>
        </div>

        {/* Mobile navigation menu */}
        <div className="xl:hidden">mobile nav</div>
      </div>
    </header>
  );
};

export default Header;
