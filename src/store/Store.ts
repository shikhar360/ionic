import {create} from "zustand"

interface IStore {
  darkmode: boolean
  
  setDarkmode : (val : boolean) => void
}


export const useStore = create<IStore>((set)=>(
  {
    darkmode : true,
    setDarkmode : (data : boolean)=>set((state) => ({ ...state , darkmode : data})),
  }
))