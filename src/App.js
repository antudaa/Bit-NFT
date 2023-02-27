import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Pages/Routes/Route/Route';

import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { Toaster } from 'react-hot-toast';
import AuthProvider from './Context/AuthProvider';

function App() {

  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
    })
  }, []);

  return (
    <div>
      <AuthProvider>
        <RouterProvider router={router} />
        <Toaster />
      </AuthProvider>
    </div>
  );
}

export default App;
