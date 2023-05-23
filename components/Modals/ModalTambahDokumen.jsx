import React from "react";
import { Button, Modal, MultipleUploadFile } from "..";
import { Form, Formik } from "formik";

const ModalTambahDokumen = ({ title = "modal", showModal, setShowModal }) => {
  return (
    <Modal
      key={title}
      isOpen={showModal}
      setIsOpen={setShowModal}
      title={title}
    >
      <Formik
        enableReinitialize
        initialValues={{ dokumen: [] }}
        onSubmit={() => null}
      >
        {({ isSubmitting, values, errors, touched }) => (
          <Form className="flex flex-col gap-4 p-4">
            <MultipleUploadFile
              limit={1}
              values={values}
              errors={errors}
              touched={touched}
            />
            <Button
              type={"submit"}
              text={isSubmitting ? "Loading..." : "Submit"}
            />
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default ModalTambahDokumen;
