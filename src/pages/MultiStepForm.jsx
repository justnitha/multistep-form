import React, { useState, useEffect } from "react";
import { Linked } from "../components/maping/Linked";
import PersonaLInfo from "../components/PersonaLInfo";
import IsPlan from "../components/IsPlan";
import AddOns from "../components/AddOns";
import Summary from "../components/Summary";
import swal from "sweetalert";



export default function MultiStepForm() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hiddenImages, setHiddenImages] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(null); // usestate Plan
  const [selectedAdd1, setSelectedAdd1] = useState([]);
  const [selectedAdd2, setSelectedAdd2] = useState(false);
  const [selectedAdd3, setSelectedAdd3] = useState(false);
  const [showMonth, setShowMonth] = useState(false); // usestate Plan
  const [showYear, setShowYear] = useState(true);
  const [checked1, setChecked1] = useState(true);// usestate adds-ons
  const [addOns, setAddOns] = useState({
    checked1: false,
  });
  const [checkedValues, setCheckedValues] = useState(addOns.checked1);
  

  const [formData, setFormData] = useState({
    Nama: '',
    Email: '',
    Phone: '',
    price:[],
    checked: [] ,
  });

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setHiddenImages([]);
  };

  useEffect(() => {
    handleCategoryChange("plan");
  }, []);

  const filteredData =
    selectedCategory === "All"
      ? Linked
      : Linked.filter((item) => item.category === selectedCategory);

  const visibleImages = filteredData.filter(
    (item) => !hiddenImages.includes(item.id)
  );

  function handleSubmit() {
    swal({
      title: "Berhasil",
      icon: "success",
      text:""
    })
    setFormData({
      Nama: '',
      Email: '',
      Phone: '',
      price: [],
      checked: [],
    });
    setSelectedPlan(null);
    setSelectedAdd1([]);
    setSelectedAdd2(false);
    setSelectedAdd3(false);
    setShowMonth(false);
    setShowYear(true);
    setChecked1(true);
    setCheckedValues(false)

    handleCategoryChange("personal-info")
  }

  return (
    <div className=" lg:mt-16 md:mt-48 h-[100vh] lg:h-[84vh] lg:p-10 lg:rounded-3xl  lg:flex lg:w-[80%] md:w-[90%] md:m-auto lg:m-auto lg:bg-white relative">
      {/* computer */}
      <nav className="bg-desktop bg-no-repeat h-[73vh] w-[40%] p-8 hidden lg:block">
        <ul className=" uppercase text-white">
          {/* personal info */}
          <div
            // onClick={() => handleCategoryChange("personal-info")}
            className={selectedCategory === "personal-info" ? "cursor-pointer" : "cursor-pointer"}
          >
            <li className="flex items-center gap-7">
              <h2 className={`${selectedCategory === "personal-info" ? "bg-Light-blue border border-Light-blue text-Marine-blue rounded-[6rem] py-3 px-5" : "border border-2-white rounded-[6rem] py-3 px-5"}`}>
                1
              </h2>
              <div>
                <h4 className={`${selectedCategory === "personal-info" ? "text-white" : "text-Cool-gray"}`}>step 1</h4>
                <p className="font-bold tracking-wider">your info</p>
              </div>
            </li>
          </div>
          {/* your plan */}
          <div
            // onClick={() => handleCategoryChange("plan")}
            className={selectedCategory === "plan" ? "cursor-pointer" : " cursor-pointer"}
          >
            <li className="flex items-center gap-7 mt-5">
              <h2 className={`${selectedCategory === "plan" ? "bg-Light-blue border border-Light-blue text-Marine-blue rounded-[6rem] py-3 px-5" : "border border-2-white rounded-[6rem] py-3 px-5"}`}>
                2
              </h2>
              <div>
                <h4 className={`${selectedCategory === "plan" ? "text-white" : "text-Cool-gray"}`}>step 2</h4>
                <p className="font-bold tracking-wider">select plan</p>
              </div>
            </li>
          </div>
          {/* add-ons */}
          <div
            // onClick={() => handleCategoryChange("add-ons")}
            className={selectedCategory === "add-ons" ? "cursor-pointer" : " cursor-pointer"}
            >
            <li className="flex items-center gap-7 mt-5">
            <h2 className={`${selectedCategory === "add-ons" ? "bg-Light-blue border border-Light-blue text-Marine-blue rounded-[6rem] py-3 px-5" : "border border-2-white rounded-[6rem] py-3 px-5"}`}>
              3
            </h2>
              <div>
                <h4 className={`${selectedCategory === "add-ons" ? "text-white" : "text-Cool-gray"}`}>step 3</h4>
                <p className="font-bold tracking-wider">add-ons</p>
              </div>
            </li>
          </div>
          <div 
            // onClick={() => handleCategoryChange("summary")}
            className={selectedCategory === "summary" ? "cursor-pointer" : " cursor-pointer"}
          >
            <li className="flex items-center gap-7 mt-5">
            <h2 className={`${selectedCategory === "summary" ? "bg-Light-blue border border-Light-blue text-Marine-blue rounded-[6rem] py-3 px-5" : "border border-2-white rounded-[6rem] py-3 px-5"}`}>
              4
            </h2>
              <div>
                <h4 className={`${selectedCategory === "summary" ? "text-white" : "text-Cool-gray"}`}>step 4</h4>
                <p className="font-bold tracking-wider">summary</p>
              </div>
            </li>
          </div>
        </ul>
      </nav>

      {/* mobile */}
      <nav className="bg-mobile bg-no-repeat lg:hidden bg-cover bg-bottom md:bg-top h-[15rem] relative">
        <ul className=" uppercase text-white flex items-center justify-center gap-4 py-7 md:py-14 md:text-2xl">
          {/* personal info */}
          <div className={selectedCategory === "personal-info" ? "cursor-pointer" : "cursor-pointer"}>
            <li>
              <h2 className={`${selectedCategory === "personal-info" ? "bg-Light-blue border border-Light-blue text-Marine-blue rounded-[6rem] py-3 px-5" : "border border-2-white rounded-[6rem] py-3 px-5"}`}>1</h2>
            </li>
          </div>
          {/* your plan */}
          <div className={selectedCategory === "plan" ? "cursor-pointer" : " cursor-pointer"}>
            <li>
              <h2 className={`${selectedCategory === "plan" ? "bg-Light-blue border border-Light-blue text-Marine-blue rounded-[6rem] py-3 px-5" : "border border-2-white rounded-[6rem] py-3 px-5"}`}>2 </h2>
            </li>
          </div>
          {/* add-ons */}
          <div className={selectedCategory === "add-ons" ? "cursor-pointer" : " cursor-pointer"}>
            <li>
            <h2 className={`${selectedCategory === "add-ons" ? "bg-Light-blue border border-Light-blue text-Marine-blue rounded-[6rem] py-3 px-5" : "border border-2-white rounded-[6rem] py-3 px-5"}`}>3</h2>
            </li>
          </div>
          {/* summary */}
          <div className={selectedCategory === "summary" ? "cursor-pointer" : " cursor-pointer"}
          >
            <li>
            <h2 className={`${selectedCategory === "summary" ? "bg-Light-blue border border-Light-blue text-Marine-blue rounded-[6rem] py-3 px-5" : "border border-2-white rounded-[6rem] py-3 px-5"}`}>4</h2>
            </li>
          </div>
        </ul>
      </nav>

      {visibleImages.map((item) => (
        <div key={item.id} className="md:w-[full] lg:w-full lg:px-20  md:top-[10rem] lg:top-0  md:left-12 lg:left-0 lg:relative rounded-2xl md:rounded-none lg:rounded-none">
          {/* <h1 className='text-Marine-blue text-2xl md:text-4xl lg:text-4xl font-bold'>{item.header}</h1>
          <p className=' text-Cool-gray mt-2 md:text-base'>{item.paragraph}</p> */}
          {item.category === "personal-info" && (
              <PersonaLInfo handleCategoryChange={handleCategoryChange} formData={formData} setFormData={setFormData} />
            )}
          {item.category === "plan" && (
            <IsPlan 
              handleCategoryChange={handleCategoryChange} 
              formData={formData} 
              setFormData={setFormData}
              selectedPlan={selectedPlan} 
              setSelectedPlan={setSelectedPlan} 
              showMonth={showMonth} 
              setShowMonth={setShowMonth} 
              showYear={showYear} 
              setShowYear={setShowYear} 
              />
          )}
          {item.category === "add-ons" && (
            <AddOns 
              handleCategoryChange={handleCategoryChange} 
              formData={formData} 
              selectedPlan={selectedPlan}
              setSelectedPlan={selectedPlan}  
              setFormData={setFormData}
              checked1={addOns.checked1}
              setChecked1={(value) => setAddOns({ ...addOns, checked1: value })}
              setSelectedAdd1={setSelectedAdd1}
              selectedAdd1={selectedAdd1}
              setSelectedAdd2={setSelectedAdd2}
              setSelectedAdd3={setSelectedAdd3}
              checkedValues={checkedValues}
              setCheckedValues={setCheckedValues}
            />
          )}
          {item.category === "summary" && (
            <Summary
              handleCategoryChange={handleCategoryChange} 
              formData={formData} 
              setFormData={setFormData}
              selectedPlan={selectedPlan}
              setSelectedPlan={selectedPlan}  
              showMonth={showMonth}
              showYear={showYear}
              setShowMonth={setShowMonth}
              setShowYear={setShowYear}
              setSelectedAdd1={setSelectedAdd1}
              selectedAdd1={selectedAdd1}
              selectedAdd2={selectedAdd2}
              selectedAdd3={selectedAdd3}
              handleSubmit={handleSubmit}
            />
          )}
        </div>
      ))}
    </div>
  );
}
