import React from "react";
import { Formik, Form } from "formik";
import { Input } from "..";
import * as yup from "yup";
import { createUser } from "@/helper/api/api";

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  password_confirmation: yup
    .string()
    .required()
    .oneOf([yup.ref("password"), null], "password must match"),
});

const FormUsers = () => {
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          password_confirmation: "",
        }}
        validationSchema={schema}
        onSubmit={(values, { setErrors, setStatus }) =>
          createUser(values)
            .then((res) => setStatus(res.data))
            .catch(
              (err) => err
              // err.status === "422" && setErrors(err.response.data.message)
            )
        }
      >
        {({ isSubmitting, errors, touched, status, isValid }) => (
          <Form className="flex flex-col gap-4">
            {/* {JSON.stringify(errors)}
            {JSON.stringify(status)} */}
            <Input
              label="name"
              name="name"
              errors={errors.name}
              touched={touched.name}
            />
            <Input
              label="email"
              name="email"
              type="email"
              errors={errors.email}
              touched={touched.email}
            />
            <Input
              label="password"
              name="password"
              type="password"
              errors={errors.password}
              touched={touched.password}
            />
            <Input
              label="password_confirmation"
              name="password_confirmation"
              type="password"
              errors={errors.password_confirmation}
              touched={touched.password_confirmation}
            />
            <button
              type="submit"
              disabled={!isValid}
              className="disabled:cursor-not-allowed ring ring-blue-500 rounded-lg py-2 px-4 bg-blue-500"
            >
              {isSubmitting ? "Loading..." : "Submit"}
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default FormUsers;
