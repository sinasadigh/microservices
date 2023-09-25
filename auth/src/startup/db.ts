import mongoose from "mongoose";
import config from "config";

export const db = async () => {
  const db: string = config.get("db");
  await mongoose
    .connect(db, config.get("dbOptions"))
    .then(() => console.info(`Connected to ${db}`));
  //   await mongoose.connect("mongodb://auth-mongo-srv:27017/auth", {});
};
