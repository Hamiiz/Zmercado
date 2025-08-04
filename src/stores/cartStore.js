import { create } from "zustand";


const useCartStore = create((set,get) => ({
    items: JSON.parse(localStorage.getItem('items')) || [],
    itemCount: () => get().items.length,

  addItem: (product) =>
    set((state) => {
      const updated = [...state.items, product];
      localStorage.setItem('items', JSON.stringify(updated)); 
      return { 
        items: updated,
        itemCount:updated.length

       }; 
    }),
removeItem:(product)=>
    set((state)=>{
        const updated = state.items.filter((p)=>p.id  !== product.id)
        localStorage.setItem('items',JSON.stringify(updated));
        return {
            items:updated,
            itemCount:updated.length
        }
    }),

  clearCart: () =>
    set(() => {
      localStorage.removeItem('items');
      return { items: [] };
    }),
}));

export default useCartStore;
