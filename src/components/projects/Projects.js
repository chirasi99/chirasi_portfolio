import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree,projectFour,projectFive, projectSix } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex items-center justify-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-14">
        <ProjectsCard
          title="TruEvent Horizons"
          des=" 
          Our project developed a web-based Event Planning Management System, simplifying reservations for customers, empowering service providers, and facilitating report generation and feedback collection.
      "
          src={projectOne}
          git = "https://github.com/saneru-akarawita/TruEvent_Horizons.git"
        />
        <ProjectsCard
          title="Stylioo"
          des=" 
          The Stylioo, an innovative salon management and reservation system, available on both web and mobile platforms. It streamlines online bookings, reduces wait times, and provides detailed service information.
      "
          src={projectTwo}
          git = "https://github.com/Stylioo"
        />
        <ProjectsCard
          title=" SOCIAL MEDIA APP"
          des="Introducing a cutting-edge, full-stack MERN (MongoDB, Express.js, React.js, Node.js) application that redefines social networking. Our platform empowers users to seamlessly authenticate themselves, fostering a vibrant online community where interaction is key."
          src={projectThree}
          git = "https://github.com/chirasi99/SocialMedia_app"
        />
        <ProjectsCard
          title="React Rent App"
          des="Our Rent App, built with React, offers a streamlined platform for managing rental properties. With an intuitive user interface, users can effortlessly list properties, search for rentals, and communicate with landlords or tenants, providing a seamless and efficient rental experience."
          src={projectFour}
          git = "https://github.com/chirasi99/React_Rent_app"
        />
        <ProjectsCard
          title="Calculator App"
          des="Our Calculator app, built with React and Styled Components, delivers a user-friendly interface for math calculations. React ensures efficient rendering and state management, while Styled Components enhance visual appeal, showcasing modern web development at its best."
          src={projectFive}
          git = "https://github.com/chirasi99/Calculator_app"
        />
        <ProjectsCard
          title="Todo List App"
          des="Introducing our user-friendly Todo List App that simplifies task management. Add tasks seamlessly with a single click on the plus button and remove completed tasks effortlessly by clicking on them, making staying organized a breeze."
          src={projectSix}
          git = "https://github.com/chirasi99/React_TODO_App"
        />
      </div>
    </section>
  );
}

export default Projects