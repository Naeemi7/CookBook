import { useContext } from "react";
import cookBookContext from "./cookBookContext";

function useCookBookContext() {
  return useContext(cookBookContext);
}

export default useCookBookContext;
