type Props = {
  title: string
  codeHref?: string
  siteHref?: string
  topImage: string
  description: string
  description2: string
  description3: string
}

const ProjectCard: React.FC<Props> = ({
  topImage,
  description,
  description2,
  description3,
  title,
  codeHref,
  siteHref,
}) => {
  return (
    <div className="m-1.5 rounded-lg border-2 border-gray-500 bg-blue-950">
      <div className="flex items-center justify-center rounded-t-lg bg-indigo-900 py-2 text-xl font-medium text-gray-200">
        {title}
      </div>
      <div className="gap-3 p-4 md:flex">
        <div className="mt-2 md:w-1/2">
          <img
            className="rounded-lg border-2 border-gray-500 bg-indigo-800"
            src={topImage}
          />
        </div>
        <div className="mt-2 flex grow flex-col justify-between rounded-b-lg text-gray-200 md:w-1/2">
          <div className="flex flex-col gap-6 text-lg">
            <p>{description}</p>
            <p>{description2}</p>
            <p>{description3}</p>
          </div>
          <div className="mt-6 flex gap-3">
            {codeHref && (
              <a
                href={codeHref}
                className="flex cursor-pointer items-center justify-center rounded-md border-2 border-transparent bg-blue-900 p-1.5 hover:border-gray-500"
              >
                Source Code
              </a>
            )}
            {siteHref && (
              <a
                href={siteHref}
                className="flex cursor-pointer items-center justify-center rounded-md border-2 border-transparent bg-blue-900 p-1.5 hover:border-gray-500"
              >
                Try it out!
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
