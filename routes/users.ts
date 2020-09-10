import { Router } from "../deps.ts";

const Users = Router();

Users.get("/users", (req, res) => {
  res.sendStatus(200);
});

export default Users;
