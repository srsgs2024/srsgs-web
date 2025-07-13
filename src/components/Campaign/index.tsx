import React from 'react'
import Image from 'next/image';
import gay1 from "../../../public/Campaign/cow.jpeg";
import gay2 from "../../../public/Campaign/Campaign2.svg";
import gay3 from "../../../public/Campaign/Campaign3.svg";
import gay4 from "../../../public/Campaign/Campaign4.svg";
import gay5 from "../../../public/Campaign/Campaign5svg.svg";
import gay6 from "../../../public/Campaign/Campaign6.svg";
import gay7 from "../../../public/Campaign/Campaign7svg.svg";

export default function Campaign() {
    const contentData = {
        images: [
          { 
            
            src: gay1, 
            alt: "Image 1", 
           
          
          },
          { 

            src: gay2, 
            alt: "Image 2", 
            
            
          },
          { 
           
            src: gay3, 
            alt: "Image 3", 
        
          },
          { 

            src: gay4, 
            alt: "Image 4", 
         
            
          },
          { 

            src: gay5, 
            alt: "Image 5", 
     
          },
          { 

            src: gay6, 
            alt: "Image 6", 
          
          },
          { 

            src: gay7, 
            alt: "Image 7", 
           
          },
        ]
        
      };
  return (
    <div>
         
         <div className="flex flex-col justify-center items-center text-center gap-6 mt-6 px-4 md:px-10">
              <h1 className="text-[#ff814e] font-semibold text-2xl font-serif font-bold tracking-wide tracking-wide font-serif font-bold tracking-wide md:text-[38px] md:leading-[48px]">
                अभियान और कार्यक्रम: जागरूकता और करुणा को साथ में बढ़ाना
              </h1>
              <div className="flex flex-col gap-4 text-[#1E1E1EBF] font-[500] text-sm font-medium md:text-[28px] leading-[22px] md:leading-[28.8px] max-w-2xl">
                <p>
                  हमारे अभियान और कार्यक्रमों का उद्देश्य समाज में जागरूकता फैलाना और
                  गौमाता के प्रति करुणा और सम्मान को बढ़ावा देना है।
                </p>
                <p>
                  हमारे आयोजन न केवल पर्यावरण और समाज के प्रति जिम्मेदारी निभाने के लिए
                  प्रेरित करते हैं, बल्कि हमें एकजुट होने और मिलकर काम करने का अवसर भी
                  प्रदान करते हैं।
                </p>
              </div>  
          </div>

          <div className="py-14">
         
                             <div className="w-full gap-2 flex overflow-hidden" >
                             <div className="flex gap-2 scroll-content"> 
                                 {[...contentData.images,...contentData.images].map((image, index) => (
                                     <div
                                     key={index}
                                     className="image-container relative group cursor-pointer"
                                     style={{ minWidth: "280px", maxHeight: "280px" }}
                                     >
                                     <Image
                                         src={image.src}
                                         alt={image.alt}
                                         width={280}
                                         height={280}
                                         className="w-full h-full object-cover"
                                     />
                                    
         
                                     </div>
                                 ))}
                                 </div>
         
         
                             
                             
         
                             </div>
         
           </div>
    </div>
  )
}

