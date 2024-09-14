import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getApplications } from "../../../redux-toolkit/slices/authSlice";
import toast from "react-hot-toast";

const Applicants = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getApplications())
      .unwrap()
      .then(() => {
        toast("Application fetched successfully");
      })
      .catch(() => {
        toast.error("Error in application Loading ");
      });
  }, []);
  return <div>this is an applications</div>;
};

export default Applicants;
