import { useEffect, useState } from "react";
import axios from "axios";

function CategoryAPI() {
  const [category, setCategory] = useState([]);
  const [callback, setCallback] = useState(false);

  const getCategory = async () => {
    const res = await axios.get("https://marketplace-tayara.herokuapp.com/api/category" ,{headers: {'Access-Control-Allow-Origin': '*'}});
    setCategory(res.data.categories);
  };

  useEffect(() => {
    getCategory();
  }, [callback]);

  return {
    category: [category, setCategory],
    callback: [callback, setCallback],
  };
}

export default CategoryAPI;
