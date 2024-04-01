import { BiEdit, BiTrashAlt } from "react-icons/bi";
import { getUsersApi } from "@/lib/helper";
import { useQuery } from "react-query";
import { useSelector, useDispatch } from "react-redux";
import { toggleChangeAction } from "@/redux/reducer";
import datas from "@/databases/data.json";
import clsx from "clsx";

export const Table = () => {
  const { isLoading, isError, data, error } = useQuery("user", getUsersApi); //useQuery is a hook from react-query that cache the data and return data from cache if data is already fetched
  // console.log("data : ", data);

  if (isLoading) return <div className="">Employee is loading...</div>;
  if (isError) return <div className="">Got Error {error}</div>;
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
  const visible = useSelector((state) => state.app.client.toggleForm);
  const dispatch = useDispatch();
  const onUpdate = () => {
    dispatch(toggleChangeAction());
    console.log(visible);
  };
  return (
    <tr className="bg-gray-50 text-center">
      <td className="px-16 py-2 flex flex-row items-center">
        <img
          src={avatar || "#"}
          alt=""
          className="w-8 h-8 rounded-full object-cover"
        />
        <span className="text-center ml-2 font-semibold min-w-24">
          {name || "Unknow"}
        </span>
      </td>
      <td className="px-16 py-2 ">
        <span className="flex text-wrap">{email || "Unknow"}</span>
      </td>
      <td className="px-16 py-2 ">
        <span className="">${salary || "Unknow"}</span>
      </td>
      <td className="px-16 py-2 ">
        <span className="">{date || "Unknow"}</span>
      </td>
      <td className="px-16 py-2 ">
        <button className="cursor">
          <span
            className={clsx(
              " text-white px-5 py-1 rounded-full",
              status.toLowerCase() === "active" || status === "Active"
                ? "bg-green-500"
                : "bg-rose-500"
            )}
          >
            {status || "Unknow"}
          </span>
        </button>
      </td>
      <td className="px-16 py-2  flex justify-around gap-x-5">
        <button onClick={onUpdate} className="cursor">
          <BiEdit size={25} color={"rgb(34,197,94)"} />
        </button>
        <button className="cursor">
          <BiTrashAlt size={25} color={"rgb(244,63,94)"} />
        </button>
      </td>
    </tr>
  );
}
