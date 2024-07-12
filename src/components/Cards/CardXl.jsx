import cover from "/assets/img/cover-movie.png";
import bookmark_save from "/assets/svg/bookmark.svg"

const CardXl = () => {
  return (
    <>
      <div className="card-big">
        <div
          className="card-image"
          style={{ backgroundImage: `url(${cover})` }}
        >
          <div className="card-overlay flex-space">
            <div className="w-100 mt-2 pr-3">
              <a href="" className="flex-end-row">
                <img src={bookmark_save} alt="Save" className="icon-s"/>
              </a>
            </div>
            <div className="card-content">
              <p className="color-white">Lorem ipsum dolor sit ame.</p>
              <h5 className="semi-bold">Nome do Filme</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CardXl;
