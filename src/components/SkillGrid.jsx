import htmlicon from '../assets/icons8-html-5-96.svg'
import cssicon from '../assets/icons8-css3-96.svg'
import tailwindcssicon from '../assets/tailwind-css.svg'
import jsicon from '../assets/icons8-javascript-96.svg'
import pythonicon from '../assets/icons8-python.svg'
import cicon from '../assets/icons8-c.svg'
import cppicon from '../assets/icons8-c (1).svg'
import djangoicon from '../assets/icons8-django.svg'
import githubicon from '../assets/icons8-github.svg'

const SkillsGrid = () => {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-5 gap-12" >
      {/* HTML */}
      <div className="flex flex-col items-center gap-2">
        <img src={htmlicon} type="image/svg+xml" alt="html icon" className="w-20 h-20" />
        <p className="font-semibold text-[#cccccc]">HTML</p>
      </div>

      {/* CSS */}
      <div className="flex flex-col items-center gap-2">
        <img src={cssicon} alt="css icon" className="w-20 h-20" />
        <p className="font-semibold text-[#cccccc]">CSS</p>
      </div>

      {/* Tailwind CSS */}
      <div className="flex flex-col items-center gap-2">
        <img src={tailwindcssicon} alt="tailwind css icon" className="w-20 h-20" />
        <p className="font-semibold text-[#cccccc] text-center">Tailwind CSS</p>
      </div>

      {/* JavaScript */}
      <div className="flex flex-col items-center gap-2">
        <img src={jsicon} alt="js icon" className="w-20 h-20" />
        <p className="font-semibold text-[#cccccc] text-center">JavaScript</p>
      </div>

      {/* Python */}
      <div className="flex flex-col items-center gap-2">
        <img src={pythonicon} alt="py icon" className="w-20 h-20" />
        <p className="font-semibold text-[#cccccc] text-center">Python</p>
      </div>

      {/* C */}
      <div className="flex flex-col items-center gap-2">
        <img src={cicon} alt="c icon" className="w-20 h-20" />
        <p className="font-semibold text-[#cccccc] text-center">C</p>
      </div>

      {/* C++ */}
      <div className="flex flex-col items-center gap-2">
        <img src={cppicon} alt="c++" className="w-20 h-20" />
        <p className="font-semibold text-[#cccccc] text-center">C++</p>
      </div>

      {/* django */}
      <div className="flex flex-col items-center gap-2">
        <img src={djangoicon} alt="django" className="w-20 h-20" />
        <p className="font-semibold text-[#cccccc] text-center">Django</p>
      </div>

      {/* Github */}
      <div className="flex flex-col items-center gap-2">
        <img src={githubicon} alt="Github" className="bg-white rounded-full w-20 h-20" />
        <p className="font-semibold text-[#cccccc] text-center">Github</p>
      </div>
    </div>
  );
};

export default SkillsGrid;
