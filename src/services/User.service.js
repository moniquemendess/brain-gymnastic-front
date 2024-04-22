import { extraConfig } from "./servicesApiGeneral.config";
/*
/Configuración de los enpoints
*/

/***************************************************************************************************** */

export const RegisterUser = async (FormData) => {
  const ApiGeneral = extraConfig();

  return ApiGeneral.post(`/users/register`, FormData, {
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then((res) => res)
    .catch((error) => error);
};

/***************************************************************************************************** */

export const login = async (FormData) => {
  const ApiGeneral = extraConfig();

  return ApiGeneral.post(`/users/login`, FormData, {
    headers: { "Content-Type": "multipart/form-data" },
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
