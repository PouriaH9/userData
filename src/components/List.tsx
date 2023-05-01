const List = () => {
  return (
    <div className="bg-fuchsia-800 h-full w-1/2">
      <h1 className="text-center text-3xl my-4 text-white">List</h1>
      <div className="mx-auto w-4/5 border-t-2 border-white"></div>
      {/* List */}
      <div className="w-[700px] h-[200px] mx-auto mt-10 border rounded flex flex-col gap-3">
        <div className="mt-1 ml-2 text-white">Name:</div>
        <div className="ml-2 text-white">Last name:</div>
        <div className="ml-2 text-white">Phone number:</div>
        <div className="ml-2 text-white">Birthday:</div>
        <div className="ml-2 text-white">Bio:</div>
      </div>
    </div>
  );
};

export default List;
