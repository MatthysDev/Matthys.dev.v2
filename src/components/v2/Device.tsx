import Image from 'next/image'
import type { ReactNode } from 'react'

/** Real capture size of the simulator screenshots — keeps the aspect exact. */
const SHOT_W = 1206
const SHOT_H = 2622

/**
 * The phone. Frame, inner rim, Dynamic Island and the four side keys are all
 * CSS — there is no device mockup PNG in the repo, so the chrome is drawn.
 */
export default function Device({
  src,
  alt,
  tag,
  priority = false,
}: {
  src: string
  alt: string
  /** floating label pinned outside the frame (see `.phone__tag` positioning) */
  tag?: ReactNode
  priority?: boolean
}) {
  return (
    <div className="device">
      {tag}
      <div className="device__body">
        <span className="device__key device__key--mute" />
        <span className="device__key device__key--vup" />
        <span className="device__key device__key--vdn" />
        <span className="device__key device__key--pow" />
        <div className="device__screen">
          <span className="device__island" />
          <Image src={src} alt={alt} width={SHOT_W} height={SHOT_H} priority={priority} />
        </div>
      </div>
    </div>
  )
}

/** The pill that names the app next to a phone. */
export function DeviceTag({
  className,
  logo,
  name,
  detail,
}: {
  className: string
  logo: string
  name: string
  detail: string
}) {
  return (
    <span className={`phone__tag ${className}`}>
      <img src={logo} alt="" width={17} height={17} />
      {name} <span>· {detail}</span>
    </span>
  )
}
