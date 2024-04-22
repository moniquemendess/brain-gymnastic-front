import { extraConfig } from "./servicesApiGeneral.config";
/*
/Configuración de los enpoints
*/

/***************************************************************************************************** */
export const getByIdEnigma = async (id) => {
  const ApiGeneral = extraConfig();

  return ApiGeneral.get(`/enigma/byIdEnigma/${id}`)
    .then((res) => res)
    .catch((error) => error);
};
/***************************************************************************************************** */

export const getAllEnigma = async () => {
  const ApiGeneral = extraConfig();

  return ApiGeneral.get(`/enigma/all`)
    .then((res) => res)
    .catch((error) => error);
};
/***************************************************************************************************** */

export const LikedEnigma = async (idEnigma) => {
  const ApiGeneral = extraConfig();

  return ApiGeneral.patch(`/enigma/like/${idEnigma}`)
    .then((res) => res)
    .catch((error) => error);
};
