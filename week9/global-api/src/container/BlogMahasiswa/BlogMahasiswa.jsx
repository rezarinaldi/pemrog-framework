import React, { Component } from "react";
import "./BlogMahasiswa.css";
import Mahasiswa from "../../component/BlogMahasiswa/Mahasiswa";
import API_MHS from "../../services-mhs";

class BlogMahasiswa extends Component {
  state = {
    listMahasiswa: [],
    insertMahasiswa: {
      id: 1,
      nama: "",
      nim: "",
      alamat: "",
      hp: "",
      angkatan: "",
      status: "",
    },
  };

  ambilDataDariSeverAPI = () => {
    API_MHS.getMahasiswa().then((result) => {
      this.setState({
        listMahasiswa: result,
      });
    });
  };

  componentDidMount() {
    this.ambilDataDariSeverAPI();
  }

  handleHapusMahasiswa = (data) => {
    API_MHS.deleteMahasiswa(data).then((response) => {
      this.ambilDataDariSeverAPI();
    });
  };

  handleTambahMahasiswa = (event) => {
    let formInsertMahasiswa = { ...this.state.insertMahasiswa };
    let timestamp = new Date().getTime();
    formInsertMahasiswa["id"] = timestamp;
    formInsertMahasiswa[event.target.name] = event.target.value;
    this.setState({
      insertMahasiswa: formInsertMahasiswa,
    });
  };

  handleTombolSimpan = () => {
    API_MHS.postMahasiswa(this.state.insertMahasiswa).then((response) => {
      this.ambilDataDariSeverAPI();
    });
  };

  render() {
    return (
      <div className="post-mahasiswa">
        <div className="form pb-3 border-bottom">
          <div className="form-gorup row">
            <label htmlFor="nama" className="col-sm-2 col-form-label">
              Nama
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="nama"
                name="nama"
                onChange={this.handleTambahMahasiswa}
              />
            </div>
          </div>
          <div className="form-group row my-3">
            <label htmlFor="nim" className="col-sm-2 col-form-label">
              Nim
            </label>
            <div className="col-sm-10">
              <input
                type="number"
                className="form-control"
                id="nim"
                name="nim"
                onChange={this.handleTambahMahasiswa}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="alamat" className="col-sm-2 col-form-label">
              Alamat
            </label>
            <div className="col-sm-10">
              <textarea
                name="alamat"
                id="alamat"
                rows="3"
                className="form-control"
                onChange={this.handleTambahMahasiswa}
              ></textarea>
            </div>
          </div>
          <div className="form-group row my-3">
            <label htmlFor="hp" className="col-sm-2 col-form-label">
              Hp
            </label>
            <div className="col-sm-10">
              <input
                type="number"
                className="form-control"
                id="hp"
                name="hp"
                onChange={this.handleTambahMahasiswa}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="angkatan" className="col-sm-2 col-form-label">
              Angkatan
            </label>
            <div className="col-sm-10">
              <input
                type="number"
                className="form-control"
                id="angkatan"
                name="angkatan"
                onChange={this.handleTambahMahasiswa}
              />
            </div>
          </div>
          <div className="form-group row my-3">
            <label htmlFor="status" className="col-sm-2 col-form-label">
              Status
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="status"
                name="status"
                onChange={this.handleTambahMahasiswa}
              />
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.handleTombolSimpan}
          >
            Simpan
          </button>
        </div>
        <h2 className="mt-2">Daftar Mahasiswa</h2>
        {this.state.listMahasiswa.map((mahasiswa) => {
          return (
            <Mahasiswa
              key={mahasiswa.id}
              nama={mahasiswa.nama}
              nim={mahasiswa.nim}
              alamat={mahasiswa.alamat}
              hp={mahasiswa.hp}
              angkatan={mahasiswa.angkatan}
              status={mahasiswa.status}
              idMahasiswa={mahasiswa.id}
              hapusMahasiswa={this.handleHapusMahasiswa}
            />
          );
        })}
      </div>
    );
  }
}

export default BlogMahasiswa;
