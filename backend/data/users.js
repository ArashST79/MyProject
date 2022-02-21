import bcrypt from "bcrypt";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "ArashST",
    email: "arash_tavan@yahoo.com",
    password: bcrypt.hashSync("123", 10),
  },
  {
    name: "KianOmoomi",
    email: "Kian@kian.com",
    password: bcrypt.hashSync("123", 10),
  },
];

export default users;
