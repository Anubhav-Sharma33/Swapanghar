import React, { createContext, useState } from "react";
import ContentModal from "../../Components/ContextModal";

export const ContentModalContext = createContext({});

const ContentModalProvider = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);
  
    const openModal = (content) => {
      setModalContent(content);
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
      setModalContent(null);
    };
  
    return (
      <ContentModalContext.Provider value={{ openModal,closeModal,modalContent,setModalContent}}>
        {children}
        {isModalOpen && (
          <ContentModal/>
        )}
      </ContentModalContext.Provider>
    );
  };

  export default ContentModalProvider;