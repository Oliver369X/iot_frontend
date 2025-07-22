import { create } from 'zustand'

export const useClienteIdStore = create((set) => ({
  clienteId: Number(localStorage.getItem("clienteId")) || null,
  rolId: Number(localStorage.getItem("rolId")) || null,
  setClienteId: (id) => {
    if (id) localStorage.setItem("clienteId", String(id));
    else localStorage.removeItem("clienteId");
    set({ clienteId: id });
  },
  setRolId: (id) => {
    if (id) localStorage.setItem("rolId", String(id));
    else localStorage.removeItem("rolId");
    set({ rolId: id });
  },
  clearClienteId: () => {
    localStorage.removeItem("clienteId");
    localStorage.removeItem("rolId");
    set({ clienteId: null, rolId: null });
  }
}));