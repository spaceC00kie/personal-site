type Props = {
  href: string
  title: string
  icon: React.ReactNode
}

export const SocialLink: React.FC<Props> = ({ href, icon, title }) => {
  return (
    <a
      className="grid h-8 w-8 place-content-center rounded-full border-2 border-gray-500 bg-blue-900 text-gray-200 hover:border-gray-400"
      href={href}
      title={title}
    >
      {icon}
    </a>
  )
}
