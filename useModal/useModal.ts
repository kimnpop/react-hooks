import { ReactElement } from "react";
import { useRecoilState, atom } from "recoil";
import initialModalState from "./initialModalState";

export const modalOpenState = atom<boolean>({
  key: "modalOpenState",
  default: false,
});

export const modalContentState = atom<ReactElement>({
  key: "modalContentState",
  default: initialModalState(),
});

export const useModal = () => {
  const [isOpen, setIsOpen] = useRecoilState(modalOpenState);
  const [modalContent, setModalContent] = useRecoilState(modalContentState);

  const open = (content: ReactElement) => {
    setIsOpen(true);
    setModalContent(content);
  };

  const close = () => {
    setIsOpen(false);
  };

  return { isOpen, open, close, modalContent };
};
