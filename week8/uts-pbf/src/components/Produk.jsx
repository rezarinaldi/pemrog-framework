import React, { Component } from "react";
import { AwesomeButton } from "react-awesome-button";

class Produk extends Component {
  state = {
    listProduk: [],
  };

  ambilDataProduk = () => {
    fetch("http://localhost:3001/ricecooker")
      .then((response) => response.json())
      .then((jsonHasilAmbilDariAPI) => {
        this.setState({
          listProduk: jsonHasilAmbilDariAPI,
        });
      });
  };

  componentDidMount() {
    this.ambilDataProduk();
  }

  handleGetRiceCooker = (data) => {
    fetch(`http://localhost:3001/ricecooker/${data}`, { method: "GET" })
      .then((response) => response.json())
      .then((res) => {
        var dataRiceCooker = { ...this.state.insertKeranjang };
        dataRiceCooker["id"] = res["id"];
        dataRiceCooker["nama"] = res["nama"];
        dataRiceCooker["harga"] = res["harga"];
        dataRiceCooker["stok"] = res["stok"];
        dataRiceCooker["qty"] = 1;
        this.setState({
          insertKeranjang: dataRiceCooker,
        });
      })
      .then(() => {
        this.handleCekKeranjang(data);
      })
      .then(() => {
        this.handleTombolSimpan();
        alert("Data berhasil ditambahkan ke keranjang!");
      });
  };

  handleCekKeranjang = (data) => {
    fetch(`http://localhost:3002/keranjang/${data}`, { method: "GET" }).then(
      (response) => {
        if (response.ok) {
          response.json().then((res) => {
            this.handleUpdateKeranjang(data, res);
            this.ambilDataProduk();
          });
        } else {
          this.handleTombolSimpan();
        }
      }
    );
  };

  handleUpdateKeranjang = (data, res) => {
    fetch(`http://localhost:3002/keranjang/${data}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: res["id"],
        nama: res["nama"],
        harga: res["harga"],
        stok: res["stok"],
        qty: res["qty"] + 1,
      }),
    });
  };

  handleTombolSimpan = () => {
    fetch("http://localhost:3002/keranjang", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(this.state.insertKeranjang),
    }).then((Response) => {
      this.ambilDataProduk();
    });
  };

  listProduk() {
    return this.state.listProduk.map((produk) => {
      return (
        <div className="col-sm-4 my-3" key={produk.id}>
          <div className="card">
            <img
              className="mx-auto d-block img-fluid my-3"
              width="50%"
              src={produk.gambar}
              alt="Ricecooker"
            />
            <div className="card-block p-3">
              <h5 className="card-title">{produk.nama}</h5>
              <h4 className="card-text text-info font-weight-bold">
                Rp{produk.harga},00
              </h4>
              <p className="card-text">
                <small className="text-muted">Stok: {produk.stok}</small>
              </p>
              <AwesomeButton
                type="primary"
                onPress={() => this.handleGetRiceCooker(produk.id)}
              >
                🛒 Beli Produk
              </AwesomeButton>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="col-lg-12">
        <div className="container">
          <h1>📜 List Produk</h1>
          <div className="row">{this.listProduk()}</div>
        </div>
      </div>
    );
  }
}

export default Produk;
