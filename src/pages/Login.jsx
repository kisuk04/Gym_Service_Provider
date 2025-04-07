import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const registerUrl = "http://localhost:8088/register";



const Login = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    affiliator_fname: "",
    affiliator_lname: "",
    affiliator_email: "",
    affiliator_phone: "",
    affiliator_website: [""],
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === "website_url") {
      setFormData({ ...formData, affiliator_website: [value] });
    } else {
      setFormData({ ...formData, [id]: value });
    }
  };

  const handleSubmit = async () => {
    const { affiliator_fname, affiliator_lname, affiliator_email } = formData;

    try {
      if (!affiliator_fname || !affiliator_lname || !affiliator_email) {
        alert("กรุณากรอกข้อมูลให้ครบทุกช่องก่อนเข้าสู่ระบบ");
        return; 
      }
      const res = await fetch(registerUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok) {
        console.log(result);
        alert(`ลงทะเบียนสำเร็จ!`);
        navigate("/home");
      } else {
        console.error(result.error);
        alert("เกิดข้อผิดพลาด: " + result.error);
      }
    } catch (err) {
      alert("ไม่สามารถเชื่อมต่อ API ได้");
      console.error(err);
    }
  };

  return (
    <section className="text-center text-lg-start">
      {/* CSS & Layout omitted for brevity */}
      <div className="container py-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <div className="row g-0 align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="card cascading-right bg-body-tertiary" style={{ backdropFilter: "blur(30px)" }}>
              <div className="card-body p-5 shadow-5 text-center">
                <h2 className="fw-bold mb-5">เข้าสู่ระบบ</h2>
                <form>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <label htmlFor="affiliator_fname" className="form-label" style={{ color: 'black', textAlign: 'left', display: 'block' }}>ชื่อจริง</label>
                      <div className="form-floating">
                        <input type="text" id="affiliator_fname" className="form-control" placeholder="ชื่อจริง" onChange={handleChange} />
                        <label htmlFor="affiliator_fname">สมศรี</label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <label htmlFor="affiliator_fname" className="form-label" style={{ color: 'black', textAlign: 'left', display: 'block' }}>นามสกุล</label>
                      <div className="form-floating">
                        <input type="text" id="affiliator_lname" className="form-control" placeholder="นามสกุล" onChange={handleChange} />
                        <label htmlFor="affiliator_lname">มีใจ</label>
                      </div>
                    </div>
                  </div>

                  <label htmlFor="affiliator_fname" className="form-label" style={{ color: 'black', textAlign: 'left', display: 'block' }}>Email address</label>
                  <div className="form-floating mb-4">
                    <input type="email" id="affiliator_email" className="form-control" placeholder="Email address" onChange={handleChange} />
                    <label htmlFor="affiliator_email">Email@example.com</label>
                  </div>

                  <button
                    type="button"
                    className="btn btn-secondary mb-4 me-2"
                    onClick={() => navigate("/")}
                  >
                    ย้อนกลับ
                  </button>

                  <button type="button" className="btn btn-primary btn-block mb-4" onClick={handleSubmit}>
                    เข้าสู่ระบบ
                  </button>

                  
                </form>
                ยังไม่มีบัญชีใช่ไหม?
                <Link to= "/register"> สมัครสมาชิก</Link>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mb-5 mb-lg-0">
            <img src="img/cover.jpg" className="w-100 rounded-4 shadow-4" alt="Signup Illustration" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
