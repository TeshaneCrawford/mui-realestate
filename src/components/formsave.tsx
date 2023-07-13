import React, { useState, useEffect } from 'react';
const MultiStepForm = () => {
    const [formData, setFormData] = useState({});
    const [currentStep, setCurrentStep] = useState(1);

    // Autosave function to send data to the save endpoint. assume function below exists

      // Call autosaveData whenever currentStep changes. Assume autosave function above exists
  useEffect(() => {
    autosaveData();
  }, [currentStep]);

    // Function to handle form data changes
    const handleFormDataChange = (key, value) => {
        setFormData(prevData => ({
          ...prevData,
          [key]: value
        }));
      };
    
      // Function to handle step changes
      const handleStepChange = step => {
        setCurrentStep(step);
      };

      // Render the form step based on currentStep

      // first step of the form
      const Step1 = ({ formData, onChange }) => {
        const handleInputChange = event => {
          const { name, value } = event.target;
          onChange(name, value);
        };
    }
}