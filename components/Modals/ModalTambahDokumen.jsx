import React from "react";
import { Modal, MultipleUploadFile } from "..";
import { Formik } from "formik";

const ModalTambahDokumen = ({ title = "modal", showModal, setShowModal }) => {
  return (
    <Modal
      key={title}
      isOpen={showModal}
      setIsOpen={setShowModal}
      title={title}
    >
      <Formik>
        <MultipleUploadFile />
      </Formik>
    </Modal>
  );
};

export default ModalTambahDokumen;
