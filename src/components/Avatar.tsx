import { ImgHTMLAttributes } from 'react'
import './Avatar.scss'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean
}

export const Avatar = ({ hasBorder = true, ...props }: AvatarProps) => {
  return (
    <img
      className={hasBorder ? 'avatarWithBorder' : 'avatar'}
      {...props}
    />
  )
}
