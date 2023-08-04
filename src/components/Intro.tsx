type Props = {}

export const Intro: React.FC<Props> = () => {
  return (
    <div className="mx-2 flex flex-col gap-4 rounded-b-lg border-b-2 border-l-2 border-r-2 border-gray-500 bg-blue-950 p-8 text-gray-200">
      <p className="my-2 flex justify-center text-2xl font-bold">About Me</p>
      <p className="my-2 flex justify-center text-xl font-medium">
        I'd describe myself as an enthusiastic software developer with excellent
        communication skills. Having created a strong foundation in teamwork,
        leadership, and technology, I now seek to enter the field
        professionally. My passion for efficiency and background in customer
        service and workflow principles makes me uniquely prepared to contribute
        to a diverse development team.
      </p>
    </div>
  )
}
