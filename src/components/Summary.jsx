import React from "react";
import { Linked } from "./maping/Linked";

export default function Summary({
  formData,
  selectedPlan,
  selectedAdd1,
  selectedAdd2,
  selectedAdd3,
  handleCategoryChange,
  handleSubmit,
}) {
  return (
    <div>
      {selectedPlan ? (
              <div className="md:mt-5 bg-white p-6 lg:p-0 w-[88%] lg:w-full lg:relative absolute top-28 lg:top-2 left-6 rounded-md ">
<h1 className="text-Marine-blue text-2xl md:text-4xl lg:text-4xl font-bold">
          {Linked[3].header}
        </h1>
        <p className=" text-Cool-gray mt-2 md:text-base mb-3">
          {Linked[3].paragraph}
        </p>
          {selectedPlan.category === "month" ? (
            <div>
              <div className="lg:mt-10 mt-5 bg-Alabaster p-5 rounded-xl">
                <div className="grid grid-cols-2 lg:text-lg text-base text-Marine-blue font-bold">
                  <p className="w-[120%] lg:w-full">
                    {selectedPlan.pilihan}{" "}
                    <span>({selectedPlan.pilihanMo})</span>
                  </p>
                  <p className="text-end text-sm lg:text-base">{selectedPlan.price}</p>
                  <a
                    href="#"
                    className="text-base font-normal text-Cool-gray underline"
                  >
                    Change
                  </a>
                </div>
                <hr className="my-3" />
                <div className="flex items-center justify-between mt-1">
                  <p className="text-Cool-gray text-sm lg:text-base">{selectedAdd1.name}</p>
                  <p className="text-Marine-blue text-sm lg:text-base">{selectedAdd1.price}</p>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <p className="text-Cool-gray text-sm lg:text-base">{selectedAdd2.name}</p>
                  <p className="text-Marine-blue text-sm lg:text-base">{selectedAdd2.price}</p>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <p className="text-Cool-gray text-sm lg:text-base">{selectedAdd3.name}</p>
                  <p className="text-Marine-blue text-sm lg:text-base">{selectedAdd3.price}</p>
                </div>
              </div>
              <div className="flex items-center justify-between mt-7 px-5">
                <p className="text-Cool-gray text-sm lg:text-base">Total (per month)</p>
                <p className="lg:text-2xl text-base font-bold text-Purplish-blue">
                  +$
                  {(selectedAdd1.itsPrice || 0) +
                    (selectedAdd2.itsPrice || 0) +
                    (selectedAdd3.itsPrice || 0) +
                    selectedPlan.itsPrice}
                  /mo
                </p>
              </div>
            </div>
          ) : (
            <></>
          )}
          {selectedPlan.category === "year" ? (
            <div>
              <div className="lg:mt-10 mt-5 bg-Alabaster p-5 rounded-xl">
                <div className="grid grid-cols-2 text-base lg:text-lg text-Marine-blue font-bold">
                  <p className="w-[120%] lg:w-full">
                    {selectedPlan.pilihan}{" "}
                    <span>({selectedPlan.pilihanYr})</span>
                  </p>
                  <p className="text-end text-sm lg:text-base">{selectedPlan.price}</p>
                  <a
                    href="#"
                    className="text-base font-normal text-Cool-gray underline"
                  >
                    Change
                  </a>
                </div>
                <hr className="my-3" />
                <div className="flex items-center justify-between mt-1">
                  <p className="text-Cool-gray text-sm lg:text-base">{selectedAdd1.name}</p>
                  <p className="text-Marine-blue text-sm lg:text-base">{selectedAdd1.price}</p>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <p className="text-Cool-gray text-sm lg:text-base">{selectedAdd2.name}</p>
                  <p className="text-Marine-blue text-sm lg:text-base">{selectedAdd2.price}</p>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <p className="text-Cool-gray text-sm lg:text-base">{selectedAdd3.name}</p>
                  <p className="text-Marine-blue text-sm lg:text-base">{selectedAdd3.price}</p>
                </div>
              </div>
              <div className="flex items-center justify-between mt-7 px-5">
                <p className="text-Cool-gray text-sm lg:text-base">Total (per year)</p>
                <p className="lg:text-2xl text-base font-bold text-Purplish-blue">
                  +$
                  {(selectedAdd1.itsPrice || 0) +
                    (selectedAdd2.itsPrice || 0) +
                    (selectedAdd3.itsPrice || 0) +
                    selectedPlan.itsPrice}
                  /yr
                </p>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <div></div>
      )}
      <div className="absolute bottom-0 lg:absolute lg:right-12 py-5 lg:py-0 lg:bottom-5  w-full lg:w-[37rem]  right-0 text-end ">
                <button
                  onClick={handleSubmit}
                  className="py-2 bg-Purplish-blue px-6 me-6 lg:me-0 rounded-lg text-white capitalize"
                >
                  confirm
                </button>
                <button
                  onClick={() => handleCategoryChange("add-ons")}
                  className="py-2 text-Cool-gray font-medium px-6 absolute  left-0  capitalize"
                >
                  Go back
                </button>
              </div>
    </div>
  );
}
