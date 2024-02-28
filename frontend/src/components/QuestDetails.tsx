"use client";

import React, { useEffect } from "react";

interface QuestDataType {
  id: number;
  title: string;
  img: string;
  town: string;
  location: string;
  description: string;
  requirements: string[];
  rewards: string[];
  townDetails: {
    population: number;
    avgAnnualIncome: number;
    localIndustries: string[];
    immigrants: boolean;
    language: string;
    attractions: string[];
    internetAvailability: string;
    skillsGained: string[];
  };
}

export default function QuestDetails({ questId }: { questId: string }) {
  // Dummy quest details data
  const dummyQuestDetails: QuestDataType[] = [
    {
      id: 1,
      title: "Dummy Quest",
      img: "https://example.com/image2.jpg",
      town: "X Town",
      location: "Port Town",
      description:
        "Help solve the labor shortage issues in X Town while experiencing unique activities by the sea!",
      requirements: [
        "Canoeing experience on the river",
        "Surfing experience in the sea",
      ],
      rewards: [
        "Experience seeing the starry night sky",
        "Accommodation experience in an old folk house",
      ],
      townDetails: {
        population: 350,
        avgAnnualIncome: 4200000,
        localIndustries: ["Fishing", "Tourism"],
        immigrants: true,
        language: "Japanese",
        attractions: ["Sea festivals", "Fresh seafood"],
        internetAvailability: "Wi-Fi available",
        skillsGained: ["Knowledge about fishing", "Practical use of machinery"],
      },
    },
    // Add more dummy quest details as needed
  ];

  // Find the dummy quest details by questId
  const questDetails = dummyQuestDetails.find(
    (quest) => quest.id === parseInt(questId)
  );

  if (!questDetails) {
    return <div>Quest not found.</div>;
  }

  return (
    <div>
      <img
        loading="lazy"
        src={questDetails.img}
        alt={questDetails.title}
        className="shadow-md col-start-2 md:col-span-5 lg:col-span-4 xl:col-span-3 stretched object-cover w-full h-48 mt-10"
      />

      <div
        className="bg-teal-900 shadow-lg p-6 col-start-2 md:col-span-5 lg:col-span-4 xl:col-span-3 transition duration-300 ease-in-out"
        style={{ fontFamily: "Abhaya Libre" }}
      >
        <h1 className="text-3xl font-bold mb-6 text-teal-100">
          {questDetails.town} - {questDetails.location}
        </h1>
        <p className="text-lg mb-6 text-teal-200">{questDetails.description}</p>

        {/* Flex container for requirements and rewards cards */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Requirements Card */}
          <div className="bg-teal-800 rounded-lg shadow-md p-4 flex-1 transition duration-300 ease-in-out">
            <h2 className="text-xl font-semibold mb-2 text-teal-100">
              Requirements:
            </h2>
            <ul className="list-disc pl-6">
              {questDetails.requirements.map((requirement, index) => (
                <li key={index} className="mb-2 text-teal-200">
                  {requirement}
                </li>
              ))}
            </ul>
          </div>

          {/* Rewards Card */}
          <div className="bg-teal-800 rounded-lg shadow-md p-4 flex-1 transition duration-300 ease-in-out">
            <h2 className="text-xl font-semibold mb-2 text-teal-100">
              Rewards:
            </h2>
            <ul className="list-disc pl-6">
              {questDetails.rewards.map((reward, index) => (
                <li key={index} className="mb-2 text-teal-200">
                  {reward}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Location Map */}
        <div className="mb-6 mt-10">
          <img
            src={`https://maps.googleapis.com/maps/api/staticmap?center=${encodeURIComponent(
              questDetails.location
            )}&zoom=14&size=600x300&maptype=roadmap&key=YOUR_API_KEY`}
            alt="Location Map"
            className="mb-2 rounded-lg shadow-md"
          />
          <p className="text-lg text-teal-200">
            Location: {questDetails.location}
          </p>
        </div>
        {/* Town Details */}
        <div className="mb-8 mt-8 text-teal-100">
          <h2 className="text-xl font-semibold mb-2">Town Details:</h2>
          <div className="grid grid-cols-2 gap-4">
            <p className="mb-1">
              <span className="font-semibold">Population:</span>{" "}
              {questDetails.townDetails.population}
            </p>
            <p className="mb-1">
              <span className="font-semibold">Average Annual Income:</span>{" "}
              {questDetails.townDetails.avgAnnualIncome}
            </p>
            <p className="mb-1">
              <span className="font-semibold">Local Industries:</span>{" "}
              {questDetails.townDetails.localIndustries.join(", ")}
            </p>
            <p className="mb-1">
              <span className="font-semibold">Immigrants:</span>{" "}
              {questDetails.townDetails.immigrants ? "Yes" : "No"}
            </p>
            <p className="mb-1">
              <span className="font-semibold">Language:</span>{" "}
              {questDetails.townDetails.language}
            </p>
            <p className="mb-1">
              <span className="font-semibold">Attractions:</span>{" "}
              {questDetails.townDetails.attractions.join(", ")}
            </p>
            <p className="mb-1">
              <span className="font-semibold">Internet Availability:</span>{" "}
              {questDetails.townDetails.internetAvailability}
            </p>
            <p className="mb-1">
              <span className="font-semibold">Skills Gained:</span>{" "}
              {questDetails.townDetails.skillsGained.join(", ")}
            </p>
          </div>
        </div>

        {/* Book Quest Button */}
        <button className="grow justify-center px-5 py-2.5 bg-teal-400 hover:bg-teal-500 text-teal-900 hover:text-white rounded-md transition duration-300 ease-in-out mt-4">
          Book Quest
        </button>
      </div>
    </div>
  );
}
