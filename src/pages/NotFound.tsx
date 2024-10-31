import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return(
    <div className="flex flex-col justify-center items-center h-[80vh]">
      <span className="text-2xl">Página não encontrada</span>
      <Link to="/" className="text-black p-2 rounded-md font-bold transition-colors hover:bg-white/80 bg-white mt-2">
        Clique aqui para voltar
      </Link>
    </div>
  )
}