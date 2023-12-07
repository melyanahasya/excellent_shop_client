import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../../../../../component/Footer";
import Header from "../../../../../component/Header";
import Sidebar from "../../../../../component/Sidebar";
import Swal from "sweetalert2";
import { API_DUMMY } from "../../../../../utils/base_URL";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

function AddRegulasi() {
  const [idMenuRegulasi, setIdMenuRegulasi] = useState(0);
  const [dokumen, setDokumen] = useState("");
  const [pdfDokumen, setPdfDokumen] = useState("");
  const history = useHistory();
  const [show, setShow] = useState(false);
  const [regulasi, setRegulasi] = useState([]);
  const param = useParams();

  const getByMenuRegulasi = async () => {
    try {
      const response = await axios.get(
        `${API_DUMMY}/bawaslu/api/menu-regulasi/all?page=0&size=50`
      );
      setRegulasi(response.data.data);
    } catch (error) {
      console.error("Terjadi Kesalahan", error);
    }
  }


  const addData = async (e) => {
    e.preventDefault();
    e.persist();

    const formData = new FormData();
    formData.append("menuRegulasi", idMenuRegulasi);
    formData.append("dokumen", dokumen);
    formData.append("upload", pdfDokumen);
    try {
      await axios.post(
        `${API_DUMMY}/bawaslu/api/regulasi/add`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      // //console.log(unique_id);
      setShow(false);
      Swal.fire({
        icon: "success",
        title: "Data Berhasil DiTambahkan",
        showConfirmButton: false,
        timer: 1500,
      });
      // //console.log(data);
      history.push("/rugulasi/:menuRegulasi/:id");
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getByMenuRegulasi();
  }, []);
  return (
    <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
      <Header />
      <div className="app-main">
        <Sidebar />
        <div className="container mt-3 app-main__outer">
          <div className="card shadow">
            <div className="card-body">
              <h1 className="fs-4">Form Tambah Data</h1>
              <hr />
              <form onSubmit={addData}>
                <div className="row">
                  <div className="mb-3 col-lg-6">
                    <label for="exampleInputPassword1" className="form-label font-weight-bold">
                      Jenis Regulasi
                    </label>
                    <select
                      className="form-select form-select-sm"
                      aria-label="Small select example"
                      onChange={(e) => setIdMenuRegulasi(e.target.value)}>
                      <option selected>PIlih Jenis Regulasi</option>
                      {regulasi.map((down) => {
                        return (
                          <option value={down.id}>{down.menuRegulasi}</option>
                        );
                      })}
                    </select>
                  </div>

                  <div className="mb-3 col-lg-6">
                    <label for="exampleInputPassword1" className="form-label font-weight-bold">
                      Dokumen
                    </label>
                    <input
                      value={dokumen}
                      onChange={(e) => setDokumen(e.target.value)}
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>
                  <div className="mb-3 col-lg-6">
                    <label for="exampleInputPassword1" className="form-label font-weight-bold">
                      Gambar Dokumen
                    </label>
                    <input
                      onChange={(e) => setPdfDokumen(e.target.files[0])}
                      type="file"
                      className="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>
                </div>
                <button type="submit" className="btn-danger mt-3 mr-3">
                  <a href="" style={{ color: "white", textDecoration: "none" }}>
                    {" "}
                    Batal
                  </a>
                </button>
                <button type="submit" className="btn-primary mt-3">
                  Simpan
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddRegulasi;
