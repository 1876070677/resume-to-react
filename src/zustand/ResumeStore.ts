import { create } from 'zustand';

interface ResumeStore {
  capturedImageURL: string | null;

  setCapture: (url: string) => void;
  clearCapture: () => void;
}

const useResumeStore = create<ResumeStore>((set) => ({
  capturedImageURL: null,
  
  setCapture: (url: string) => set({ capturedImageURL: url }),
  clearCapture: () => set({ capturedImageURL: null }),
}));

export default useResumeStore;
