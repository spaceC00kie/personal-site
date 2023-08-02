import {
  BsGithub,
  BsLinkedin,
  BsCardList,
} from "react-icons/bs"
import { SocialLink } from "./SocialLink"

type Props = {}

export const Footer: React.FC<Props> = () => {
  return (
    <div className="mt-1 flex h-14 items-center justify-end gap-11 px-4">
      <SocialLink
        title="LinkedIn"
        href="https://www.linkedin.com/in/kirstie-wilkinson/"
        icon={<BsLinkedin />}
      />
      <SocialLink
        title="Github"
        href="https://github.com/spaceC00kie"
        icon={<BsGithub />}
      />
      <SocialLink
        title="My resume"
        href="KWilkinsonResume.pdf"
        icon={<BsCardList />}
      />
    </div>
  )
}
