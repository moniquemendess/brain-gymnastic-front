import { extraConfig } from "./servicesApiGeneral.config";
/*
/Configuración de los enpoints
*/

/***************************************************************************************************** */

export const RegisterUser = async (formData) => {
  const ApiGeneral = extraConfig();

  return ApiGeneral.post(`/users/register`, formData, {
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res)
    .catch((error) => error);
};

/***************************************************************************************************** */

export const login = async (formData) => {
  const ApiGeneral = extraConfig();

  return ApiGeneral.post(`/users/login`, formData, {
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res)
    .catch((error) => error);
};

/***************************************************************************************************** */

export const getAllUsers = async () => {
  const ApiGeneral = extraConfig();

  return ApiGeneral.get(`/users/getAllUsers`)
    .then((res) => res)
    .catch((error) => error);
};

/***************************************************************************************************** */

export const getByIdUser = async (id) => {
  const ApiGeneral = extraConfig();

  return ApiGeneral.get(`/users/getByIdUser/${id}`)
    .then((res) => res)
    .catch((error) => error);
};
