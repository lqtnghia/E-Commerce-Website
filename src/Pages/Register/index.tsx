import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button, IconButton, InputAdornment } from "@mui/material";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <section className="section py-10">
      <div className="custom-container">
        <div className="card shadow-md w-[500px] m-auto rounded-md bg-white p-5 px-10">
          <h3 className="text-[18px] text-black text-center mb-5">
            Register with a new account
          </h3>
          <form action="" className="w-full">
            <div className="form-group w-full mb-5">
              <TextField
                id="name"
                label="Full Name"
                type="text"
                variant="outlined"
                className="w-full"
              />
            </div>
            <div className="form-group w-full mb-5">
              <TextField
                id="email"
                label="Email Id *"
                type="email"
                variant="outlined"
                className="w-full"
              />
            </div>
            <div className="form-group w-full mb-5">
              <TextField
                id="password"
                label="Password *"
                variant="outlined"
                className="w-full"
                type={showPassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleTogglePassword} edge="end">
                        {showPassword ? <MdVisibility /> : <MdVisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
            </div>
            <div className="flex items-center w-full mt-3">
              <Button className="btn-org btn-lg w-full">Register</Button>
            </div>
            <p>
              Already have an account?{" "}
              <Link
                to="/login"
                className="link text-[14px] font-[600] text-primary-main"
              >
                {" "}
                Login
              </Link>
            </p>
            <p className="text-center font-[500]">
              Or continue with social account
            </p>
            <Button className="flex gap-3 w-full !bg-[#f1f1f1] btn-lg !text-black">
              <FcGoogle className="text-[20px]" /> Login with Google
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
