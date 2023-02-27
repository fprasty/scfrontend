import React, { useEffect,useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import moment from '../moment-with-locales';
import css from "../components/PageOne.module.css";
moment.locale('id')

const Maruti = () => {
  const navigate = useNavigate();
  const [createmsg, crtMsg] = useState("");
  const [cekmsg, cekMsg] = useState("");
  const [msg, setMsg] = useState("");
  const [reload, setReload] = useState(false);
  const [canSubmit, setCanSubmit] = useState(true);

  useEffect(() => {
    cekStatus();
  }, [reload]);

  const generateRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 10);
    return `MRTI-${randomNumber}`;
  }

  const createUser = async (e) => {
    if (!canSubmit) return;
    setCanSubmit(false);
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/api/mrtcreate`, {
        "lokasi":"Maruti",
        "status":"Menunggu",
        "antre": generateRandomNumber(),
        "created_at": moment().format("dddd, MMMM Do YYYY, h:mm:ss a"),
      });
      navigate("/maruti/page");
    } catch (error) {
      if (error.response) {
        crtMsg(error.response.data.message);
      }
    }
    setTimeout(() => {
      setCanSubmit(true);
      }, 9000); // delay 9 detik sebelum mengirim data lagi
  };

  const cekStatus = async (e) => {
    try {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/mrtcek`);
    return response.data.user
    } catch (error) {
      if (error.response) {
        cekMsg(error.response.data.message);
        if (cekmsg == "Tidak ada antrian"){
          setMsg("READY");
        }
        if (cekmsg == "Anda sudah antri") {
          navigate("/maruti/page");
        }
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
        setReload(prevReload => !prevReload);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={css.thisGlobal}>
    <div className={css.tableHead}>
    <h3>Maruti</h3>
    </div>
      <div className={css.divButton}>
        <button disabled={!canSubmit} onClick={createUser} className={css.theButton}>Jemput</button>
        <p>{msg}</p>
        <p className={css.thisServer}>Server: {createmsg}</p>
      </div>
  </div>
  )
}

export default Maruti;
