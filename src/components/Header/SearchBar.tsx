import { FormEvent, useState } from "react";
import { MagnifyingGlass } from "phosphor-react";
import { useRouter } from "next/router";
import React from "react";

export function SearchBar() {
  const [searchText, setSearchText] = useState<string>("");
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const router = useRouter();

  function handleSubmitSearch(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (searchText.length === 0) {
      router.push("/pesquisa");
    } else {
      router.push(`/pesquisa?q=${searchText.replaceAll(" ", "-")}`);
    }
  }

  return (
    <form
      className={`md:w-min md:ml-4 w-[440px] h-10 bg-white border border-custom-gray rounded flex mx-auto ${
        isFocused ? "border-normal-gray" : ""
      } transition-colors duration-75`}
      onSubmit={handleSubmitSearch}
    >
      <input
        type="text"
        placeholder="Pesquisa..."
        className="md:hidden flex-1 bg-transparent px-2 outline-none"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />

      <button
        type="submit"
        className="w-10 h-full flex justify-center items-center cursor-pointer transition-colors duration-75 rounded hover:bg-custom-gray active:bg-gray-400"
      >
        <MagnifyingGlass width={26} height={26} />
      </button>
    </form>
  );
}
