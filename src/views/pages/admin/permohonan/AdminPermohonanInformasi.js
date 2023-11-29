import React, { useEffect, useState } from "react";
import Header from "../../../../component/Header";
import Sidebar from "../../../../component/Sidebar";
import Footer from "../../../../component/Footer";
import { API_DUMMY } from "../../../../utils/base_URL";
import axios from "axios";
import Swal from "sweetalert2";

function AdminPermohonanInformasi() {
  const [list, setList] = useState([]);

  const getAll = async () => {
    try {
      const response = await axios.get(
        `${API_DUMMY}/bawaslu/api/permohonan-informasi`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setList(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error("Terjadi Kesalahan", error);
    }
  };

  useEffect(() => {
    getAll();
  }, []);

  return (
    <div>
      <Header />
      <div className="app-main">
        <Sidebar />
        <div className="container mt-3 app-main__outer">
          <div class="main-card mb-3 card">
            <div style={{overflowX:"auto"}} class="card-header">Permohonan Informasi</div>
            <div class="table-responsive overflow-x-scroll" style={{overflowX: "auto"}}>
              <table
                class="align-middle table mb-0 table table-borderless table-striped table-hover"
                style={{minWidth: "100%" }}>
                <thead>
                  <tr>
                    <th className="text-center">
                      No
                    </th>
                    <th className="text-center">
                      Nama
                    </th>
                    <th className="text-center">
                      No Hp
                    </th>
                    <th className="text-center">
                      Pekerjaan
                    </th>
                    <th className="text-center">
                      Rincian Informasi
                    </th>
                    <th className="text-center">
                      Tujuan Informasa
                    </th>
                    <th className="text-center">
                      Almat
                    </th>
                    <th className="text-center">
                      Email
                    </th>
                    <th className="text-center">
                      Aksi
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {list.map((informasi, index) => {
                    return (
                      <tr key={index}>
                        <td className="text-left">
                          <p>{index + 1}</p>
                        </td>
                        <td className="text-left">
                          <p>{informasi.nama}</p>
                        </td>
                        <td className="text-left">
                          <p>{informasi.noHp}</p>
                        </td>
                        <td className="text-left">
                          <p>{informasi.pekerjaan}</p>
                        </td>
                        <td className="text-left">
                          <p>{informasi.rincianInformasi}</p>
                        </td>
                        <td className="text-left">
                          <p>{informasi.tujuanInformasi}</p>
                        </td>
                        <td className="text-left">
                          <p>{informasi.alamat}</p>
                        </td>
                        <td className="text-left">
                          <p>{informasi.email}</p>
                        </td>
                        <td class="text-center">
                          <button  type="button" class="btn-primary mr-2 btn-sm">
                            <a className="text-light" href={"/detail-permohonan-informasi/" + informasi.id}><i class="fas fa-info-circle"></i></a>
                          </button>
                          <button type="button" class="btn-danger btn-sm" onClick={() => delete(informasi.id)}>
                            <i class="fa-solid fa-trash"></i>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AdminPermohonanInformasi;
