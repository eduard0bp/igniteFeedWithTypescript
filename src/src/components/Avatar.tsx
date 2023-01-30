import './Avatar.scss'

export const Avatar = ({hasBorder = true, src}) => {
  return (
    <img
      className={hasBorder ? 'avatarWithBorder' : 'avatar'}
      src={src}
      alt=""
    />
  )
}
