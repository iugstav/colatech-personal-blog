import Link from "next/link";
import Logo from "public/assets/logo_new.svg";
import { CreateAccountButton } from "./CreateAccountButton";
import { SearchBar } from "./SearchBar";

export function Header() {
  return (
    <header className="w-full h-14 bg-white border-b-2 border-b-bg-emphasis font-sans-ui">
      <div className="max-w-[1200px] h-full mx-auto flex items-center justify-between max-xl:mx-4">
        <Link href="/">
          <a>
            <Logo className="w-[4.25rem] cursor-pointer" />
          </a>
        </Link>
        <SearchBar />
        {/* <CreateAccountButton /> */}
      </div>
    </header>
  );
}
