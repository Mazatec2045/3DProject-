import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
    return (
        <div className="flex flex-col bg-[#1d1836] p-5 rounded-2xl w-full">
            <div className="flex flex-row items-center gap-4 border-b border-gray-700 pb-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-white flex justify-center items-center overflow-hidden">
                     <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className='w-[60%] h-[60%] object-contain'
                    />
                </div>
                <div>
                     <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
                     <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>
                        {experience.company_name}
                    </p>
                    <p className="text-gray-400 text-[12px]">{experience.date}</p>
                </div>
            </div>

            <ul className='list-disc ml-5 space-y-2'>
                {experience.points.map((point, index) => (
                    <li
                        key={`experience-point-${index}`}
                        className='text-white-100 text-[14px] pl-1 tracking-wider'
                    >
                        {point}
                    </li>
                ))}
            </ul>
        </div>
    );
};

const Experience = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} text-center`}>
                    What I have done so far
                </p>
                <h2 className={`${styles.sectionHeadText} text-center`}>
                    Work Experience.
                </h2>
            </motion.div>

            <div className='mt-20 flex flex-col gap-10'>
                {experiences.map((experience, index) => (
                    <ExperienceCard
                        key={`experience-${index}`}
                        experience={experience}
                    />
                ))}
            </div>
        </>
    );
};

const ExperienceSection = SectionWrapper(Experience, "work");
export default ExperienceSection;
