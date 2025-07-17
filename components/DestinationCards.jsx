import Image from 'next/image';

export default function DestinationCards({ name, location, image }) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-md bg-white hover:shadow-xl transition-all duration-300 cursor-pointer group">
      <div className="relative h-[250px] w-full overflow-hidden">
        <Image
          src={image}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-500">{location}</p>
      </div>
    </div>
  );
}
