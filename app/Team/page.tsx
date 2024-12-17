"use client";
import React, { useState } from "react";
import Image from "next/image";

const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<any>(null);

  const teamMembers = [
    {
      id: 1,
      name: "Cristiano Ronaldo",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac libero non metus ultricies pharetra. Nulla facilisi. Suspendisse potenti. Mauris pharetra, metus ut facilisis commodo, nulla lacus interdum urna, in fermentum nisi nisi nec purus. Aenean quis mauris ac lectus ullamcorper tristique. Ut consequat nunc vel mi tristique, at luctus erat feugiat. Integer vehicula vestibulum velit, a consequat turpis vestibulum et. Phasellus malesuada dapibus quam quis aliquet.",
      position: "The GOAT",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo3tweB1lPfcPprJZhRB_LUjFMHHODTUY3hQ&s",
    },
    {
      id: 2,
      name: "Cristiano Ronaldo",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac libero non metus ultricies pharetra. Nulla facilisi. Suspendisse potenti. Mauris pharetra, metus ut facilisis commodo, nulla lacus interdum urna, in fermentum nisi nisi nec purus. Aenean quis mauris ac lectus ullamcorper tristique. Ut consequat nunc vel mi tristique, at luctus erat feugiat. Integer vehicula vestibulum velit, a consequat turpis vestibulum et. Phasellus malesuada dapibus quam quis aliquet.",
      position: "The GOAT",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo3tweB1lPfcPprJZhRB_LUjFMHHODTUY3hQ&s",
    },
    {
      id: 3,
      name: "Cristiano Ronaldo",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac libero non metus ultricies pharetra. Nulla facilisi. Suspendisse potenti. Mauris pharetra, metus ut facilisis commodo, nulla lacus interdum urna, in fermentum nisi nisi nec purus. Aenean quis mauris ac lectus ullamcorper tristique. Ut consequat nunc vel mi tristique, at luctus erat feugiat. Integer vehicula vestibulum velit, a consequat turpis vestibulum et. Phasellus malesuada dapibus quam quis aliquet.",
      position: "The GOAT",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo3tweB1lPfcPprJZhRB_LUjFMHHODTUY3hQ&s",
    },
    {
      id: 4,
      name: "Cristiano Ronaldo",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac libero non metus ultricies pharetra. Nulla facilisi. Suspendisse potenti. Mauris pharetra, metus ut facilisis commodo, nulla lacus interdum urna, in fermentum nisi nisi nec purus. Aenean quis mauris ac lectus ullamcorper tristique. Ut consequat nunc vel mi tristique, at luctus erat feugiat. Integer vehicula vestibulum velit, a consequat turpis vestibulum et. Phasellus malesuada dapibus quam quis aliquet.",
      position: "The GOAT",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo3tweB1lPfcPprJZhRB_LUjFMHHODTUY3hQ&s",
    },
    {
      id: 5,
      name: "Cristiano Ronaldo",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac libero non metus ultricies pharetra. Nulla facilisi. Suspendisse potenti. Mauris pharetra, metus ut facilisis commodo, nulla lacus interdum urna, in fermentum nisi nisi nec purus. Aenean quis mauris ac lectus ullamcorper tristique. Ut consequat nunc vel mi tristique, at luctus erat feugiat. Integer vehicula vestibulum velit, a consequat turpis vestibulum et. Phasellus malesuada dapibus quam quis aliquet.",
      position: "The GOAT",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo3tweB1lPfcPprJZhRB_LUjFMHHODTUY3hQ&s",
    },
    {
      id: 6,
      name: "Cristiano Ronaldo",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac libero non metus ultricies pharetra. Nulla facilisi. Suspendisse potenti. Mauris pharetra, metus ut facilisis commodo, nulla lacus interdum urna, in fermentum nisi nisi nec purus. Aenean quis mauris ac lectus ullamcorper tristique. Ut consequat nunc vel mi tristique, at luctus erat feugiat. Integer vehicula vestibulum velit, a consequat turpis vestibulum et. Phasellus malesuada dapibus quam quis aliquet.",
      position: "The GOAT",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo3tweB1lPfcPprJZhRB_LUjFMHHODTUY3hQ&s",
    },
    {
      id: 7,
      name: "Cristiano Ronaldo",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac libero non metus ultricies pharetra. Nulla facilisi. Suspendisse potenti. Mauris pharetra, metus ut facilisis commodo, nulla lacus interdum urna, in fermentum nisi nisi nec purus. Aenean quis mauris ac lectus ullamcorper tristique. Ut consequat nunc vel mi tristique, at luctus erat feugiat. Integer vehicula vestibulum velit, a consequat turpis vestibulum et. Phasellus malesuada dapibus quam quis aliquet.",
      position: "The GOAT",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo3tweB1lPfcPprJZhRB_LUjFMHHODTUY3hQ&s",
    },
    {
      id: 8,
      name: "Cristiano Ronaldo",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac libero non metus ultricies pharetra. Nulla facilisi. Suspendisse potenti. Mauris pharetra, metus ut facilisis commodo, nulla lacus interdum urna, in fermentum nisi nisi nec purus. Aenean quis mauris ac lectus ullamcorper tristique. Ut consequat nunc vel mi tristique, at luctus erat feugiat. Integer vehicula vestibulum velit, a consequat turpis vestibulum et. Phasellus malesuada dapibus quam quis aliquet.",
      position: "The GOAT",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo3tweB1lPfcPprJZhRB_LUjFMHHODTUY3hQ&s",
    },
    {
      id: 9,
      name: "Cristiano Ronaldo",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac libero non metus ultricies pharetra. Nulla facilisi. Suspendisse potenti. Mauris pharetra, metus ut facilisis commodo, nulla lacus interdum urna, in fermentum nisi nisi nec purus. Aenean quis mauris ac lectus ullamcorper tristique. Ut consequat nunc vel mi tristique, at luctus erat feugiat. Integer vehicula vestibulum velit, a consequat turpis vestibulum et. Phasellus malesuada dapibus quam quis aliquet.",
      position: "The GOAT",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo3tweB1lPfcPprJZhRB_LUjFMHHODTUY3hQ&s",
    },
    {
      id: 10,
      name: "Cristiano Ronaldo",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac libero non metus ultricies pharetra. Nulla facilisi. Suspendisse potenti. Mauris pharetra, metus ut facilisis commodo, nulla lacus interdum urna, in fermentum nisi nisi nec purus. Aenean quis mauris ac lectus ullamcorper tristique. Ut consequat nunc vel mi tristique, at luctus erat feugiat. Integer vehicula vestibulum velit, a consequat turpis vestibulum et. Phasellus malesuada dapibus quam quis aliquet.",
      position: "The GOAT",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo3tweB1lPfcPprJZhRB_LUjFMHHODTUY3hQ&s",
    },
  ];

  return (
    <div className="max-w-[1440px] mx-auto w-[90%]  min-h-[100vh] px-4 sm:px-6 lg:px-8">
      <h2 className="font-semibold text-2xl lg:text-4xl leading-tight text-center">
        Meet the talented team <br />
        who make all this happen
      </h2>
      <p className="font-normal text-center text-sm lg:text-base text-[#6D6D6D] mt-4">
        Passionate and united, our team is dedicated to guiding aspiring <br />{" "}
        dental professionals and supporting their success at every step.
      </p>
      <div className="flex justify-center items-center my-8">
        <button className="bg-primaryPurple rounded-md py-2 px-4 lg:py-3 lg:px-6 text-white text-lg">
          Contact us
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="flex flex-col cursor-pointer"
            onClick={() => {
              setSelectedMember(member);
              setIsModalOpen(true);
            }}
          >
            <Image
              src={member.imageUrl}
              alt={member.name}
              className="w-full h-48 object-cover rounded-md"
              width={1000}
              height={1000}
            />
            <div className="w-full flex justify-between my-2">
              <h4 className="text-primaryPurple font-semibold text-lg">
                {member.name}
              </h4>
              <Image
                src="uprighticon.png"
                alt="uprighticon"
                className="object-contain h-5 w-5"
                width={1000}
                height={1000}
              />
            </div>
            <p className="text-primaryPurple text-xs lg:text-sm font-normal">
              {member.position}
            </p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white rounded-lg overflow-auto shadow-lg max-w-lg w-full">
            <div className="p-4">
              <Image
                src={selectedMember.imageUrl}
                alt={selectedMember.name}
                className="w-full h-64 object-cover rounded-md"
                width={1000}
                height={1000}
              />
              <h2 className="text-xl lg:text-2xl font-semibold mt-4 text-primaryPurple">
                {selectedMember.name}
              </h2>
              <p className="text-primaryPurple text-sm lg:text-base mb-6">
                {selectedMember.position}
              </p>
              <h5 className="text-sm lg:text-base font-semibold text-headingBlack">
                About
              </h5>
              <p className="mt-2 text-sm lg:text-base font-normal text-textBlack">
                {selectedMember.about}
              </p>
            </div>
            <div className="flex justify-end p-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-primaryPurple text-white px-4 py-2 rounded-md"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
