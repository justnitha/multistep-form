import React from "react";
import { useFormik } from "formik";
import { PersonalSchema } from "../Schema/PersonalSchema";
import { Linked } from "./maping/Linked";

export default function PersonaLInfo({
  handleCategoryChange,
  formData,
  setFormData,
}) {
  const onSubmit = async (values, actions) => {
    console.log(values);
    await new Promise((resolve) => setTimeout(resolve, 100));
    // actions.resetForm();
    handleCategoryChange("plan");
  };

  const {
    errors,
    touched,
    isSubmitting,
    handleBluer,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: formData,
    validationSchema: PersonalSchema,
    onSubmit,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    handleChange(e);
  };

  console.log(errors);
  return (
    <div >
      <form action="" onSubmit={handleSubmit} autoComplete="off">
        <div className="md:mt-5 bg-white p-7 lg:p-0 w-[88%] lg:w-full lg:relative absolute top-28 lg:top-2 left-6 rounded-md ">
      <h1 className="text-Marine-blue text-2xl md:text-4xl lg:text-4xl font-bold">
        {Linked[0].header}
      </h1>
      <p className=" text-Cool-gray mt-2 md:text-base">{Linked[0].paragraph}</p>
        <div className="my-2">
          <div className="flex items-center justify-between">
            <label
              htmlFor="nama"
              className="block py-1 text-lg md:text-xl text-Marine-blue "
            >
              Name
            </label>
            {errors.Nama && touched.Nama && (
              <p className="error text-red-500">{errors.Nama}</p>
            )}
          </div>
          <input
            value={formData.Nama}
            onChange={handleInputChange}
            name="Nama"
            id="nama"
            type="text"
            placeholder="e.g. Sthepen King"
            className={
              errors.Nama && touched.Nama
                ? "form-error focus:outline-Purplish-blue  placeholder:font-normal placeholder:text-[#7a7a7a] p-2 md:text-xl lg:text-base"
                : "form-active focus:outline-Purplish-blue placeholder:font-normal placeholder:text-[#7a7a7a]  p-2 md:text-xl lg:text-base"
            }
            onBlur={handleBluer}
          />
        </div>
        <div className="my-5">
          <div className="flex items-center justify-between">
            <label
              htmlFor="Email"
              className="block py-1 text-lg md:text-xl text-Marine-blue "
            >
              Email Address
            </label>
            {errors.Email && touched.Email && (
              <p className="error text-red-500">{errors.Email}</p>
            )}
          </div>
          <input
            value={formData.Email}
            onChange={handleInputChange}
            name="Email"
            id="Email"
            type="email"
            placeholder="e.g. stephenking@lorem.com"
            className={
              errors.Email && touched.Email
                ? "form-error focus:outline-Purplish-blue placeholder:font-normal placeholder:text-[#7a7a7a] p-2  md:text-xl lg:text-base"
                : "form-active focus:outline-Purplish-blue placeholder:font-normal placeholder:text-[#7a7a7a] p-2  md:text-xl lg:text-base"
            }
            onBlur={handleBluer}
          />
        </div>
        <div className="my-5">
          <div className="flex items-center justify-between">
            <label
              htmlFor="Phone"
              className="block py-1 text-lg md:text-xl text-Marine-blue "
            >
              Phone Number
            </label>
            {errors.Phone && touched.Phone && (
              <p className="error text-red-500">{errors.Phone}</p>
            )}
          </div>
          <input
            value={formData.Phone}
            onChange={handleInputChange}
            name="Phone"
            id="Phone"
            type="text"
            placeholder="e.g. +1 23456 7890"
            className={
              errors.Phone && touched.Phone
                ? "form-error focus:outline-Purplish-blue placeholder:font-normal placeholder:text-[#7a7a7a] p-2  md:text-xl lg:text-base"
                : "form-active focus:outline-Purplish-blue placeholder:font-normal placeholder:text-[#7a7a7a] p-2  md:text-xl lg:text-base"
            }
            onBlur={handleBluer}
          />
        </div>
        </div>
        <div className="absolute bottom-0 lg:absolute md:relative md:-right-5 lg:right-12 lg:bottom- w-full lg:w-[200px] right-0 text-end py-5">
          <button
            disabled={isSubmitting}
            type="submit"
            className="py-2 bg-Marine-blue px-6 me-6 lg:me-0 rounded-lg text-white capitalize md:text-xl lg:text-base"
          >
            next step
          </button>
        </div>
      </form>
    </div>
  );
}
