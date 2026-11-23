import React, { useRef } from "react";

export const Floating3DCard = (props) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;

    if (!card) return;

    const { left, top, width, height } =
      card.getBoundingClientRect();

    const x = e.clientX - left;
    const y = e.clientY - top;

    const rotateX = ((y - height / 2) / height) * 15;
    const rotateY = ((x - width / 2) / width) * -15;

    card.style.transform = `
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.02)
    `;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;

    if (!card) return;

    card.style.transform =
      "rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <div className="flex w-full justify-center" style={{ perspective: "1000px" }}>
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="cardmain group relative w-full rounded-2xl sm:rounded-3xl border border-black/10 bg-white p-2.5 sm:p-4 transition-transform duration-300 ease-out flex flex-col justify-between"
        style={{ transformStyle: "preserve-3d" }}
      >
        <h2
          className="text-xs sm:text-sm md:text-base font-bold text-black pt-1 pl-1 truncate"
          style={{ transform: "translateZ(50px)" }}
        >
          {typeof props.elem?.category === 'object'
            ? props.elem?.category?.name
            : props.elem?.category || "Category"}
        </h2>

        <div className="my-2 sm:my-3 w-full flex justify-center items-center" style={{ transform: "translateZ(100px)" }}>
          <img 
            src={props.elem?.image || props.elem?.image_url || props.elem?.thumbnail_url || 'https://via.placeholder.com/150'}
            alt={props.elem?.tags || "3D card thumbnail"}
            className="w-full aspect-[9/15] rounded-xl sm:rounded-2xl object-cover mx-auto"
          />
        </div>

        <div className="mt-3 sm:mt-4 flex items-center justify-between gap-1">
          <a
            href={props.elem?.image || props.elem?.image_url || "#"}
            target="_blank"
            rel="noreferrer"
            className="flex items-center rounded-full bg-black w-fit duration-300 hover:bg-blue-500 hover:text-white px-2 py-1 cursor-pointer shrink-0"
            style={{ transform: "translateZ(20px)" }}
          >
            <span className="ml-1 py-1 font-bold text-white text-[10px] sm:text-xs">Download</span>
            <img src="https://img.icons8.com/?size=100&id=B2WRH0m4cSjB&format=png&color=ffffff" className="h-4 sm:h-6 mr-1 ml-1" alt="download icon" />
          </a>
          <img src="https://img.icons8.com/?size=100&id=DWp2BGf88ZZb&format=png&color=000000" className="h-6 sm:h-9 -mr-1" alt="" />
        </div>
      </div>
    </div>
  );
};