import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./assets/style.css";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Auth/Login/Login";
import Register from "./components/Auth/Register/Register";
import { useEffect, useState } from "react";
import Requirements from "./components/Requirements/Requirements";
import Error from "./components/Error/Error";
import ContactUs from "./components/ContactUs/ContactUs";
import Application from "./components/Application/Application";
import ConfirmModal from "./components/Modal/ConfirmModal";
import CongratsModal from "./components/Modal/CongratsModal";
import Collection from "./components/Collection/Collection";
import Modal from "./components/Modal/Modal";
import Profile from "./components/Profile/Profile";
import SharePost from "./components/SharePost/SharePost";
import axios from "axios";

function App() {
  const location = useLocation();
  const [userData, setUserData] = useState({});
  const [authActive, setAuthActive] = useState(false);
  const [activateLayout, setActivateLayout] = useState(true);
  const [activeFilter, setActiveFilter] = useState(false);
  const [activeModal, setActiveModal] = useState("");
  const [collection, setCollection] = useState([]);
  const [error, setError] = useState(false);
  const token = localStorage.getItem("token");
  const currentUserUrl =
    "https://aliyevelton-001-site1.ltempurl.com/api/User/current";

  useEffect(() => {
    if (token) {
      axios
        .get(currentUserUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setUserData(res.data);
          setAuthActive(true);
          console.log(res.data);
        });
    }
  }, [token]);

  let url = "";
  useEffect(() => {
    if (location.pathname === "/login" || location.pathname === "/register") {
      setActivateLayout(false);
    } else {
      setActivateLayout(true);
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);
  if (location.pathname.includes("/jobs")) {
    url = "https://aliyevelton-001-site1.ltempurl.com/api/Jobs";
  } else if (location.pathname.includes("/courses")) {
    url = "https://aliyevelton-001-site1.ltempurl.com/api/Courses";
  }
  useEffect(() => {
    if (url.length > 0) {
      axios
        .get(url)
        .then((response) => {
          setCollection(response.data);
          setError(false);
        })
        .catch((error) => {
          setError(true);
          console.log(error.message + url);
        });
    }
  }, [url]);

  return (
    <>
      {activateLayout ? (
        <Header
          authActive={authActive}
          setAuthActive={setAuthActive}
          location={location}
          userData={userData}
        />
      ) : (
        ""
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/jobs"
          element={
            <Collection
              error={error}
              activeFilter={activeFilter}
              setActiveFilter={setActiveFilter}
              collection={collection}
            />
          }
        />
        <Route
          path="/courses"
          element={
            <Collection
              error={error}
              activeFilter={activeFilter}
              setActiveFilter={setActiveFilter}
              collection={collection}
            />
          }
        />
        <Route
          path="/courses/:id"
          element={
            <Requirements
              collection={collection}
              setCollection={setCollection}
            />
          }
        />
        <Route
          path="/jobs/:id"
          element={
            <Requirements
              collection={collection}
              setCollection={setCollection}
            />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/application"
          element={<Application setActiveModal={setActiveModal} />}
        />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/profile" element={<Profile userData={userData} />} />
        <Route path="/profile/share-post" element={<SharePost />} />
        <Route path="*" element={<Error />} />
      </Routes>

      {activeModal.length > 0 ? (
        <Modal setActiveModal={setActiveModal} activeModal={activeModal} />
      ) : (
        ""
      )}

      {activateLayout ? <Footer /> : ""}
    </>
  );
}

export default App;
