import { FotoProfil, Input } from "@/components";
import { apiSister } from "@/helper/api/axios";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Form, Formik } from "formik";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import * as yup from "yup";

const schema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
  id_pengguna: yup.string().required(),
});

const Login = () => {
  const [imageSrc, setImageSrc] = useState("");
  const [data, setData] = useState();
  const router = useRouter();

  // useEffect(() => {
  //   async function fetchImage() {
  //     const response = await apiSister.get(
  //       "/sister/data_pribadi/foto/a0a07ef9-1a61-46d2-b00b-ea4d580e714a",
  //       { responseType: "arraybuffer" } // Tell axios to treat the response as binary data
  //     );
  //     const dataUrl = `data:image/jpeg;base64,${Buffer.from(
  //       response.data,
  //       "binary"
  //     ).toString("base64")}`;
  //     setImageSrc(dataUrl);
  //   }

  //   fetchImage();
  // }, []);

  return (
    <div className="flex flex-col w-full min-h-screen items-center justify-center bg-slate-200">
      <Formik
        initialValues={{
          username: "4PU03FXTjYYrMxACQLD5fvxwUOKc4B8OmXpNPU9MnkU=",
          password:
            "uCAYSxR7hlGK/63OzBFRQBWF60S7+n01nTbbxi822uHNKyscLAAiKAt40yNK/a0f",
          id_pengguna: "272fbc02-cf64-4ad9-9363-33afd4d55198",
        }}
        onSubmit={(values) =>
          apiSister.post("/authorize", values).then((res) => {
            setData(res.data);
            localStorage.setItem("role", res.data.role);
            localStorage.setItem("token", res.data.token);
            router.back();
          })
        }
        validationSchema={schema}
      >
        {({ isSubmitting, isValid, errors, touched }) => (
          <Form className="grid grid-flow-row gap-4 min-w-[400px] bg-white shadow-xl p-8 rounded-xl">
            <h1>Login</h1>
            <Input
              name={"username"}
              label={"username"}
              errors={errors.username}
              touched={touched.username}
              type={"text"}
            />
            <Input
              name={"password"}
              label={"password"}
              errors={errors.password}
              touched={touched.password}
              type={"password"}
            />
            <Input
              name={"id_pengguna"}
              label={"id_pengguna"}
              errors={errors.id_pengguna}
              touched={touched.id_pengguna}
              type={"text"}
            />
            <button
              type="submit"
              disabled={!isValid}
              className="disabled:cursor-not-allowed rounded-lg py-2 px-4 bg-primary text-white"
            >
              {isSubmitting ? "Loading..." : "Submit"}
            </button>
          </Form>
        )}
      </Formik>
      <span>{data && data.token}</span>
      {/* {JSON.stringify(data)} */}
      {/* <Image src={imageSrc} width={300} height={300} /> */}
    </div>
  );
};

export default Login;
