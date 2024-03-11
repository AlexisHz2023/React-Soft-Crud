import React, { useState } from "react";
import { MdOutlineEmail, MdLockOutline } from "react-icons/md";
import { RiEyeLine, RiEyeOffFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([email, password].includes("")) {
      toast.error("Todos los campos  son obligatorios", {
        position: "top-center",
        theme: "light",

      });
      return;
    }
    if (password.length < 6) {
      toast.error("La contraseña debe cumplir con al menos 6 caracteres", {
        theme: "dark",
      });
      return;
    }
    console.log("toda la funcionalidad del login");
    navigate("/eleccion");
  };

  return (
    <div className="absolute items-center justify-center bg-white p-10 rounded-lg w-full md:w-[500px] z-10">
      <div className="mb-[310px]" 	>
        <h1 className="text-3xl uppercase font-bold text-center">
          Iniciar sesión
        </h1>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-6" >
        <div className="relative">
          <MdOutlineEmail className="absolute left-2 z-10 -translate-y-3/4 text-gray-500 -top-52" />
          <input
            type="email"
            className="w-full border bg-gray-200 outline-none py-3 px-8 rounded-lg -top-60 relative"
            placeholder="Correo Electronico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="relative">
          <MdLockOutline className="absolute left-2 -top-44 z-10 -translate-y-3/4 text-gray-500" />
          <input
            type={showPassword ? "text" : "password"}
            className="w-full border bg-gray-200 outline-none py-3 px-8 rounded-lg relative -top-52"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {showPassword ? (
            <RiEyeLine
              onClick={handleShowPassword}
              className="absolute right-2 -translate-y-3/4 text-gray-500 hover:cursor-pointer -top-44 "
            />
          ) : (
            <RiEyeOffFill
              onClick={handleShowPassword}
              className="absolute right-2 -translate-y-3/4 text-gray-500 hover:cursor-pointer -top-44"
            />
          )}
        </div>
        <div>
          <button 
           onClick={handleSubmit}
           className="mt-6 bg-primary text-white w-full relative -top-44 py-2 px-6 rounded-lg hover:scale-105 transition-all">
            Ingresar
          </button>
        </div>
      </form>
     <div className="text-center -top-[120px] relative" >
    ¿Tienes Problemas para ingresar? <Link to="problemas" className="text-sky-600 font-medium">Click Aqui</Link>
     </div>
     <p className="text-primary text-sm text-center">©Fegs-Soft2024</p>
    </div>
  );
};




export default Login;
