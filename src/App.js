import { Toaster } from "react-hot-toast";
// import { PhotoProvider } from "react-photo-view";
import Home from "./Page/Home/Home/Home";

function App() {
  return (
    <div >
      <Toaster></Toaster>
      <Home></Home>
      {/* <PhotoProvider></PhotoProvider */}
    </div>
  );
}

export default App;
