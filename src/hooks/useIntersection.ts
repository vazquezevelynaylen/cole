import { useEffect, useState, RefObject } from 'react'

interface UseIntersectionOptions {
  threshold?: number
  rootMargin?: string
}

export function useIntersection(
  ref: RefObject<Element>,
  options: UseIntersectionOptions = {}
): boolean {
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting)
      },
      {
        threshold: options.threshold || 0,
        rootMargin: options.rootMargin || '0px'
      }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [ref, options.threshold, options.rootMargin])

  return isIntersecting
}