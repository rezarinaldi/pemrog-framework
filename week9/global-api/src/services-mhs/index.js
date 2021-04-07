import DeleteAPI from "./Delete";
import GetAPI from "./Get";
import PostAPI from "./Post";

const getMahasiswa = () => GetAPI("mahasiswa?_sort=id&_order=desc");
const postMahasiswa = (dataYgDiKirim) => PostAPI("mahasiswa", dataYgDiKirim);
const deleteMahasiswa = (dataYgDiHapus) =>
  DeleteAPI("mahasiswa", dataYgDiHapus);

const API_MHS = {
  // inisialiasi function" yang akan disedikan global API
  getMahasiswa,
  postMahasiswa,
  deleteMahasiswa,
};

export default API_MHS;
