import React from "react";

function LandingPage() {
  return (
    <div>
      <div className="Starcontainer flex justify-center relative align-center  items-center">
        <div className="Star mt-20  mr-10 rounded-full flex justify-center align-center  items-center w-[350px] h-[50px] bg-zinc-100">
          <img className="star h-4 w-24 absolute left-[39%]"
            src="https://cdn.prod.website-files.com/608acd17c4cd497d774d2c76/675b48cab6a43826473fe5f0_star-yellow-p-500.png"
            alt=""
          />
          <h1 className="Text text-[17.5px] pl-24 font-thin text-black text-white">
            +500 Happy Customers
          </h1>
        </div>
      </div>
      <div className="heading mt-[5px] mr-[10px]">
        <div className="heading flex justify-center align-center  items-center ">
          <h1 className="text-8xl font-bold ">Wonder Commerce </h1>
        </div>
        <div className="heading flex justify-center align-center  items-center ">
          <h1 className="text-8xl font-bold ">Experience </h1>
        </div>
      </div>
      <div className="miniText m-16 text-[21px]">
        <div className="TEXT flex justify-center align-center  items-center ">
          <h1 className="text-1.5xl font-low ">
            With over 70% of purchases happening on mobile,
          </h1>
        </div>
        <div className="TEXT flex justify-center align-center  items-center ">
          <h1 className="text-1.5xl font-low ">
            our Shopify theme is built to convert mobile traffic into sales
            effortlessly.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
