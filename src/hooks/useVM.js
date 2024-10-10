import { useContext, useMemo } from 'react'
import { RouterContext } from '../App'

export function useVM(VM) {
  const router = useContext(RouterContext)

  const vm = useMemo(() => {
    const viewModel = new VM(router)
    return viewModel
  }, [ VM, router ])

  return vm
}