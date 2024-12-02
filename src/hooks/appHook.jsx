import { useEffect, useState } from "react";
import { getInitialData } from "../utils";

const data = getInitialData();

export const appHook = () => {
  const [notes, setNotes] = useState(data);
  const [showNotes, setShowNotes] = useState([]);

  useEffect(() => {
    setNotes(getInitialData());
  }, []);

  useEffect(() => {
    setShowNotes(notes);
  }, [notes]);

  const handleDelete = (id) => {
    setNotes((prev) => {
      return prev.filter((note) => note.id !== id);
    });
  };

  const handleArchive = (id) => {
    const newNotes = notes.map((note) =>
      note.id === id ? { ...note, archived: !note.archived } : note
    );
    setNotes(newNotes);
  };

  const handleOnSubmit = (fromData) => {
    const newNote = {
      id: +new Date(),
      title: fromData.title,
      body: fromData.body,
      createdAt: new Date(),
      archived: false,
    };
    setNotes((prev) => [...prev, newNote]);
  };

  const handleSearch = (dataSearch) => {
    const rest = notes.filter((note) =>
      note.title.toLowerCase().includes(dataSearch.toLowerCase())
    );
    setShowNotes(rest);
  };

  return {
    showNotes,
    handleOnSubmit,
    handleSearch,
    handleArchive,
    handleDelete,
  };
};
