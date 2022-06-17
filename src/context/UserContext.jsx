import axios from "axios";
import React, { createContext, useEffect, useReducer, useState } from "react";
import { url } from "../common/general";
import { types } from "../types";
import { userReducer } from "./useReducer";

export const UserContext = createContext();

//estado inicial
export const authInitialState = {
  logged: false,
  name: "",
};

const init = () => {
  return JSON.parse(localStorage.getItem("userActive")) || { logged: false };
};

const UserProvider = (props) => {
  const [userState, dispatch] = useReducer(userReducer, authInitialState, init);
  const [userInfo, setUserInfo] = useState({});
  const [collaboratorsInfo, setCollaboratorsInfo] = useState([]);

  useEffect(() => {
    if (!userState) return;
    localStorage.setItem("userActive", JSON.stringify(userState));
  }, [userState]);

  const login = async (body) => {
    let requestURL = url + "login";
    const usuario = await axios.post(requestURL, body, {
      auth: {
        username: "api-Test",
        password: "Holamundo",
      },
    });
    setUserInfo(usuario.data);
    dispatch({
      type: types.login,
      payload: { name: "pruebas" },
    });
  };

  const logout = () => {
    setUserInfo({});
    setCollaboratorsInfo([]);
    dispatch({
      type: types.logout,
      payload: {},
    });
  };

  const getCollaborators = async () => {
    let requestURL = url + "colaboradores";
    const colaboradores = await axios.get(requestURL, {
      auth: {
        username: "api-Test",
        password: "Holamundo",
      },
    });
    setCollaboratorsInfo(colaboradores.data);
  };

  return (
    <UserContext.Provider
      value={{
        userState,
        userInfo,
        setUserInfo,
        collaboratorsInfo,
        setCollaboratorsInfo,
        getCollaborators,
        login,
        logout,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
