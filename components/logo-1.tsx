import Image from 'next/image'

export function Logo() {
  return (
    <div className="flex items-center gap-2" aria-label="logo" role="img">
      <Image
        src="/logo-user-small.png"
        alt="logo"
        width={24}
        height={24}
        className="w-10 h-10"
      />
      <span className="text-lg font-semibold text-current" style={{ width: '100px' }}>带单小镇</span>
    </div>
  )
}
