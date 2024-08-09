import { useEffect, useState } from "react";
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AdminCompanies({ setCollection , collection, userData }) {
    const [isAdmin, setIsAdmin] = useState(false);

    const navigate = useNavigate();

    async function handleDelete(id){
        try {
            axios.delete(`https://aliyevelton-001-site1.ltempurl.com/api/Jobs?id=${id}`);
            location.reload();
        } catch (error) {
            console.log(error); 
        }
    }

    return (
        <>
            <div id="adminContainer">
                <AdminSidebar></AdminSidebar>
                <div id="insideContainer">
                    <AdminHeader></AdminHeader>
                    <button>Create</button>
                    <table id="adminTable">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Company Name</th>
                                <th>Job Title</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {collection.map((job, index) => (
                                <tr className="jobs" key={index}>
                                    <td><img src={job.img} alt="" /></td>
                                    <td>{job.company.name}</td>
                                    <td>{job.title}</td>
                                    <td className="actions">
                                        <button className="redBtn" onClick={() => handleDelete(job.id)}>Delete</button>
                                        <button className="blueBtn" onClick={() => navigate(`/jobs/${job.id}`)}>Detail</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
