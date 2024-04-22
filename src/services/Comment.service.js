import { extraConfig } from "./servicesApiGeneral.config";
import { updateToken } from "../utils/updateToken";

/*
/Configuración de los enpoints
*/

/***************************************************************************************************** */

export const createComments = async (id, formData) => {
  const ApiGeneral = extraConfig();

  return ApiGeneral.post(`/comment/createComments/${id}`, formData, {
    headers: {
      Authorization: `Bearer ${updateToken()}`,
    },
  })
    .then((res) => res)
    .catch((error) => error);
};

/***************************************************************************************************** */

export const getAllComments = async () => {
  const ApiGeneral = extraConfig();

  return ApiGeneral.get(`/comment/allComments`)
    .then((res) => res)
    .catch((error) => error);
};

/***************************************************************************************************** */

export const getByIdComment = async (id) => {
  const ApiGeneral = extraConfig();

  return ApiGeneral.get(`/comment/idComments/${id}`)
    .then((res) => res)
    .catch((error) => error);
};

/***************************************************************************************************** */

export const likeComment = async (idComment) => {
  const ApiGeneral = extraConfig();

  return ApiGeneral.patch(`/comment/likeComment/${idComment}`)
    .then((res) => res)
    .catch((error) => error);
};

/***************************************************************************************************** */

export const deleteComment = async (idComment) => {
  const ApiGeneral = extraConfig();

  return ApiGeneral.delete(`/comment/deleteComment/${idComment}`)
    .then((res) => res)
    .catch((error) => error);
};
