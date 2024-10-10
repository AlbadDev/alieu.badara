// app/users/[id]/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import BlurFade from "@/components/magicui/blur-fade";
import style from "../../../../styles/ProjectDetails.module.scss";
import {
  BsBoxArrowUpRight,
  BsInfoCircle,
  BsCheck,
  BsCheckCircle,
} from "react-icons/bs";
import { LuLayoutList } from "react-icons/lu";
import { IoChevronDownOutline } from "react-icons/io5";
import { GrTechnology } from "react-icons/gr";
import { GiParmecia } from "react-icons/gi";
import { IoIosColorPalette } from "react-icons/io";
import { FaCogs } from "react-icons/fa";
import { HiOutlineLightBulb } from "react-icons/hi2";
import Link from "../../../../node_modules/next/link";
import ColorList from "@/components/helpers/ColorList";
import Head from "next/head";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode, Key } from "react";


interface Image {
  firstMobile: string;
  secondMobile: string;
  tablet: string;
  laptop: string;
}

interface Project {
  colors: [];
  inDeep: [];
  mvp: [];
  id: number;
  title: string;
  href: string;
  dates: string;
  active: boolean;
  description: string;
  technologies: string[];
  links: { type: string; href: string }[];
  image: Image;
  video: string;
}


export let metadata: Metadata 

async function getProject(id: string) {

  const res = await fetch(`http://localhost:3000/api/projects/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch project");
  }
  const project: Project = await res.json();

  metadata = {
    // metadataBase: "#",
    title: {
      default: `${project.title}`,
      template: `%s | ${project.title}`,
    },
  }
  return project;
}



// Dynamic page component to display individual user info
export default async function ProjectPage({
  params,
}: {
  params: { id: string };
}) {


  const project = await getProject(params.id);



  const BLUR_FADE_DELAY = 0.04;

  return (
    <>
    <Head>
        <title>Project | {project.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="/gh/devicons/devicon@v2.14.0/devicon.min.css"></link>
    </Head>
    
    <div className={style.container}>
      <section className={style.header}>
        <div>
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-flexStart justify-center space-y-4 text-center">
              <div className="flex justify-flexStart items-center  rounded-lg  px-3 py-1 text-sm">
                <hr className="border border-black dark:border-[rgb(255,255,255)]" />

                <h3 className={style.label}>{project.title}</h3>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      <section className={style.sectionContainer}>
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className={style.imgContainer}>
              <div className={style.smallImg} id={style.imgContainer}>
                <Image
                  src={project.image?.firstMobile}
                  // "https://i.imgur.com/kGUlUsN.png"
                  alt="img"
                  width={150}
                  height="300"
                  id={style.img}
                />
              </div>

              {
                project?.image?.tablet ?
                <div className={style.BigImg}>
                <Image
                  src={project.image?.tablet}
                  // "https://i.imgur.com/K3zus4n.png"

                  alt="img"
                  width={300}
                  height="300"
                  id={style.img}
                />
              </div> : null }
            </div>
          </BlurFade>
        </div>
      </section>

      <section className={style.sectionContainer}>
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <div className="flex gap-2">
            <div>
              <BsInfoCircle className={style.infoIcon} />
            </div>
            <div className={style.DescContainer}>
              <p>{project.description}</p>
            </div>
          </div>
        </BlurFade>
      </section>

      <section className={style.sectionContainer}>
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <div className={style.header}>
            <LuLayoutList className={style.LaptopIcon} />
            <h3 className={style.label}>MVP</h3>
          </div>
          <div className={style.mvpContainer}>
            <ul className={style.ulList}>
              {project.mvp?.map( (mvp: string ) => (
                <li className={style.list} key={mvp}>
                  <div>
                    <IoChevronDownOutline className={style.iconList} />
                  </div>
                  <div>{mvp}</div>
                </li>
              ))}
            </ul>
          </div>
        </BlurFade>
      </section>

      <section className={style.sectionContainer}>
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <div className="space-y-12 w-full py-12">
            <div className={style.imgContainer}>
              <div className={style.smallImg}>
                <Image
                  src={project.image?.laptop}
                  alt="img"
                  width={400}
                  height="300"
                  id={style.img}
                />
              </div>

              <div className={style.BigImg}>
                <Image
                  src={project.image?.secondMobile}
                  alt="img"
                  width={150}
                  height="300"
                  id={style.img}
                />
              </div>
            </div>
          </div>
        </BlurFade>
      </section>

      <section className={style.sectionContainer}>
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <div className={style.header}>
            <GrTechnology className={style.LaptopIcon} />
            <h3 className={style.label}>TECH STACK</h3>
          </div>
          <div className={style.mvpContainer}>
            <div className={style.head}>
              <p style={{ fontSize: "14px" }}>
                There are the list of technologies and colors palettes i used to
                build and style :{" "}
                <span style={{ fontWeight: "bold" }}>{project.title}</span>
              </p>
            </div>
            <div
              className={style.listContainer}
              style={{ display: "flex", gap: "5px" }}
            >
              <div className={style.techContainer}>
                <label className="flex items-center gap-2 ">
                  <FaCogs />
                  Technologies
                </label>
                <ul>
                  {project.technologies?.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>

              <div className={style.techContainer}>
                <ColorList colors={project.colors} />
              </div>
            </div>
          </div>
        </BlurFade>
      </section>

      <section className={style.sectionContainer}>
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          {/* <div > */}
          <div className={style.header}>
            <HiOutlineLightBulb className={style.LaptopIcon} />
            <h3 className={style.label}>IN DEEP</h3>
          </div>
          <div className={style.mvpContainer}>
            {/* <p style={{marginBottom:'40px'}}>The GitHub Viewer web app is built using a modern tech stack that ensures a seamless user experience and efficient data handling. </p> */}
            <ul className={style.ulList}>
              {project.inDeep?.map((deep: string ) => (
                <li className={style.list} key={deep}>
                  <div>
                    <IoChevronDownOutline className={style.iconList} />
                  </div>
                  <div className={style.deepList}>{deep}</div>
                </li>
              ))}
            </ul>
          </div>

          {/* </div> */}
        </BlurFade>
      </section>

      <section className={style.sectionContainer} style={{ marginTop: "60px" }}>
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <div className="flex justify-between  gap-2">
            <div>
              <Link
                href={+project.id !== 1 ? `/projects/${+project.id - 1}` : "/"}
                className={style.Link}
              >
                <span style={{ color: "#14c7c7", marginRight: "5px" }}>
                  &#8592;
                </span>{" "}
                Back{" "}
              </Link>
            </div>
            <div>
              <Link
                href={+project.id !== 4 ? `/projects/${+project.id + 1}` : "/"}
                className={style.Link}
              >
                {" "}
                Next{" "}
                <span style={{ color: "#4feb34", marginLeft: "5px" }}>
                  &#8594;
                </span>
              </Link>
            </div>
          </div>
        </BlurFade>
      </section>
    </div>
    </>
  );
}