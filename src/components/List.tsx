import { FaPhone, FaBirthdayCake } from "react-icons/fa";

const List = () => {
  return (
    <div className="bg-purple-900 h-full w-full font-sans">
      <h1 className="text-center text-4xl my-4 text-white">List</h1>
      <div className="mx-auto w-4/5 border-t-2 border-white"></div>
      {/* List */}
      <div className="w-[700px] h-[200px] mx-auto mt-10 border p-2 rounded flex flex-col gap-3">
        <div className="ml-2 text-white">Name:</div>
        <div className="flex items-center ml-2 text-white">
          <FaPhone className="mr-2" />
          <div>Phone number:</div>
        </div>
        <div className="flex items-center ml-2 text-white">
          <FaBirthdayCake className="mr-2" />
          <div>Birthday:</div>
        </div>
        <div className="ml-2 text-white font-bold text-lg">Bio:</div>
      </div>
    </div>
  );
};

export default List;
