import React from 'react';
import Image from 'next/image';


type Props = {
  owner: {
    id: string;
    name: string;
    stack: string;
    image: string;
  };
};


export default function Card({ owner }: Props) {
  return (
    <div>
      <Image src={owner.image} width={100} height={100} alt="owner" />
      <h3>{owner.name}</h3>
      <p>{owner.stack}</p>
    </div>
  );
}