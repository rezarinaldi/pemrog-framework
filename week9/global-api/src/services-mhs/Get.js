import { domainPath } from "./Config";

const GetAPI = (path) => {
  // path digunakan untuk menunjuk alamat API mana yang akan di-request
  const promise = new Promise((resolve, reject) => {
    fetch(`${domainPath}/${path}`) // alamat url domain + path untuk mengakses full alamat API yang di-request
      .then((response) => response.json()) // response dari server harus dijadikan json
      .then(
        (result) => {
          resolve(result); // jika sukses menerima response dari server, maka resolve response ke user
        },
        (err) => {
          // jika terjadi error dari server (server down, dll),
          reject(err); // maka kirim pesan error ke user melalui reject
        }
      );
  });
  return promise;
};

export default GetAPI;
