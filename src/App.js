import { Route, Routes } from "react-router-dom";
import Login from "./Components/Pages/Login";
import Signup from "./Components/Pages/Signup";
import HomePage from "./Components/Pages/HomePage";
import { AuthContextProvider } from "./features/Auth/AuthContext";
import Account from "./features/User/Account";
import ProtectedRoute from "./router/ProtectedRoute";
import MoviesPage from "./Components/Pages/MoviesPage";
import Aos from "aos";
import AboutUs from "./Components/Pages/AboutPage";
import ContactPage from "./Components/Pages/ContactPage";

import SavedShows from "./features/User/Account/SavedShows";
import Password from "./features/User/Account/Password";
import SingleMovie from "./Components/Pages/SingleMovie";
import WatchMovie from "./Components/Pages/WatchMovie";
import ProtectedRouteAdmin from "./router/ProtectedRouteAdmin";
import LoginAdmin from "./Components/Pages/LoginAdmin";
import Dashboard_Admin from "./features/Admin/AdminPage/Dashboard_Admin";
import HomePageAdmin from "./Components/Pages/HomePageAdmin";
import AboutPage from "./Components/Pages/AboutPage";
import SideBarAdmin from "./features/Admin/AdminPage/Dashboard/SideBarAdmin";
import Dashboard from "./features/Admin/AdminPage/Dashboard/Dashborad";
import AddMovie from "./features/Admin/AdminPage/Dashboard/AddMovie";
function App() {
  Aos.init();
  return (
    <>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="savedshow" element={<SavedShows />} />
          <Route path="/password" element={<Password />} />
          <Route path="/movie/:id" element={<SingleMovie />} />
          <Route path="/watch/:id" element={<WatchMovie />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
          {/* admin */}
          {/* /* <Route path="login-admin" element={<LoginAdmin />} />
          <Route path="/*" element={<HomePageAdmin />} />
          {/* <Route path="" element={<ProtectedRouteAdmin />}>
            <Route path="dash/dashboard" element={<Dashboard_Admin />} />
            <Route path="dashboard/dash" element={<Dashboard />} />
            <Route path="dashboard/adminav" element={<AdminNav />} />
          </Route> */}
          <Route path="login-admin" element={<LoginAdmin />} />
          <Route
            path="/*"
            element={
              <ProtectedRouteAdmin>
                <Dashboard_Admin />
              </ProtectedRouteAdmin>
            }
          />
          <Route path="/*admin" element={<HomePageAdmin/>}/>
          <Route path="/*movies" element={<MoviesPage />} />
          <Route path="/*about-us" element={<AboutPage />} />
          <Route path="/*contact-us" element={<ContactPage />} />
         <Route/>
          <Route path="/admin/dashboard" element={<Dashboard/>}/>
          <Route path="/admin/movielist"/>
          <Route path="/admin/addmovie" element={<AddMovie/>}/>

        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
