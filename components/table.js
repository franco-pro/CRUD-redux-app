import { BiEdit, BiTrashAlt } from "react-icons/bi";
import data from "../databases/data.json";

export const Table = () => {
  return (
    <table className=" min-w-full table-auto">
      <thead className="text-xs 2xl:text-base">
        <tr className="bg-gray-800 ">
          <th className="px-16 py-2">
            <span className="text-gray-200">Name</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Email</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Salary</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Birthday</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Status</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Actions</span>
          </th>
        </tr>
      </thead>
      <tbody className="bg-gray-200 text-xs 2xl:text-base">
        {data.map((obj, i) => (
          <Tr {...obj} key={i} />
        ))}
      </tbody>
    </table>
  );
};

function Tr({ id, name, avatar, email, salary, date, status }) {
  return (
    <tr className="bg-gray-50 text-center">
      <td className="px-16 py-2 flex flex-row items-center">
        <img src={avatar || "#"} alt="" />
        <span className="text-center ml-2 font-semibold">
          {name || "Unknow"}
        </span>
      </td>
      <td className="px-16 py-2 ">
        <span className="flex text-wrap">{email || "Unknow"}</span>
      </td>
      <td className="px-16 py-2 ">
        <span className="">{salary || "Unknow"}</span>
      </td>
      <td className="px-16 py-2 ">
        <span className="">{date || "Unknow"}</span>
      </td>
      <td className="px-16 py-2 ">
        <button className="cursor">
          <span className="bg-green-500 text-white px-5 py-1 rounded">
            {status || "Unknow"}
          </span>
        </button>
      </td>
      <td className="px-16 py-2  flex justify-around gap-x-5">
        <button className="cursor">
          <BiEdit size={25} color={"rgb(34,197,94)"} />
        </button>
        <button className="cursor">
          <BiTrashAlt size={25} color={"rgb(244,63,94)"} />
        </button>
      </td>
    </tr>
  );
}
