"use client"
import { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export function UserProvider({ children }) {
const [page, setPage] = useState("Dashboard")
const [isModal, setIsModal] = useState(false)
const [modalContent, setModalContent] = useState(false)


  return (
    <UserContext.Provider value={{page, setPage, isModal, setIsModal, modalContent, setModalContent}}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
    return useContext(UserContext);
  }