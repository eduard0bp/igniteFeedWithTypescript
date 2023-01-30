import './Avatar.scss'

interface AvatarProps {
  hasBorder?: boolean
  src: string
  alt?: string
}

export const Avatar = ({hasBorder = true, src}: AvatarProps) => {
  return (
    <img
      className={hasBorder ? 'avatarWithBorder' : 'avatar'}
      src={src}
      alt=""
    />
  )
}
