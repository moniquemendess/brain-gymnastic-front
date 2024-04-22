import { extraConfig } from "./servicesApiGeneral.config";
/*
/Configuración de los enpoints
*/

/***************************************************************************************************** */

export const getDailyEnigma = async () => {
  const ApiGeneral = extraConfig();

  return ApiGeneral.get(`/dayLogic/daily`)
    .then((res) => res)
    .catch((error) => error);
};
