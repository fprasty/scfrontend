import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import moment from '../moment-with-locales';
import css from "../adminpages/AdminPanel.module.css"

axios.defaults.withCredentials = true

const AdminHome = () => {
  const [foproducts, setFoProducts] = useState([]); //Front Office Products //1
  const [mrproducts, setMrProducts] = useState([]); //Meeting Room Products //2
  const [mtiproducts, setMtiProducts] = useState([]); //Maruti Products //3
  const [rsproducts, setRsProducts] = useState([]); //Rama Shinta Products //4
  const [kkdproducts, setKkdProducts] = useState([]); //Kiskenda Products //5
  const [mliproducts, setMliProducts] = useState([]); //Maliawan Products //6
  const [ocproducts, setOcProducts] = useState([]); //OCafe Products //7
  const [doproducts, setDoProducts] = useState([]); //DropOff Hotel Products //8
  const [vlaproducts, setVillaProducts] = useState([]); //Villa Products //9
  const [krkproducts, setKrkProducts] = useState([]); //Karouke Products //10
  const [pbproducts, setPbProducts] = useState([]); //Pasar Bandugan Products //11
  const [thproducts, setThProducts] = useState([]); //Tahu Om Shin Products //12
  const [reload, setReload] = useState(false)
  //const [cekmsg, cekMsg] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getFOProducts();
    getMRProducts();
    getMRTIProducts();
    getRSProducts();
    getKKDProducts();
    getMliProducts();
    getOcProducts();
    getDoProducts();
    getVillaProducts();
    getKrkProducts();
    getPBProducts();
    getTOSProducts();
  }, [reload]);

  //Admin Logout
  const adminLogout = async (e) => {
    try {
    const response = await axios.delete(`${process.env.REACT_APP_API_URL}/api/admin/logout`);
    navigate("/admin");
    return response.data.user 
    } catch (error) {
      if (error.response) {
  
      }
    }
  };
//---------------------------------------->
//-------------------------------------------------->
//---------------------------------------- Get Datas Area ---------------------------------->
//Get Front Office Datas
  const getFOProducts = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/fogetall`);
    setFoProducts(response.data.user);
  };
//Get Meeting Room Datas
  const getMRProducts = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/mrgetall`);
    setMrProducts(response.data.user);
  };

//Get Maruti Room Datas
  const getMRTIProducts = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/mrtigetall`);
    setMtiProducts(response.data.user);
  };
//Get Rama Shinta Room Datas
const getRSProducts = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/rmgetall`);
    setRsProducts(response.data.user);
};

//Get Kiskenda Room Datas
const getKKDProducts = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/kkdgetall`);
    setKkdProducts(response.data.user);
};

//Get Maliawan Room Datas
const getMliProducts = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/mligetall`);
    setMliProducts(response.data.user);
};

//Get OCafe Room Datas
const getOcProducts = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/ocgetall`);
    setOcProducts(response.data.user);
};
//Get Drop Office Room Datas
const getDoProducts = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/dogetall`);
    setDoProducts(response.data.user);
};

//Get Villa Room Datas
const getVillaProducts = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/vlagetall`);
    setVillaProducts(response.data.user);
};
//Get Karouke Room Datas
const getKrkProducts = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/krkgetall`);
    setKrkProducts(response.data.user);
};

//Get Karouke Room Datas
const getPBProducts = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/pbgetall`);
    setPbProducts(response.data.user);
};

//Get Tahu Om Shin Room Datas
const getTOSProducts = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/togetall`);
    setThProducts(response.data.user);
};
//---------------------------------------- End Get Datas Area ---------------------------------->
//----------------------------------------------------------------->
//-------------------------------------------------->

//---------------------------------------->
//-------------------------------------------------->
//---------------------------------------- Set Status Area ---------------------------------->

const setFoStatus = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${process.env.REACT_APP_API_URL}/api/fosetstatus`, {
        "status":"Dijemput",
        "update_at": moment().format("dddd, MMMM Do YYYY, h:mm:ss a"),
      });
    } catch (error) {
      if (error.response) {
    
      }
    }
};

  const setMrStatus = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${process.env.REACT_APP_API_URL}/api/mrsetstatus`, {
        "status":"Dijemput",
        "update_at": moment().format("dddd, MMMM Do YYYY, h:mm:ss a"),
      });
    } catch (error) {
      if (error.response) {
    
      }
    }
  };
  const setMrtiStatus = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${process.env.REACT_APP_API_URL}/api/mrtsetstatus`, {
        "status":"Dijemput",
        "update_at": moment().format("dddd, MMMM Do YYYY, h:mm:ss a"),
      });
    } catch (error) {
      if (error.response) {
    
      }
    }
  };
  const setRSStatus = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${process.env.REACT_APP_API_URL}/api/rssetstatus`, {
        "status":"Dijemput",
        "update_at": moment().format("dddd, MMMM Do YYYY, h:mm:ss a"),
      });
    } catch (error) {
      if (error.response) {
    
      }
    }
  };
  const setKKDStatus = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${process.env.REACT_APP_API_URL}/api/kkdsetstatus`, {
        "status":"Dijemput",
        "update_at": moment().format("dddd, MMMM Do YYYY, h:mm:ss a"),
      });
    } catch (error) {
      if (error.response) {
    
      }
    }
  };
  const setMLIStatus = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${process.env.REACT_APP_API_URL}/api/mlisetstatus`, {
        "status":"Dijemput",
        "update_at": moment().format("dddd, MMMM Do YYYY, h:mm:ss a"),
      });
    } catch (error) {
      if (error.response) {
      
      }
    }
  };
  const setOcStatus = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${process.env.REACT_APP_API_URL}/api/ocsetstatus`, {
        "status":"Dijemput",
        "update_at": moment().format("dddd, MMMM Do YYYY, h:mm:ss a"),
      });
    } catch (error) {
      if (error.response) {
    
      }
    }
  };
  const setDoStatus = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${process.env.REACT_APP_API_URL}/api/dosetstatus`, {
        "status":"Dijemput",
        "update_at": moment().format("dddd, MMMM Do YYYY, h:mm:ss a"),
      });
    } catch (error) {
      if (error.response) {
    
      }
    }
  };
  const setVillaStatus = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${process.env.REACT_APP_API_URL}/api/vlasetstatus`, {
        "status":"Dijemput",
        "update_at": moment().format("dddd, MMMM Do YYYY, h:mm:ss a"),
      });
    } catch (error) {
      if (error.response) {
    
      }
    }
  };
  const setKrkStatus = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${process.env.REACT_APP_API_URL}/api/krksetstatus`, {
        "status":"Dijemput",
        "update_at": moment().format("dddd, MMMM Do YYYY, h:mm:ss a"),
      });
    } catch (error) {
      if (error.response) {
    
      }
    }
  };
  const setPbStatus = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${process.env.REACT_APP_API_URL}/api/pbsetstatus`, {
        "status":"Dijemput",
        "update_at": moment().format("dddd, MMMM Do YYYY, h:mm:ss a"),
      });
    } catch (error) {
      if (error.response) {
    
      }
    }
  };
  const setTosStatus = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${process.env.REACT_APP_API_URL}/api/tossetstatus`, {
        "status":"Dijemput",
        "update_at": moment().format("dddd, MMMM Do YYYY, h:mm:ss a"),
      });
    } catch (error) {
      if (error.response) {
    
      }
    }
  };
//---------------------------------------->
//-------------------------------------------------->
//---------------------------------------- End Set Status Area ---------------------------------->

//---------------------------------------->
//-------------------------------------------------->
//---------------------------------------- Delete User Area ---------------------------------->
const FoDeleteUser = async () => {
    const response = await axios.delete(`${process.env.REACT_APP_API_URL}/api/fodelete`);
    return response.data.user
  };
const MrDeleteUser = async () => {
    const response = await axios.delete(`${process.env.REACT_APP_API_URL}/api/mrdelete`);
    return response.data.user
  };
const MrtiDeleteUser = async () => {
    const response = await axios.delete(`${process.env.REACT_APP_API_URL}/api/mrtidelete`);
    return response.data.user
  };
const RsDeleteUser = async () => {
    const response = await axios.delete(`${process.env.REACT_APP_API_URL}/api/rsdelete`);
    return response.data.user
  };
const KkdDeleteUser = async () => {
    const response = await axios.delete(`${process.env.REACT_APP_API_URL}/api/kkddelete`);
    return response.data.user
  };
const MaliawanDeleteUser = async () => {
    const response = await axios.delete(`${process.env.REACT_APP_API_URL}/api/mlidelete`);
    return response.data.user
  };
const OCafeDeleteUser = async () => {
    const response = await axios.delete(`${process.env.REACT_APP_API_URL}/api/ocdelete`);
    return response.data.user
  };
const DoDeleteUser = async () => {
    const response = await axios.delete(`${process.env.REACT_APP_API_URL}/api/dodelete`);
    return response.data.user
  };
const VillaDeleteUser = async () => {
    const response = await axios.delete(`${process.env.REACT_APP_API_URL}/api/vladelete`);
    return response.data.user
  };
const KrkDeleteUser = async () => {
    const response = await axios.delete(`${process.env.REACT_APP_API_URL}/api/krkdelete`);
    return response.data.user
  };
const PbDeleteUser = async () => {
    const response = await axios.delete(`${process.env.REACT_APP_API_URL}/api/pbdelete`);
    return response.data.user
  };
const TsDeleteUser = async () => {
    const response = await axios.delete(`${process.env.REACT_APP_API_URL}/api/tosdelete`);
    return response.data.user
  };
//---------------------------------------->
//-------------------------------------------------->
//---------------------------------------- End Delete User Area ---------------------------------->

function toHistory() {
  navigate("/admin/panel/history")
}

/*
  const deleteCookie = async () => {
    const response = await axios.delete(`${process.env.REACT_APP_API_URL}/api/logout`);
    return response.data.user
  };
*/
  useEffect(() => {
    const interval = setInterval(() => {
        setReload(prevReload => !prevReload);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={css.thisdiv1}>
      <h2 className={css.title}>Admin Control Panel</h2>
      <div className={css.divTable}>
      <table className={css.table}>
        <thead className={css.thisHead}>
          <tr className="thisTr1">
            <th>Lokasi</th>
            <th>Antrian</th>
            <th>Jemput</th>
            <th>Dijemput</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
       {foproducts == "" && mrproducts == "" && mtiproducts == "" && rsproducts == "" && kkdproducts == "" && mliproducts == "" && ocproducts == "" && doproducts == "" && vlaproducts == "" && krkproducts == "" && pbproducts == "" && thproducts == "" ?
       <tbody>
        <h1>DATA KOSONG</h1>
       </tbody>
       :  
       <tbody className={css.thisBody}>
          {foproducts.map((product) => (
            <tr key={product.id}>
              <td>{product.lokasi}</td>
              <td>{product.noantrian}</td>
              <td>{product.created_at}</td>
              <td>{product.update_at}</td>
              {product.status == "Menunggu" ? <td className={css.status1}>{product.status}</td>: <td className={css.status2}>{product.status}</td>}
              <td>
                <button onClick={setFoStatus}>Oke</button>
                <button onClick={FoDeleteUser}>Selesai</button>
              </td>
            </tr>
          ))}
            {mrproducts.map((product) => (
            <tr key={product.id}>
              <td>{product.lokasi}</td>
              <td>{product.noantrian}</td>
              <td>{product.created_at}</td>
              <td>{product.update_at}</td>
              {product.status == "Menunggu" ? <td className={css.status1}>{product.status}</td>: <td className={css.status2}>{product.status}</td>}
              <td>
                <button onClick={setMrStatus}>Oke</button>
                <button onClick={MrDeleteUser}>Selesai</button>
              </td>
            </tr>
          ))}
            {mtiproducts.map((product) => (
            <tr key={product.id}>
              <td>{product.lokasi}</td>
              <td>{product.noantrian}</td>
              <td>{product.created_at}</td>
              <td>{product.update_at}</td>
              {product.status == "Menunggu" ? <td className={css.status1}>{product.status}</td>: <td className={css.status2}>{product.status}</td>}
              <td>
                <button onClick={setMrtiStatus}>Oke</button>
                <button onClick={MrtiDeleteUser}>Selesai</button>
              </td>
            </tr>
          ))}
            {rsproducts.map((product) => (
            <tr key={product.id}>
              <td>{product.lokasi}</td>
              <td>{product.noantrian}</td>
              <td>{product.created_at}</td>
              <td>{product.update_at}</td>
              {product.status == "Menunggu" ? <td className={css.status1}>{product.status}</td>: <td className={css.status2}>{product.status}</td>}
              <td>
                <button onClick={setRSStatus}>Oke</button>
                <button onClick={RsDeleteUser}>Selesai</button>
              </td>
            </tr>
          ))}
            {kkdproducts.map((product) => (
            <tr key={product.id}>
              <td>{product.lokasi}</td>
              <td>{product.noantrian}</td>
              <td>{product.created_at}</td>
              <td>{product.update_at}</td>
              {product.status == "Menunggu" ? <td className={css.status1}>{product.status}</td>: <td className={css.status2}>{product.status}</td>}
              <td>
                <button onClick={setKKDStatus}>Oke</button>
                <button onClick={KkdDeleteUser}>Selesai</button>
              </td>
            </tr>
          ))}
            {mliproducts.map((product) => (
            <tr key={product.id}>
              <td>{product.lokasi}</td>
              <td>{product.noantrian}</td>
              <td>{product.created_at}</td>
              <td>{product.update_at}</td>
              {product.status == "Menunggu" ? <td className={css.status1}>{product.status}</td>: <td className={css.status2}>{product.status}</td>}
              <td>
                <button onClick={setMLIStatus}>Oke</button>
                <button onClick={MaliawanDeleteUser}>Selesai</button>
              </td>
            </tr>
          ))}
            {ocproducts.map((product) => (
            <tr key={product.id}>
              <td>{product.lokasi}</td>
              <td>{product.noantrian}</td>
              <td>{product.created_at}</td>
              <td>{product.update_at}</td>
              {product.status == "Menunggu" ? <td className={css.status1}>{product.status}</td>: <td className={css.status2}>{product.status}</td>}
              <td>
                <button onClick={setOcStatus}>Oke</button>
                <button onClick={OCafeDeleteUser}>Selesai</button>
              </td>
            </tr>
          ))}
            {doproducts.map((product) => (
            <tr key={product.id}>
              <td>{product.lokasi}</td>
              <td>{product.noantrian}</td>
              <td>{product.created_at}</td>
              <td>{product.update_at}</td>
              {product.status == "Menunggu" ? <td className={css.status1}>{product.status}</td>: <td className={css.status2}>{product.status}</td>}
              <td>
                <button onClick={setDoStatus}>Oke</button>
                <button onClick={DoDeleteUser}>Selesai</button>
              </td>
            </tr>
          ))}
            {vlaproducts.map((product) => (
            <tr key={product.id}>
              <td>{product.lokasi}</td>
              <td>{product.noantrian}</td>
              <td>{product.created_at}</td>
              <td>{product.update_at}</td>
              {product.status == "Menunggu" ? <td className={css.status1}>{product.status}</td>: <td className={css.status2}>{product.status}</td>}
              <td>
                <button onClick={setVillaStatus}>Oke</button>
                <button onClick={VillaDeleteUser}>Selesai</button>
              </td>
            </tr>
          ))}
            {krkproducts.map((product) => (
            <tr key={product.id}>
              <td>{product.lokasi}</td>
              <td>{product.noantrian}</td>
              <td>{product.created_at}</td>
              <td>{product.update_at}</td>
              {product.status == "Menunggu" ? <td className={css.status1}>{product.status}</td>: <td className={css.status2}>{product.status}</td>}
              <td>
                <button onClick={setKrkStatus}>Oke</button>
                <button onClick={KrkDeleteUser}>Selesai</button>
              </td>
            </tr>
          ))}
            {pbproducts.map((product) => (
            <tr key={product.id}>
              <td>{product.lokasi}</td>
              <td>{product.noantrian}</td>
              <td>{product.created_at}</td>
              <td>{product.update_at}</td>
              {product.status == "Menunggu" ? <td className={css.status1}>{product.status}</td>: <td className={css.status2}>{product.status}</td>}
              <td>
                <button onClick={setPbStatus}>Oke</button>
                <button onClick={PbDeleteUser}>Selesai</button>
              </td>
            </tr>
          ))}
            {thproducts.map((product) => (
            <tr key={product.id}>
              <td>{product.lokasi}</td>
              <td>{product.noantrian}</td>
              <td>{product.created_at}</td>
              <td>{product.update_at}</td>
              {product.status == "Menunggu" ? <td className={css.status1}>{product.status}</td>: <td className={css.status2}>{product.status}</td>}
              <td>
                <button onClick={setTosStatus}>Oke</button>
                <button onClick={TsDeleteUser}>Selesai</button>
              </td>
            </tr>
          ))}
        </tbody>}
      </table>
      </div>
      <button onClick={adminLogout}>Logout</button>
      <button onClick={toHistory}>History</button>
    </div>
  );
};

export default AdminHome;
