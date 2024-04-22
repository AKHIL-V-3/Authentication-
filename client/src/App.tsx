import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import SignUp from './pages/signup';
import HomePage from './pages/Home';
import SignIn from './pages/signin';
import OtpVerify from './pages/otp';

const router = createBrowserRouter([

  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/signup",
    element: <SignUp />
  },
  {
    path: "/signup/otp/:email",
    element: <OtpVerify />
  },
  {
    path: "/signin",
    element: <SignIn />
  },
])

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
