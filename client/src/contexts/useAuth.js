import React, { useContext, useState } from "react";
import { createContext } from "react";
import Axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // TODO: Create doesTokenCookieExist function to check for current login state
  // For demonstration user is always logged in, so you can access the search page.
  const [isLoggedIn, setIsLoggedIn] = useState(
    true /* call doesTokenCookieExist here */
  );

  function updateIsLoggedIn() {
    // TODO: use doesTokenCookieExist here
    setIsLoggedIn(!isLoggedIn);
  }

  function setAuthCookies(id, expires) {
    // TODO: Assign id token and token expiry cookies
  }

  const setCookies = (id, expires) => {
    const useExpiry =
      expires ?? new Date(new Date().getTime() + 60 * 60 * 1000).getTime(); // TODO: Figure out this value
    setAuthCookies(id, useExpiry);
    setIsLoggedIn(true);
  };

  const login = (username, password) => {
    //TEMPORARY
    setCookies("id", "access", "token");
    setIsLoggedIn(true);

    // TODO: Login API call here that sets cookies
    // TODO: Error handling to be returned to page level
    // { success: false, message: 'Incorrect username or password' }
    // { success: true, message: '' } Navigate on success
    Axios.post("http://localhost:9000/login", {
      username: username,
      password: password,
    }).then((response) => {
      console.log(response);
      // TODO: Assign JWT response to cookies
      setAuthCookies("", "");
    });
  };

  function logout() {
    // TODO: Create cookieClear function to remove all auth cookies
    updateIsLoggedIn();
  }

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        isLoggedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => useContext(AuthContext);

export { useAuthContext, AuthContext, AuthProvider };
