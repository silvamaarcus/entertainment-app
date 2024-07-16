// import cover from "/assets/img/cover-movie.png";
// import bookmark_save from "/assets/svg/bookmark.svg"

// const CardXl = () => {
//   return (
//     <>
//       <div className="card-big">
//         <div
//           className="card-image"
//           style={{ backgroundImage: `url(${cover})` }}
//         >
//           <div className="card-overlay flex-space">
//             <div className="w-100 mt-2 pr-3">
//               <a href="" className="flex-end-row">
//                 <img src={bookmark_save} alt="Save" className="icon-s"/>
//               </a>
//             </div>
//             <div className="card-content">
//               <p className="color-white">Lorem ipsum dolor sit ame.</p>
//               <h5 className="semi-bold">Nome do Filme</h5>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default CardXl;

import cover from "/assets/img/cover-movie.png";

const Card_Carousel = () => {
  return (
    <>
      <div className="card-l">
        <div className="card-img" style={{ backgroundImage: `url(${cover})` }}>
          <div className="flex-space-column card-content p-3 h-100p">
            <div className="w-100 border h-50">
              <div className="flex-end-row">
                <p>M</p>
              </div>
            </div>
            <div className="w-100 border h-50">
              <span className="flex-start-row gap-1 mt-3">
                <p>2021</p>
                <p>|</p>
                <p>Movie</p>
                <p>|</p>
                <p>PG</p>
              </span>
              <h6>Nome filme</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card_Carousel;
