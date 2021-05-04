import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Container } from "./styles";

const SearchBar: React.FC = () => {
  return (
    <Container>
      {/*  <input
                type="text"
                placeholder="Got a favorite Pokémon?"
                className="searchBox"
                onChange={e => debounceTyping(e.target.value)}
              />
              <AiOutlineSearch className="searchIcon" /> */}
    </Container>
  );
};

export default SearchBar;
