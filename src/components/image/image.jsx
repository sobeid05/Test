import "./image.css"

export const Image = ({ image }) => {
  return (
    <picture key={image.id} className='image-container'>
      <img src={`${image.url}.jpg`} alt={image.alt} className='image' />
      {/* <img src={`${img.user.profile_image}.webp`} alt='profile' /> */}
    </picture>
  )
}
