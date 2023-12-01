import React from "react";
import Header from "../../../../component/Header";
import Sidebar from "../../../../component/Sidebar";
import Footer from "../../../../component/Footer";
import { API_DUMMY } from "../../../../utils/base_URL";
import axios from "axios";
import Swal from "sweetalert2";
import { History } from "swiper/modules";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { List } from "@mui/material";
import { useEffect } from "react";

function AddBeritaAdmin() {
  const [author, setAuthor] = useState("");
  const [judulBerita, setJudulBerita] = useState("");
  const [image, setImage] = useState("");
  const [categoryId, setCategoryId] = useState(0);
  const [category, setCategory] = useState([]);
  const [isiBerita, setIsiBerita] = useState("");
  const [show, setShow] = useState(false);
  const history = useHistory();

  const add = async (e) => {
    e.preventDefault();
    e.persist();

    const formData = new FormData();
    formData.append("author", author);
    formData.append("judulBerita", judulBerita);
    formData.append("isiBerita", isiBerita);
    formData.append("categoryIdBerita", categoryId);
    formData.append("file", image); // Menambahkan nama file ke FormData

    try {
      await axios.post(`${API_DUMMY}/bawaslu/api/berita/add`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      // //console.log(unique_id);
      setShow(false);
      Swal.fire({
        icon: "success",
        title: "Data Berhasil DiTambahkan",
        showConfirmButton: false,
        timer: 1500,
      });
      // //console.log(data);
      history.push("/admin-berita");
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllCategoryId = async () => {
    try {
      const response = await axios.get(
        `${API_DUMMY}/bawaslu/api/category-berita/all`,{
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setCategory(response.data.data.content);
      console.log(response.data.data);
    } catch (error) {
      console.error("Terjadi Kesalahan", error);
    }
  };

  useEffect(() => {
    getAllCategoryId();
  }, []);

  return (
    <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
      <Header />
      <div className="app-main">
        <Sidebar />
        <div class="app-main__outer">
          <div class="app-main__inner">
            <div className="row">
              <div className="col-md-12">
                <div className="card shadow">
                  <div className="card-body">
                    <h1 className="fs-4">Form Tambah Data</h1>
                    <hr />
                    <form onSubmit={add}>
                      <div className="row">
                        <div className="mb-3 col-6">
                          <label
                            for="exampleInputPassword1"
                            className="form-label">
                            Category
                          </label>
                          <select
                            className="form-select form-select-sm"
                            aria-label="Small select example"
                            onChange={(e) => setCategoryId(e.target.value)}>
                            <option selected>PIlih Category</option>
                            {category.map((down) => {
                              return (
                                <option value={down.id}>{down.category}</option>
                              );
                            })}
                          </select>
                        </div>
                        <div className="mb-3 col-6">
                          <label
                            for="exampleInputEmail1"
                            className="form-label">
                            Author
                          </label>
                          <input
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                            type="text"
                            className="form-control"
                          />
                        </div>
                        <div className="mb-3 col-6">
                          <label
                            for="exampleInputPassword1"
                            className="form-label">
                            Image
                          </label>
                          <input
                            onChange={(e) =>
                              setImage(
                                e.target.files ? e.target.files[0] : null
                              )
                            }
                            type="file"
                            className="form-control"
                            id="exampleInputPassword1"
                          />
                        </div>
                        <div className="mb-3 col-6">
                          <label
                            for="exampleInputPassword1"
                            className="form-label">
                            Judul Berita
                          </label>
                          <input
                            value={judulBerita}
                            onChange={(e) => setJudulBerita(e.target.value)}
                            type="text"
                            className="form-control"
                            id="exampleInputPassword1"
                          />
                        </div>
                        <div className="col-6">
                          <label
                            for="exampleInputPassword1"
                            className="form-label">
                            Isi Berita
                          </label>
                          <div className="col-6">
                            <textarea
                              value={isiBerita}
                              onChange={(e) => setIsiBerita(e.target.value)}
                              className="form-control"
                              placeholder="Leave a comment here"
                              id="floatingTextarea2"></textarea>
                          </div>
                        </div>
                      </div>
                      <button type="submit" className="btn-primary mt-3">
                        Submit
                      </button>
                    </form>
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

export default AddBeritaAdmin;
