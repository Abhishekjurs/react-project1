import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

const UserForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form>
      <TextField name="name" label="Name" onChange={handleChange} />
      <TextField name="email" label="Email" onChange={handleChange} />
      <TextField name="phone" label="Phone" onChange={handleChange} />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default UserForm;
