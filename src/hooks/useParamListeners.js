import { useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom'

export function useParamListeners(func, paramKeys = []) {
  const params = useParams()

  const _params = useMemo(() => {
    const _params = {}

    paramKeys.forEach((key) => {
      if (params[ key ] !== undefined) {
        _params[ key ] = params[ key ]
      }
    })

    return [ _params ]
  }, [ params, paramKeys ])

  const paramsHash = JSON.stringify(_params)

  useEffect(() => {
    func(_params)
  }, [ paramsHash ])
}