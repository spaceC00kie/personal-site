import { Footer } from "./Footer"
import { Intro } from "./Intro"
import ProjectCard from "./ProjectCard"

type Props = {}

export const Body: React.FC<Props> = () => {
  return (
    <div className="flex justify-center">
      <div className="flex max-w-4xl grow flex-col gap-3 border-l-2 border-r-2 border-gray-500 bg-blue-400 px-10">
        <Intro />
        <ProjectCard
          title="Kibble Check"
          codeHref="https://github.com/spaceC00kie/kibble-check"
          siteHref="https://kibblecheck.com/"
          topImage="calendar.png"
          description="A progressive web app to keep track of pet meal histories"
          description2="I'm most proud of the unique rolodex-style calendar I created from scratch using React and Framer Motion. This project also helped me become really comfortable using NoSQL databases."
        />
        <ProjectCard
          title="ChessWager (collaborator)"
          codeHref="https://github.com/geektechniquestudios/ChessWager"
          siteHref="https://chesswager.io/"
          topImage="ChessWagerDropdown.png"
          description="A betting platform that uses smart contracts to securely facilitate betting on professional chess matches played on LichessTV"
          description2="Transitioning the project from vanilla CSS to Tailwind CSS was one of my key roles. I was also responsible for the development of the dropdown feature, which involved porting it from JavaScript to TypeScript and incorporating animations."
        />
        <ProjectCard
          title="Frozr (collaborator)"
          codeHref="https://github.com/geektechniquestudios/Frozr"
          siteHref="https://frozr.io/"
          topImage="FrozrCards.png"
          description="A web service that allows users to securely store their cryptocurrency in a smart contract time vault"
          description2="I created a React app using Yarn, Vite, TypeScript, Firebase, and Tailwind CSS, which was then used as the starting point for this project. In the later stages, I crafted reusable components that adhered to the creator's design standards and designed informational cards to increase the website's marketing impact."
        />
        <ProjectCard
          title="Keep My Plants Alive"
          codeHref="https://github.com/spaceC00kie/keep-my-plants-alive"
          topImage="Gauges.png"
          description="A full-stack system for soil moisture monitoring"
          description2="My biggest accomplishments were wiring the raspberry pi to the sensors, as well as bringing a sense of sunshine to the frontend through CSS."
        />
        <ProjectCard
          title="Task Tracker"
          codeHref="https://github.com/spaceC00kie/task-tracker"
          topImage="TaskTrackerInMotion.gif"
          description="A to-do list and reminder software that allows users to manage their daily tasks"
          description2="This project taught me essential programmimg skills like how to create reusable components, implement conditional styling, and how to accept user input through a form."
        />
        <p className="mx-4 flex justify-end font-medium text-gray-50">Kirstie Wilkinson</p>
        <p className="mx-4 flex justify-end font-medium text-gray-50">
          kwilkinson.professional@gmail.com
        </p>
        <p className="mx-4 flex justify-end font-medium text-gray-50">(770) 713-7720</p>
        <Footer />
      </div>
    </div>
  )
}
