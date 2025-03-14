import { create } from "zustand";

const useMessageStore = create((set) => ({
  message: "",
  messageType: "",
  setMessage: (message, type = "success") => set({ message, messageType:type }),
}));
export default useMessageStore;
