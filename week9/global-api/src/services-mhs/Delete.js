import { domainPath } from "./Config";

const DeleteAPI = (path, data) => {
  const promise = new Promise((resolve, reject) => {
    fetch(`${domainPath}/${path}/${data}`, {
      method: "DELETE",
    }).then(
      (result) => {
        resolve(result); // jika sukses menerima response dari server maka resolve response ke user
      },
      (err) => {
        // jika terjadi error dari server (server down, dll),
        reject(err); // maka kirim pesan error ke user melalui reject
      }
    );
  });
  return promise;
};

export default DeleteAPI;
