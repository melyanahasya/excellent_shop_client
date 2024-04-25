import React, { useState } from "react";
import "../../../css/login.css";
import GambarLogin from "../../../asset/img/login1.jpg";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("admin");
  const [errorMessage, setErrorMessage] = useState("");
  const [show, setShow] = useState(false);
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:4040/register`, {
        username,
        password,
        role,
      });

      if (response.data === "Username already taken") {
        Swal.fire({
          icon: "error",
          title: "Username sudah terdaftar. Pilih username lain.",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        setShow(false);
        Swal.fire({
          icon: "success",
          title: "Berhasil Register",
          showConfirmButton: false,
          timer: 1500,
        });
        history.push("/login");
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      }
    } catch (error) {
      console.error("Error during registration:", error);
      setShow(false);
      Swal.fire({
        icon: "error",
        title: "Terjadi kesalahan saat mendaftar. Coba lagi nanti.",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div>
      <div class="login-page bg-light">
        <div class="container">
          <div class="row">
            <div class="col-lg-10 offset-lg-1">
              <div class="bg-white shadow rounded">
                <div class="row">
                  <div class="col-md-7 pe-0">
                    <div class="form-left h-100 py-5 px-5">
                      <h1 class="mb-3">Register Admin</h1>
                      <form onSubmit={handleSubmit} action="" class="row g-4 ">
                        <div class="col-12 form-login">
                          <label>
                            Username<span class="text-danger">*</span>
                          </label>
                          <div class="input-group">
                            <div class="input-group-text">
                              <i class="bi bi-person-fill"></i>
                            </div>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Enter Username"
                              value={username}
                              onChange={(e) => setUsername(e.target.value)}
                            />
                          </div>
                        </div>

                        <div class="col-12">
                          <label>
                            Password<span class="text-danger">*</span>
                          </label>
                          <div class="input-group">
                            <div class="input-group-text">
                              <i class="bi bi-lock-fill"></i>
                            </div>
                            <input
                              type={showPassword ? "text" : "password"}
                              class="form-control"
                              placeholder="Enter Password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                          </div>
                        </div>

                        <input
                          type="hidden"
                          className="form-control form-control-lg bg-light fs-6"
                          required
                          value="admin"
                        />

                        <div className="input-group d-flex justify-content-between">
                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="showPassword"
                              onChange={() => setShowPassword(!showPassword)} // Mengubah nilai showPassword saat checkbox diubah
                            />
                            <label
                              htmlFor="showPassword"
                              className="form-check-label text-secondary"
                            >
                              <small>Tampilkan Password</small>
                            </label>
                          </div>
                        </div>

                        <p style={{ fontSize: "13px" }}>
                          * Password minimal 8 karakter terdiri dari huruf besar
                          dan kecil
                        </p>

                        <div class="col-12">
                          <button
                            type="submit"
                            class="btn btn-primary px-4 float-end mt-4"
                          >
                            Register    
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div class="col-md-5 ps-0 d-none d-md-block">
                    <div
                      style={{ backgroundColor: "#3559E0" }}
                      class="form-right h-100 text-white text-center pt-5"
                    >
                      <i class="bi bi-bootstrap"></i>
                      <img style={{ height: "89%" }} src={GambarLogin} alt="" />
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
}

export default Register;
