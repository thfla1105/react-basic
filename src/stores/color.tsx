import { create } from 'zustand'

export const useColorStore = create(set => {
  //state
  return {
    color: 'red',
    //actions
    setColor: (color: string) => {
      set({ color: color })
    }
  }
})
