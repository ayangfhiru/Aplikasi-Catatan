import Span from "./Span";
import { formHook } from "../hooks/formHook";

const Form = ({ handleOnSubmit }) => {
  const { note, maxCaracter, handleSubmit, handleChange, keyboardClick } =
    formHook(handleOnSubmit);

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <h1 className="text-lg font-semibold text-white">Tambah Catatan</h1>
      <label htmlFor="title" className="block">
        <div className="flex justify-between mr-2">
          <Span title="Judul Catatan" />
          <p className="text-sm font-semibold text-white">
            Sisa karakter {maxCaracter}
          </p>
        </div>
        <input
          id="title"
          type="text"
          name="title"
          value={note.title}
          onChange={handleChange}
          onKeyUp={keyboardClick}
          className={`block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500`}
          placeholder="Judul Catatan ..."
        />
      </label>

      <label htmlFor="body" className="block ">
        <Span title="Catatan" />
        <textarea
          id="body"
          name="body"
          rows="4"
          value={note.body}
          onChange={handleChange}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Write your thoughts here..."
        ></textarea>
      </label>

      <button className="block p-2.5 w-full text-sm font-medium text-gray-900 bg-gray-300 rounded-lg border border-gray-300 focus:ring-gray-800 focus:border-gray-800">
        Simpan Catatan
      </button>
    </form>
  );
};

export default Form;
