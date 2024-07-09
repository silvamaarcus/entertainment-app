import cover from "../../assets/img/cover-movie.png";

const CardXl = () => {
  return (
    <>
      <div className="card-big">
        <div
          className="card-image"
          style={{ backgroundImage: `url(${cover})` }}
        >
          <div className="card-overlay flex-space">
            <div className="flex-end-row mt-2 mr-4 w-auto">
              <a href="">Link</a>
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
