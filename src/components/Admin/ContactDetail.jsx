import { useEffect, useState } from "react";
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

export default function ContactDetail({ setCollection, collection, userData }) {
    const [contData, setContData] = useState([]);

    const navigate = useNavigate();

    const location = useLocation();

    const path = location.pathname.split("/").filter((x) => x !== "");
    const index = Number(path[path.length - 1]);

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(`https://aliyevelton-001-site1.ltempurl.com/api/ContactUs/${index}`);
            setContData(response.data);
        }
        fetchData();
    }, [index])

    console.log(contData);

    return (
        <>
            <div id="adminContainer">
                <AdminSidebar></AdminSidebar>
                <div id="insideContainer">
                    <AdminHeader></AdminHeader>
                    <div className="jobs">
                        <button onClick={() => {navigate("/admin/contact-us")}}>Back</button>
                        <p>{contData.name}</p>
                        <p>{contData.surname}</p>
                        <p>{contData.email}</p>
                        <p>{contData.message}</p>
                    </div>
                </div>
            </div>
        </>
    );
}
