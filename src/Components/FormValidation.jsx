import React from 'react'
import { useForm } from "react-hook-form";

export const FormValidation = () => {
  
  const { register, handleSubmit, watch ,formState : { errors } } = useForm();
  
  const customSubmit = data => console.log(data);
  // console.log(watch("name"))

  return (
    <form onSubmit={handleSubmit(customSubmit)} className="formValidation">
      <h3>
        VALIDACIÓN DE FORMULARIOS
        <br/>
        React-hook-form
      </h3>
      <div className="formDiv">
        <label> Nombre </label>
        <input type="text" {...register("name",{
            required: true,
            maxLength: 30,
            pattern: /^[A-Z\sa-z]+$/i
        })}/>
        {errors.name?.type === "required" &&
        <small className="fail">No puede estar el campo vacio </small>}
        {errors.name?.type === "maxLength" &&
        <small className="fail">No puede escribir más de 30 caracteres</small>}
        {errors.name?.type === "pattern" &&
        <small className="fail">Sólo puede escribir texto</small>}
      </div>
      <div className="formDiv">
        <label> Apellidos </label>
        <input type="text" {...register("lastname",{
            required: true,
            maxLength: 30
        })}/>
        {errors.lastname?.type === "required" &&
        <small className="fail">No puede estar el campo vacio </small>}
        {errors.lastname?.type === "maxLength" &&
        <small className="fail">No puede escribir más de 30 caracteres</small>}
      </div>
      <div className="formDiv">
        <label> Edad </label>
        <input type="number" {...register("age",{
          required: true,
          min: 10,
          max: 100,
        })}/>
        {errors.age?.type === "required" && <small className="fail">Edad requerida</small>}
        {errors.age?.type === "min" && <small className="fail">Edad mínima es de 10 años</small>}
        {errors.age?.type === "max" && <small className="fail">Edad máxima es de 100 años</small>}
      </div>
      <div className="formDiv">
        <label> Teléfono </label>
        <input type="number" {...register("phone",{
          required: true,
          minLength: 7,
          maxLength: 10,
          pattern: /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm
        })}/>
        {errors.phone?.type === "required" && <small className="fail">Numero de teléfono requerido</small>}
        {errors.phone?.type === "minLength" && <small className="fail">Mínimo a 7 digitos</small>}
        {errors.phone?.type === "maxLength" && <small className="fail">Máximo a 10 digitos</small>}
        {errors.phone?.type === "pattern" && <small className="fail">SOLO PUEDEN HABER NÚMEROS</small>}
      </div>
      <button type="submit" className="btnSubmit">ENVIAR</button>
    </form>
  )
}
