import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import css from "../adminpages/AdminPanel.module.css";

axios.defaults.withCredentials = true

const HistoryHome = () => {
  const [hproducts, setHProducts] = useState([]); 
  const [reload, setReload] = useState(false);

  const navigate = useNavigate();

  function backAdmin() {
    navigate("/admin/panel")
  }

  const [filter, setFilter] = useState({
    hari: '',
    bulan: '',
    tahun: '',
    location: ''
});

const handleFilterChange = (e) => {
  setFilter({
      ...filter,
      [e.target.name]: e.target.value
  });
};

  useEffect(() => {
    getHProducts();
  }, []);


//---------------------------------------->
//-------------------------------------------------->
//---------------------------------------- Get Datas Area ---------------------------------->
//Get Front Office Datas
  const getHProducts = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/gethistory`);
    setHProducts(response.data.user);
  };

  useEffect(() => {
    const interval = setInterval(() => {
        setReload(prevReload => !prevReload);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={css.thisdiv1}>
      <h2 className={css.title}>History</h2>
      <div className={css.divTable}>
      <form>
    <label>
        Lokasi:
        <input type="text" name="location" value={filter.location} onChange={handleFilterChange} />
    </label>
    <label>
        Hari:
        <input type="text" name="hari" value={filter.hari} onChange={handleFilterChange} />
    </label>
    <label>
        Bulan:
        <input type="text" name="bulan" value={filter.bulan} onChange={handleFilterChange} />
    </label>
    <label>
        Tahun:
        <input type="text" name="tahun" value={filter.tahun} onChange={handleFilterChange} />
    </label>
</form>
      <table className={css.table}>
        <thead className={css.thisHead}>
          <tr className="thisTr1">
            <th>Id</th>
            <th>Lokasi</th>
            <th>Antrian</th>
            <th>Jemput</th>
            <th>Dijemput</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody className={css.thisBody}>
        {hproducts
    .filter((product) => {
        if (filter.hari && product.created_at.toLowerCase().indexOf(filter.hari.toLowerCase()) === -1) return false;
        if (filter.bulan && product.created_at.toLowerCase().indexOf(filter.bulan.toLowerCase()) === -1) return false;
        if (filter.tahun && product.created_at.toLowerCase().indexOf(filter.tahun.toLowerCase()) === -1) return false;
        if (filter.location && product.lokasi.toLowerCase().indexOf(filter.location.toLowerCase()) === -1) return false;
        return true;
    })
    .map((product) => (
        <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.lokasi}</td>
            <td>{product.noantrian}</td>
            <td>{product.created_at}</td>
            <td>{product.update_at}</td>
            {product.status == "Menunggu" ? <td className={css.status1}>{product.status}</td>: <td className={css.status3}>{product.status}</td>}
        </tr>
    ))}
        </tbody>
      </table>
      </div>
      <button onClick={backAdmin}>Back</button>
    </div>
  );
};

export default HistoryHome;
