import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import css from "../salespages/SalesPageNumberTwo.module.css";
import gplogo from "../images/icons/logobandungan.jpg";
import images1 from "../images/images/images1.png";
import images2 from "../images/images/images2.png";
import images3 from "../images/images/images3.png";
import images4 from "../images/images/images4.png";
import ucimage1 from "../images/images/uncompress/images1.png";
import ucimage2 from "../images/images/uncompress/images2.png";
import ucimage3 from "../images/images/uncompress/images3.png";
import ucimage4 from "../images/images/uncompress/images4.png";
import smileicon from "../images/others/smile215x215.png";
import waicon from "../images/others/wa215x215.png";
import tiktokicon from "../images/others/tiktok215x215.png";
import igicon from "../images/others/ig215x215.png";

function SalesPages() {
  const [sales, setUser] = useState([]);
  const {username } = useParams();
  const [cekmsg, cekMsg] = useState("");

  useEffect(() => {
    /*
    const fetchData = async () => {
      const result = await axios.get(`${process.env.REACT_APP_API_URL}/api/sales/get/${username}`);
      setUser(result.data.user);
    };

    fetchData();
    */
    const fetchData = async () => {
    try {
      const result = await axios.get(`${process.env.REACT_APP_API_URL}/api/sales/get/${username}`);
      setUser(result.data.user);
  } catch (error) {
      if (error.response) {
        cekMsg(error.response.data.message);
      }
  }
}
  fetchData();
}, [username]);


  return (
   <div>
   {cekmsg === "User tidak ada" ?
   <div className={css.divnotfound}>
    <h1 className={css.textnf}>User tidak ada</h1>
   </div>
   : 
   <div className={css.main}>
   <div className={css.canva}>
      {sales.map((salesdata) => (
        <div key={salesdata.id}>
     
    <div className={css.wrapper}>
      <div className={css.container1}>
      <div className={css.cs1div}>
      <div className={css.footer}>
       <div className={css.footerset}>
          <div className={css.f1}>Jl. Gintungan No. 77 Bandungan, Kab. Semarang 50614</div>
          <div className={css.f2}>(0298) 60 72 093 | (0298) 60 72 502 (Fax.)</div>
          <div className={css.f3}>www.griyapersadahotel.com/bandungan</div>
          <div className={css.f4}>marketing.b01@griyapersadahotel.com</div>
          </div>
       </div>
      <div className={css.container2}></div>

      </div>
      </div>
      <div className={css.gplogo}>
        <img src={gplogo} alt="" className={css.gplogoimg}/>
      </div>
      <div className={css.circle}>
        <div className={css.avatardiv}>
          <div className={css.avatar}>
          <img src={process.env.REACT_APP_API_URL+salesdata.avatar} alt={salesdata.username} className={css.avatarcss} />  
          </div>
        </div>
      </div>
      <div className={css.divname}>
          <p>{salesdata.name}</p>
        </div>
        <div className={css.divjabatan}>
          <p className={css.jabatan}>{salesdata.jabatan}</p>
        </div>
        <p className={css.notelp}>{salesdata.notelp}</p>
      </div>
      <div className={css.cs2div}>
      
       <div className={css.container3}>

       <div className={css.sosflex}>
      <div className={css.instagram}>
      <a href={`https://www.instagram.com/griyapersadahotel.bandungan/`}
   target="_blank"
   rel="noopener noreferrer">
<img src={igicon} alt="" className={css.igavatar}/>
</a>
        </div>
        <div className={css.tiktok}>
        <a href={`https://www.tiktok.com/@griyapersada.bandungan`}
   target="_blank"
   rel="noopener noreferrer">
<img src={tiktokicon} alt="" className={css.tiktokavatar}/>
</a>
        </div>
  
        <div className={css.whatsapp}>
        {salesdata.whatsapp == "" ? 
   <div className={css.whatsappavatar}></div>
   :
   <a href={`https://api.whatsapp.com/send?phone=${salesdata.whatsapp}&text=Hallo%20apakah%20ini%20nomer%20dengan%20nama%20${salesdata.name}`}
   target="_blank"
   rel="noopener noreferrer">
<img src={waicon} alt="" className={css.whatsappavatar}/>
</a>
   }
        </div>
        <div className={css.products}>
        <a href={`https://drive.google.com/drive/folders/114ASyPVsJ1KbBOj8qEghmDJjHE4Wxal_`}
   target="_blank"
   rel="noopener noreferrer">
<img src={smileicon} alt="" className={css.productsavatar}/>
</a>
        </div>
      </div>
       </div>
      <div className={css.text1}>
      <a href={`https://www.instagram.com/griyapersadahotel.bandungan/`}
   target="_blank"
   rel="noopener noreferrer" className={css.productstext}><p>Instagram</p></a>
        <a href={`https://www.tiktok.com/@griyapersada.bandungan`}
   target="_blank"
   rel="noopener noreferrer" className={css.productstext}><p>Tiktok</p></a>
        <a href={`https://api.whatsapp.com/send?phone=${salesdata.whatsapp}&text=Hallo%20apakah%20ini%20nomer%20dengan%20nama%20${salesdata.name}`}
   target="_blank"
   rel="noopener noreferrer" className={css.productstext}><p>Whatsapp</p></a>
        <a href={`https://drive.google.com/drive/folders/114ASyPVsJ1KbBOj8qEghmDJjHE4Wxal_`}
   target="_blank"
   rel="noopener noreferrer" className={css.productstext}><p>Products</p></a>
      </div>
      </div>
      <div className={css.imagediv}>
        <a href={ucimage1}
          target="_blank"
          rel="noopener noreferrer">
          <div className={css.image1}>
              <img src={images1} alt="Image1" className={css.image1}/>
          </div>
        </a>
       <a href={ucimage2}
         target="_blank"
         rel="noopener noreferrer">
        <div className={css.image2}>
              <img src={images2} alt="Image2" className={css.image2}/>
          </div>
       </a>
        <a href={ucimage3}
          target="_blank"
          rel="noopener noreferrer">
        <div className={css.image3}>
            <img src={images3} alt="Image3" className={css.image3}/>
        </div>
        </a>
        <a href={ucimage4}
          target="_blank"
          rel="noopener noreferrer">
        <div className={css.image4}>
            <img src={images4} alt="Image4" className={css.image4}/>
        </div>
        </a>
      </div>
       <div className={css.googlemap}>
        <div className={css.divicon}>
          <div className={css.icon}></div>
        </div>
      <div className={css.gembed}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5930.624152442228!2d110.36558652505751!3d-7.21609383054746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708732f6093c45%3A0x5bc84e52da4fac76!2sGriya%20Persada%20Convention%20Hotel%20%26%20Resort%20Bandungan!5e0!3m2!1sen!2sid!4v1676808554200!5m2!1sen!2sid" 
      width="320" 
      height="320" 
      style={{border:0}} 
      allowFullScreen 
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade">
    </iframe>
      </div>
      </div>
      <div className={css.cpy}>@ Copyright </div>
      </div>
       ))}
    </div>
    </div>
   }
   </div>
  );

}

export default SalesPages;