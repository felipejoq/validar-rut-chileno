import { useState, useEffect } from "react";
import { getDVRut, validateRut } from "@utils/rut.validations";

export const RutValidator = () => {
  const [rut, setRut] = useState({ body: '', dv: '0' });
  const [highlight, setHighlight] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const { value } = e.target;
    const rutBody = value.replace(/\D/g, '');
    const dv = (rutBody.length > 0) ? getDVRut(rutBody) : '';
    setRut({ body: rutBody, dv });
    setHighlight(true);
    setIsValid(validateRut(`${rutBody}-${dv}`));
  };

  useEffect(() => {
    if (highlight) {
      const timer = setTimeout(() => setHighlight(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [highlight]);

  return (
    <div className="prose">
      <h2>Ingresar un RUT</h2>
      <form className="space-y-4">
        <div className="flex space-x-4">
          <div className="flex-1">
            <label htmlFor="rut-body" className="block text-sm font-medium text-gray-700">
              Cuerpo del RUT
            </label>
            <input
              onChange={handleChange}
              value={rut.body}
              type="text"
              id="rut-body"
              name="rut-body"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Ej: 12345678"
            />
          </div>
          <div className="w-16">
            <label htmlFor="rut-dv" className="block text-sm font-medium text-gray-700">
              DV
            </label>
            <input
              disabled={true}
              value={rut.dv}
              type="text"
              id="rut-dv"
              name="rut-dv"
              className={`text-center mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${highlight ? 'highlight' : ''}`}
            />
          </div>
        </div>
        <div className='text-sm rounded border-1 border-gray-200 text-gray-600 p-2 flex flex-col gap-2'>
          <div>ℹ️ Ingrese un RUT para validar</div>
          <div>
            {
              isValid
                ? <span className="p-1 bg-green-100 text-green-800 rounded">El rut ingresado es válido DV: {rut.dv}</span>
                : <span className="p-1 bg-red-100 text-red-800 rounded" >El rut ingresado no es válido</span>
            }
          </div>
        </div>
      </form>
    </div>
  );
};