import React from "react";

const TvCard = ({ tv }) => {
  const dateFormater = (date) => {
    let [yy, mm, dd] = date.split("-");
    return [dd, mm, yy].join("/");
  };

  const genreFinder = () => {
    let genreArray = [];
    for (let i = 0; i < tv.genre_ids.length; i++) {
      switch (tv.genre_ids[i]) {
        case 28:
          genreArray.push(`Action`);
          break;
        case 12:
          genreArray.push(`Aventure`);
          break;
        case 16:
          genreArray.push(`Animation`);
          break;
        case 35:
          genreArray.push(`Comédie`);
          break;
        case 80:
          genreArray.push(`Policier`);
          break;
        case 99:
          genreArray.push(`Documentaire`);
          break;
        case 18:
          genreArray.push(`Drame`);
          break;
        case 10751:
          genreArray.push(`Famille`);
          break;
        case 14:
          genreArray.push(`Fantasy`);
          break;
        case 36:
          genreArray.push(`Histoire`);
          break;
        case 27:
          genreArray.push(`Horreur`);
          break;
        case 10402:
          genreArray.push(`Musique`);
          break;
        case 9648:
          genreArray.push(`Mystère`);
          break;
        case 10749:
          genreArray.push(`Romance`);
          break;
        case 878:
          genreArray.push(`Science-fiction`);
          break;
        case 10770:
          genreArray.push(`Téléfilm`);
          break;
        case 53:
          genreArray.push(`Thriller`);
          break;
        case 10752:
          genreArray.push(`Guerre`);
          break;
        case 37:
          genreArray.push(`Western`);
          break;
        default:
          break;
      }
    }
    return genreArray.map((genre) => <li key={genre}>{genre}</li>);
  };

  const addStorage2 = () => {
    let storedData2 = window.localStorage.tvs
      ? window.localStorage.tvs.split(",")
      : [];

    if (!storedData2.includes(tv.id.toString())) {
      storedData2.push(tv.id);
      window.localStorage.tvs = storedData2;
    }
  };

  const deleteStorage2 = () => {
    let storedData2 = window.localStorage.tvs.split(",");

    let newData = storedData2.filter((id) => id != tv.id);

    window.localStorage.tvs = newData;
  };

  return (
    <div className="card">
      <img
        src={
          tv.poster_path
            ? "https://image.tmdb.org/t/p/w500" + tv.poster_path
            : "./img/poster.jpg"
        }
        alt="affiche film"
      />
      <h2>{tv.name}</h2>
      {tv.release_date ? (
        <h5>Sorti le : {dateFormater(tv.release_date)}</h5>
      ) : (
        ""
      )}
      <h4>
        {tv.vote_average}/10 <span>⭐</span>
      </h4>

      <ul>
        {tv.genre_ids
          ? genreFinder()
          : tv.genres.map((genre, index) => (
              <li key={index}>{genre.name}</li>
            ))}
      </ul>
      {tv.overview ? <h3>Synopsis</h3> : ""}
      <p>{tv.overview}</p>

      {tv.genre_ids ? (
        <div className="btn" onClick={() => addStorage2()}>
          Ajouter aux coups de coeur
        </div>
      ) : (
        <div
          className="btn"
          onClick={() => {
            deleteStorage2();
            window.location.reload();
          }}
        >
          Supprimer de la liste
        </div>
      )}
    </div>
  );
};

export default TvCard;