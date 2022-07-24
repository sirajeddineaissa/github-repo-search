import { createContext } from "react";

interface reposContextProps {
  repos: any[];
}
export const reposContext = createContext<reposContextProps |null>(null);
