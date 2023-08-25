import { create } from 'zustand'
import { Vector3 } from 'three'

export const clickModelPostion = create((set) => ({
  modelPartName: '',
  position: new Vector3(0, 0, 0),
  lerping: false,
  setModelPartName: (v) => set({ modelPartName: v }),
  setPosition: (v) => set({ position: v }),
  setLerping: (v) => set({ lerping: v })
}))