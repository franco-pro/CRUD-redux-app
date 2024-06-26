import connectMongo from "@/databases/conn";
import {
  deleteUsers,
  getUsers,
  postUsers,
  putUsers,
} from "@/databases/controllers";

export default async function handler(req, res) {
  connectMongo().catch(() =>
    res.status(405).json({ error: "error in the connection" })
  );

  //type of request
  const { method } = req;
  switch (method) {
    case "GET":
      getUsers(req, res);
      //   res.status(200).json({ method, name: "get method" });
      break;
    case "POST":
      postUsers(req, res);
      // res.status(200).json({ method, name: "post method" });
      break;
    case "PUT":
      putUsers(req, res);
      // res.status(200).json({ method, name: "put method" });
      break;
    case "DELETE":
      deleteUsers(req, res);
      // res.status(200).json({ method, name: "delete method" });
      break;
    default:
      res.setHeader("Allow", ["GET,POST,PUT, DELETE"]);
      res.status(405).end(`method ${method} Not allow`);
  }
}
