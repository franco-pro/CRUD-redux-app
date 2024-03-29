import { Form } from "@/components/form";
import { Table } from "@/components/table";
import Head from "next/head";
import { BiUserPlus } from "react-icons/bi";
import { useState } from "react";

export default function Home() {
  const [visible, setVisible] = useState(false);
  const handleChangeVisible = () => {
    setVisible(!visible);
  };
  return (
    <section className="">
      <Head>
        <title>CRUD application</title>
        <meta name="description" content="Generated by create Next app" />
      </Head>
      <main className="py-5">
        <h1 className=" text-xl md:text-5xl text-center font-bold py-10">
          Employee Management
        </h1>

        <div className="container mx-auto flex justify-between py-5 border-b">
          <div className="left flex gap-3">
            <button
              onClick={handleChangeVisible}
              className="flex min-w-44 justify-center bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-indigo-500 hover:text-gray-800"
            >
              Add Employee{" "}
              <span className="px-1">
                <BiUserPlus size={23} />
              </span>
            </button>
          </div>
        </div>
        {/* collapsable form */}
        {visible ? <Form /> : <></>}

        {/* table */}
        <div className="container mx-auto">
          <Table />
        </div>
      </main>
    </section>
  );
}
