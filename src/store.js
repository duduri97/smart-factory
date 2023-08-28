import { create } from 'zustand'
import { Vector3 } from 'three'
import { useRef } from 'react'

export const clickModelPostion = create((set) => ({
  modelPartName: '',
  position: new Vector3(0, 0, 0),
  lerping: false,
  move: true,
  setModelPartName: (v) => set({ modelPartName: v }),
  setPosition: (v) => set({ position: v }),
  setLerping: (v) => set({ lerping: v }),
  setMove: (v) => set({move: v}),
}))
