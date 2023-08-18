import React from "react";
import { Card } from "react-bootstrap";
import { motion } from "framer-motion";
import project1 from "../images/project1.png";
import project2 from "../images/project2.jpeg";
import weather from "../images/weather.jpeg";
import codeeditor from "../images/codeeditor.jpeg";
import expense from "../images/expense.jpeg";
import todo from "../images/todo.png";

const Projects = () => {
  const projectList = [
    {
      id: 1,
      name: "Ecommerce Application",
      imageUrl: project1,
    },
    {
      id: 2,
      name: "Resturant Application",
      imageUrl: project2,
    },
    {
      id: 3,
      name: "Weather Application",
      imageUrl: weather,
    },
    {
      id: 4,
      name: "Code_Xa Editor",
      imageUrl: codeeditor,
    },
    {
      id: 5,
      name: "Expense Tracker Application",
      imageUrl: expense,
    },
    {
      id: 6,
      name: "Todo Application",
      imageUrl: todo,
    },
  ];

  return (
    <motion.div
      animate={{
        scale: [2, 1],
        rotate: [90, 0],
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      className="projects"
    >
      <h2>Projects</h2>
      <div className="wrapper">
        {projectList.map((item) => {
          return (
            <motion.div
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5 },
              }}
              key={item.id}
            >
              <Card>
                <Card.Img variant="top" src={item.imageUrl} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                </Card.Body>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Projects;
