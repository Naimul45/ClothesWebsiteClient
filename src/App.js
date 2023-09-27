import "./App.css";
import router from "./Components/Routes/Routes";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import BookingModal from "./Components/BookingModal/BookingModal";

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
      <BookingModal></BookingModal>
    </div>
  );
}

export default App;
