import { useEffect, useState } from "react";
import axios from "axios";

function ShopsAPI() {
  const [shops, setShops] = useState([]);
  const [callback, setCallback] = useState(false);

  const getShops = async () => {
    const res = await axios.get("https://marketplace-tayara.herokuapp.com/api/shops",{headers: {'Access-Control-Allow-Origin': '*'}});
    setShops(res.data.shops);
  };

  useEffect(() => {
    getShops();
  }, [callback]);

  return {
    shops: [shops, setShops],
    callback: [callback, setCallback],
  };
}

export default ShopsAPI;
