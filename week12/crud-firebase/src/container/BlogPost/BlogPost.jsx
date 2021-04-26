import React, { Component } from "react";
import "./BlogPost.css";
import Post from "../../component/BlogPost/Post";
// import API from "../../services";
import firebase from "firebase";
import firebaseConfig from "../../firebase/config";

class BlogPost extends Component {
  constructor(props) {
    super(props);
    firebase.initializeApp(firebaseConfig); // inisialisasi konfigurasi database firebase

    this.state = {
      // komponen state dari React untuk statefull component
      listArtikel: [], // variabel array yang digunakan untuk menyimpan data API
    };
  }

  ambilDataDariSeverAPI = () => {
    // fungsi untuk mengambil data API dari Realtime Database Firebase
    let ref = firebase.database().ref("/");
    ref.on("value", (snapshot) => {
      const state = snapshot.val();
      this.setState(state);
    });
  };

  simpanDataKeServerAPI = () => {
    // fungsi untuk mengirim/insert data API dari Realtime Database Firebase
    firebase.database().ref("/").set(this.state);
  };

  componentDidMount() {
    // komponen untuk mengecek ketika component telah dimounting, maka panggil API
    this.ambilDataDariSeverAPI(); // ambil data dari server API lokal
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      this.simpanDataKeServerAPI();
    }
  }

  handleHapusArtikel = (idArtikel) => {
    // fungsi yang meng-handle button action hapus data
    const { listArtikel } = this.state;
    const newState = listArtikel.filter((data) => {
      return data.uid !== idArtikel;
    });
    this.setState({ listArtikel: newState });
  };

  handleTombolSimpan = (event) => {
    // fungsi untuk meng-handle saat button action diklik (simpan data)
    let title = this.refs.judulArtikel.value; // this.refs mengacu pada input field (input text, textarea, number, dll)
    let body = this.refs.isiArtikel.value;
    let uid = this.refs.uid.value;

    if (uid && title && body) {
      // cek apakah semua data memiliki nilai (tidak null)
      const { listArtikel } = this.state;
      const indeksArtikel = listArtikel.findIndex((data) => {
        return data.uid === uid;
      });
      listArtikel[indeksArtikel].title = title;
      listArtikel[indeksArtikel].body = body;
      this.setState({ listArtikel });
    } else if (title && body) {
      // jika data belum di server
      const uid = new Date().getTime().toString();
      const { listArtikel } = this.state;
      listArtikel.push({ uid, title, body });
      this.setState({ listArtikel });
    }

    this.refs.judulArtikel.value = "";
    this.refs.isiArtikel.value = "";
    this.refs.uid.value = "";
  };

  render() {
    return (
      <div className="post-artikel">
        <div className="form pb-3 border-bottom">
          <div className="form-gorup row">
            <label htmlFor="title" className="col-sm-2 col-form-label">
              Judul
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                ref="judulArtikel"
              />
            </div>
          </div>
          <div className="form-group row my-3">
            <label htmlFor="body" className="col-sm-2 col-form-label">
              Isi
            </label>
            <div className="col-sm-10">
              <textarea
                name="body"
                id="body"
                rows="3"
                className="form-control"
                ref="isiArtikel"
              ></textarea>
            </div>
          </div>
          <input type="hidden" name="uid" ref="uid" />
          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.handleTombolSimpan}
          >
            Simpan
          </button>
        </div>
        <h2 className="mt-2 fw-bolder">Daftar Artikel</h2>
        {this.state.listArtikel.map((artikel) => {
          // looping dan masukkan untuk setiap data yang ada di listArtikel ke variabel artikel
          return (
            <Post
              key={artikel.uid}
              judul={artikel.title}
              isi={artikel.body}
              idArtikel={artikel.uid}
              hapusArtikel={this.handleHapusArtikel}
            />
          );
        })}
      </div>
    );
  }
}

export default BlogPost;
