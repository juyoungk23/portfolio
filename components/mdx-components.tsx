import Image, { ImageProps } from "next/image"
import { useMDXComponent } from "next-contentlayer/hooks"

// Custom Image component with better loading defaults
function MdxImage(props: ImageProps) {
  return (
    <Image
      {...props}
      placeholder={props.placeholder ?? "empty"}
      loading={props.loading ?? "eager"}
      sizes={props.sizes ?? "(max-width: 768px) 100vw, 672px"}
    />
  )
}

// YouTube embed component with autoplay support
function YouTube({ id, autoplay = false, muted = true, loop = false }: {
  id: string
  autoplay?: boolean
  muted?: boolean
  loop?: boolean
}) {
  // Extract video ID from full URL if provided
  let videoId = id
  
  if (id.includes('youtube.com') || id.includes('youtu.be')) {
    // Try to extract from v= parameter first
    const vMatch = id.match(/[?&]v=([^&?#]+)/)
    if (vMatch) {
      videoId = vMatch[1]
    } else {
      // Try youtu.be format
      const shortMatch = id.match(/youtu\.be\/([^?&#]+)/)
      if (shortMatch) {
        videoId = shortMatch[1]
      } else {
        // Try embed format
        const embedMatch = id.match(/embed\/([^?&#]+)/)
        if (embedMatch) {
          videoId = embedMatch[1]
        }
      }
    }
  }

  const params = new URLSearchParams({
    autoplay: autoplay ? '1' : '0',
    mute: muted ? '1' : '0',
    loop: loop ? '1' : '0',
    playsinline: '1',
    rel: '0', // Don't show related videos
    enablejsapi: '1', // Enable JS API for better compatibility
  })

  // Add playlist parameter only if looping (required for loop to work)
  if (loop) {
    params.set('playlist', videoId)
  }

  return (
    <div className="my-6 aspect-video w-full overflow-hidden rounded-lg">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?${params.toString()}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="h-full w-full border-0"
        loading="lazy"
        frameBorder="0"
      />
    </div>
  )
}

// Self-hosted video (served from /public). Defaults to a muted, autoplaying,
// looping clip that behaves like a high-quality GIF — ideal for UI/animation showcases.
function Video({
  src,
  poster,
  autoplay = true,
  loop = true,
  muted = true,
  controls = false,
  className,
}: {
  src: string
  poster?: string
  autoplay?: boolean
  loop?: boolean
  muted?: boolean
  controls?: boolean
  className?: string
}) {
  return (
    <video
      src={src}
      poster={poster}
      autoPlay={autoplay}
      loop={loop}
      muted={muted}
      controls={controls}
      playsInline
      preload="metadata"
      className={className ?? "my-6 w-full rounded-lg"}
    />
  )
}

const components = {
  Image: MdxImage,
  YouTube,
  Video,
}

interface MdxProps {
  code: string
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return <Component components={components} />
}
