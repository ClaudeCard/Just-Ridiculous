import React, { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'

export default function Aetheron({ setShowMenu }) {
  const orbRef = useRef()
  const audioRef = useRef()

  useFrame(({ clock }) => {
    if (orbRef.current) {
      orbRef.current.rotation.y = clock.elapsedTime * 0.3
    }
  })

  useEffect(() => {
    const audioEl = new Audio('/audio/528hz.mp3')
    audioEl.loop = true
    audioEl.volume = 0.6
    audioRef.current = audioEl
    return () => audioEl.pause()
  }, [])

  const handleClick = () => {
    setShowMenu(prev => !prev)
    if (audioRef.current) {
      audioRef.current.play().catch(() => {})
    }
  }

  return (
    <group>
      <mesh ref={orbRef} position={[0, 3, 0]} onClick={handleClick}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color={'white'} emissive={'cyan'} emissiveIntensity={1.5} />
        <Html center>
          <div className="text-center text-white font-semibold pointer-events-none">
            Aetheron
          </div>
        </Html>
      </mesh>
    </group>
  )
}
