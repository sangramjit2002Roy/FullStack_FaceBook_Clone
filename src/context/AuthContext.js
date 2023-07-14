import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user:JSON.parse(localStorage.getItem("user")) || null,
  isFetching: false,
  error: false,
};
// const INITIAL_STATE = {
//   user: {
//     _id:"6258d730341a1a78f6727684",
//     username: "Chirag Bansal",
//     email:"bansal@gmail.com",
//     profilePicture:"/assets/posts/10.jpeg",
//     coverPicture:"",
//     isAdmin: false,
//     followers: ["6258d6d6341a1a78f6727674"],
//     followings: ["6258d6d6341a1a78f6727674"],
//   },
//   isFetching: false,
//   error: false,
// };


export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user))
  }, [state.user])

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};