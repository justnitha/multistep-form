import React from "react";
import { Formik, Field, Form } from "formik";
import { add } from "./maping/Add.js";
import * as Yup from "yup";

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
  selectedAdd2,
  setSelectedAdd2,
  selectedAdd3,
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
    console.log("Plan yang dipilih:", selectedAdd1);
    console.log("Plan yang dipilih2:", selectedAdd2);
    console.log("Plan yang dipilih3:", selectedAdd3);
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
                    {/* {add.map((item)=>( */}
                    <div
                      key={add[0].id}
                      role="group"
                      aria-labelledby="checkbox-group"
                      onClick={() => setSelectedAdd1(add[0])}
                    >
                      <label
                        htmlFor={add[0].id}
                        className={`containerr flex items-center border-2 rounded-lg p-5 cursor-pointer hover:border-Purplish-blue hover:bg-Alabaster mt-5 justify-between ${
                          checkedValues[add[0].id]
                            ? "border-Purplish-blue bg-Alabaster"
                            : ""
                        }`}
                      >
                        <div className="flex gap-4">
                          <Field
                            type="checkbox"
                            name="checked"
                            value={add[0].name}
                            id={add[0].id}
                            onClick={() => handleToggle1(add[0].id)}
                            checked={checkedValues[add[0].id]}
                          />
                          <span className="checkmark top-8 left-3 rounded-md"></span>
                          <div>
                            <h3 className="text-base lg:text-xl text-Marine-blue font-medium">
                              {add[0].name}
                            </h3>
                            <p className="text-Cool-gray text-xs">
                              {add[0].paragraph}
                            </p>
                          </div>
                        </div>
                        <p className="text-Purplish-blue text-xs">
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
                        className={`containerr flex items-center border-2 rounded-lg p-5 cursor-pointer hover:border-Purplish-blue hover:bg-Alabaster mt-5 justify-between ${
                          checkedValues[add[1].id]
                            ? "border-Purplish-blue bg-Alabaster"
                            : ""
                        }`}
                      >
                        <div className="flex gap-4">
                          <Field
                            type="checkbox"
                            name="checked"
                            value={add[1].name}
                            id={add[1].id}
                            onClick={() => handleToggle1(add[1].id)}
                            checked={checkedValues[add[1].id]}
                          />
                          <span className="checkmark top-8 left-3 rounded-md"></span>
                          <div>
                            <h3 className="text-base lg:text-xl text-Marine-blue font-medium">
                              {add[1].name}
                            </h3>
                            <p className="text-Cool-gray text-xs">
                              {add[1].paragraph}
                            </p>
                          </div>
                        </div>
                        <p className="text-Purplish-blue text-xs">
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
                        className={`containerr flex items-center border-2 rounded-lg p-5 cursor-pointer hover:border-Purplish-blue hover:bg-Alabaster mt-5 justify-between ${
                          checkedValues[add[2].id]
                            ? "border-Purplish-blue bg-Alabaster"
                            : ""
                        }`}
                      >
                        <div className="flex gap-4">
                          <Field
                            type="checkbox"
                            name="checked"
                            value={add[2].name}
                            id={add[2].id}
                            onClick={() => handleToggle1(add[2].id)}
                            checked={checkedValues[add[2].id]}
                          />
                          <span className="checkmark top-8 left-3 rounded-md"></span>
                          <div>
                            <h3 className="text-base lg:text-xl text-Marine-blue font-medium">
                              {add[2].name}
                            </h3>
                            <p className="text-Cool-gray text-xs">
                              {add[2].paragraph}
                            </p>
                          </div>
                        </div>
                        <p className="text-Purplish-blue text-xs">
                          {add[2].price}
                        </p>
                      </label>
                    </div>

                    {errors.checked && touched.checked && (
                      <p className="error text-red-500">{errors.checked}</p>
                    )}
                    <div className="fixed bottom-0 lg:absolute lg:right-[5rem] bg-white lg:-bottom-5  w-full lg:w-[37rem]  right-0 text-end py-5">
                      <button
                        onClick={handleSubmit}
                        className="py-2 bg-Marine-blue px-6 me-6 lg:me-0 rounded-lg text-white capitalize"
                      >
                        next step
                      </button>
                      <button
                        onClick={() => handleCategoryChange("summary")}
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
                      {/* {add.map((item)=>( */}
                      <div
                        key={add[3].id}
                        role="group"
                        aria-labelledby="checkbox-group"
                        onClick={() => setSelectedAdd1(add[3])}
                      >
                        <label
                          htmlFor={add[3].id}
                          className={`containerr flex items-center border-2 rounded-lg p-5 cursor-pointer hover:border-Purplish-blue hover:bg-Alabaster mt-5 justify-between ${
                            checkedValues[add[3].id]
                              ? "border-Purplish-blue bg-Alabaster"
                              : ""
                          }`}
                        >
                          <div className="flex gap-4">
                            <Field
                              type="checkbox"
                              name="checked"
                              value={add[3].name}
                              id={add[3].id}
                              onClick={() => handleToggle1(add[3].id)}
                              checked={checkedValues[add[3].id]}
                            />
                            <span className="checkmark top-8 left-3 rounded-md"></span>
                            <div>
                              <h3 className="text-base lg:text-xl text-Marine-blue font-medium">
                                {add[3].name}
                              </h3>
                              <p className="text-Cool-gray text-xs">
                                {add[3].paragraph}
                              </p>
                            </div>
                          </div>
                          <p className="text-Purplish-blue text-xs">
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
                          className={`containerr flex items-center border-2 rounded-lg p-5 cursor-pointer hover:border-Purplish-blue hover:bg-Alabaster mt-5 justify-between ${
                            checkedValues[add[4].id]
                              ? "border-Purplish-blue bg-Alabaster"
                              : ""
                          }`}
                        >
                          <div className="flex gap-4">
                            <Field
                              type="checkbox"
                              name="checked"
                              value={add[4].name}
                              id={add[4].id}
                              onClick={() => handleToggle1(add[4].id)}
                              checked={checkedValues[add[4].id]}
                            />
                            <span className="checkmark top-8 left-3 rounded-md"></span>
                            <div>
                              <h3 className="text-base lg:text-xl text-Marine-blue font-medium">
                                {add[4].name}
                              </h3>
                              <p className="text-Cool-gray text-xs">
                                {add[4].paragraph}
                              </p>
                            </div>
                          </div>
                          <p className="text-Purplish-blue text-xs">
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
                          className={`containerr flex items-center border-2 rounded-lg p-5 cursor-pointer hover:border-Purplish-blue hover:bg-Alabaster mt-5 justify-between ${
                            checkedValues[add[5].id]
                              ? "border-Purplish-blue bg-Alabaster"
                              : ""
                          }`}
                        >
                          <div className="flex gap-4">
                            <Field
                              type="checkbox"
                              name="checked"
                              value={add[5].name}
                              id={add[5].id}
                              onClick={() => handleToggle1(add[5].id)}
                              checked={checkedValues[add[5].id]}
                            />
                            <span className="checkmark top-8 left-3 rounded-md"></span>
                            <div>
                              <h3 className="text-base lg:text-xl text-Marine-blue font-medium">
                                {add[5].name}
                              </h3>
                              <p className="text-Cool-gray text-xs">
                                {add[5].paragraph}
                              </p>
                            </div>
                          </div>
                          <p className="text-Purplish-blue text-xs">
                            {add[5].price}
                          </p>
                        </label>
                      </div>
                      {/* ))} */}
                      {errors.checked && touched.checked && (
                        <p className="error text-red-500">{errors.checked}</p>
                      )}
                      <div className="fixed bottom-0 lg:absolute lg:right-[5rem] bg-white lg:-bottom-5  w-full lg:w-[37rem]  right-0 text-end py-5">
                        <button
                          onClick={handleSubmit}
                          className="py-2 bg-Marine-blue px-6 me-6 lg:me-0 rounded-lg text-white capitalize"
                        >
                          next step
                        </button>
                        <button
                          onClick={() => handleCategoryChange("summary")}
                          className="py-2 text-Cool-gray font-medium px-6 absolute  left-0  capitalize"
                        >
                          Go back
                        </button>
                      </div>
                      {/* <p>{add.id=1}</p> */}
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
