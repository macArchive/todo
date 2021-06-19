import {default as NextHead} from "next/head"

interface HeadProps {
  pageTitle: string
  pageDescription: string
  socialImage: string
  socialImageText: string
  siteIcon: string
  touchIcon: string
  siteLocale: string
  siteType: "website" | "app"
  siteUrl: string
  themeColor: string
}

const Head: FC<HeadProps> = ({
  pageTitle,
  pageDescription,
  socialImage,
  socialImageText,
  siteIcon,
  touchIcon,
  siteLocale,
  siteType,
  siteUrl,
  themeColor
}) => {
  const siteTitle = "Site Title"
  return (
    <NextHead>
      <meta charSet='UTF-8'></meta>
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1'></meta>
      <title>
        {siteTitle} | {pageTitle}
      </title>
      <meta name='description' content={pageDescription}></meta>
      <meta property='og:title' content={`${siteTitle} | ${pageTitle}`}></meta>
      <meta property='og:description' content={pageDescription}></meta>
      <meta property='og:image' content={socialImage}></meta>
      <meta property='og:image:alt' content={socialImageText}></meta>
      <meta property='og:locale' content={siteLocale}></meta>
      <meta property='og:type' content={siteType}></meta>
      <meta property='og:url' content={siteUrl}></meta>
      <meta name='twitter:card' content={socialImage}></meta>
      <link rel='canonical' href={siteUrl}></link>
      <link rel='icon' href={siteIcon} type='image/svg+xml'></link>
      <link rel='apple-touch-icon' href={touchIcon}></link>
      <meta name='theme-color' content={themeColor}></meta>
    </NextHead>
  )
}

export default Head
