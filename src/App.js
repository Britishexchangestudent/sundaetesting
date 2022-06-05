import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Modal from "./components/Modal";
import { useRecoilState } from "recoil";
import { modalState } from "./atoms/Modal";
import { AnimatePresence, motion } from "framer-motion";

// function App() {
//   const [checked, setChecked] = useState(false);

//   const [showModal, setShowModal] = useRecoilState(modalState);

//   const handleCheck = () => {
//     setChecked((prev) => !prev);
//   };

//   return (
//     <div className="h-screen max-w-2xl flex flex-col mx-auto">
//       <main className="relative">
//         <div className="my-10 font-bold text-2xl">
//           <h1>Order Summary</h1>
//         </div>
//         <div className="flex flex-col space-y-6 mb-6">
//           <h1 className="text-xl font-semibold">Scoops: $6</h1>
//           <div className="form-check">
//             <label className="inline-flex items-center">
//               <input type="checkbox" data-testid="scoop-checkbox" />
//               <span className="ml-2">3 Vanilla</span>
//             </label>
//           </div>
//         </div>

//         <div className="flex flex-col space-y-6 mb-6">
//           <h1 className="text-xl font-semibold">Toppings: $4.50</h1>
//           <div className="!flex flex-col space-y-2 form-check">
//             <label className="inline-flex items-center">
//               <input type="checkbox" data-testid="topping1-checkbox" />
//               <span className="ml-2">M&Ms</span>
//             </label>
//             <label className="inline-flex items-center">
//               <input type="checkbox" data-testid="topping2-checkbox" />
//               <span className="ml-2">Hot Fudge</span>
//             </label>
//             <label className="inline-flex items-center">
//               <input type="checkbox" data-testid="topping3-checkbox" />
//               <span className="ml-2">Peanut butter</span>
//             </label>
//           </div>
//         </div>

//         <div className="flex mt-24 items-center space-x-10">
//           <button
//             className={`px-6 py-3 bg-blue-500 w-2/12 rounded-md hover:bg-blue-600 active:scale-95 hover:scale-105 transition duration-300 cursor-pointer ${
//               !checked && "cursor-not-allowed active:scale-100 hover:scale-100"
//             }`}
//             disabled={!checked}
//             onClick={() => setShowModal(true)}
//           >
//             Confirm
//           </button>

//           <div className="form-check">
//             <label className="inline-flex items-center">
//               <input
//                 type="checkbox"
//                 checked={checked}
//                 onChange={handleCheck}
//                 data-testid="my-checkbox"
//               />
//               <span className="ml-2">I agree to Terms and Conditions</span>
//             </label>
//           </div>
//         </div>

//         <AnimatePresence>
//           {showModal && (
//             <motion.div
//               initial={{ opacity: 0, y: 100 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               exit={{ opacity: 0, y: 100 }}
//             >
//               <Modal />
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </main>
//     </div>
//   );
// }

// export default App;

import React from "react";
import OrderEntry from "./pages/entry/OrderEntry";
import OrderConfirmation from "./pages/confirmation/OrderConfirmation";
import { OrderDetailsProvider } from "./context/OrderDetails";
import { Container } from "@mui/material";
import OrderSummary from "./pages/summary/OrderSummary";

function App() {
  const [orderPhase, setOrderPhase] = useState("inProgress");

  let Component = OrderEntry;
  switch (orderPhase) {
    case "inProgress":
      Component = OrderEntry;
      break;
    case "review":
      Component = OrderSummary;
    case "completed":
      Component = OrderConfirmation;
    default:
      break;
  }

  return (
    <OrderDetailsProvider>
      <Container>{<Component setOrderPhase={setOrderPhase} />}</Container>
    </OrderDetailsProvider>
  );
}

export default App;
