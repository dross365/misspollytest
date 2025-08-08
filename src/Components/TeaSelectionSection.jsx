import React from "react";

const TeaSelectionSection = () => {
  return (
    <section>
      <h3 className="text-lg text-center uppercase text-[#d8a7b1] pt-[60px] md:pt-[100px]">
        our selection
      </h3>
      <p className="uppercase tracking-widest text-2xl text-center mt-2 p-4">
        multiple teas to choose from
      </p>
      <p className="text-sm text-center mt-4 w-[80%] mx-auto mb-4 md:max-w-[800px] md:text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at egestas
        dui, in pulvinar augue. Aliquam eu ultrices lorem. Etiam laoreet magna
        quis diam rutrum efficitur. Vestibulum ante ipsum primis in faucibus
        orci luctus et ultrices posuere cubilia curae; Vestibulum vitae commodo
        mi.
      </p>
      {/* Tea List */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 place-items-center max-w-[320px] md:w-[80%] md:max-w-[800px] mx-auto mt-[30px] md:mt-[50px] pb-[100px]">
        <div className="w-[130px] h-[160px] bg-white flex flex-col items-center justify-center">
          <FontAwesomeIcon icon={faLeaf} className="text-5xl mb-2" />
          <p className="font-bold text-center uppercase mt-3">black</p>
        </div>
        <div className="w-[130px] h-[160px] bg-white flex flex-col items-center justify-center">
          <FontAwesomeIcon icon={faPagelines} className="text-5xl mb-2" />
          <p className="font-bold text-center uppercase mt-3">green</p>
        </div>
        <div className="w-[130px] h-[160px] bg-white flex flex-col items-center justify-center">
          <FontAwesomeIcon icon={faMugHot} className="text-5xl mb-2" />
          <p className="font-bold text-center uppercase mt-3">herbal</p>
        </div>
        <div className="w-[130px] h-[160px] bg-white flex flex-col items-center justify-center">
          <FontAwesomeIcon icon={faHollyBerry} className="text-5xl mb-2" />
          <p className="font-bold text-center uppercase mt-3">fruity</p>
        </div>
      </div>
    </section>
  );
};

export default TeaSelectionSection;
