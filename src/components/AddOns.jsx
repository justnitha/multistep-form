import React from "react";
import { Formik, Field, Form } from "formik";
import { add } from "./maping/Add.js";
import * as Yup from "yup";
import { Linked } from "./maping/Linked.js";


const validationSchema = Yup.object().shape({
  checked: Yup.array().min(1, "Pilih setidaknya satu item").of(Yup.string()),
});

export default function AddOns({
  selectedPlan,
  handleCategoryChange,

  setChecked1,
  formData,
  setFormData,
  selectedAdd1,
  setSelectedAdd1,
  setSelectedAdd2,
  setSelectedAdd3,
  checkedValues,
  setCheckedValues,
}) {
  console.log(checkedValues, "values");
  console.log(selectedAdd1, "selectedAdd1");

  function handleToggle1(id, name) {
    const updatedChecked1 = { ...checkedValues };
    updatedChecked1[id] = !updatedChecked1[id];
    setChecked1(updatedChecked1);
    setCheckedValues(updatedChecked1);
  }

  const handleSubmit = async (values) => {
    const updatedFormData = {
      ...values,
      ...checkedValues,
    };
    setFormData(updatedFormData);

    await new Promise((resolve) => setTimeout(resolve, 100));
    handleCategoryChange("summary");
    console.log(values);
  };

  return (
    <div>
      {selectedPlan ? (
        <div>
          {selectedPlan.category === "month" ? (
            <div>
              <Formik
                initialValues={formData}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ errors, touched }) => (
                  <Form>
            <div className="md:mt-5 bg-white p-6 lg:p-0 w-[88%] lg:w-full lg:relative absolute top-28 lg:top-2 left-6 rounded-md ">
            <h1 className="text-Marine-blue text-2xl md:text-4xl lg:text-4xl font-bold">
          {Linked[2].header}
        </h1>
        <p className=" text-Cool-gray mt-2 md:text-base mb-3">
          {Linked[2].paragraph}
        </p>
                    <div
                      key={add[0].id}
                      role="group"
                      aria-labelledby="checkbox-group"
                      onClick={() => setSelectedAdd1(add[0])}
                    >
                      <label
                        htmlFor={add[0].id}
                        className={`containerr flex items-center border-2 rounded-lg lg:p-5 p-3 cursor-pointer hover:border-Purplish-blue hover:bg-Alabaster mt-5 justify-between ${
                          checkedValues[add[0].id]
                            ? "border-Purplish-blue bg-Alabaster"
                            : ""
                        }`}
                      >
                        <div className="flex gap-4 items-center">
                          <Field
                            type="checkbox"
                            name="checked"
                            value={add[0].name}
                            id={add[0].id}
                            onClick={() => handleToggle1(add[0].id)}
                            checked={checkedValues[add[0].id]}
                          />
                          <span className="checkmark  left-3 rounded-md"></span>
                          <div>
                            <h3 className="text-sm lg:text-xl text-Marine-blue font-medium">
                              {add[0].name}
                            </h3>
                            <p className="text-Cool-gray text-xs lg:text-sm">
                              {add[0].paragraph}
                            </p>
                          </div>
                        </div>
                        <p className="text-Purplish-blue text-xs lg:text-sm">
                          {add[0].price}
                        </p>
                      </label>
                    </div>
                    <div
                      key={add[1].id}
                      role="group"
                      aria-labelledby="checkbox-group"
                      onClick={() => setSelectedAdd2(add[1])}
                    >
                      <label
                        htmlFor={add[1].id}
                        className={`containerr flex items-center border-2 rounded-lg lg:p-5 p-3 cursor-pointer hover:border-Purplish-blue hover:bg-Alabaster mt-5 justify-between ${
                          checkedValues[add[1].id]
                            ? "border-Purplish-blue bg-Alabaster"
                            : ""
                        }`}
                      >
                        <div className="flex gap-4 items-center">
                          <Field
                            type="checkbox"
                            name="checked"
                            value={add[1].name}
                            id={add[1].id}
                            onClick={() => handleToggle1(add[1].id)}
                            checked={checkedValues[add[1].id]}
                          />
                          <span className="checkmark  left-3 rounded-md"></span>
                          <div>
                            <h3 className="text-sm lg:text-xl text-Marine-blue font-medium">
                              {add[1].name}
                            </h3>
                            <p className="text-Cool-gray text-xs lg:text-sm">
                              {add[1].paragraph}
                            </p>
                          </div>
                        </div>
                        <p className="text-Purplish-blue text-xs lg:text-sm">
                          {add[1].price}
                        </p>
                      </label>
                    </div>
                    <div
                      key={add[2].id}
                      role="group"
                      aria-labelledby="checkbox-group"
                      onClick={() => setSelectedAdd3(add[2])}
                    >
                      <label
                        htmlFor={add[2].id}
                        className={`containerr flex items-center border-2 rounded-lg lg:p-5 p-3 cursor-pointer hover:border-Purplish-blue hover:bg-Alabaster mt-5 justify-between ${
                          checkedValues[add[2].id]
                            ? "border-Purplish-blue bg-Alabaster"
                            : ""
                        }`}
                      >
                        <div className="flex gap-4 items-center">
                          <Field
                            type="checkbox"
                            name="checked"
                            value={add[2].name}
                            id={add[2].id}
                            onClick={() => handleToggle1(add[2].id)}
                            checked={checkedValues[add[2].id]}
                          />
                          <span className="checkmark  left-3 rounded-md"></span>
                          <div>
                            <h3 className="text-sm lg:text-xl text-Marine-blue font-medium">
                              {add[2].name}
                            </h3>
                            <p className="text-Cool-gray text-xs lg:text-sm">
                              {add[2].paragraph}
                            </p>
                          </div>
                        </div>
                        <p className="text-Purplish-blue text-xs lg:text-sm">
                          {add[2].price}
                        </p>
                      </label>
                    </div>

                    {errors.checked && touched.checked && (
                      <p className="error text-red-500">{errors.checked}</p>
                    )}
                    </div>
                    <div className="absolute bottom-0 lg:absolute lg:right-12  lg:bottom-5  w-full lg:w-[37rem]  right-0 text-end py-5">
                      <button
                        
                        className="py-2 bg-Marine-blue px-6 me-6 lg:me-0 rounded-lg text-white capitalize"
                      >
                        next step
                      </button>
                      <button
                        onClick={() => handleCategoryChange("plan")}
                        className="py-2 text-Cool-gray font-medium px-6 absolute  left-0  capitalize"
                      >
                        Go back
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          ) : (
            <></>
          )}

          {selectedPlan.category === "year" ? (
            <div>
              <div>
                <Formik
                  initialValues={formData}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {({ errors, touched }) => (
                    <Form>
                            <div className="md:mt-5 bg-white p-6 lg:p-0 w-[88%] lg:w-full lg:relative absolute top-28 lg:top-2 left-6 rounded-md ">
                            <h1 className="text-Marine-blue text-2xl md:text-4xl lg:text-4xl font-bold">
          {Linked[2].header}
        </h1>
        <p className=" text-Cool-gray mt-2 md:text-base mb-3">
          {Linked[2].paragraph}
        </p>
                      <div
                        key={add[3].id}
                        role="group"
                        aria-labelledby="checkbox-group"
                        onClick={() => setSelectedAdd1(add[3])}
                      >
                        <label
                          htmlFor={add[3].id}
                          className={`containerr flex items-center border-2 rounded-lg lg:p-5 p-3 cursor-pointer hover:border-Purplish-blue hover:bg-Alabaster mt-5 justify-between ${
                            checkedValues[add[3].id]
                              ? "border-Purplish-blue bg-Alabaster"
                              : ""
                          }`}
                        >
                          <div className="flex gap-4 items-center">
                            <Field
                              type="checkbox"
                              name="checked"
                              value={add[3].name}
                              id={add[3].id}
                              onClick={() => handleToggle1(add[3].id)}
                              checked={checkedValues[add[3].id]}
                            />
                            <span className="checkmark  left-3 rounded-md"></span>
                            <div>
                              <h3 className="text-sm lg:text-xl text-Marine-blue font-medium">
                                {add[3].name}
                              </h3>
                              <p className="text-Cool-gray text-xs lg:text-sm">
                                {add[3].paragraph}
                              </p>
                            </div>
                          </div>
                          <p className="text-Purplish-blue text-xs lg:text-sm">
                            {add[3].price}
                          </p>
                        </label>
                      </div>
                      <div
                        key={add[4].id}
                        role="group"
                        aria-labelledby="checkbox-group"
                        onClick={() => setSelectedAdd2(add[4])}
                      >
                        <label
                          htmlFor={add[4].id}
                          className={`containerr flex items-center border-2 rounded-lg lg:p-5 p-3 cursor-pointer hover:border-Purplish-blue hover:bg-Alabaster mt-5 justify-between ${
                            checkedValues[add[4].id]
                              ? "border-Purplish-blue bg-Alabaster"
                              : ""
                          }`}
                        >
                          <div className="flex gap-4 items-center">
                            <Field
                              type="checkbox"
                              name="checked"
                              value={add[4].name}
                              id={add[4].id}
                              onClick={() => handleToggle1(add[4].id)}
                              checked={checkedValues[add[4].id]}
                            />
                            <span className="checkmark  left-3 rounded-md"></span>
                            <div>
                              <h3 className="text-sm lg:text-xl text-Marine-blue font-medium">
                                {add[4].name}
                              </h3>
                              <p className="text-Cool-gray text-xs lg:text-sm">
                                {add[4].paragraph}
                              </p>
                            </div>
                          </div>
                          <p className="text-Purplish-blue text-xs lg:text-sm">
                            {add[4].price}
                          </p>
                        </label>
                      </div>
                      <div
                        key={add[5].id}
                        role="group"
                        aria-labelledby="checkbox-group"
                        onClick={() => setSelectedAdd3(add[5])}
                      >
                        <label
                          htmlFor={add[5].id}
                          className={`containerr flex items-center border-2 rounded-lg lg:p-5 p-3 cursor-pointer hover:border-Purplish-blue hover:bg-Alabaster mt-5 justify-between ${
                            checkedValues[add[5].id]
                              ? "border-Purplish-blue bg-Alabaster"
                              : ""
                          }`}
                        >
                          <div className="flex gap-4 items-center">
                            <Field
                              type="checkbox"
                              name="checked"
                              value={add[5].name}
                              id={add[5].id}
                              onClick={() => handleToggle1(add[5].id)}
                              checked={checkedValues[add[5].id]}
                            />
                            <span className="checkmark  left-3 rounded-md"></span>
                            <div>
                              <h3 className="text-sm lg:text-xl text-Marine-blue font-medium">
                                {add[5].name}
                              </h3>
                              <p className="text-Cool-gray text-xs lg:text-sm">
                                {add[5].paragraph}
                              </p>
                            </div>
                          </div>
                          <p className="text-Purplish-blue text-xs lg:text-sm">
                            {add[5].price}
                          </p>
                        </label>
                      </div>
                      {/* ))} */}
                      {errors.checked && touched.checked && (
                        <p className="error text-red-500">{errors.checked}</p>
                      )}
                      </div>
                      <div className="absolute bottom-0 lg:absolute lg:right-12  lg:bottom-5  w-full lg:w-[37rem]  right-0 text-end py-5">
                        <button
                          className="py-2 bg-Marine-blue px-6 me-6 lg:me-0 rounded-lg text-white capitalize"
                        >
                          next step
                        </button>
                        <button
                          onClick={() => handleCategoryChange("plan")}
                          className="py-2 text-Cool-gray font-medium px-6 absolute  left-0  capitalize"
                        >
                          Go back
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
