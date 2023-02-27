import React, { useState, useEffect  } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import css from "../secondpages/FrontOfficeSecondPages.module.css"

axios.defaults.withCredentials = true

const KaraokeSecondPages = () => {
  const navigate = useNavigate();
  const [msg, setMsg] = useState("");
  const [products, setProducts] = useState([]);
  const [reload, setReload] = useState(false);

  const getProducts = async (e) => {
    try {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/krkall`);
    setProducts(response.data.user);
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.message);
        if (msg == "Waiting"){
          deleteCookie();
          navigate("/karaoke");
        }
        if (msg == "unauthenticated") {
          navigate("/karaoke");
        }
      }
    }
  };

  const deleteCookie = async () => {
    const response = await axios.delete(`${process.env.REACT_APP_API_URL}/api/krkdelck`);
    return response.data
  };

  useEffect(() => {
    getProducts();
  }, [reload]);

  useEffect(() => {
    const interval = setInterval(() => {
        setReload(prevReload => !prevReload);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={css.thisGlobal}>
        {products.map((product) => (
        <div>
          <p>No antrian: {product.noantrian}</p>
          <div className={css.divStatus}>
           <div className={css.thisStatus}>
           <p className={css.status}>{product.status}</p>
           </div>
          </div>
        <div className={css.divTime}>
          <p>Request: {product.created_at}</p>
          {product.update_at != "" ? <p>Di jemput: {product.update_at}</p>: <p>Di jemput: Menunggu</p>}
        </div>
         </div>
          ))}
    </div>
  )
}

export default KaraokeSecondPages;
