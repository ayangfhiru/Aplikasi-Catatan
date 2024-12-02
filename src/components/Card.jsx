const Card = ({ data, showFormattedDate, handleDelete, handleArchive }) => {
  const { id, title, body, createdAt } = data;

  return (
    <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg min-w-40 max-w-80 overflow-hidden">
      <div className="mx-3 mb-0 border-b border-slate-500 pt-3 pb-2 px-1">
        <p className="mb-2 text-slate-800 text-xl font-semibold line-clamp-1">
          {title}
        </p>
        <p className="text-xs text-gray-500">{showFormattedDate(createdAt)}</p>
      </div>
      <div className="px-4 py-1 pb-16">
        <p className="text-slate-600 leading-normal font-light">{body}</p>
      </div>
      <div className="absolute bottom-0 p-3 border-t border-slate-500 w-full flex justify-around">
        <button
          onClick={() => handleDelete(id)}
          className="font-semibold text-md px-6 py-1.5 rounded-md bg-gray-300 text-red-700"
        >
          Hapus
        </button>
        <button
          onClick={() => handleArchive(id)}
          className="font-semibold text-md px-6 py-1.5 rounded-md bg-gray-300 text-blue-700"
        >
          Arsip
        </button>
      </div>
    </div>
  );
};

export default Card;
