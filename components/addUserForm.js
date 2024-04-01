import { useReducer } from "react";
import { BiPlus } from "react-icons/bi";
import { Bug } from "./bug";
import { Success } from "./success";
import { useQueryClient, useMutation } from "react-query"; //useMutation is a hook from react-query that is used call api and mutate data
import { getUsersApi, postUserApi } from "@/lib/helper";

export const AddUserForm = () => {
  const formReducer = (state, e) => {
    return {
      ...state,
      [e.target.name]: e.target.value,
    };
  };

  const [formData, setFormData] = useReducer(formReducer, {}); // useReducer is a hook that is used for state management
  const querylient = useQueryClient(); //useQueryClient is a hook from react-query that is used to get the data from cache
  const addMutation = useMutation(postUserApi, {
    onSuccess: () => {
      querylient.prefetchQuery("user", getUsersApi);
    },
  });
  const handleSumit = (e) => {
    e.preventDefault();

    if (Object.keys(formData).length == 0)
      return <div className=" text-rose-500">Don't have form data</div>;
    let { firstname, lastname, email, salary, date, status } = formData; //we must combine firsname and lastname because, in the schemas, it represent only name attribut
    const model = {
      name: `${firstname} ${lastname}`,
      avatar: `https://randomuser.me/api/portraits/men/${Math.floor(
        Math.random() * 100
      )}.jpg`,
      email,
      salary,
      date,
      status: status ?? "Active",
    };
    addMutation.mutate(model);
  };

  if (addMutation.isLoading) return <div>Loading...</div>;
  if (addMutation.isError) return <Bug message={addMutation.error.message} />; //if there is an error, it will show the error message
  if (addMutation.isSuccess) return <Success message={"Added successfully"} />;

  return (
    <form
      onSubmit={handleSumit}
      className="grid text-xs 2xl:text-base lg:grid-cols-2 w-4/6 gap-4"
    >
      <div className="input-type">
        <input
          type="text"
          name="firstname"
          onChange={setFormData}
          placeholder="firstName"
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          name="lastname"
          onChange={setFormData}
          placeholder="lastName"
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          name="email"
          onChange={setFormData}
          placeholder="Email"
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          name="salary"
          onChange={setFormData}
          placeholder="Salary"
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
        />
      </div>
      <div className="input-type">
        <input
          type="date"
          name="date"
          onChange={setFormData}
          placeholder="Date"
          className="border  px-5 py-3 focus:outline-none rounded-md"
        />
      </div>

      <div className="flex gap-10 items-center text-base">
        <div className="form-check">
          <input
            type="radio"
            value={"Active"}
            id="radioDefault1"
            name="status"
            onChange={setFormData}
            className=" form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-leftmr-2 cursor-pointer"
          />
          <label
            htmlFor="radioDefault1"
            className=" inline-block text-gray-800 pl-1 cursor-pointer"
          >
            Active
          </label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            value={"Inactive"}
            id="radioDefault2"
            name="status"
            onChange={setFormData}
            className=" form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-red-500 checked:border-red-500 focus:outline-none duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-leftmr-2 cursor-pointer"
          />
          <label
            htmlFor="radioDefault2"
            className=" inline-block text-gray-800 pl-1 cursor-pointer"
          >
            Inactive
          </label>
        </div>
      </div>
      <button className="flex justify-center text-md w-2/6 bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500">
        Add{" "}
        <span className=" pl-1">
          <BiPlus size={15} />
        </span>
      </button>
    </form>
  );
};
