import HTMLFlipBook from "react-pageflip";
import cover from "../../assets/scrapbook/Cover.png";
import page1 from "../../assets/scrapbook/P1.png";
import page2 from "../../assets/scrapbook/P2.png";
import page3 from "../../assets/scrapbook/P3.png";
import page4 from "../../assets/scrapbook/p4.png";
import page5 from "../../assets/scrapbook/P5.png";
import page6 from "../../assets/scrapbook/P6.png";
import page7 from "../../assets/scrapbook/P7.png";
import page8 from "../../assets/scrapbook/P8.png";
function Book({onFinish}) {
  const pages=[
    cover,
    page1,
    page2,
    page3,
    page4,
    page5,
    page6,
    page7,
    page8,
    cover
    ];
  return (
    
   
    <HTMLFlipBook width={500}
    height={700}
    showCover={true}
    mobileScrollSupport={true}
    maxShadowOpacity={0.5}
    onFlip={(e) => {

      if (e.data === pages.length - 1) {
    
          setTimeout(() => {
    
              onFinish();
    
          }, 1200);
    
      }
    
    }}>
      {pages.map((img, index) => (
  <div
    key={index}
    style={{
      width: "100%",
      height: "100%",
      background: "#fff",
    }}
  >
    <img
      src={img}
      alt={`Page ${index}`}
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  </div>
))}
    </HTMLFlipBook>
  );
}

export default Book;