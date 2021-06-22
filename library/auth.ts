import nookies from "nookies";
import { firebase } from "./firebaseClient";
import { createContext, useState, useEffect, useContext } from "react";

const AuthContext = createContext<{ user: firebase.User | null }>({
  user: null,
});

export function AuthProvider({ children }) {
  const [user, setUser] = useState<firebase.User | null>(null);

  // listen for token change
  useEffect(() => {
    return firebase.auth().onIdTokenChanged(async (user) => {
      if (!user) {
        setUser(null);
        nookies.set(undefined, "token", "", { path: "/" });
      } else {
        const token = await user.getIdToken();
        setUser(user);
        nookies.set(undefined, "token", token, { path: "/" });
      }
    });
  }, []);

  // force token refresh every 600s
  useEffect(() => {
    const handle = setInterval(async () => {
      const user = firebase.auth().currentUser;
      if (user) await user.getIdToken(true);
    }, 10 * 60 * 1000);

    return () => clearInterval(handle);
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

// e.g. usage `const token = useAuth()` `const user = token.user`
