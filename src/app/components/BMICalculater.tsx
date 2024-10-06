"use client"

import { useState } from 'react';



const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState<number | null>(null);

  const calculateBMI = () => {
    const heightInMeters = parseFloat(height) / 100;
    const bmiValue = parseFloat(weight) / (heightInMeters * heightInMeters);
    setBmi(bmiValue);
  };

  return (
    <div>
      <h1 className="text-xl font-semibold mb-4 h-70">Check your BMI </h1>
      <div className="mb-4">
        <label className="block text-gray-700">Weight (kg):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Height (cm):</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg"
        />
      </div>
      <button
        onClick={calculateBMI}
        className="w-full bg-gray-500 text-white py-2 rounded-lg"
      >
        Calculate BMI
      </button>
      {bmi && (
        <div className="mt-4">
          <h2 className="text-xl">Your BMI: {bmi.toFixed(2)}</h2>
        </div>
      )}
    </div>
  );
};

export default BMICalculator;