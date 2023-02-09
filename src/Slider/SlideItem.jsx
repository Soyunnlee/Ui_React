// 3. 

export function SlideItem(props) {
    // 부모에게서 받아온 Website.js 파일 명시
    const { title, content, url, imgSrc } = props.Website;
  
    return (
      <div class="ItmWrap">
        <div>    
        {/* {WebSite[1].title} */}
  
          {/* Img */}
          <a
            onClick={() => {
              console.log(url);
              window.open(url, "_blank");
            }}
            data-mdb-ripple="true" // tailwind 속성
            data-mdb-ripple-color="light" // tailwind 속성
          > 
          <img src={imgSrc} />
          </a>
  
            {/* Text Content */}
          <div class="ItmTextBox">
            <h5 class="ItmTitle">{title}</h5>
            <p class="ItmContent">{content}</p>
            <button
              type="button"
              class="ItmBtn bg-black"
              onClick={() => {
                console.log(url);
                window.open(url, "_blank");
              }}
            >
              사이트 바로가기
            </button>
          </div>
  
        </div>
      </div>
    );
  }
  