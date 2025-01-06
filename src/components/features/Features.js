import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Android App Development"
          des="A software engineer specializing in designing, developing, and maintaining applications for Android devices. They are proficient in Android Studio, Java, Kotlin, and SDK tools, focusing on creating user-friendly, efficient, and responsive apps tailored to client needs."
          icon={<AiFillAppstore />}
        />      
        <Card
          title="Full Stack Developer"
          des="A professional skilled in both front-end and back-end development, capable of designing, building, and maintaining complete web applications. They manage user interfaces, server-side logic, databases, and APIs, ensuring seamless integration and optimal performance."
          icon={<SiAntdesign />}
        />

        <Card
          title="Web App Development"
          des="Skilled in designing, developing, and maintaining responsive and user-friendly web applications. Proficient in front-end technologies like HTML, CSS, JavaScript, and React, paired with back-end expertise in Node.js, Java, and MySQL. Focused on delivering high-performance, scalable, and secure web solutions tailored to client needs."
          icon={<SiProgress />}
        />
      </div>
    </section>
  );
}

export default Features