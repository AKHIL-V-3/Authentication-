import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import SignUp from './pages/signup';
import HomePage from './pages/Home';
import SignIn from './pages/signin';

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
