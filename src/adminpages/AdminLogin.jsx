import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginAdmin, reset} from "../features/authSlice";

const AdminLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const { user,isSuccess,isLoading,isError } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isError) {
      navigate("/admin");
    }
  }, [isError, navigate]);
  
  useEffect(() => {
    if (isSuccess == true) {
      navigate("/admin/panel");
    }
    dispatch(reset());
  }, [user,isSuccess, navigate]);

  const Auth = (e) => {
    e.preventDefault();
    dispatch(LoginAdmin({ name, password }));
  };

  return (
    <section>
    <div>
      <div>
        <div>
          <div>
            <form onSubmit={Auth}>
              <div className="field">
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input
                    type="password"
                    className="input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="******"
                  />
                </div>
              </div>
              <div className="field mt-5">
                <button
                  type="submit"
                  className="button is-success is-fullwidth"
                >
                  {isLoading ? "Loading..." : "Login"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default AdminLogin;
