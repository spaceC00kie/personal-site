import { Footer } from "./Footer"
import { Intro } from "./Intro"
import ProjectCard from "./ProjectCard"

type Props = {}

export const Body: React.FC<Props> = () => {
  return (
    <div className="flex justify-center">
      <div className="flex max-w-4xl grow flex-col gap-3 border-l border-r border-slate-700 bg-slate-900 px-10">
        <Intro />
        <ProjectCard
          title="Kibble Check"
          codeHref="https://github.com/spaceC00kie/kibble-check"
          topImage="calendar.png"
          description="Everyone hates waking up in the middle the night because it's too hot or cold. The walk to the thermostat is the worst. Why not buy one? Well, this was more fun. It'd be trivial to build any ReST service on top what I already have. Not to mention the satisfaction I get from seeing a 90's piece of technology respond to my phone over a network."
        />
        <ProjectCard
          title="ChessWager"
          codeHref="https://github.com/geektechniquestudios/ChessWager"
          topImage="ChessWagerDropdown.png"
          description="A betting platform that uses smart contracts to securely facilitate betting on professional chess matches played on LichessTV."
          description2="Transitioning the project from vanilla CSS to Tailwind CSS was one of my key roles. I was also responsible for the development of the dropdown feature, which involved porting it from JavaScript to TypeScript and incorporating animations."
        />
        <ProjectCard
          title="Frozr"
          codeHref="https://github.com/geektechniquestudios/Frozr"
          topImage="FrozrCards.png"
          description="A web service that allows users to securely store their cryptocurrency in a smart contract time vault."
          description2="I created a React app using Yarn, Vite, TypeScript, Firebase, and Tailwind CSS, which was then used as the starting point for the development of this project. In the project's later stages, I crafted reusable components that adhered to the creator's design standards and designed informational cards to increase the website's marketing impact."
        />
        <ProjectCard
          title="Keep My Plants Alive"
          codeHref="https://github.com/spaceC00kie/keep-my-plants-alive"
          topImage="Gauges.png"
          description="Everyone hates waking up in the middle the night because it's too hot or cold. The walk to the thermostat is the worst. Why not buy one? Well, this was more fun. It'd be trivial to build any ReST service on top what I already have. Not to mention the satisfaction I get from seeing a 90's piece of technology respond to my phone over a network."
        />

        <p className="mx-4 flex justify-end text-zinc-300">Kirstie Wilkinson</p>
        <p className="mx-4 flex justify-end text-zinc-300">
          kwilkinson.professional@gmail.com
        </p>
        <p className="mx-4 flex justify-end text-zinc-300">(770) 713-7720</p>
        <Footer />
      </div>
    </div>
  )
}
