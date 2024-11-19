"use client"
import { useState } from "react";
import Image from "next/image";

export default function ProjectCard({ project }) {
    const [showFullContent, setShowFullContent] = useState(false);
  
    return (
      <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6">

        <h3 className="text-black text-2xl font-semibold mb-4">{project.name}</h3>
  
        <p className="text-gray-700 mb-4">
          {showFullContent ? project.content : `${project.content.substring(0, 100)}...`}
        </p>
        <button
          onClick={() => setShowFullContent(!showFullContent)}
          className="text-blue-500 hover:text-blue-700 text-sm underline mb-4"
        >
          {showFullContent ? "Show Less" : "Read More"}
        </button>
  
  
        <div className="carousel rounded-box flex space-x-4">
          {project.images.map((image) => (
            <div key={image.id} className="carousel-item flex-shrink-0 w-72 h-48 relative">
              <Image
                src={image.url}
                alt={project.name}
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          ))}
        </div>
  
        <div className="flex items-center space-x-2 mb-4 mt-4">
          {project.technologies.map((tech) => (
            <Image
              key={tech.technology.id}
              src={tech.technology.icon}
              alt={tech.technology.name}
              width={32}
              height={32}
              className="rounded-full"
              title={tech.technology.name}
            />
          ))}
        </div>
  
        <div className="flex space-x-4">
          {project.links.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 text-sm underline"
            >
              {link.name}
            </a>
          ))}
        </div>

      </div>
    );
  }
  