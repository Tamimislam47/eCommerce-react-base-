import React from 'react'

export default function FormController() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const data = Object.fromEntries(form.entries());

    return data;
  };

  return {
    handleSubmit,
  };
}
