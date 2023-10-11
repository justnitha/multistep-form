import React from "react";
import { useFormik } from "formik";
import { PersonalSchema } from "../Schema/PersonalSchema";

  export default function PersonaLInfo({handleCategoryChange, formData, setFormData }) {
    
  
    const onSubmit = async (values,actions) => {
      console.log(values);
      await new Promise((resolve) => setTimeout(resolve, 100));
      // actions.resetForm();
      handleCategoryChange("plan")
    };

    const {errors,touched,isSubmitting,handleBluer,handleChange,handleSubmit,} = useFormik({
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
      <div className="mt-10">
        <form action="" onSubmit={handleSubmit} autoComplete="off">
          <div className="my-2">
          <div className="flex items-center justify-between">
            <label htmlFor="nama" className="block py-1 text-lg text-Marine-blue ">
              Name
            </label>
            {errors.Nama && touched.Nama && (
              <p className="error text-red-500">{errors.Nama}</p>
            )}
          </div>
            <input
              value={formData.Nama}
              onChange={ handleInputChange}
              name="Nama"
              id="nama"
              type="text"
              placeholder="e.g. Sthepen King"
              className={errors.Nama && touched.Nama?
              "form-error focus:outline-Purplish-blue  placeholder:font-normal placeholder:text-[#7a7a7a] p-2" 
              :
              "form-active focus:outline-Purplish-blue placeholder:font-normal placeholder:text-[#7a7a7a]  p-2"}
              onBlur={handleBluer}
            />
          </div>
          <div className="my-5">
            <div className="flex items-center justify-between">
              <label htmlFor="Email" className="block py-1 text-lg text-Marine-blue ">
                Email Address
              </label>
              {errors.Email && touched.Email && (
              <p className="error text-red-500">{errors.Email}</p>
            )}
            </div>
            <input
              value={formData.Email}
              onChange={ handleInputChange}
              name="Email"
              id="Email"
              type="email"
              placeholder="e.g. stephenking@lorem.com"
              className={errors.Email && touched.Email?
              "form-error focus:outline-Purplish-blue placeholder:font-normal placeholder:text-[#7a7a7a] p-2" 
              :
              "form-active focus:outline-Purplish-blue placeholder:font-normal placeholder:text-[#7a7a7a] p-2"}
              onBlur={handleBluer}
            />
          </div>
          <div className="my-5">
          <div className="flex items-center justify-between">
            <label htmlFor="Phone" className="block py-1 text-lg text-Marine-blue ">
              Phone Number
            </label>
            {errors.Phone && touched.Phone && (
              <p className="error text-red-500">{errors.Phone}</p>
            )}
          </div>
            <input
              value={formData.Phone}
              onChange={ handleInputChange}
              name="Phone"
              id="Phone"
              type="text"
              placeholder="e.g. +1 23456 7890"
              className={errors.Phone && touched.Phone ?
              "form-error focus:outline-Purplish-blue placeholder:font-normal placeholder:text-[#7a7a7a] p-2" 
              :
              "form-active focus:outline-Purplish-blue placeholder:font-normal placeholder:text-[#7a7a7a] p-2"}
              onBlur={handleBluer}
            />
          </div>
          <div className="fixed bottom-0 lg:absolute lg:right-[5rem] bg-white lg:-bottom-5  w-full lg:w-[200px]  right-0 text-end py-5">
            <button
              disabled={isSubmitting}
              type="submit"
              className="py-2 bg-Marine-blue px-6 me-6 lg:me-0 rounded-lg text-white capitalize"
              >
              next step
            </button>
          </div>
        </form>
      </div>
    );
  }
