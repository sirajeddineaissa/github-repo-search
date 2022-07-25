import { createContext } from "react";

export interface reposContextProps {
  repos: {}[];
}

/**
 * Manage the repos state from the search page using the React Context API
 */
export const reposContext = createContext<reposContextProps | null>(null);
