import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "https://images.indianexpress.com/2022/05/don-siva.jpg" },
  { url: "https://images2.alphacoders.com/128/1289990.jpg" },
  {
    url: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202210/AdipurushPrabhas_1.jpeg?VersionId=UpQNLRibdZmQagVQbGtkV8lU7dSyF72C",
  },
  {
    url: "https://occ-0-38-300.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABT2trO2KBYdznWGKx72pjIgY8a90AJmH-84Q3jAWM2L78rESFEQpAT1RuPExovp0C-5ZNB1Rv9Nge_mWf0vka5XZKFeXURnbyo4f.jpg?r=3d8",
  },
  {
    url: "https://e1.pxfuel.com/desktop-wallpaper/309/661/desktop-wallpaper-john-wick-chapter-4-john-wick-chapter-4-poster.jpg",
  },
];

const ImageSlider = () => {
  return (
    <div>
      <SimpleImageSlider
        width={1000}
        height={504}
        images={images}
        showBullets={true}
        autoPlay={true}
        autoPlayDelay={3.0}
        showNavs={true}
        style={{
          padding: "10px 100px 0 150px",
        }}
      />
    </div>
  );
};

export default ImageSlider;
