import React, { useState } from 'react';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentData';

const App = () => {
  const [formData, setFormData] = useState([]);

  const handleFormSubmit = (data) => {
    setFormData((prevData) => [...prevData, data]);
  };

  return (
    <>
      <StudentForm onFormSubmit={handleFormSubmit} />
      <StudentList formData={formData} />
    </>
  );
};

export default App;
