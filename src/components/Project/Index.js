import React from "react"
import { project } from "../../data"
import "./Index.scss"
import { Link } from "react-router-dom"

const Project = () => {
  return (
    <div className="px-20">
      <h1 className="text-2xl font-semibold mx-auto text-center">
        My Projects
      </h1>
      {project.map((project, index) => {
        return (
          <div
            key={index}
            className={`flex lg: ${
              index % 2 ? "flex-row" : "flex-row-reverse"
            }  pl-12 py-8 text-center`}
          >
            <div className="lg: w-1/2 mx-4">
              <h1 className="text-2xl font-semibold py-4">{project.name}</h1>
              <p className="py-4">{project.description}</p>
              <div className="mx-auto">
                {project.live && (
                  <Link
                    to={project.live}
                    className="glow-on-hover1 mx-2"
                    type="button"
                  >
                    View Live
                  </Link>
                )}
                {project.code && (
                  <Link
                    to={project.code}
                    className="glow-on-hover2 mx-2"
                    type="button"
                  >
                    View Code
                  </Link>
                )}
              </div>
            </div>
            <div className="lg: w-1/2 px-4">
              <img
                className="rounded-md"
                src={project.image}
                alt=""
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Project
