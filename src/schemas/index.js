import * as Yup from "yup";

export const signUpSchema = Yup.object({
    name: Yup.string().min(2).max(25).required("Please enter your name"),
    address: Yup.string().required("Please enter your address"),
    country:Yup.object().required("Please select a Country"),
    gender:Yup.string().required("Please select a gender"),
})