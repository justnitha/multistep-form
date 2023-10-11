import * as yup from "yup";

export const PersonalSchema = yup.object().shape({
    Nama    : yup
                .string("masukan nama")
                .min(4)
                .max(59)
                .required("masukan nama"),
    Email   : yup
                .string("masukan email")
                .email("require")
                .required("masukan email"),
    Phone : yup
                .string()
                .matches(/^[0-9]{12}$/, "Nomor telepon harus terdiri dari 12 digit")
                .required("Nomor telepon wajib diisi"),
    
})