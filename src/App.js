import { router } from "./Routes/Routes";
import { RouterProvider } from "react-router-dom"
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
