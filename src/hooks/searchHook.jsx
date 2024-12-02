import { useEffect, useState } from "react";

export const searchHook = (handleSearch) => {
  const [search, setSearch] = useState("");

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    handleSearch(search);
  }, [search]);

  return { search, handleInput };
};
