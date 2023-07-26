import { BsGithub, BsLinkedin } from "react-icons/bs"
import { SocialLink } from "./SocialLink"

type Props = {}

export const Footer: React.FC<Props> = () => {
  return (
    <div className="mt-6 flex h-14 items-center justify-evenly">
      <SocialLink
        href="https://www.linkedin.com/in/kirstie-wilkinson/"
        icon={<BsLinkedin />}
      />
      <SocialLink href="https://github.com/spaceC00kie" icon={<BsGithub />} />
    </div>
  )
}
