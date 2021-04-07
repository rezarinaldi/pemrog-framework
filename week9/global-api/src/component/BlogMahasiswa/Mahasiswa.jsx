import React from "react";

const Mahasiswa = (props) => {
  return (
    <div className="mahasiswa">
      <div className="gambar-mahasiswa">
        <img
          src="https://placeimg.com/80/80/tech"
          alt="Gambar Thumbnail Mahasiswa"
        />
      </div>
      <div className="konten-mahasiswa">
        <div className="nama-mahasiswa">{props.nama}</div>
        <p className="nim-mahasiswa">Nim: {props.nim}</p>
        <p className="alamat-mahasiswa">Alamat: {props.alamat}</p>
        <p className="hp-mahasiswa">Hp: {props.hp}</p>
        <p className="angkatan-mahasiswa">Angkatan: {props.angkatan}</p>
        <p className="status-mahasiswa">Status: {props.status}</p>
        <button
          className="btn btn-sm btn-warning"
          onClick={() => props.hapusMahasiswa(props.idMahasiswa)}
        >
          Hapus
        </button>
      </div>
    </div>
  );
};

export default Mahasiswa;
