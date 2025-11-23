//import Image from "next/image";
'use client'

import { CardResult } from "./components/CardResult";
import { SearchBar } from "./search/SearchBar";
import { useScryfallSearch } from "@/hooks/useScryfallSearch";



export default function Page() {
  const { loading, error, results, handleSearch } = useScryfallSearch();

  return (
    <main>
     <SearchBar onSearch={handleSearch} />
      {loading && <p>Cargando…</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {results.map(card => (
      <CardResult key={card.id} card={card} />
))}
    </main>
  );
}
