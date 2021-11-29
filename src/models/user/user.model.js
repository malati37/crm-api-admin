import AdminUserSchema from "./user.schema.js";

//create user
export const createAdminUser = (obj) => {
  return AdminUserSchema(obj).save();
};

//get user by id

export const getAdminUserById = (_id) => {
  return AdminUserSchema.findById(_id);
};

//get one user by filter
export const getAdminUser = (filter) => {
  return AdminUserSchema.findOne(filter);
};
//get all user by filter
export const getAllAdminUser = (filter) => {
  return AdminUserSchema.find(filter);
};

// update user

export const updateAdminUser = (filter, obj) => {
  return AdminUserSchema.findOneAndUpdate(filter, obj);
};
//delete user
export const DeleteAdminUser = (filter) => {
  return AdminUserSchema.findOneAndDelete(filter);
};
