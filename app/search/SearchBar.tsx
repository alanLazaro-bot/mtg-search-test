'use client'

import { useState } from "react";

export const SearchBar = ({ onSearch }: { onSearch: (query: string) => void }) => {
    const [query, setQuery] = useState("");
  
    return (
      <div>
        <input value={query} onChange={(e)=>setQuery(e.target.value)} />
        <button onClick={()=>onSearch(query)}>Buscar</button>
      </div>
    );
  };
