// import React from 'react'
import { FiMoon, FiPlus } from "react-icons/fi";
// import { IoMdSearch } from "react-icons/io";
import Select from "./constant/Select";
// import { dropdown } from "./Type";
import { useEffect, useState } from "react";
import InputModal from "./InputModal";
import Body from "./Body";
import { dataArray, theme, todoArray } from "./Type";
import Search from "./Search";
import { MdOutlineWbSunny } from "react-icons/md";
// import { dataArray } from "./Type";

function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const [filtered, setFiltered] = useState<string>("All");
  const [todos, setTodos] = useState<todoArray[]>(dataArray);
  const [searchResults, setSearchResults] = useState<string>("");
  const [changeColorState, setChangeColorState] = useState<boolean>(true);
  const [backgroundTheme, setBackgroundTheme] = useState<theme>({
    bgColor: "#191919",
    textColor: "#F2F2F2",
    containerColor: "#0D0D0D",
  });

  // const lightTheme: theme = {
  //   bgColor: "bg-[#F7F7F7]",
  //   textColor: "text-[#0D0D0D]",
  //   borderColor: "border-[#262626]",
  // };
  // const darkTheme: theme = {
  //   bgColor: "bg-[#191919]",
  //   textColor: "text-gray-300",
  //   borderColor: "border-black",
  // };

  const toggleBackgroundTheme = () => {
    setBackgroundTheme((prevTheme) => ({
      bgColor: prevTheme.bgColor === "#191919" ? "#F7F7F7" : "#191919",
      textColor: prevTheme.textColor === "#F2F2F2" ? "#0D0D0D" : "#F2F2F2",
      containerColor:
        prevTheme.containerColor === "#0D0D0D" ? "#F2F2F2" : "#0D0D0D",
    }));
    // setBackgroundColor(backgroundColor === "#191919" ? "#F7F7F7" : "#191919");
  };

  useEffect(() => {
    document.body.style.backgroundColor = backgroundTheme.bgColor;
    document.body.style.color = backgroundTheme.textColor;
    // document.body.style.backgroundColor = backgroundTheme.containerColor;
  }, [backgroundTheme]);

  const handleTodoDelete = (idToDelete: number): void => {
    const todoUpdateDelete = todos.filter((todo) => todo.id !== idToDelete);
    setTodos(todoUpdateDelete);
  };
  const filteredData = todos.filter((todoList) => {
    const matchData = filtered === "All" || todoList.category === filtered;
    const matchSearch = todoList.text
      .toLowerCase()
      .includes(searchResults.toLowerCase());
    return matchData && matchSearch;
  });

  const handleSearch = (query: string) => {
    // const results = todos.filter((search) => search.text.toLowerCase().includes(query.toLowerCase()));
    const results = query;
    setSearchResults(results);
  };

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const value = event.target.value;
  //   setQuery(value);
  // };
  return (
    <div
      style={{
        backgroundClip: backgroundTheme.bgColor,
      }}>
      <div
        className="w-full h-[200px] bg-[#0D0D0D] text-gray-300 font-sans"
        style={{
          color: backgroundTheme.textColor,
          backgroundColor: backgroundTheme.containerColor,
        }}>
        <div className="p-10 flex items-center animate-bounce justify-center">
          <img src="/public/Logo.svg" alt="logo" className="" />
        </div>
        <div className="relative mt-12 container">
          <div className="flex justify-center ">
            <Search onSubmit={handleSearch} />
            <div>
              <Select filtered={filtered} setFiltered={setFiltered} />
            </div>
            <button
              onClick={openModal}
              className="border border-black p-3 bg-[#1E6F9F] ml-2 hover:bg-[#262626]">
              <FiPlus color="white" size={20} />
            </button>
            <button
              onClick={toggleBackgroundTheme}
              className="bg-[#1E6F9F] hover:bg-[#262626] rounded ml-2">
              {changeColorState ? (
                <FiMoon
                  color="white"
                  size={50}
                  className="p-3 border border-black "
                  onClick={() => setChangeColorState(false)}
                />
              ) : (
                <MdOutlineWbSunny
                  color="white"
                  size={50}
                  className="p-3 border border-black"
                  onClick={() => setChangeColorState(true)}
                />
              )}
            </button>
          </div>
        </div>
      </div>
      <Body
        ShowItem={filteredData}
        bgThemes={backgroundTheme}
        onDelete={handleTodoDelete}
      />
      <InputModal
        isOpen={isOpen}
        bgThemes={backgroundTheme}
        closeModal={closeModal}
      />
    </div>
  );
}

export default Header;
