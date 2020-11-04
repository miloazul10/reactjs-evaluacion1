import React from "react";

import VideoThumbnail from "./VideoThumbnail";

export function ThumbContainer() {
  let video1 = {
    title:
      "Nintendo Switch Emulator Adds Online Network then Removes",
    user: "Modern Vintage Gamer",
    views: "731,505 vistas ° hace 4 semanas",
    imgUrl:
      "https://i.ytimg.com/vi/qcwPIUBMB9U/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBprbyUfDjFea2UIxWCquZ-WWN6lA"
  };

  let video2 = {
    title:
      "LA ENTREVISTA MÁS NAUSEABUNDA A PHIL SPENCER SOBRE LA SERIES X, LA VANGUARDIA EN ESPAÑA! - Sasel",
    user: "Saselandia",
    views: "741,481 vistas °1 nov. 2020",
    imgUrl:
      "https://i.ytimg.com/vi/wV6gOySp4Mg/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLA4NTFNcqJzVSh1skxWXw20o0cEoQ"
  };

  let video3 = {
    title:
      "CABVIEW: Live chat and Stream from the Bergen Line in Norway",
    user: "RailCowGirl",
    views: "5,212,343 vistas °1 nov. 2020",
    imgUrl:
      "https://i.ytimg.com/vi/ZHgXfhiDIIM/hq720_live.jpg?sqp=CJSBiP0F-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCnYmw6-Ge7iZ8R2yw5YRF3MRdRVQ"
  };

  let video4 = {
    title:
      "The Fastest Gaming PC in the World! ...For now",
    user: "Linus Tech Tips",
    views: "417,395 vistas °1 nov. 2020",
    imgUrl:
      "https://i.ytimg.com/vi/BHd7w2q74xI/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDGK71y7r38Xq16F5-kWie3Gd9Spg"
  };

  let video5 = {
    title:
      "I remixed every Nintendo startup sound",
    user: "Leslie wai",
    views: "249,541 vistas °1 nov. 2020",
    imgUrl:
      "https://i.ytimg.com/vi/y8swBAcW0EA/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBysldim9lHm71f7gUhnE7iVx6-wg"
  };

  let video6 = {
    title:
      "Watch Dogs Legion | PS4 - ONE - PS4 Pro - ONE X | Comparativa gráfica & FPS",
    user: "ElAnalistaDeBits",
    views: "367,542 vistas °1 nov. 2020",
    imgUrl:
      "https://i.ytimg.com/vi/QUmCgmLlJUQ/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBIb7l-cTIUJrBtCSRJUepcu1BQcw"
  };

  let video7 = {
    title:
      "¿Es DETROIT una muestra del FRACASO del SUEÑO AMERICANO? - VisualPolitik",
    user: "VisualPolitik",
    views: "321,587 vistas °1 nov. 2020",
    imgUrl:
      "https://i.ytimg.com/vi/bR1u_YEzflA/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLACeqRRVFCaqvozGaAVqrqzMmYhFw"
  };

  let video8 = {
    title:
      "$25 vs. $300 Monitor Arm - What Stands Do I Recommend?",
    user: "David Zhang",
    views: "295,000 vistas °1 nov. 2020",
    imgUrl:
      "https://i.ytimg.com/vi/__K4V8pFhf4/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLD0AEaAuxz5ZuIsLzwoOqE3PqtMrQ"
  };

  return (
    <div className="thumb-container">
      <VideoThumbnail
        imgUrl={video1.imgUrl}
        title={video1.title}
        user={video1.user}
        views={video1.views}
      />
      <VideoThumbnail
        imgUrl={video2.imgUrl}
        title={video2.title}
        user={video2.user}
        views={video2.views}
      />
      <VideoThumbnail
        imgUrl={video3.imgUrl}
        title={video3.title}
        user={video3.user}
        views={video3.views}
      />
      <VideoThumbnail
        imgUrl={video4.imgUrl}
        title={video4.title}
        user={video4.user}
        views={video4.views}
      />
      <VideoThumbnail
        imgUrl={video5.imgUrl}
        title={video5.title}
        user={video5.user}
        views={video5.views}
      />
      <VideoThumbnail
        imgUrl={video6.imgUrl}
        title={video6.title}
        user={video6.user}
        views={video6.views}
      />
      <VideoThumbnail
        imgUrl={video7.imgUrl}
        title={video7.title}
        user={video7.user}
        views={video7.views}
      />
      <VideoThumbnail
        imgUrl={video8.imgUrl}
        title={video8.title}
        user={video8.user}
        views={video8.views}
      />
    </div>
  );
}
