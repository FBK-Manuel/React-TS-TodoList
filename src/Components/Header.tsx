// import React from 'react'
import { FiMoon, FiPlus } from "react-icons/fi";
// import { IoMdSearch } from "react-icons/io";
import Select from "./constant/Select";
// import { dropdown } from "./Type";
import { useState } from "react";
import InputModal from "./InputModal";
import Body from "./Body";
import { dataArray, todoArray } from "./Type";
import Search from "./Search";
// import { dataArray } from "./Type";

function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const [filtered, setFiltered] = useState<string>("All");
  const [todos, setTodos] = useState<todoArray[]>(dataArray);
  const [searchResults, setSearchResults] = useState<string>("");

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
    <>
      <div className="w-full h-[200px] bg-[#0D0D0D] text-gray-300 font-sans ">
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
            <button className="bg-[#1E6F9F] hover:bg-[#262626] rounded ml-2">
              <FiMoon
                color="white"
                size={50}
                className="p-3 border border-black "
              />
            </button>
          </div>
        </div>
      </div>
      <Body ShowItem={filteredData} onDelete={handleTodoDelete} />
      <InputModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
}

export default Header;
