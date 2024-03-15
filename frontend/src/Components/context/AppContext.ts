import { Dispatch, SetStateAction, createContext } from 'react'

export const BurgerContext = createContext<
  [boolean, Dispatch<SetStateAction<boolean>>]
>([false, () => {}])
export const ModalContext = createContext<
  [boolean, Dispatch<SetStateAction<boolean>>]
>([false, () => {}])

export const CartContext = createContext<
  [boolean, Dispatch<SetStateAction<boolean>>]
>([false, () => {}])
export const CartMenuContext = createContext<
  [boolean, Dispatch<SetStateAction<boolean>>]
>([false, () => {}])
