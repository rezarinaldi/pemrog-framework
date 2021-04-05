import React, { Component } from "react";

var total, subtotal, no;

class Keranjang extends Component {
  state = {
    keranjang: [],
  };

  componentDidMount() {
    this.ambilDataKeranjang();
  }

  ambilDataKeranjang = () => {
    fetch("http://localhost:3002/keranjang")
      .then((response) => response.json())
      .then((jsonHasilAmbilDariAPI) => {
        this.setState({
          keranjang: jsonHasilAmbilDariAPI,
        });
      });
  };

  listKeranjang() {
    total = 0;
    subtotal = 0;
    no = 0;
    return this.state.keranjang.map((keranjang) => {
      subtotal = keranjang.harga * keranjang.qty;
      total = total + keranjang.harga * keranjang.qty;
      no += 1;
      return (
        <tr key={keranjang.id}>
          <th scope="row">{no}</th>
          <td>{keranjang.nama}</td>
          <td>Rp{keranjang.harga},00</td>
          <td>{keranjang.qty}</td>
          <td>Rp{subtotal},00</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div className="col-lg-12">
        <div className="container">
          <h1>🛒 Keranjang</h1>
          <div className="row">
            <table className="table mt-3 table-striped">
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Nama</th>
                  <th scope="col">Harga</th>
                  <th scope="col">Qty</th>
                  <th scope="col">Subtotal</th>
                </tr>
              </thead>
              <tbody>{this.listKeranjang()}</tbody>
              <tfoot className="font-weight-bold text-white bg-primary">
                <td className="text-center" colSpan="4">
                  Total
                </td>
                <td>Rp{total},00</td>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Keranjang;
