'use client'
import { useState } from 'react';
import { searchCards } from '../lib/scryfall';

export type ScryfallCardProps = {
    id: string;
    name: string;
    image_uris: {
      small: string;
      normal: string;
    };
    mana_cost?: string;
    type_line?: string;
    oracle_text?: string;
    colors?: string[];
    collector_number?: string;
    prices: {
      usd: string | null;
    };
  };


export const useScryfallSearch=()=>{
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [results, setResults] = useState<ScryfallCardProps[]>([]);


    async function handleSearch(query:string) {
        if (!query.trim()) return;
      
        setLoading(true);
        setError("");
      
        try {
          const data = await searchCards(query);
      
          if (data.object === "error") {
            setError(data.details || "No cards found");
            setResults([]);
          } else {
            setResults(data.data);
          }
        } catch (err) {
          setError(`Failed to fetch cards: ${err}`);
        } finally{
            setLoading(false);
        }
      

      }
    
      return { loading, error, results, handleSearch };
    }
