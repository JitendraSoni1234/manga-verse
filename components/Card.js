import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const genereColor = {
  romance: 'bg-red-200 text-red-700',
  comedy: 'bg-orange-200 text-orange-700',
  'slice of life': 'bg-green-200 text-green-700',
  drama: 'bg-cyan-800 text-cyan-200',
  action: 'bg-blue-200 text-blue-700',
  adventure: 'bg-purple-200 text-purple-700',
  fantasy: 'bg-pink-200 text-pink-700',
  isekai: 'bg-yellow-200 text-yellow-700',
  "girls' love": 'bg-amber-400 text-amber-800',
  sports: 'bg-blue-400 text-blue-800',
  crime: 'bg-red-400 text-red-800',
  psychological: 'bg-white text-black',
  horror: 'bg-rose-800 text-rose-200',
  'sci-fi': 'bg-emerald-400 text-emerald-700',
  historical: 'bg-lime-400 text-lime-700',
  thriller: 'bg-violet-800 text-violet-200',
  superhero: 'bg-fuchsia-800 text-fuchsia-200',
};

function Card({ title, desc, author, genere, time, volume, chapter, height = '200px', id, imageUrl }) {
  return (
    <Link href={`manga/${id}`}>
    <div className={`relative flex bg-gray-800 h-full text-white p-3 mx-3 rounded-xl`}>
      <div className="aspect-[7/8] object-cover relative h-full">
        <Image className="pointer-events-none select-none object-cover" src={`${process.env.IMAGE_URL}/covers/${id}/${imageUrl}.256.jpg`} alt="Cover Image" fill loading="lazy" />
      </div>

      <div className="pl-5">
        <b className="text-xl break-all line-clamp-1">{title}</b>

        <p className="text-sm text-gray-200 mb-2">Author: {author}</p>

        {(volume || chapter) && (
          <div className="flex gap-2 mb-2">
            {volume && <p className="text-sm text-gray-200">Vol:{volume}</p>}
            {chapter && <p className="text-sm text-gray-200">Chapter:{chapter}</p>}
          </div>
        )}

        <p className="text-sm text-gray-400 mb-2 line-clamp-3 break-word">{desc}</p>

        <div className="flex flex-wrap gap-1 mb-5">
          {genere?.slice(0, 4)?.map(g => (
            <div className={`text-xs inline-flex items-center font-bold leading-sm uppercase px-3  py-1 rounded-full ${genereColor[g.toLowerCase()]}`} key={g}>
              {g}
            </div>
          ))}
        </div>

        {time && <div className="absolute bottom-1 text-gray-300 right-5">Updeted: {dayjs(time).fromNow()}</div>}
      </div>
    </div>
    </Link>
  );
}

export default Card;
