import React, { useState } from "react";
import { AutoComplete, Input } from "antd";
import type { SelectProps } from "antd/es/select";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";

const getRandomInt = (max: number, min = 0) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const searchResult = (query: string) =>
  new Array(getRandomInt(5))
    .join(".")
    .split(".")
    .map((_, idx) => {
      const category = `${query}${idx}`;
      return {
        value: category,
        label: (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>
              Found {query} on{" "}
              <a
                href={`https://s.taobao.com/search?q=${query}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {category}
              </a>
            </span>
            <span>{getRandomInt(200, 100)} results</span>
          </div>
        ),
      };
    });

const NavMenu = () => {
  const [options, setOptions] = useState<SelectProps<object>["options"]>([]);

  /*     const handleSearch = (value: string) => {
      setOptions(value ? searchResult(value) : []);
    }; */

  const handleSearch = (value: string) => {
    setOptions(value ? searchResult(value) : []);
  };

  const onSelect = (value: string) => {
    console.log("onSelect", value);
  };

  return (
    <div className="flex py-8 items-center">
      <div className="text-white bg-header-bg w-[200px] flex items-center rounded-3xl px-4 ">
        <AiOutlineSearch color="white" size={"30"} />
        <AutoComplete
          dropdownMatchSelectWidth={252}
          style={{ width: 300 }}
          options={options}
          onSelect={onSelect}
          onSearch={handleSearch}
          bordered={false}
        >
          <Input
            placeholder="search"
            bordered={false}
            className="py-2 text-white"
          />
        </AutoComplete>
      </div>
      <Link to={"/home"} className="text-header-link-color hover:text-white mx-5">
            Keşfet
      </Link>
      <Link to={"/home"} className="text-header-link-color hover:text-white mx-5">
            Göz At
      </Link>
      <Link to={"/home"} className="text-header-link-color hover:text-white mx-5">
            Haberler
      </Link>
    </div>
  );
};

export default NavMenu;
