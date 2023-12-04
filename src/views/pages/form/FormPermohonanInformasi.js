import React, { useState } from "react";
import Navbar from "../../../component/Navbar";
// import "../../css/FormPermohonanInformasi.css";
import "../../../css/FormPermohonanInformasi.css";
import info from "../../../aset/undraw_settings_tab_mgiw.svg";
import Footer from "../../../component/Footer";
import axios from "axios";
import Swal from "sweetalert2";
import { API_DUMMY } from "../../../utils/base_URL";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { async } from "q";

const FormPermohonanInformasi = () => {
  const [alamat, setAlamat] = useState("");
  const [caraMendapatInformasi, setCaraMendapatkanInformasi] = useState("");
  const [caraMemperolehInformasi, setCaraMemperolehnInformasi] = useState("");
  const [createDate, setCreateDate] = useState("");
  const [ditunjukanKepada, setDitunjukanKepada] = useState("");
  const [email, setEmail] = useState("");
  const [id, setID] = useState("");
  const [nama, setNama] = useState("");
  const [noHp, setNoHp] = useState("");
  const [pekerjaan, setPekerjaan] = useState("");
  const [pendidikan, setPendidikan] = useState("");
  const [rincianInformasi, setRincianInformasi] = useState("");
  const [tandaPengenal, setTandaPengenal] = useState("");
  const [tujuanInformasi, setTujuanInformasi] = useState("");
  const [updateDate, setUpdateDate] = useState("");
  const [show, setShow] = useState(false);

  const Add = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("nama", nama);
    formData.append("alamat", alamat);
    formData.append("pendidikan", pendidikan);
    formData.append("email", email);
    formData.append("noHp", noHp);
    formData.append("tujuanInformasi", tujuanInformasi);
    formData.append("rincianInformasi", rincianInformasi);
    formData.append("pekerjaan", pekerjaan);
    formData.append("ditunjukanKepada", ditunjukanKepada);
    formData.append("caraMemperolehInformasi", caraMemperolehInformasi);
    formData.append("caraMendapatkanInformasi", caraMendapatInformasi);
    formData.append("file", tandaPengenal);

    try {
      await axios.post(
        `${API_DUMMY}/bawaslu/api/permohonan-informasi/add`,
        formData
        // {
        //   headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        // }
      );
      setShow(false);
      Swal.fire({
        icon: "success",
        title: "Berhasil Ditambahkan",
        showConfirmButton: false,
        timer: 1500,
      });
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } catch (error) {
      console.log(error);
    }
  };

  // const add = async (e) => {
  //   e.preventDefault();

  //   const formData = new FormData();
  //   formData.append("nama", nama);
  //   formData.append("alamat", alamatPermohonan);
  //   formData.append("pendidikan", pendidikan);
  //   formData.append("noHp", noHp);
  //   formData.append("tujuanInformasi", tujuanInformasi);
  //   formData.append("rincianInformasi", rincianInformasi);
  //   formData.append("pekerjaan", pekerjaan);
  //   formData.append("ditunjukanKepada", ditunjukanKepada);
  //   formData.append("caraMemperolehInformasi", caraMemperolehInformasi);
  //   formData.append("caraMendapatkanInformasi", caraMendapatkanInformasi);
  //   formData.append("file", tandaPengenal); // Upload gambar jika dipilih

  //   try {
  //     await axios.post(
  //       `${API_DUMMY}/bawaslu/api/permohonan-informasi/add`,
  //       formData,
  //       {
  //         headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  //       }
  //     );

  //     setShow(false);
  //     Swal.fire({
  //       icon: "success",
  //       title: "Berhasil Ditambahkan",
  //       showConfirmButton: false,
  //       timer: 1500,
  //     });
  //     setTimeout(() => {
  //       window.location.reload();
  //     }, 1500);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <>
      <div>
        <Navbar />
        <div className="head">
          <div className="form text-center">
            <div className="form-permohonan section-title text-center">
              <h5
                id="text1-gabung"
                className="sub-title double-line text-center">
                Bawaslu Boyolali
              </h5>
              <h2 id="text2-gabung" className="title text-center">
                Form Permohonan Informasi
              </h2>
              {/* <p className="content">Dcidunt eget semper nec quam. Sed hendrerit. acfelis Nunc egestas augue
                        atpellentesque laoreet</p> */}
            </div>
            {/* <div className="info">
              <img src={info} className="img" id="img" />
            </div> */}
          </div>
          <form onSubmit={Add} className="option" style={{}}>
            <div>
              <div>
                <label for="exampleInputPassword1" className="form-label">
                  Nama Pemohon
                </label>
                <input
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                  type="text"
                  className="form-control"
                />
                <p className="pp">0 of 30 max characters</p>
                <br></br>
                <p>Alamat Pemohon:</p>
                <textarea
                  className="textarea"
                  id="textarea"
                  value={alamat}
                  onChange={(e) => setAlamat(e.target.value)}
                />
                <br />
                <br />
                <p>Nomor Identitas:</p>
                <input
                  type="number"
                  className=" form-control "
                  id=""
                  value={pekerjaan}
                  onChange={(e) => setPekerjaan(e.target.value)}
                />
                <br></br>
                <br></br>
                <label for="exampleInputPassword1" className="form-label">
                  Jenis Identitas
                </label>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Pilih Jenis Identitas</option>
                  <option value="1">KTP (Kartu Tanda Penduduk)</option>
                  <option value="2">SIM (Surat Izin Mengemudi)</option>
                  <option value="3">KTM (Surat Tanda Mahasiswa)</option>
                </select>
                <br />
                <br />
                <p>Pekerjaan:</p>
                <input
                  type="text"
                  className=" form-control "
                  id=""
                  value={pekerjaan}
                  onChange={(e) => setPekerjaan(e.target.value)}
                />
                <p className="pp">0 of 60 max characters</p>
                <br></br>
                <br></br>
                <p>Nomor Telp/HP:</p>
                <input
                  className=" form-control "
                  id=""
                  type="number"
                  value={noHp}
                  onChange={(e) => setNoHp(e.target.value)}
                />
                <p className="pp">0 of 30 max characters</p>
                <br></br>
                <p>Email:</p>
                <input
                  className=" form-control "
                  id=""
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />{" "}
                <p className="pp">0 of 30 max characters</p>
                <br></br>
                <p>Rincian Yang Dibutuhkan (Tambah Keterangan Bila Perlu):</p>
                <textarea
                  value={rincianInformasi}
                  onChange={(e) => setRincianInformasi(e.target.value)}
                  className="textarea"
                  id="textarea"
                />
                <p className="pp">0 of 100 max characters</p>
                <br></br>
              </div>
            </div>
            <div className="tujuan">
              <p>Tujuan Penggunaan Informasi:</p>
              <textarea
                value={ditunjukanKepada}
                onChange={(e) => setDitunjukanKepada(e.target.value)}
                className="textarea"
                id="textarea"
              />
              <p className="pp">0 of 100 max characters</p>

              <br></br>
              <p>Cara Memperoleh Informasi:</p>
              <select
                value={caraMemperolehInformasi}
                onChange={(e) => setCaraMemperolehnInformasi(e.target.value)}
                class="form-select"
                aria-label="Default select example">
                <option selected>Pilih Cara Memperoleh Informasi</option>
                <option value="mengambil sendiri">Mengambil Langsung</option>
                <option value="pos">POS</option>
                <option value="kurir">Kurir</option>
                <option value="fax">FAX</option>
                <option value="email">Email</option>
              </select>
              <br></br>
              <br></br>
              <p>Upload Photo Identitas (.jpg) size max 1mb:</p>
              <input
                type="file"
                onChange={(e) => setTandaPengenal(e.target.files[0])}
              />
              <br></br>
              <p>Jaminan Perlindungan Data Pribadi:</p>
              <ol>
                <li>
                  Permintaan data pribadi untuk kepentingan pelayanan informasi
                </li>
                <li>
                  Bawaslu tidak akan memberikan data pribadi pemohon kepada
                  pihak ketiga.
                </li>
                <li>
                  Bawaslu akan memberitahukan kepada pemohon jika terjadi
                  kebocoran perlindungan data pribadi dan mengupayakan
                  pemulihannya.
                </li>
                <li>
                  Bawaslu akan memberikan sanksi kepada oknum internal yang
                  mengambil data pribadi pemohon untuk di luar kepentingan
                  pelayanan informasi.
                </li>
                <li>
                  Pemohon dapat menyampaikan pengaduan/keberatan bagi pemohon
                  atas dugaan tidak terlindunginya data pribadi pemohon.
                </li>
                <li>
                  Bawaslu akan memusnahkan data pribadi pemohon setelah lima
                  tahun atau di bawah lima tahun atas permintaan pemohon dengan
                  alasan yang dibenarkan oleh peraturan per-UU-an
                </li>
              </ol>
              <br></br>
              <div id="div-button" className="div-button">
                {" "}
                <button id="btn-kirim" type="submit" className="submit">
                  Kirim
                </button>
              </div>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default FormPermohonanInformasi;
