import React from "react";
import { Plan } from "./maping/Plan";

const MyForm = ({
  
  handleCategoryChange,
  selectedPlan,
  setSelectedPlan,
  showMonth,
  setShowMonth,
  showYear,
  setShowYear,
}) => {

  const filteredPlans = showMonth
    ? Plan.filter((item) => item.category === "month")
    : showYear
    ? Plan.filter((item) => item.category === "year")
    : []
  ;

  const handleSubmit = () => {
    if (selectedPlan) {
      // Lakukan tindakan yang inginkan dengan data plan yang dipilih
      console.log("Plan yang dipilih:", selectedPlan);
      handleCategoryChange('add-ons')
      // mengirimnya ke server atau melakukan perubahan state lainnya.
    } else {
      console.log("Silakan pilih sebuah plan terlebih dahulu.");
    }
  };

  return (
    <div>
      {showMonth ? (<div className="lg:grid grid-cols-3 mt-10  gap-6">
        {filteredPlans.map((item) => (
          <div
            key={item.id}
            className={`border-2 lg:h-[15rem] rounded-lg p-5 relative cursor-pointer hover:border-Purplish-blue flex gap-3 mt-2 lg:mt-0 lg:block ${
              selectedPlan === item ? "border-Purplish-blue bg-Alabaster" : ""
            }`}
            onClick={() => setSelectedPlan(item)}
          >
            <img src={item.img} alt={item.pilihan} />
            <div className="lg:absolute bottom-4">
              <p className="font-bold text-Marine-blue text-lg">{item.pilihan}</p>
              <p className="text-Cool-gray">{item.price}</p>
              <p className="hidden">{item.pilihanMo}</p>
            </div>
          </div>
        ))}
      </div>) : <></>}

      {showYear ? (<div className="lg:grid grid-cols-3 mt-10  gap-6">
        {filteredPlans.map((item) => (
          <div
            key={item.id}
            className={`border-2 lg:h-[15rem] rounded-lg p-5 relative cursor-pointer hover:border-Purplish-blue flex gap-3 mt-2 lg:mt-0 lg:block ${
              selectedPlan === item ? "border-Purplish-blue bg-Alabaster" : ""
            }`}
            onClick={() => setSelectedPlan(item)}
          >
            <img src={item.img} alt={item.pilihan} />
            <div className="lg:absolute bottom-4">
              <p className="font-bold text-Marine-blue text-lg">{item.pilihan}</p>
              <p className="text-Cool-gray">{item.price}</p>
              <p className="hidden">{item.pilihanYr}</p>
            </div>
          </div>
      ))}
    </div>) : <></>}
    
    <div className="flex items-center justify-center gap-10 mt-6 bg-Alabaster rounded-md">
        <p className={` text-lg font-medium hidden lg:block ${showYear ? ' text-Cool-gray' : 'text-Marine-blue'}`}>showMonth</p>
        <p className={` text-lg font-medium lg:hidden ${showYear ? ' text-Cool-gray' : 'text-Marine-blue'}`}>Monthly</p>
        <label class="switch">
          <input
            type="checkbox"
            checked={showYear}
            onChange={() => {
              setShowMonth(!showMonth);
              setShowYear(!showYear);
            }}
          />
          <span class="slider round"></span>
        </label>
        <p className={` text-lg font-medium hidden lg:block ${showMonth ? ' text-Cool-gray' : 'text-Marine-blue'}`}>Show Year</p>
        <p className={` text-lg font-medium lg:hidden ${showMonth ? ' text-Cool-gray' : 'text-Marine-blue'}`}>Yearly</p>
      </div>
      <div>
        <div className="fixed bottom-0 lg:absolute lg:right-[5rem] bg-white lg:-bottom-5  w-full lg:w-[37rem]   right-0 text-end py-5">
          <button
            onClick={handleSubmit}
            className="py-2 bg-Marine-blue px-6 me-6 lg:me-0 rounded-lg text-white capitalize"
            >
            next step
          </button>
          <button
            onClick={()=>handleCategoryChange('personal-info')}
            className="py-2 text-Cool-gray font-medium px-6 absolute  left-0  capitalize"
            >
            Go back
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyForm;
