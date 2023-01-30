// import { User } from "@firebase/auth";
// import { useEffect, useState } from "react";
// import { pageContext } from "../context/pageContext";
// import { auth } from "../firebase";

// type Props = {
//     children: React.ReactNode;
//   };

//  const PageProvider: React.FC<Props> = ({ children }) => {
//   const [pageNum, setPageNum] = useState<number>(1);

//   useEffect(() => {
//     const subscribe = auth.onAuthStateChanged(fbUser => {
//       console.log(`구독 실행`, fbUser);
//       setUser(fbUser);
//     });
//     return subscribe;
//   }, []);

//   return <pageContext.Provider value={user}>{children}</pageContext.Provider>;
// };

// export default AuthProvider;
export{}