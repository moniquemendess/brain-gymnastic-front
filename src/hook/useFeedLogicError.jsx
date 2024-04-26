import Swal from "sweetalert2/dist/sweetalert2.all";

export const useFeedLogicError = (res, setRes, setOkFeedLogic) => {
  //200
  if (res?.status == 200) {
    setOkFeedLogic(() => true);

    Swal.fire({
      icon: "success",
      title: "Feed created",
      showConfirmButton: false,
      timer: 1500,
    });
    setRes({});
  }

  // 404
  if (
    res?.response?.data?.includes("Error tipo catch al crear la publicación")
  ) {
    Swal.fire({
      icon: "error",
      title: "NOPE!",
      text: "Create feed fail",
      showConfirmButton: false,
      timer: 1500,
    });
    setRes({});
  }

  if (
    res?.response?.data?.includes(
      "Error tipo catch encontrado al crear la publicación"
    )
  ) {
    Swal.fire({
      icon: "error",
      title: "NOPE!",
      text: "General error creating the feed",
      showConfirmButton: false,
      timer: 1500,
    });
    setRes({});
  }
};
