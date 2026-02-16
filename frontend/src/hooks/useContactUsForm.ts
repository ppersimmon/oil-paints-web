import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import axios from "axios";

export const useContactUsForm = () => {
  const [serverMessage, setServerMessage] = useState<string | null>(null);

  const FormSchema = Yup.object().shape({
    name: Yup.string().max(15).required("Name is required"),
    phone: Yup.string()
      .required("Phone is required")
      .matches(/^\+?[1-9]\d{9,14}$/, "invalid phone"),
    email: Yup.string()
      .email("Invalid email address format")
      .required("Email is required"),
    postMessage: Yup.string().max(40).required("Message is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      postMessage: "",
    },
    validationSchema: FormSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      setServerMessage(null);

      const form = new FormData();
      Object.entries(values).forEach(([key, value]) => {
        form.append(key, value);
      });

      try {
        const response = await axios.post(import.meta.env.VITE_API_URL, form, {
          withCredentials: true,
        });

        setServerMessage(response.data.message || "Form was sent");
        resetForm();
      } catch (error) {
        console.error("Form submitting error:", error);
        setServerMessage("Server error");
      } finally {
        setSubmitting(false);
      }
    },
  });

  return { formik, serverMessage };
};
