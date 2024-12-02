import Card from "./Card";

const Content = ({
  showNotes,
  showFormattedDate,
  handleArchive,
  handleDelete,
  is_archived = false,
}) => {
  return (
    <div className="max-w-7xl grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {showNotes
        .filter((notes) => notes.title)
        .filter((note) => note.archived === is_archived)
        .map((data) => (
          <Card
            key={data.id}
            data={data}
            showFormattedDate={showFormattedDate}
            handleArchive={handleArchive}
            handleDelete={handleDelete}
          />
        ))}
    </div>
  );
};

export default Content;
