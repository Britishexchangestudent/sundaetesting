import React from "react";
import { XIcon } from "@heroicons/react/solid";
import { useRecoilState } from "recoil";
import MuiModal from "@mui/material/Modal";
import { modalState } from "../atoms/Modal";
import { AnimatePresence, motion } from "framer-motion";

function Modal() {
  const [showModal, setShowModal] = useRecoilState(modalState);

  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <div>
      <MuiModal
        open={showModal}
        onClose={handleClose}
        className="fixed !top-40 !left-0 !right-0 z-50 m-auto max-w-2xl overflow-hidden overflow-y-scroll rounded-md scrollbar-hide"
      >
        <>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            exit={{ opacity: 0, y: 100 }}
            className="bg-white w-[30vw] h-[30vh] absolute !z-69 rounded-lg flex flex-col"
          >
            {/* <button className="modalButton absolute right-5 top-5 h-9 w-9 border-none bg-[#181818] flex items-center justify-center">
              <XIcon className="h-6 w-6" onClick={handleClose} />
            </button> */}
            <div className="flex flex-col mx-auto mt-4 text-black">
              <h1>Terms & Conditions</h1>
              <p className="text-center mt-10">
                Nothing will be sent to you so order away
              </p>
            </div>
            <div className=" text-black p-10 flex justify-around">
              <button
                className="bg-red-600 px-6 py-3 rounded-md text-white hover:bg-red-700 transition duration-200 active:scale-95"
                onClick={handleClose}
              >
                Cancel
              </button>
              <button className="bg-blue-600 px-6 py-3 rounded-md text-white hover:bg-blue-700 transition duration-200 active:scale-95">
                Confirm
              </button>
            </div>
          </motion.div>
        </>
      </MuiModal>
    </div>
  );
}

export default Modal;
