import DeleteAPI from "./Delete";
import GetAPI from "./Get";
import PostAPI from "./Post";

const getNewsBlog = () => GetAPI("posts?_sort=id&_order=desc");
const postNewsBlog = (dataYgDiKirim) => PostAPI("posts", dataYgDiKirim);
const deleteNewsBlog = (dataYgDiHapus) => DeleteAPI("posts", dataYgDiHapus);

const API = {
  // inisialiasi function" yang akan disedikan global API
  getNewsBlog,
  postNewsBlog,
  deleteNewsBlog,
};

export default API;
