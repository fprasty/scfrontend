import React, { useState } from "react";
import axios from "axios";
//import css from "../adminpages/AdminPanel.module.css"

const CreateUser = () => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [notelp, setNotelp] = useState("");
  const [jabatan, setJabatan] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [whatsapp, setWhatsapp] = useState("");

  const createUser = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("username", username);
    formData.append("name", name);
    formData.append("notelp", notelp);
    formData.append("jabatan", jabatan);

   try {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/createsales`, {
      username: username,
      name: name,
      notelp: notelp,
      jabatan: jabatan,
      whatsapp: whatsapp
    });
  } catch (error) {
  }

  const formImage = new FormData();
  formImage.append("avatar", avatar);

  try {
    axios.post(`${process.env.REACT_APP_API_URL}/api/upload-avatar`, formImage, {
    });
  } catch (error) {
    //
  }
};

  return (
    <div>
    <form onSubmit={createUser}>
      <div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="No Telp"
          value={notelp}
          onChange={(e) => setNotelp(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Jabatan"
          value={jabatan}
          onChange={(e) => setJabatan(e.target.value)}
        />
      </div>
      <div>
        <input type="file" onChange={(e) => setAvatar(e.target.files[0])} />
      </div>
      <div>
        <input
          type="text"
          placeholder="Whatsapp"
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default CreateUser;