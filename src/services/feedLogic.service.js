import { extraConfig } from "./servicesApiGeneral.config";

/*
/Configuración de los enpoints
*/

/***************************************************************************************************** */
export const createFeedLogic = async (formData) => {
  const ApiGeneral = extraConfig();

  return ApiGeneral.post(`/feedLogic/createFeedLogic`, formData, {
    headers: {
      "Content-Type": "multipart/form-Data",
    },
  })
    .then((res) => res)
    .catch((error) => error);
};

/****************************************************************************************************** */

export const updateFeed = async (id, formData) => {
  const ApiGeneral = extraConfig();

  return ApiGeneral.patch(`/feedLogic/update/${id}`, formData, {
    headers: { "Content-Type": "form-data" },
  })
    .then((res) => res)
    .catch((error) => error);
};

/****************************************************************************************************** */

export const getAllFeedLogic = async () => {
  const ApiGeneral = extraConfig();

  return ApiGeneral.get(`/feedLogic/getAllFeedLogic`)
    .then((res) => res)
    .catch((error) => error);
};

/****************************************************************************************************** */

export const getByIdFeedLogic = async (id) => {
  const ApiGeneral = extraConfig();

  return ApiGeneral.get(`/feedLogic/idFeedLogic/${id}`)
    .then((res) => res)
    .catch((error) => error);
};

/****************************************************************************************************** */

export const LikedFeed = async (idFeed) => {
  const ApiGeneral = extraConfig();

  return ApiGeneral.patch(`/feedLogic/likedFeed/${idFeed}`)
    .then((res) => res)
    .catch((error) => error);
};

/****************************************************************************************************** */

export const deleteFeedLogic = async (id) => {
  const ApiGeneral = extraConfig();

  return ApiGeneral.delete(`/feedLogic/deleteFeed/${id}`)
    .then((res) => res)
    .catch((error) => error);
};
