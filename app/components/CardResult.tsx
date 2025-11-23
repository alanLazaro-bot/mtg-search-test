'use client'
import Image from "next/image";
import {ScryfallCardProps} from '../../hooks/useScryfallSearch';

export type CardResultProps = {
    card:ScryfallCardProps
  };

export const CardResult = ({card}:CardResultProps)=>{
    return(
        <div>
            {card.image_uris?.normal && (
  <Image
    src={card.image_uris.normal}
    alt={card.name}
    width={200}
    height={280}
  />
)}
            <h2>{card.name}</h2>
            <p>{card.type_line}</p>
            <p>{card.mana_cost}</p>
            <p>{card.oracle_text}</p>
            <p>{card.colors}</p>
            <p>{card.prices.usd}</p>
        </div>
    
    )
}