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

const components = {
  Image: MdxImage,
}

interface MdxProps {
  code: string
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return <Component components={components} />
}
