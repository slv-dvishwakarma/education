import { Breadcrumb } from "@/components/core";
import { ImageBox } from "@/components/core";
import React from "react";

const FulfillingAtmaNirbhar5Pillars = () => {
  const data = [
    {
      title: "Economy",
      description:
        "Skilline aims to foster national self-reliance and economic growth through upskilling, improving employment and self-employment opportunities, and establishing itself as a global brand.",
      image: "/images/Economy-2.png",
      color: "orange",
    },
    {
      title: "Infrastructure",
      description:
        "Skilline leverages the IndiaAI Mission, utilizing AI and Gen AI servers for knowledge base ingestion and tailored education with scalability. Our platform aims to boost inclusion, innovation, and social impact, reinforcing India's global presence. Our vision is to establish a self-sustaining Indigenous University, transforming learning.",
      image: "/images/Infrastructure-2.png",
      color: "green",
    },
    {
      title: "System",
      description:
        "Skilline will serve as an ecosystem and energy source for learning in the nation’s languages, utilizing AI and Gen AI server foundations for knowledge base ingestion. System intelligence caters to unique educational needs, ensuring future generations benefit from today's innovations.",
      image: "/images/System.png",
      color: "blue",
    },
    {
      title: "Vibrant Demography",
      description:
        "Skilline, a national education platform facilitating learning in multiple languages, caters to diverse groups including youth, office workers, rural residents, corporates, manufacturing hubs, government, and policymakers. We are already partnering with award-winning Australian businesses and certified Australian entrepreneurs for global expansion.",
      image: "/images/Vibrant-Demography.png",
      color: "yellow",
    },
    {
      title: "Demand",
      description:
        "Skilline is a market-leading platform for on-demand skills and training courses, supporting our nation in acquiring the necessary skills, qualifications, and experience for employment or self-employment. We aspire to serve as the nation’s premier guide for discovering, assessing, and enrolling in interactive, personalized courses on demand.",
      image: "/images/Demand.png",
      color: "gray",
    },
  ];
  return (
    <div>
      <Breadcrumb
        data={[
          {
            label: "Home",
            link: "/",
            isActive: false,
          },
          {
            label: "Fulfilling Atma Nirbhar 5 Pillars",
            link: "/",
            isActive: true,
          },
        ]}
      >
        Fulfilling Atma Nirbhar 5 Pillars
      </Breadcrumb>
      <div className="container py-[50px]">
        <div className="space-y-10">
          {data.map((item: any, index) => {
            return (
              <div key={index}>
                <ImageBox
                  data={{
                    image: item.image,
                    title: item.title,
                    description: item.description,
                  }}
                  type="style-4"
                  imageAlign={index % 2 ? "right" : "left"}
                  color={item.color}
                  seqNumber={"0" + (index + 1)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FulfillingAtmaNirbhar5Pillars;
