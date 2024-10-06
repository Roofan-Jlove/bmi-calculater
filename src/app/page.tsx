// " use client"

import BMICalculator from "./components/BMICalculater";

import Image from "next/image";

const Home = () => {
  return (
    <main>
      <nav className="bg-lime-50 h-9 ">
        <div className="ml-4 flex">
        <Image src="/CRK.png" alt="logo" width={70} height={70} />
        <h1 className="mt-2 text-2xl text-gray-700 justify-center "> CRK WEB Solutions</h1>
        </div>
        
      </nav>
      
      <div className="max-w-md mx-auto mt-4 p-2 bg-slate-400 rounded-3xl shadow-md text-center font-semibold mb-0 text-white">
        <h1>BMI Calculater By Khurram Shahzad</h1>
      </div>

      <div className="flex flex-wrap justify-center items-center sm:flex-col md:flex-row lg:justify-between">
        <aside className="max-w-sm mx-auto mt-1 p-3 bg-lime-50 rounded-2xl shadow-md h-70">
          <h1 className="text-xl font-semibold mb-4">
            What is BMI and its Formula
          </h1>
          <p>
            The body mass index or BMI is a <br />
            ratio of mass to height.It is calculated <br />
            as kg per square meter or pounds per
            <br /> square inch of height. Numeric BMI
            <br /> values correspond to weight categories
            <br /> including underweight, normal,
            <br /> overweight and obese.
          </p>
          <p>In metric units, using kg and meters:</p>
          <p className="font-semibold">BMI= weight in kg / height2 in m</p>
        </aside>

        <div className="max-w-sm mx-auto mt-1 p-3 bg-lime-50 rounded-2xl shadow-md h-70">
          <BMICalculator />
        </div>

        <div className="max-w-sm mx-auto mt-2 p-3 bg-lime-50 rounded-2xl shadow-md h-70 ">
          <h1 className="text-xl font-semibold mb-4">Match your result</h1>
          <br />
          <table className="mt-0">
            <thead>
              <tr>
                <th className="border border-gray-800 px-4 py-2 bg-slate-400">
                  BMI
                </th>
                <th className="border border-gray-800 px-4 py-2 bg-slate-400">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-800 px-3 py-2 bg-orange-200">
                  less-18.4
                </td>
                <td className="border border-gray-800 px-3 py-2 bg-orange-200">
                  Underweight
                </td>
              </tr>
              <tr>
                <td className="border border-gray-800 px-3 py-2 bg-green-300">
                  18.5-24.9
                </td>
                <td className="border border-gray-800 px-3 py-2 bg-green-300">
                  Normal
                </td>
              </tr>
              <tr>
                <td className="border border-gray-800 px-3 py-2 bg-orange-300">
                  25-39.9
                </td>
                <td className="border border-gray-800 px-3 py-2 bg-orange-300">
                  Overweight
                </td>
              </tr>
              <tr>
                <td className="border border-gray-800 px-3 py-2 bg-red-500">
                  40-above
                </td>
                <td className="border border-gray-800 px-3 py-2 bg-red-500">
                  Obese
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default Home;
