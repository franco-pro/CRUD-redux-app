import { BiCheck } from "react-icons/bi";

export const Success = ({ message }) => {
  return (
    <div className=" success container mx-auto">
      <div className=" flex justify-center mx-auto border border-yellow-200 bg-yellow-400 w-3/6 text-gray-900 2xl:mr-4 py-2 text-center bg-opacity-5">
        {message}
        <BiCheck size={25} color="rgb(34,197,94)" />
      </div>
    </div>
  );
};
