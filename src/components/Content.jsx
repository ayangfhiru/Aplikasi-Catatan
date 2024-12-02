import Alert from "./Alert";
import Card from "./Card";

const Content = ({
  showNotes,
  showFormattedDate,
  handleArchive,
  handleDelete,
  is_archived = false,
}) => {
  return (
    <>
      <div className="max-w-7xl grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {showNotes
          .filter((notes) => notes.title)
          .filter((note) => note.archived === is_archived)
          .map((data) => {
            return (
              <Card
                key={data.id}
                data={data}
                showFormattedDate={showFormattedDate}
                handleArchive={handleArchive}
                handleDelete={handleDelete}
              />
            );
          })}

        {showNotes.filter((note) => note.archived === is_archived).length <
        1 ? (
          <Alert is_archived={is_archived} />
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Content;
