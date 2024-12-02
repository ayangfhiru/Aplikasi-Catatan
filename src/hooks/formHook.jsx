import { useState } from "react";

export const formHook = (handleOnSubmit) => {
  const [note, setNote] = useState({ title: "", body: "" });
  const [maxCaracter, setMaxCaracter] = useState(50);
  const [keyClick, setKeyClick] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Untuk set note title baru
    if (name == "title" && maxCaracter > 0) {
      setNote((prev) => ({
        ...prev,
        [name]: value,
      }));
    }

    if (keyClick === "Backspace") {
      setNote((prev) => ({
        ...prev,
        [name]: value,
      }));
    }

    // Untuk set note body baru
    if (name == "body") {
      setNote((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const keyboardClick = (e) => {
    setKeyClick(e.key);
    const length = note.title.length;
    setMaxCaracter(50 - length);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleOnSubmit(note);
  };

  return {
    note,
    maxCaracter,
    handleSubmit,
    handleChange,
    keyboardClick,
  };
};
