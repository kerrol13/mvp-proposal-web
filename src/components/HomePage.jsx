import { useState } from "react";
import App from "../App";
import SecurityKey from "./SecurityKey";


const HomePage = () => {
  const [isAccess, setIsAccess] = useState(false);
  return <>{isAccess ? <App /> : <SecurityKey setIsAccess={setIsAccess} />}</>;
};
export default HomePage;
