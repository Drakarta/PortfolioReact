import { create } from "zustand";

interface NameStore {
  nameActive: boolean;
  mobileNameActive: boolean;
  firstActive: boolean;
  scrolled: boolean;
  updateNameActive: (active: boolean) => void;
  updateMobileNameActive: (active: boolean) => void;
  updateFirstActive: (active: boolean) => void;
  updateScrolled: (active: boolean) => void;
}

export const useNameStore = create<NameStore>((set) => ({
  nameActive: false,
  mobileNameActive: false,
  firstActive: false,
  scrolled: false,
  updateNameActive: (active: boolean) => set(() => ({ nameActive: active })),
  updateMobileNameActive: (active: boolean) =>
    set(() => ({ mobileNameActive: active })),
  updateFirstActive: (active: boolean) => set(() => ({ firstActive: active })),
  updateScrolled: (active: boolean) => set(() => ({ scrolled: active })),
}));
