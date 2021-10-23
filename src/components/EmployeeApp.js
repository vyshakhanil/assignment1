import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";

const EmployeeApp = () => {
  let [data, setdata] = useState({
    Name: "",
    Address: "",
    pincode: 0,
    Mobilenumber: 0,
    Emailid: "",
    password: "",
    confirmpassword: "",
  });

  const readFn = () => {
    console.log(data);
  };

  const handleName = (event) => {
    setdata((prevData)=>
    {return{...prevData, Name: event.target.value }});
  };

  const handleAddress = (event) => {
    setdata((prevData)=>{return{...prevData, Address: event.target.value }});
  };

  const handlePincode = (event) => {
    setdata((prevData)=>{return{...prevData, pincode: event.target.value 
    }});
  };

  const handleMobilenumber = (event) => {
    setdata((prevData)=>{return{...prevData, Mobilenumber: event.target.value }});
  };

  const handleEmailid = (event) => {
    setdata((prevData)=>{return{...prevData, Emailid: event.target.value }});
  };

  const handlepassword = (event) => {
    setdata((prevData)=>{return{...prevData, password: event.target.value }});
  };

  const handleConfirmpassword = (event) => {
    setdata((prevData)=>{return{...prevData, Confirmpassword: event.target.value }});
  };

  return (
    <div>
      <TextField
        name="Name"
        onChange={handleName}
        value={data.Name}
        margin="normal"
        label="Person Name"
        variant="outlined"
        fullWidth
      />

      <TextField
        name="Address"
        onChange={handleAddress}
        value={data.Address}
        margin="normal"
        label="Person Address"
        variant="outlined"
        fullWidth
      />

      <TextField
        name="pincode"
        onChange={handlePincode}
        value={data.pincode}
        margin="normal"
        label="Place Pincode"
        variant="outlined"
        fullWidth
      />

      <TextField
        name="Mobilenumber"
        onChange={handleMobilenumber}
        value={data.Mobilenumber}
        margin="normal"
        label="Person Mobilenumber"
        variant="outlined"
        fullWidth
      />

      <TextField
        name="Emailid"
        onChange={handleEmailid}
        value={data.Emailid}
        margin="normal"
        label="Person Emailid"
        variant="outlined"
        fullWidth
      />

      <TextField
        type="password"
        onChange={handlepassword}
        value={data.password}
        margin="normal"
        label="Enter password"
        variant="outlined"
        fullWidth
      />

      <TextField
        type="confirmpassword"
        onChange={handleConfirmpassword}
        value={data.confirmpassword}
        margin="normal"
        label="enter confirmpassword"
        variant="outlined"
        fullWidth
      />

      <Button onClick={readFn} fullWidth color="secondary" variant="contained">
        {" "}
        SUBMIT{" "}
      </Button>
    </div>
  );
};

export default EmployeeApp;
