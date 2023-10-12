import React from "react";

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
        <div>
          {selectedPlan.category === "month" ? (
            <div>
              <div className="mt-10 bg-Alabaster p-5 rounded-xl">
                <div className="grid grid-cols-2 lg:text-lg text-base text-Marine-blue font-bold">
                  <p className="w-[120%] lg:w-full">
                    {selectedPlan.pilihan}{" "}
                    <span>({selectedPlan.pilihanMo})</span>
                  </p>
                  <p className="text-end">{selectedPlan.price}</p>
                  <a
                    href="#"
                    className="text-base font-normal text-Cool-gray underline"
                  >
                    Change
                  </a>
                </div>
                <hr className="my-3" />
                <div className="flex items-center justify-between mt-1">
                  <p className="text-Cool-gray">{selectedAdd1.name}</p>
                  <p className="text-Marine-blue">{selectedAdd1.price}</p>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <p className="text-Cool-gray">{selectedAdd2.name}</p>
                  <p className="text-Marine-blue">{selectedAdd2.price}</p>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <p className="text-Cool-gray">{selectedAdd3.name}</p>
                  <p className="text-Marine-blue">{selectedAdd3.price}</p>
                </div>
              </div>
              <div className="flex items-center justify-between mt-7 px-5">
                <p className="text-Cool-gray">Total (per month)</p>
                <p className="lg:text-2xl text-base font-bold text-Purplish-blue">
                  +$
                  {(selectedAdd1.itsPrice || 0) +
                    (selectedAdd2.itsPrice || 0) +
                    (selectedAdd3.itsPrice || 0) +
                    selectedPlan.itsPrice}
                  /mo
                </p>
              </div>
              <div className="fixed bottom-0 lg:absolute lg:right-[5rem] bg-white lg:-bottom-5  w-full lg:w-[37rem]  right-0 text-end py-5">
                <button
                  onClick={handleSubmit}
                  className="py-2 bg-Purplish-blue px-6 me-6 lg:me-0 rounded-lg text-white capitalize"
                >
                  confirm
                </button>
                <button
                  onClick={() => handleCategoryChange("adds-ons")}
                  className="py-2 text-Cool-gray font-medium px-6 absolute  left-0  capitalize"
                >
                  Go back
                </button>
              </div>
            </div>
          ) : (
            <></>
          )}
          {selectedPlan.category === "year" ? (
            <div>
              <div className="mt-10 bg-Alabaster p-5 rounded-xl">
                <div className="grid grid-cols-2 text-base lg:text-lg text-Marine-blue font-bold">
                  <p className="w-[120%] lg:w-full">
                    {selectedPlan.pilihan}{" "}
                    <span>({selectedPlan.pilihanYr})</span>
                  </p>
                  <p className="text-end">{selectedPlan.price}</p>
                  <a
                    href="#"
                    className="text-base font-normal text-Cool-gray underline"
                  >
                    Change
                  </a>
                </div>
                <hr className="my-3" />
                <div className="flex items-center justify-between mt-1">
                  <p className="text-Cool-gray">{selectedAdd1.name}</p>
                  <p className="text-Marine-blue">{selectedAdd1.price}</p>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <p className="text-Cool-gray">{selectedAdd2.name}</p>
                  <p className="text-Marine-blue">{selectedAdd2.price}</p>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <p className="text-Cool-gray">{selectedAdd3.name}</p>
                  <p className="text-Marine-blue">{selectedAdd3.price}</p>
                </div>
              </div>
              <div className="flex items-center justify-between mt-7 px-5">
                <p className="text-Cool-gray">Total (per year)</p>
                <p className="lg:text-2xl text-base font-bold text-Purplish-blue">
                  +$
                  {(selectedAdd1.itsPrice || 0) +
                    (selectedAdd2.itsPrice || 0) +
                    (selectedAdd3.itsPrice || 0) +
                    selectedPlan.itsPrice}
                  /yr
                </p>
              </div>
              <div className="fixed bottom-0 lg:absolute lg:right-[5rem] bg-white lg:-bottom-5  w-full lg:w-[37rem]  right-0 text-end py-5">
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
