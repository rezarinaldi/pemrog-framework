import { domainPath } from "./Config";

const PostAPI = (path, data) => {
  const promise = new Promise((resolve, reject) => {
    fetch(`${domainPath}/${path}`, {
      method: "POST", // method POST untuk input atau insert data
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), // kirimkan ke body request untuk data artikel yang akan ditambahkan (insert)
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

export default PostAPI;
