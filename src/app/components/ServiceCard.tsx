"use client";

const ServiceCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="p-6 text-center shadow-xl rounded-xl bg-white">
      <h3 className="text-lg font-medium text-cyan-900">{title}</h3>
      <p className="mt-3 text-gray-800">{description}</p>
    </div>
  );
};

export default ServiceCard;
