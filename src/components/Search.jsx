import { searchHook } from "../hooks/searchHook";

const Search = ({ handleSearch }) => {
  const { search, handleInput } = searchHook(handleSearch);

  return (
    <div className="max-w-md mx-auto">
      <input
        type="text"
        name="search"
        value={search}
        onChange={handleInput}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Cari Catatan"
      />
    </div>
  );
};

export default Search;
