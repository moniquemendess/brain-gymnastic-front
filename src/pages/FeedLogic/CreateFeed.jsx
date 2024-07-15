import "./CreateFeed.css";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router";

import { useFeedLogicError } from "../../hook/useFeedLogicError";
import { useAuth } from "../../context/auth.context";
import { createFeedLogic } from "../../services/feedLogic.service";
import { Uploadfile } from "../../components/UploadFile/Upload";

export const CreateFeed = () => {
  const { user } = useAuth();
  const { register, handleSubmit } = useForm();
  const [res, setRes] = useState({});
  const [send, setSend] = useState(false);
  const [okForum, setOkForum] = useState(false);

  // función que se encarga del formulario
  const formSubmit = async (formData) => {
    console.log("Form Data:", formData);
    const inputfile = document.getElementById("file-upload").files;
    console.log("Input File:", inputfile);

    const customFormData = {
      ...formData,

      image: inputfile.length ? inputfile[0] : undefined,
      owner: user,
    };

    console.log("Custom Form Data:", customFormData);

    setSend(true);
    try {
      const response = await createFeedLogic(customFormData);
      console.log("Create Feed Logic Response:", response);
      setRes(response);
      setOkForum(true); // Assuming this should be true on successful creation
    } catch (error) {
      console.error("Error creating feed:", error);
    }
    setSend(false);
  };

  // estados de navegación
  if (okForum) {
    return <Navigate to="/contentPage" />;
  }
  return (
    <div className="feed_container">
      <form className="formFeed" onSubmit={handleSubmit(formSubmit)}>
        <h1>Let’s get rolling!</h1>
        <h5>
          Share your most intriguing riddle and challenge the community!!
          <br />
        </h5>

        <textarea
          className="input_content"
          {...register("content", { required: true })}
          placeholder="Enter your challenging riddle here..."
        />
        <Uploadfile />

        <div className="btn_container">
          <button className="button--blue" type="submit" disabled={send}>
            Create
          </button>
        </div>
      </form>
    </div>
  );
};
