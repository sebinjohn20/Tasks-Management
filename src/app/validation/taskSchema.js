import Joi from "joi";

export const taskValidationSchema = Joi.object({
  title: Joi.string().required().messages({
    "string.empty": "Title is required",
  }),

  description: Joi.string().required().messages({
    "string.empty": "Description is required",
  }),

  priority: Joi.string().valid("Low", "Medium", "High").required(),

  status: Joi.string().valid("Pending", "In Progress", "Completed").required(),
});
