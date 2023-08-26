// import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { SheetLeft } from "./views/SheetLeft";
// import { UserType } from "./types/user";

function App() {
  // const [isLoading, setIsLoading] = useState(true);
  // const [loggedIn, setLoggedIn] = useState(
  //   (localStorage.getItem("token") &&
  //     new Date(localStorage.getItem("tokenExp") as string) > new Date()) ||
  //     false,
  // );
  // const [loggedInUser, setLoggedInUser] = useState<UserType | null>(null);

  // useEffect(() => {
  //   const getLoggedInuser = async () => {
  //     setIsLoading(true);
  //     // const token = localStorage.getItem("token");
  //     // const response = await getUser(token!);
  //     // setLoggedInUser(response.data!)
  //   };
  //   if (loggedIn) {
  //     getLoggedInuser();
  //   } else {
  //     setIsLoading(false);
  //   }
  // }, []);

  // const logUserIn = (user: UserType): void => {
  //   setLoggedIn(true);
  //   setLoggedInUser(user);
  // };

  // const logUserOut = (): void => {
  //   setLoggedIn(false);
  //   setLoggedInUser(null);
  //   localStorage.removeItem("token");
  //   localStorage.removeItem("tokenExp");
  // };

  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }

  return (
    <div className="flex h-screen flex-col items-center bg-slate-900 text-slate-50">
      <Routes>
        <Route path="/" element={<SheetLeft />} />
      </Routes>
    </div>
  );
}

export default App;
