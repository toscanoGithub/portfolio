import React, { useEffect } from 'react'
import Link from 'next/link'
import { log } from 'console'
import { Separator } from '@/components/ui/separator'
import "../globals.css";

type Props = {
  currentIndex: string
}

const projects = [
  {
    id: "0",
    name: "Tableau Périodique",
    description: "Présentation d'une application web développée dans le cadre de mon projet de participation à l'événement 'Coder pour l'Ukraine'. Cette application permet d'apprendre le tableau périodique des éléments, offre des informations détaillées sur chaque élément et inclut un quiz pour aider à la révision.",
    url:"https://periodik-table-of-elements.netlify.app/"
  },

  {
    id: "1",
    name: "Machine Number",
    description: "Cette application simule un système de distribution de numéros dans une banque, en fonction des différents services demandés par les clients. Lorsqu'un client arrive, il sélectionne le type de service souhaité, que ce soit pour un dépôt, un retrait, un conseil, ou autre. En fonction de la catégorie choisie, un numéro est attribué pour gérer l'ordre d'attente. L'objectif est de fluidifier le processus d'accueil et de réduire les files d'attente. Chaque service a sa propre file d'attente dédiée, ce qui permet d'organiser les demandes de manière plus efficace. Le système garantit ainsi une répartition équitable des clients entre les différents guichets et optimise le temps d'attente.",
    url: "https://machine-number-generator.netlify.app/"
  },

  {
    id: "2",
    name: "Carte Profile",
    description: "Carte Profile est une application qui permet de créer un code QR. Il suffit de scanner ce code avec un téléphone mobile pour accéder à une page où vous pouvez créer un profil en répondant à deux questions : votre nom et une brève description de vous-même. Une fois le profil validé, une carte de profil amusante s'affiche, avec un avatar de robot en photo de profil et le texte que vous avez saisi. L'ensemble est accompagné d'une animation ludique.",
    url: "https://me-as-a-programmer.netlify.app/"
  },

  {
    id: "3",
    name: "Jokes Teller",
    description: "Jokes Teller est une application web qui permet de découvrir des blagues de manière simple et rapide. Elle se connecte à une API pour générer des blagues variées et les afficher à l'utilisateur./nC’est une application idéale pour ceux qui veulent ajouter un peu de rire à leur journée.",
    url: "https://blagues-plates.netlify.app/"
  }
]
function Projects(props: Props) {
  
  function scrollToDiv(index: string) {
    console.log("scrollToDiv", index);
    
    // Select the div with the specific data-index
    const targetDiv = document.querySelector(`[data-index="${index}"]`);
    console.log(targetDiv);
    
    if (targetDiv) {
        // Scroll the window to that div
        targetDiv.scrollIntoView({
            behavior: 'smooth', // smooth scrolling
            block: 'center',
             // aligns the div to the top of the viewport
             inline: 'nearest'
        });

  

    } else {
        console.log("Div with the specified index not found");
    }
}
  useEffect(() => {
    scrollToDiv(props.currentIndex)
  }, [props.currentIndex])
  
  return (
      <>
      {projects.length && projects.map(project => <div data-index={"p-" + project.id} key={project.id} className='h-screen flex-col items-center justify-center gap-y-52 max-lg:pl-5 '>
        <h1 className='mt-10 font-bold text-6xl  max-lg:pt-[70px]'>{project.name}</h1>
        <Link className='blink text-[#3F51B5] font-extrabold text-lg pl-4' href={project.url}>Visiter {project.name}</Link>

          <p className='sm:p-40 p-16  text-center'>{project.description}</p>

        
        
      </div>)}
      <Separator />
      </>
      
  )
}

export default Projects