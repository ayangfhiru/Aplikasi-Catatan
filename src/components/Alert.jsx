const Alert = ({ is_archived }) => {
  return (
    <h1 className="col-span-full text-2xl font-semibold text-center text-gray-200">
      Data {is_archived ? "Arsip" : "Catatan"} Kosong
    </h1>
  );
};

export default Alert;
