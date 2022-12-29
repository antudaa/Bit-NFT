import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Pages/Routes/Route/Route';

import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

function App() {

  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
    })
  }, []);

  return (
    <div >
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
