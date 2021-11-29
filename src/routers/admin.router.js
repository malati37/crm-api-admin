import express from "express";
import { hashpassword } from "../helper/bcrypt.helper.js";
import { newAdminUserFormValidation } from "../middlewares/formValidation.middleware.js";
import { createAdminUser } from "../models/user/user.model.js";

const Router = express.Router();

Router.get("/", (req, res) => {
  res.send("from get user");
});

//create an admin user
Router.post("/", newAdminUserFormValidation, async (req, res, next) => {
  try {
    const { password } = req.body;
    req.body.password = hashpassword(password);

    const user = await createAdminUser(req.body);
    console.log(user);

    user._id
      ? res.json({
          status: "sucess",
          message: "Admin user createed sucessfully",
        })
      : res.json({
          status: "error",
          message: "  unable to create the user please try again later",
        });
  } catch (error) {
    if (error.message.includes("duplicate key error collection")) {
      error.status = 200;
      error.message = "email already exists";
    }
    next(error);
  }
});
Router.patch("/", (req, res) => {});
Router.put("/", (req, res) => {});
Router.delete("/", (req, res) => {});

export default Router;
