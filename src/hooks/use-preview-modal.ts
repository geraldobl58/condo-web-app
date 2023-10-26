import { create } from "zustand";

import { Property } from "@/types/property";

interface PreviewModalStore {
  isOpen: boolean;
  data?: Property;
  onOpen: (data: Property) => void;
  onClose: () => void;
}

const usePreviewModal = create<PreviewModalStore>((set) => ({
  isOpen: false,
  data: undefined,
  onOpen: (data: Property) => set({ data, isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default usePreviewModal;
