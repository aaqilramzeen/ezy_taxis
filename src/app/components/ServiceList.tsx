"use client";

import { Badge, Card } from "flowbite-react";
import { HiCheck } from "react-icons/hi";
import { serviceCards } from "../utils/service-cards";

const ServiceList = () => {
  return (
    <section className="mt-10 flex justify-center flex-wrap gap-4">
      {serviceCards.map((card) => {
        return (
          <Card
            key={card.image_id}
            className="max-w-sm details-card"
            imgSrc={`https://source.unsplash.com/${card.image_id}`}
            horizontal
          >
            <h5 className="text-xl font-medium text-slate-800">
              {card.title}
            </h5>
            <p className="text-gray-700">
              {card.description}
            </p>
            <div className="flex gap-1 flex-wrap">
              {card.keywords.map((keyword) => {
                return (
                  <Badge key={keyword} className="px-3" icon={HiCheck}>
                    {keyword}
                  </Badge>
                );
              })}
            </div>
          </Card>
        );
      })}
    </section>
  );
};

export default ServiceList;
