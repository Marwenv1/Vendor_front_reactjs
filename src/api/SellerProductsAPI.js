import { useEffect, useState } from "react";
import axios from "axios";

function SellerProductsAPI(token) {
  const [sellerProducts, setSellerProducts] = useState([]);
  const [sellerCallback, setSellerCallback] = useState(false);

  useEffect(() => {
    if (token) {
      const getProducts = async () => {
        const res = await axios.get(
          "https://marketplace-tayara.herokuapp.com/api/seller_product",
          {
            headers: { Authorization: token },
          'Access-Control-Allow-Origin': '*'
          }
        );
        setSellerProducts(res.data.sellerProducts);
      };
      getProducts();
    }
  }, [token, sellerCallback]);

  return {
    sellerProducts: [sellerProducts, setSellerProducts],
    sellerCallback: [sellerCallback, setSellerCallback],
  };
}

export default SellerProductsAPI;
