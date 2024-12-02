import Form from "./components/Form";
import { showFormattedDate } from "./utils";
import Search from "./components/Search";
import { appHook } from "./hooks/appHook";
import Content from "./components/Content";

function App() {
  const {
    showNotes,
    handleOnSubmit,
    handleSearch,
    handleArchive,
    handleDelete,
  } = appHook();

  return (
    <div className="space-y-5 mt-10">
      <Search handleSearch={handleSearch} />
      <div className="max-w-md mx-auto">
        <Form handleOnSubmit={handleOnSubmit} />
      </div>
      <div className="max-w-7xl mx-auto px-5">
        <h1 className="text-2xl font-semibold text-white">Catatan</h1>
        <Content
          showNotes={showNotes}
          showFormattedDate={showFormattedDate}
          handleArchive={handleArchive}
          handleDelete={handleDelete}
        />
      </div>
      <div className="max-w-7xl mx-auto px-5">
        <h1 className="text-2xl font-semibold text-white">Arsip</h1>
        <Content
          showNotes={showNotes}
          showFormattedDate={showFormattedDate}
          handleArchive={handleArchive}
          handleDelete={handleDelete}
          is_archived={true}
        />
      </div>
    </div>
  );
}

export default App;
