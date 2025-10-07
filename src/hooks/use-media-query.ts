"use client"

import { useEffect, useState } from "react"

export function useMediaQuery(query: string): boolean {
  const getMatches = (q: string): boolean => {
    if (typeof window === "undefined" || typeof window.matchMedia === "undefined") {
      return false
    }
    return window.matchMedia(q).matches
  }

  const [matches, setMatches] = useState<boolean>(getMatches(query))

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query)
    const listener = () => setMatches(mediaQueryList.matches)

    listener()
    mediaQueryList.addEventListener?.("change", listener)
    return () => mediaQueryList.removeEventListener?.("change", listener)
  }, [query])

  return matches
}


