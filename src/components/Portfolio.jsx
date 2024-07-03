import daisyman from "../assets/daisy-man.png";
import gourmethaven from "../assets/gourmet-haven-eight.vercel.app_.png";
import recipeapp from "../assets/recipe-app-gamma-virid.vercel.app_.png";
import boipoka from "../assets/boi-poka.onrender.com_.png";
import liftedlisted from "../assets/lifted-and-listed.netlify.app_.png";
import fureverfriends from "../assets/fur-ever-friends-chi.vercel.app_index.html.png";
import phhero from "../assets/ph-tube-alpha.vercel.app_.png"
import shophero from "../assets/shop-hero-liart.vercel.app_.png";
import jokegenerator from "../assets/random-joke-generator-ivory.vercel.app_.png";
import { AiFillGithub } from "react-icons/ai";
import Reveal from "./Reveal";
import "./Portfolio.css";
const projects = [
  {
    img: daisyman,
    title: "Daisy Man",
    description:
      "This is a front-end project with tailwind css and daisy ui to practice responsive layout design.",
    links: {
      site: "https://daisy-man.vercel.app/",
      github: "https://github.com/Tahsin005/DaisyMan",
    },
    technologies: ['HTML', 'CSS', 'Tailwind CSS', 'Daisy-Ui']
  },
  {
    img: gourmethaven,
    title: "Gourmet Haven",
    description:
      "This is a simple multipage restaurant management system design using HTML, CSS, Tailwind CSS and some JavaScript for scrolling functionality.",
    links: {
      site: "https://gourmet-haven-eight.vercel.app/",
      github: "https://github.com/Tahsin005/Gourmet-Haven",
    },
    technologies: ['HTML', 'CSS', 'Tailwind CSS', 'Daisy-Ui']
  },
  {
    img: recipeapp,
    title: "Recipe Finder",
    description:
      "This is a recipe finder website created using the classic 'Meal DB'.",
    links: {
      site: "https://recipe-app-gamma-virid.vercel.app/",
      github: "https://github.com/Tahsin005/Recipe-App",
    },
    technologies: ['HTML', 'CSS', 'JavaScript']
  },
  {
    img: boipoka,
    title: "Boi Poka",
    description:
      "This is a Library management system where a user can buy books and leave reviews for them.",
    links: {
      site: "https://boi-poka.onrender.com/",
      github: "https://github.com/Tahsin005/Boi-Poka",
    },
    technologies: ['HTML', 'Tailwind CSS', 'Python', 'Django MVT']
  },
  {
    img: liftedlisted,
    title: "Lifted & Listed",
    description:
      "Lifted & Listed: Buy and sell easily. List, manage, edit, or delete items. Connect with buyers, track sales, and update your account. Secure email verification ensures safety.",
    links: {
      site: "https://lifted-and-listed.netlify.app/",
      github: "https://github.com/Tahsin005/Lifted-Listed-Frontend",
    },
    technologies: ['HTML', 'CSS', 'Tailwind CSS', 'Python', 'Django REST']

  },
  {
    img: fureverfriends,
    title: "Fur Ever Friends",
    description:
      "A pet adoption website where an user can adopt pet and list pet for adoption.",
    links: {
      site: "https://fur-ever-friends-chi.vercel.app/index.html",
      github: "https://github.com/Tahsin005/Fur_ever_friends",
    },
    technologies: ['HTML', 'CSS', 'Tailwind CSS', 'Python', 'Django REST']

  },
];
const Portfolio = () => {
  console.log(projects);
  return (
    <div className="max-w-screen-xl mx-auto px-8 md:px-16 lg:px-24 py-5 my-10" id="portfolio">
      <h2 className="text-3xl font-bold text-gray-200 mb-16 text-center">
        Projects
      </h2>
      {projects.map((project, index) => (
      <Reveal key={index}>
        <div
          key={index}
          className={`flex flex-col gap-8 md:flex-row ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          } mb-12`}
        >
          {/* <div className="featured-project-img-01-div cursor-all-scroll overflow-scroll h-[350px] rounded-xl">
          <div className=' featured-project-img-01 transition-all duration-500 '>
                    <img
                        src={project.img}
                        alt={project.title}
                        className='w-full h-full object-cover rounded-lg shadow-lg'
                    />
                </div>
          </div> */}
          <div className="mockup-window w-full h-full object-cover shadow-lg rounded-xl bg-[#F4C531] mx-auto featured-project-img-01">
            <div className="featured-project-img-01-div cursor-all-scroll  overflow-scroll h-[330px]  rounded-xl">
              <div className=" transition-all duration-500">
                <img src={project.img} alt={project.title} className="" />
              </div>
            </div>
          </div>

          <div className=" w-full md:w-2/3 p-4 flex flex-col justify-evenly">
            <h3 className="text-2xl font-semibold text-gray-200 mb-4">
              {project.title}
            </h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <ul>
            {
                project.technologies.map((tech, i) => (
                  <li key={i} className="inline-block text-purple-600 px-3 py-1 rounded-full font-semibold">
                    {tech}
                  </li>
                ))
            }
            </ul>
            <p className="text-gray-300 font-medium my-4">This Site is Fully Responsive</p>
            <div className="flex space-x-4">
              <a
                href={project.links.site}
                className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300"
                                        target="_blank"
              >
                
                View Site
              </a>
              <a
                href={project.links.github}
                className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300"
                                        target="_blank"
              >
                <AiFillGithub className=""/>
              </a>
            </div>
          </div>
        </div>
      </Reveal>
      ))}
    </div>
  );
};

export default Portfolio;
