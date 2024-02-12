"use client";

import React, { useState } from "react";
import Image from "../Image/Image";
import ProjectListItem from "../ProjectListItem/ProjectListItem";
import Button from "../Button/Button";

import Link from "next/link";

const ProjectMap = () => {
  const [view, setView] = useState("list");
  const [projects, setProjects] = useState("all");
  return (
    <section
      className={` overflow-scroll relative bg-[url('/assets/Sec5Bg.png')] bg-center min-h-screen bg-fixed bg-cover bg-no-repeat  flex flex-col w-full`}
    >
      <div
        className={`${
          view === "list" ? "block" : "hidden"
        } p-4 md:p-20 flex flex-col gap-5`}
      >
        <div
          className={`w-full flex flex-col gap-2 md:flex-row justify-between`}
        >
          <p className={`headerFont text-white text-4xl`}>Projects</p>
          <Button
            className={`bg-[#F8F8F8] flex gap-1 p-4`}
            onClick={() => {
              setView("map");
            }}
          >
            <Image alt={"map"} src={"/assets/listMap.svg"} />
            <p>View as map</p>
          </Button>
        </div>
        <div className="flex flex-col gap-28">
          <div className="flex flex-col gap-4">
            <div className={`flex gap-5 items-center`}>
              <div
                className={`flex items-center justify-center bg-[#D1A55C1A] p-2`}
              >
                <Image alt={"Completed"} src={"/assets/completed.svg"} />
              </div>
              <p className={`headerFont text-white text-3xl`}>Completed</p>
            </div>
            <div className={`flex md:grid gap-4 flex-col md:grid-cols-3`}>
              <ProjectListItem
                link={"/projects/longonot-heights"}
                name={"Longonot Heights"}
                address={" Ikate, Elegushi, Lekki"}
                startFrom={"$10,000"}
                image={"/assets/LongonotHeightsList.png"}
              />
              <ProjectListItem
                link={"/projects/quantum-place"}
                name={"Quantum Place"}
                address={"Oniru, Victoria Island"}
                startFrom={"$10,000"}
                image={"/assets/QuantumPlaceList.png"}
              />
              <ProjectListItem
                link={"/projects/lunar-courts"}
                name={"Lunar Court"}
                address={"Oniru, Victoria Island"}
                startFrom={"$10,000"}
                image={"/assets/LunarCourtList.png"}
              />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className={`flex gap-5 items-center`}>
              <div
                className={`flex items-center justify-center bg-[#D1A55C1A] p-2`}
              >
                <Image alt={"Ongoing"} src={"/assets/ongoing.svg"} />
              </div>
              <p className={`headerFont text-white text-3xl`}>Ongoing</p>
            </div>
            <div className={`flex flex-col md:grid md:grid-cols-3 gap-4`}>
              <ProjectListItem
                link={"/projects/cove-towers"}
                name={"Cove Towers"}
                address={"Lekki, Lagos"}
                startFrom={"$10,000"}
                image={"/assets/CoveTowersList.png"}
              />
              <ProjectListItem
                link={"/projects/7-centrale"}
                name={"7 Centrale Residences"}
                address={"Durosimi Etti, Lekki Phase 1"}
                startFrom={"$10,000"}
                image={"/assets/7CentraleList.png"}
              />
              <ProjectListItem
                link={"/projects/gazania-park"}
                name={"Gazania Park"}
                address={"Periwinkle Estate, Lekki Phase 1"}
                startFrom={"$10,000"}
                image={"/assets/GazaniaParkList.png"}
              />
              <ProjectListItem
                link={"/projects/the-jade-manor"}
                name={"The Jade Manor"}
                address={"Onigefun street, Oniru, VI"}
                startFrom={"$10,000"}
                image={"/assets/the-jade-manor-site2.png"}
              />
            </div>
          </div>
          <div className="hidden flex-col gap-4">
            <div className={`flex gap-5 items-center`}>
              <div
                className={`flex items-center justify-center bg-[#D1A55C1A] p-2`}
              >
                <Image alt={"future"} src={"/assets/future.svg"} />
              </div>
              <p className={`headerFont text-white text-3xl`}>Future</p>
            </div>
            <div className={`flex gap-4 flex-col md:flex-row`}></div>
          </div>
        </div>
      </div>
      <div className={` ${view === "map" ? "block" : "hidden"}`}>
        <div
          alt={"menu"}
          className={
            " w-56 md:w-72 absolute top-4 left-4 md:top-44 md:left-20  flex flex-col gap-2 md:gap-5"
          }
        >
          <h1 className={`headerFont text-[#D1A55C] text-2xl md:text-5xl`}>
            Projects
          </h1>
          <div className={`flex flex-col bg-white  p-2 md:p-4 gap-4`}>
            <button
              className="flex items-center justify-between "
              onClick={() => {
                setProjects("completed");
              }}
            >
              <div className={`flex gap-2 items-center`}>
                <div
                  className={`flex items-center justify-center bg-[#D1A55C1A] p-2 md:p-4`}
                >
                  <Image alt={"Completed"} src={"/assets/completed.svg"} />
                </div>
                <p>Completed</p>
              </div>
              <div className="w-4 h-4 rounded-full bg-black/10 p-3 flex items-center justify-center">
                3
              </div>
            </button>
            <button
              className="flex items-center justify-between "
              onClick={() => {
                setProjects("ongoing");
              }}
            >
              <div className={`flex gap-2 items-center`}>
                <div
                  className={`flex items-center justify-center bg-[#D1A55C1A] p-2 md:p-4`}
                >
                  <Image alt={"Completed"} src={"/assets/ongoing.svg"} />
                </div>
                <p>Ongoing</p>
              </div>
              <div className="w-4 h-4 rounded-full bg-black/10 p-3 flex items-center justify-center">
                3
              </div>
            </button>
            <button
              className="flex items-center justify-between "
              onClick={() => {
                setView("list");
              }}
            >
              <div className={`flex gap-2 items-center`}>
                <div
                  className={`flex items-center justify-center bg-[#D1A55C1A] p-2 md:p-4`}
                >
                  <Image alt={"Completed"} src={"/assets/viewAll.svg"} />
                </div>
                <p>View as List</p>
              </div>
            </button>
          </div>
        </div>
        <Link href={"/projects/longonot-heights"}>
          <Image
            alt={"menu"}
            src={"/assets/longonot-heights-map.svg"}
            className={`h-24 md:h-40 md:w-80 absolute  top-[45%] md:top-[29%] left-0 md:left-[29%] ${
              projects === "completed" || projects === "all"
                ? "block"
                : "hidden"
            }`}
          />
        </Link>
        <Link href={"/projects/7-centrale"}>
          <Image
            alt={"menu"}
            src={"/assets/7-centrale-map.png"}
            className={`h-24 md:h-40 md:w-80 absolute top-[60%] md:top-[41%] left-[47%] ${
              projects === "ongoing" || projects === "all" ? "block" : "hidden"
            }`}
          />
        </Link>
        <Link href={"/projects/gazania-park"}>
          <Image
            alt={"menu"}
            src={"/assets/gazania-park-map.png"}
            className={`h-24 md:h-40 md:w-64 absolute bottom-[10%] md:bottom-[16%] left-[32%] ${
              projects === "ongoing" || projects === "all" ? "block" : "hidden"
            }`}
          />
        </Link>
        <Link href={"/projects/cove-towers"}>
          <Image
            alt={"menu"}
            src={"/assets/cove-towers-map.svg"}
            className={`h-24 md:h-40 md:w-64 absolute bottom-[6%] left-[330px] md:left-[58%] ${
              projects === "ongoing" || projects === "all" ? "block" : "hidden"
            }`}
          />
        </Link>
        <Link href={"/projects/quantum-place"}>
          <Image
            alt={"menu"}
            src={"/assets/quantum-place-map.png"}
            className={`h-24 md:h-40 md:w-72 absolute top-[8%] left-[500px] md:left-[59%] ${
              projects === "completed" || projects === "all"
                ? "block"
                : "hidden"
            }`}
          />
        </Link>
        <Link href={"/projects/lunar-court"}>
          <Image
            alt={"menu"}
            src={"/assets/lunar-court-map.png"}
            className={`h-24 md:h-40 md:w-64 absolute top-[40%]  left-[400px] md:left-[70%] ${
              projects === "completed" || projects === "all"
                ? "block"
                : "hidden"
            }`}
          />
        </Link>
      </div>
    </section>
  );
};

export default ProjectMap;
