// import React from "react";
// import Image from "next/image";
// import cow from "../../../public/Cowprotectionwork/cow.png";
// import milk from "../../../public/Cowprotectionwork/milk.png";
// import nature from "../../../public/Cowprotectionwork/nature.png";
// import cow2 from "../../../public/Cowprotectionwork/upper1.png";
// import milk2 from "../../../public/Cowprotectionwork/upper2.png";
// import nature2 from "../../../public/Cowprotectionwork/nature2.svg";

// export default function CowProtectionWork() {
//   const contentData = [
//     {
//       id: 1,
//       src: cow,
//       src2:cow2,
//       alt: "cow",
//       title: "Cow Protection",
//     },
//     {
//       id: 2,
//       src: milk,
//       src2:milk2,
//       alt: "milk",
//       title: "Pure Milk",
//     },
//     {
//       id: 3,
//       src: nature,
//       src2:nature2,
//       alt: "nature",
//       title: "Nature's Blessing",
//     },
//   ];

//   return (
//     <div className="flex flex-wrap justify-evenly p-10 mb-24 gap-4">
//       {contentData.map((item) => (
//         <div
//           key={item.id}
//           className="relative group"
//           style={{ minWidth: "310px", maxHeight: "260px" }}
//         >
          
//           <Image
//             src={item.src}
//             alt={item.alt}
//             height={260}
//             width={310}
//             className="cursor-pointer"
//           />

         
//           <div className="absolute top-[90.2px] cursor-pointer inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-transition-all duration-200 hover:opacity-100 transition-opacity duration-300">
//             <Image src={item.src2} alt="cow2"  
//             height={260}
//             width={310}
//             >
//             </Image>
//           </div>
//         </div>
//       ))}
     
//     </div>
//   );
// }


import React from "react";
import Image from "next/image";
import cow from "../../../public/Cowprotectionwork/cow.png";
import milk from "../../../public/Cowprotectionwork/milk.png";
import nature from "../../../public/Cowprotectionwork/nature.png";
import cow2 from "../../../public/Cowprotectionwork/upper1.png";
import milk2 from "../../../public/Cowprotectionwork/upper2.png";
import nature2 from "../../../public/Cowprotectionwork/nature2.svg";

export default function CowProtectionWork() {
  const contentData = [
    {
      id: 1,
      src: cow,
      src2: cow2,
      alt: "cow",
      title: "Cow Protection",
    },
    {
      id: 2,
      src: milk,
      src2: milk2,
      alt: "milk",
      title: "Pure Milk",
    },
    {
      id: 3,
      src: nature,
      src2: nature2,
      alt: "nature",
      title: "Nature's Blessing",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 md:px-10 py-10 mb-18">
      {contentData.map((item) => (
        <div
          key={item.id}
          className="relative group w-full max-w-[320px] mx-auto"
        >
          {/* Image */}
          <Image
            src={item.src}
            alt={item.alt}
            height={260}
            width={310}
            className="w-full object-cover cursor-pointer rounded-xl shadow-lg"
          />

          {/* Hover Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-transition-all duration-200 hover:opacity-100 transition-opacity duration-300 rounded-xl shadow-lg">
            <Image src={item.src2} alt={item.alt} height={260} width={310} />
          </div>
        </div>
      ))}
    </div>
  );
}

