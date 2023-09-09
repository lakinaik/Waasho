import React, { useState } from 'react';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateStep = () => {
    const newErrors = {};
    if (step === 1) {
      if (!formData.fname) newErrors.fname = 'First name is required';
      if (!formData.lname) newErrors.lname = 'Last name is required';
    } else if (step === 2) {
      if (!formData.email) newErrors.email = 'Email is required';
    } else if (step === 3) {
      if (!formData.phone) newErrors.phone = 'Phone number is required';
    }

    return newErrors;
  };

  const handleNext = () => {
    const newErrors = validateStep();
    if (Object.keys(newErrors).length === 0) {
      setStep(step + 1);
    } else {
      setErrors(newErrors);
    }
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateStep();
    if (Object.keys(newErrors).length === 0) {
      // Handle form submission here
      console.log('Form submitted:', formData);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="time-slots bg-stone-100 shadow-md max-w-xl p-10 mx-auto my-4">
      <h2 className="text-xl font-semibold">Personal Details - Step {step}</h2>
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div className="text-center">
            <input
              type="text"
              id="fname"
              name="fname"
              className={`outline-0 p-2 my-2 rounded-md border-2 border-sky-500 w-[50%] ${
                errors.fname ? 'border-red-500' : ''
              }`}
              placeholder="Enter your Firstname"
              value={formData.fname}
              onChange={handleInputChange}
            />
            {errors.fname && <div className="text-red-500">{errors.fname}</div>}

            <input
              type="text"
              id="lname"
              name="lname"
              className={`outline-0 p-2 my-2 rounded-md border-2 border-sky-500 w-[50%] ${
                errors.lname ? 'border-red-500' : ''
              }`}
              placeholder="Enter your Lastname"
              value={formData.lname}
              onChange={handleInputChange}
            />
            {errors.lname && <div className="text-red-500">{errors.lname}</div>}
          </div>
        )}
        {step === 2 && (
          <div className="text-center">
            {/* Input for email */}
          </div>
        )}
        {step === 3 && (
          <div className="text-center">
            {/* Input for phone */}
          </div>
        )}
        <div className="text-center">
          {step > 1 && (
            <button
              type="button"
              className="px-3 py-2 rounded-md border-2 border-sky-500 text-sky-500 bg-white duration-300 hover:bg-transparent hover:text-black my-2 mx-2"
              onClick={handlePrevious}
            >
              Previous
            </button>
          )}
          {step < 3 && (
            <button
              type="button"
              className="px-3 py-2 rounded-md border-2 border-sky-500 text-white bg-sky-500 duration-300 hover:bg-transparent hover:text-black my-2 mx-2"
              onClick={handleNext}
            >
              Next
            </button>
          )}
          {step === 3 && (
            <button
              type="submit"
              className="px-3 py-2 rounded-md border-2 border-sky-500 text-white bg-sky-500 duration-300 hover:bg-transparent hover:text-black my-2 mx-2"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default MultiStepForm;
