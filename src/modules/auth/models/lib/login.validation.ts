import * as yup from "yup"
export const loginValidator = yup.object({
    email: yup.string().email().required().min(10).max(100)
})