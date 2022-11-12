import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch, AppTypedDispatch } from './App.store'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppTypedDispatch = () => useDispatch<AppTypedDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
