import "reflect-metadata";
import { DataSource } from "typeorm";
import { Usuario } from "./database/entity/Usuario";

const keys = require("./config/keys");

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "127.0.0.1",
  port: 3306,
  username: keys.mysql_username,
  password: keys.mysql_password,
  database: keys.mysql_database,
  synchronize: true,
  logging: false,
  entities: [Usuario],
  migrations: [],
  subscribers: [],
});
