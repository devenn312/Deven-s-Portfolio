"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Brain Tumor Detection",
    description: "Brain Tumor Detection is a deep learning project aimed at classifying brain tumor images using the VGG16 model",
    image: "/images/projects/Brain-tumor.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/devenn312/Brain-Tumor-Detection",
   
  },
  {
    id: 2,
    title: "Krushak- A farmer’s Equipments Rental App",
    description: " Krushak App is a revolutionary farmers’ equipment rental platform, developed using Flutter and Firebase, aimed at modernizing and simplifying the process of accessing agricultural equipment for farmers.",
    image: "/images/projects/Krushak.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/devenn312/Krushak--A-farmer-s-Equipments-Rental-App",
    
  },
  {
    id: 3,
    title: "CrimiAlert",
    description: "Showcased rapid problem-solving and teamwork skills by innovating CrimiAlert, an advanced criminalidentification system for CCTV surveillance, during an intercollege hackathon.", 
    image: "/images/projects/crimialert.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/devenn312/Criminal-Identification-system",
    
  },
  
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
