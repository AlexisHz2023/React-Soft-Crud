import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Actualizar = () => {
  const [numeroDocumento, setNumeroDocumento] = useState("");
  const [tipoDocumento, setTipoDocumento] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([tipoDocumento, numeroDocumento].includes("")) {
      toast.error("Todos los campos son obligatorios", {
        position: "top-center",
        theme: "light",
      });
      return;
    }

    if (tipoDocumento === "") {
      toast.error("Seleccione el tipo de documento", {
        position: "top-center",
        theme: "light",
      });
      return;
    }

    if (numeroDocumento.length < 10) {
      toast.warning("El número de documento debe tener al menos 10 dígitos", {
        theme: "light",
        position: "top-center"

      });
      return;
    }

    console.log("Toda la funcionalidad del login");
    navigate("/versaldo");
    
  };

  return (
    <div className='flex flex-col font-sans absolute w-[60%] bg-white h-[70%] rounded-xl right-[20%] shadow-lg shadow-gray-500/40 overflow-hidden'> 
        <img className='text-center absolute left-[25px] top-[20px] w-[18%] h-[10%]' src='../imagenes/Logo.png' alt="Logo"></img>
        <div class=" w-[550px] h-[550px] bg-blue-500 absolute -top-[60%] right-0 rounded-full left-[80%] z-0" ></div>
        <div class="absolute -top-[45%] w-[400px] h-[400px] right-0  left-[87%] bg-blue-300 rounded-full"></div>
        <p className='text-center py-20 font-sans text-Third text-5xl'>Ingrese Sus Datos</p>

        <div className='text-center -top-[5%] relative'>
          <form onSubmit={handleSubmit} action='/submit' method='post'>
            <label></label>
            <br></br>
            <select
              className='bg-blue-500 text-white w-[330px] h-[50px] rounded-lg'
              id="tipoDocumento"
              name="tipoDocumento"
              required
              value={tipoDocumento}
              onChange={(e) => setTipoDocumento(e.target.value)}
            >
              <option value="" disabled>Seleccione Tipo Documento</option>
              <option value="cc">Cédula de Ciudadanía</option>
              <option value="ti">Tarjeta de Identidad</option>
              <option value="pasaporte">Pasaporte</option>
              <option value="extranjeria">Cédula de Extranjería</option>
            </select>
            <br></br>
            <br />
            <label></label>
            <input
              className='bg-slate-50 w-[400px] h-[50px] shadow-lg border-2 shadow-blue-500/40 rounded-lg relative top-4 '
              type="number"
              placeholder='Numero De Documento'
              id="numeroDocumento"
              name="numeroDocumento"
              required
              value={numeroDocumento}
              onChange={(e) => setNumeroDocumento(e.target.value)}
            />
          </form>
        </div>

        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white w-[15%] h-[10%] left-[52%] relative top-[5%] py-4  rounded-lg hover:scale-105 transition-all hover:bg-Third"
        >
          Ingresar
        </button>

     
      <button onClick={() => window.history.back()} className='bg-blue-500 relative -top-[5%] w-[15%] left-[33%] h-[10%] text-center text-white hover:scale-105 transition-all hover:bg-Third rounded-lg'>Volver</button>
       

      <div class=" w-[550px] h-[550px] bg-blue-500 absolute top-[70%] right-0 rounded-full -left-[300px] z-0" ></div>
      <div class="absolute top-[80%] w-[400px] h-[400px] right-0  -left-[25%] bg-blue-300 rounded-full"></div>
      

    </div>
  )
}

export default Actualizar;