type Props = {}

export const Intro: React.FC<Props> = () => {
  return (
    <div className="mx-2 flex flex-col gap-4 rounded-b-lg border-l border-r border-b border-slate-700 bg-slate-800 p-6 text-zinc-200">
      <p className="my-2 flex justify-center text-xl font-bold">About Me</p>
      <p className="my-2 flex justify-center text-lg font-medium">
        I am a motivated software developer with a strong foundation in
        teamwork, leadership, and technology. I have excellent communication
        skills and a passion for efficiency, and I am constantly seeking to
        learn and grow in my field. With a background in customer service and
        workflow principles, I have the skills and experience to excel in
        software development roles.
      </p>
    </div>
  )
}
