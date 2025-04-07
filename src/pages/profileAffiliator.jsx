import React from "react";
import { Link } from "react-router-dom";



const Profile = () => {
    return (
        <div>
            {/* Top Profile */}
            <div className="container py-3 px-4 rounded"
                style={{ marginTop: "50px", backgroundColor: "#e9ecef" }}>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                    <img
                        src="img/L.jpg"
                        className="img-fluid rounded-circle rounded-circle me-5"
                        alt=""
                        style={{
                            width: "100px",
                            height: "100px",
                            objectFit: "cover",
                            marginLeft: "15px",
                        }}
                    />
                    <h1 className="text-black">Profile</h1>
                </div>
                <div className="d-flex justify-content-cente mt-6">
                    <Link to="/request" className = "btn btn-primary text-white">Add affilate products</Link>
                </div>
            </div>
            </div>

            {/* other Class */}
            <div className="container contact py-5 px-4">
                <div className="container">
                    <div className="p-5 rounded bg-light" >
                        <div className="row g-4">
                            {/* Contact Info */}
                            <div className="d-flex justify-content-center ">
                                <div className="card mb-4 p-4 shadow-sm" style={{ maxWidth: "1000px", width: "100%",padding: "10px" }}>
                                    <div className="row g-0 align-items-center">

                                        {/* รูปด้านซ้าย */}
                                        <div className="col-md-4 text-center">
                                            <img src="img/L.jpg" className="img-fluid " alt="Profile"
                                                style={{ width: "150px", height: "150px",}}
                                            />
                                        </div>

                                        {/* รายละเอียดด้านขวา */}
                                        <div className="col-md-8 ">
                                            <div className="d-flex flex-column justify-content-between h-100">
                                            <div className="card-body p-0">
                                                <h5 className="card-title">คลาสออกอะไร</h5>
                                                <p className="card-text mb-1">เวลา : นาที</p>
                                                <p className="card-text mb-1">วันที่ : </p>
                                                <p className="card-text text-muted">ชื่อ Gym:</p>
                                            </div>

                                             {/*ปุ่ม more detail*/ }
                                        <div className="d-flex justify-content-end mt-6">
                                            <Link to="" className = "btn btn-outline-primary"> More detail</Link>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
