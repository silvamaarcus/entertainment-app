import cover from "../../assets/img/cover-movie.png";
import bookmark_save from "../../assets/svg/bookmark.svg";

const CardMd = () => {
  return (
    <>
      <div className="card-medium">
        <div
          className="card-image-md"
          style={{ backgroundImage: `url(${cover})` }}
        >
          <div className="card-overlay flex-space">
            <div className="w-100 mt-2 pr-3">
              <a href="" className="flex-end-row">
                <img src={bookmark_save} alt="Save" className="icon-s" />
              </a>
            </div>
          </div>
        </div>

        <span className="flex-start-row mt-1 gap-1">
          <p>2019</p>
          <p>|</p>
          <p>Movie</p>
          <p>|</p>
          <p>PG</p>
        </span>
        <h6>The Great Lands</h6>
      </div>
    </>
  );
};
export default CardMd;
