import { cn } from '@/lib/utils'
import { Marquee } from '@/components/magicui/marquee'
import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

const Image = ({ image, onClick }: { image: string; onClick: () => void }): JSX.Element => {
  return (
    <figure
      className={cn(
        'relative h-full cursor-zoom-in overflow-hidden rounded-xl border transition-all duration-300',
        // light styles
        'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] hover:shadow-lg hover:-translate-y-1',
        // dark styles
        'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15] dark:hover:shadow-lg dark:hover:-translate-y-1'
      )}
      onClick={onClick}
    >
      <div className="flex flex-row items-center gap-2">
        <img
          loading="eager"
          src={`/img/${image}`}
          alt={image}
          className="rounded-lg w-full h-[400px] object-contain"
        />
      </div>
    </figure>
  )
}

export function MarqueeImages({ images }: { images?: string[] }): JSX.Element {
  // Estado para controlar el lightbox
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  // Función para abrir el lightbox con la imagen seleccionada
  const handleImageClick = (imageIndex: number) => {
    setLightboxIndex(imageIndex)
    setLightboxOpen(true)
  }

  // Función para cerrar el lightbox
  const handleLightboxClose = () => {
    setLightboxOpen(false)
  }

  // Preparar las imágenes para el lightbox (con URLs completas)
  const lightboxImages = images?.map((image) => ({
    src: `/img/${image}`,
    alt: image
  }))

  return (
    <div className="relative flex h-[600px] w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover vertical className="[--duration:20s]">
        {images?.map((image, index) => (
          <Image image={image} key={image} onClick={() => handleImageClick(index)} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/6 bg-gradient-to-b from-background"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/6 bg-gradient-to-t from-background"></div>

      {/* Lightbox Component */}
      <Lightbox
        open={lightboxOpen}
        close={handleLightboxClose}
        index={lightboxIndex}
        slides={lightboxImages}
      />
    </div>
  )
}
