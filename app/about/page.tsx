import React, { FC }  from 'react'
import type { Metadata } from 'next';
import Link from "next/link";
import Image from 'next/image';
import styles from './styles.module.scss';
import image from '../../public/assets/student2.jpg'
export const metadata: Metadata = {
  title: 'About',
  description: 'Information about college Illuminated, the owners and their stories.',
};

interface Data {
  id: number;
  name: string;
  title: string;
  image: string;
}

const data: Data[] = [
  { id: 1, name: "Rami", title: "Info", image: "/assets/Meeting.png" },
  { id: 2, name: "Lukman", title: "Info", image: "/assets/Conversation.png" },
  { id: 3, name: "Jennifer", title: "Info", image: "/assets/Boombox.png" },
  { id: 3, name: "Ramzi", title: "Info", image: "/assets/Boombox.png" },
];

interface CardProps {
  data: Data;
}

const Card: FC<CardProps> = ({ data }) => {
  return (
    <div>
      <Image src={image} alt="vector-image" className={styles.vectorImage} width={100} height={100}  />
      <h3>{data.name}</h3>
      <p>{data.title}</p>
    </div>
  );
};

const About: FC = () => {
  // throw new Error(" Not Today") intentional testing error
  return (
    <>
      <div className="main">
        <h1>OUR MISSION</h1>
        <div className='container'>
          <div className='text-container'>
            <p>The principle of developing a more attainable, brighter future for every student is what College Illuminated was founded on. Hailing from New York City public schools, we understand that high school college counselors do not have the time to intricately help every student in the gruesome college admissions process.</p>
            <p>By providing affordable services, we aim to make our resources accessible to all to turn a dream school into a reality. Led by 2 Columbia University student’s who have attained full-rides with the help of merit scholarships, we want you to put our proven methods of getting into prestigious universities to practice, defying all odds!</p>
          </div>
          <Image src={image} alt="about image" width={100} height={100} />
        </div>
        <div className='pitch'>
          <h2>
            <q>By providing affordable services, we aim to make our resources accessible to all to turn a dream school into a reality.</q>
          </h2>
        </div>
      </div>
      <section className="section-two">
        <h3>THE TEAM</h3>
        {data.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </section>
      <section className="section-three">
        <h2> JOIN OUR TEAM</h2>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name"  name="name" />
          <label htmlFor="email">Email</label>
          <input type="email"  name="email" />
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message"></textarea>
          <button type="submit">SEND MESSAGE</button>
        </div>
      </section>
    </>
  )
}

export default About;