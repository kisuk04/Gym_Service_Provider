import React from "react";
import { useNavigate } from "react-router-dom";
import "./requestapi.css";

export default function RequestAPI() {
    const navigate = useNavigate();

    const goBack = () => {
        navigate("/Affiliator");
    };

    return (
        <div className="container-api">
            <div className="form-wrapper">
                <div className="header-row">
                    <button className="back-button" onClick={goBack}>
                        &#x2039;
                    </button>
                    <h1 className="heading">Request API</h1>
                </div>

                <form>
                    <div>
                        <label htmlFor="apiKey">
                            API Key<span className="required">*</span>
                        </label>
                        <input
                            id="apiKey"
                            type="text"
                            placeholder="Enter your API key"
                            required
                            className="input"
                        />
                    </div>

                    <div>
                        <label htmlFor="gymName">
                            Gym<span className="required">*</span>
                        </label>
                        <input
                            id="gymName"
                            type="text"
                            placeholder="ชื่อยิม"
                            required
                            className="input"
                        />
                    </div>

                    <div>
                        <label htmlFor="search">Search</label>
                        <input
                            id="search"
                            type="text"
                            placeholder="ค้นหา"
                            className="input"
                        />
                    </div>

                    <div>
                        <label htmlFor="sort">Sort</label>
                        <select id="sort" className="input">
                            <option value="เลือกตัวเลือก">เลือกตัวเลือก</option>
                            <option value="name">http://localhost:8088/gymclass/1?sort=level</option>
                            <option value="location">http://localhost:8088/gymclass/1?sort=price</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="classLevel">Class</label>
                        <input
                            id="classLevel"
                            type="text"
                            placeholder="class level"
                            className="input"
                        />
                    </div>

                    <div className="button-container">
                        <button type="submit" className="button">
                            ค้นหา
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
