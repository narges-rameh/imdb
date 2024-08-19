import Link from "next/link";

export default function Card({result}) {

  return (
    <div className="group">
        <Link href={`/movie/${result.id}`}>
        <image
        src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          width={500}
          height={300}>
        </image>
        </Link>
    </div>
  )
}
