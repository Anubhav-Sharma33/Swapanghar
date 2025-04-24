import { createContext, useState } from "react";
import FormModal from "../../Components/FormModal";
export const FormModelContext = createContext({});

const FormModalContext = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
    <FormModelContext.Provider value={{ isOpen, openModal, closeModal }}>
      {props.children}
      {isOpen && (
        <div className="w-full fixed inset-0 z-50 bg-[rgba(0,0,0,0.5)] backdrop-blur-sm transition-opacity duration-300">
          <FormModal/>
        </div>
      )}
    </FormModelContext.Provider>
  );
};

export default FormModalContext;
