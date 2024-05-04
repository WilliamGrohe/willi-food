import Image, { ImageProps } from "next/image";

export function PromoBanner(props: ImageProps) {
  return (
    <Image
      sizes="100vw"
      width={0}
      height={0}
      className="h-auto w-full object-contain"
      {...props}
    />
  );
}
