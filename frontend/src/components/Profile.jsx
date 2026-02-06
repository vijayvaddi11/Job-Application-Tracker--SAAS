import { useEffect, useState } from "react";
import api from "../api/axios";

function Profile() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("accessToken");

      const res = await api.get("/profile", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      setMsg(res.data.message);
    };

    fetchProfile();
  }, []);

  return <h1>{msg}</h1>;
}

export default Profile;
