import ForgetPasswordPage from "./pages/ForgetPasswordPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage"
import PageNotFound from "./pages/PageNotFound"
import RoomPage from "./pages/RoomPage"
import PaymentPage from "./pages/PaymentPage"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Protected from "./features/auth/components/Protected";
import TimeUp from "./features/rooms/components/TimeUp";
import Member from "./features/rooms/components/Member";
import PaymentSuccess from "./pages/PaymentSuccess";
import StripeCheckout from "./pages/StripeCheckout";

const router = createBrowserRouter([  
  {
    path: "/",
    element: <Protected><HomePage></HomePage></Protected>,
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element: <SignUpPage></SignUpPage>,
  },
  {
    path: "/forget-password",
    element: <ForgetPasswordPage></ForgetPasswordPage>,
  },
  {
     path:"/room/:id",
     element: <Protected><RoomPage></RoomPage></Protected>,
  },
  {
    path:"/TimeUp",
    element:<TimeUp></TimeUp>
  },
  {
    path:"/Payment",
    element:<PaymentPage></PaymentPage>
  },
  {
    path:"/Payment-Success/:id",
    element:<PaymentSuccess></PaymentSuccess>
  },
  {
    path:"/stripe-checkout/",
    element:<StripeCheckout></StripeCheckout>
  },
  {
    path: "*",
    element: <PageNotFound></PageNotFound>,
  },
  {
    path:"/members",
    element:<Member></Member>
  }

]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
