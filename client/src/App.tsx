import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import SignUp from './pages/signup';
import HomePage from './pages/Home';

const router = createBrowserRouter([

  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/signup",
    element: <SignUp />
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
