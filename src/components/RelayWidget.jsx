import { useEffect, useRef } from 'react'

function RelayWidget() {
  const createdRef = useRef(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    window.relayConfig = {
      widgetKey: 'relay_fb7124b7a50f433ca8d11bef',
      language: 'en',
    }

    const existingScript = document.getElementById('relay-widget-script')
    if (existingScript) return

    const script = document.createElement('script')
    script.id = 'relay-widget-script'
    script.src = 'https://relay.llc/widget.js'
    script.defer = true
    document.body.appendChild(script)
    createdRef.current = true

    return () => {
      if (createdRef.current) {
        script.remove()
      }
    }
  }, [])

  return null
}

export default RelayWidget
