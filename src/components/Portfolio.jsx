import daisyman from "../assets/daisy-man.png";
import gourmethaven from "../assets/gourmet-haven-eight.vercel.app_.png";
import recipeapp from "../assets/recipe-app-gamma-virid.vercel.app_.png";
import boipoka from "../assets/boi-poka.onrender.com_.png";
import liftedlisted from "../assets/lifted-and-listed.netlify.app_.png";
import fureverfriends from "../assets/fur-ever-friends-chi.vercel.app_index.html.png";
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
      site: "",
      github: "",
    },
  },
  {
    img: gourmethaven,
    title: "Gourmet Haven",
    description:
      "This is a simple multipage restaurant management system design using HTML, CSS, Tailwind CSS and some JavaScript for scrolling functionality.",
    links: {
      site: "",
      github: "",
    },
  },
  {
    img: recipeapp,
    title: "Recipe Finder",
    description:
      "This is a recipe finder website created using the classic 'Meal DB'.",
    links: {
      site: "",
      github: "",
    },
  },
  {
    img: boipoka,
    title: "Boi Poka",
    description:
      "This is a Library management system where a user can buy books and leave reviews for them.",
    links: {
      site: "",
      github: "",
    },
  },
  {
    img: liftedlisted,
    title: "Lifted & Listed",
    description:
      "Lifted & Listed is a vibrant e-commerce platform where users can buy and sell products easily. List your items for sale, manage your listings, and connect with buyers. Edit or delete your products, track your purchases and sales, and update your account details anytime. Secure email verification ensures a safe experience.",
    links: {
      site: "",
      github: "",
    },
  },
  {
    img: fureverfriends,
    title: "Fur Ever Friends",
    description:
      "A pet adoption website where an user can adopt pet and list pet for adoption.",
    links: {
      site: "",
      github: "",
    },
  },
];
const Portfolio = () => {
  console.log(projects);
  return (
    <div className="max-w-[1000px] mx-auto p-6 md:my-20" id="portfolio">
      <h2 className="text-3xl font-bold text-gray-200 mb-16 text-center">
        Projects
      </h2>
      {projects.map((project, index) => (
      <Reveal key={index}>
        <div
          key={index}
          className={`flex flex-col md:flex-row ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          } mb-12`}
        >
          {/* <div className='w-full md:w-1/2 p-4'>
                    <img
                        src={project.img}
                        alt={project.title}
                        className='w-full h-full object-cover rounded-lg shadow-lg'
                    />
                </div> */}
          <div className="mockup-window sm:w-1/2 h-[300px] order-2 sm:order-none rounded-xl">
            <div className="featured-project-img-01-div cursor-all-scroll overflow-scroll h-[300px]  rounded-xl">
              <div className="featured-project-img-01 transition-all duration-500">
                <img src={project.img} alt={project.title} className="" />
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-gray-200 mb-4">
              {project.title}
            </h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex space-x-4">
              <a
                href={project.links.site}
                className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300"
              >
                View Site
              </a>
              <a
                href={project.links.github}
                className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300"
              >
                <AiFillGithub />
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
