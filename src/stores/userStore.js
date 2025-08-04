import { getToken } from '@/utils/tokenManager';
import {create} from 'zustand'
export const useTokenStore= create((set)=>({
    token: localStorage.getItem("token"), // ← Load from storage on startup
  setToken: (token) => {
    localStorage.setItem("token", token);
    set({ token });
  },
  clearToken: () => {
    localStorage.removeItem("token");
    set({ token: null });
  },
  refetch: async()=>{
    let tk = await getToken();
    localStorage.setItem("token", tk);
    set({ token:tk });
    

  }
}))
