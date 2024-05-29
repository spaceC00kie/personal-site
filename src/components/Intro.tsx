type Props = {}

export const Intro: React.FC<Props> = () => {
  return (
    <div className="mx-2 flex flex-col gap-4 rounded-b-lg border-b-2 border-l-2 border-r-2 border-gray-500 bg-blue-950 p-8 text-gray-200">
      <p className="my-2 flex justify-center text-2xl font-bold">About Me</p>
      <p className="my-2 flex justify-center text-xl font-medium">
        Hey there! I'm Kirstie, and I'm an enthusiastic software developer. My
        unique mix of education and experience has helped me create a foundation
        rooted in communication, teamwork, and technology, and I'm ready to
        build my career on top of it.
      </p>
      <p className="my-2 flex justify-center text-xl font-medium">
        If you're interested in working together or want to chat about cool tech, don't hesitate to reach out. I look forward to hearing from you!
      </p>
    </div>
  )
}
