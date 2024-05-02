import "./App.css";
import { RouterProvider, createBrowserRouter }from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Login from "./components/Login/Login";
import Notfound from "./components/Notfound/Notfound";
import Home from "./components/Home/Home";
import Articles from "./components/Articles/Articles";
import Calories from "./components/Calories/Calories";
import Category from "./components/Category/Category";
import Chat from "./components/Chat/Chat";
import Diet from "./components/Diet/Diet";
import Signup from "./components/Signup/Signup";
import Password from "./components/Password/Password";
import Otp from "./components/OTP/OTP";
import Newpassword from "./components/Newpassword/Newpassword";
import Success from "./components/Success/Success";
import Footer from "./components/Footer/Footer";
import Profile from "./components/MyProfile/Profile/Profile";
import Myprofile from "./components/MyProfile/MyProfile";
let routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index:true, element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "*", element: <Notfound /> },
      { path: "articles", element: <Articles /> },
      { path: "diet", element: <Diet /> },
      { path: "calories", element: <Calories /> },
      { path: "category", element: <Category /> },
      { path: "chat", element: <Chat /> },
      { path: "signup", element: <Signup /> },
      { path: "password", element: <Password /> },
      { path: "otp", element: <Otp /> },
      { path: "newpassword", element: <Newpassword /> },
      { path: "success", element: <Success /> },
      { path: "footer", element: <Footer /> },
      { path: "profile", element: <Profile /> },
      { path: "myprofile", element: <Myprofile /> },
      
    ]
  }
]);
function App() 
{
 
  return <RouterProvider router={routers}></RouterProvider>;

}

export default App;