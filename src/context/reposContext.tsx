import { createContext } from "react";

export interface reposContextProps {
  repos: {}[];
}
export const reposContext = createContext<reposContextProps |null>(null);
