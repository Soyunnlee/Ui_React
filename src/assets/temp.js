// js 파일 하나로 관리할 수 있다.

import frontend_img01 from "../assets/images/frontend_img01.png";
import frontend_img02 from "../assets/images/frontend_img02.png";
import frontend_img03 from "../assets/images/frontend_img03.png";
import frontend_img04 from "../assets/images/frontend_img04.png";

// mac 이미지
import zara from "../assets/images/zara.png";
import olive from "../assets/images/olive.png";
import lush from "../assets/images/lush.png";
import chanel from "../assets/images/chanel.png";
import vouge from "../assets/images/vouge.png";
import sulbing from "../assets/images/sulbing.png";
import bera from "../assets/images/bera.png";
import miyoung from "../assets/images/miyoung.png";
import sita from "../assets/images/sita.png";

// Exprience Text
export const About = [
  {
    id: 0,
    label: "TAB Front-engineer",
    date: `2021.03 - 2022.10`,
    description:
    "프론트엔드 개발을 맡으며 렌딩페이지, 가이드페이지 디자인과 퍼블리싱 사이트 개발을 맡아 진행했습니다.",
  },
  {
    id: 1,
    label: "Holiair Ceo",
    date: `2019.03 - 2020.08`,
    description:
    "여성의류 쇼핑몰을 운영했습니다.",
  },
  {
    id: 2,
    label: "The Loel MD",
    date: `2016.08 - 2019.08`,
    description:
    "화장품 온라인쇼핑몰 , 애완용품 브랜드 사이트를 관리했습니다.",
  },
  {
    id: 3,
    label: "Sess Employee",
    date: `2019.09 - 2021.04`,
    description:
    "자동화설비 및 전기자동제어 제조업체 사무직을 다니며 ERP 재고관리와 부품 도면 개발직으로 근무했습니다.",
  },
];

// 서비스 반영사례
export const Service = [
  {
    id: 0,
    label: "서비스 반영사례 1",
  },
  {
    id: 1,
    label: "서비스 반영사례 2",
  },
];

export const ServiceContent = [
  {
    id: 0,
    title: "서비스 반영사례 1",
    description:
      "비상장주식 거래 플렛폼 서비스를 개발하면서 주문 입력폼 키패드에서의 기능이 밴치마킹을 하던 코인앱처럼 복잡하지 않아도 될 것 같단 생각을 했고 , 기능의 간결함이 소비자들에게 더 편리함과 간편함을 제공할 수 있을것 같단 의견이 반영되었습니다. 추가로 기능의 간결화 함에 있어 호가창에서의 매수 매도 입력시 따로 떠야 했던 입력폼을 거래소 주문폼과 연결시키면 개발의 공수도 줄고 앱을 사용하는 유저들에게도 거래하는 과정에 있어 익숙함을 줄 수 있을것 같다는 의견도 반영되어 인터페이스 또한 직관적으로 바뀔수 있게 된 사례가 있었습니다.",
  },
  {
    id: 1,
    title: "서비스 반영사례 2",
    description:
      "‘펫키즈’ 라는 애완용품 브랜드 사이트를 개발하면서 반려동물을 목적으로 하는 서비스의 특성상 고객들간의 커뮤니티 게시판(자유게시판)을 도입하여 커뮤니티 장소를 마련하고, 리뷰와 자유게시판을 연동하여 리뷰 이벤트를 진행하면 반려동물 보호자들의 사이트 참여도가 높아짐으로서 리뷰수와 회원 유치에 도움이 될 것 이라는 의견이 반영되었던 사례가 있었습니다. ",
  },
];

// Stack TabPanel

export const FrontEnd = [
  {
    id: 0,
    img: frontend_img01,
    content: "html 마크업 작성할떄 시멘틱한 마크업 작성을 지향합니다.",
  },
  {
    id: 1,
    img: frontend_img02,
    content: "자바스크립트 기초적인 문법을 다 알고있습니다.",
  },
  {
    id: 2,
    img: frontend_img03,
    content: "리액트의 동작원리 hook 의 개념을 모두 이해하고 사용합니다",
  },
  {
    id: 3,
    img: frontend_img04,
    content: "axios를 이용하여 서버 개발자와 협의하여 REST API 통신을 합니다.",
  },
];

export const WebSite = [
  {
    id: 0,
    title: "SITA",
    content:
      "제작기간 : 2일 \n사용기술 : html, css, javascript \nDesign:100% | publising:100%",
    imgSrc: sita,
    url: "http://project1.ivyro.net/",
  },
  {
    id: 1,
    title: "BEAUTY ACADEMY",
    content:
      "제작기간 : 2일 \n사용기술 : html, css, javascript \nDesign:100% | publising:100%",
    imgSrc: miyoung,
    url: "http://kwons41632.ivyro.net/",
  },
  {
    id: 2,
    title: "LUSH",
    content:
      "제작기간 : 1.5일 , 이벤트홈페이지 \n사용기술 : html, css, javascript \nDesign:100% | publising:100%",
    imgSrc: lush,
    url: "https://soxxy95.ivyro.net/lush.ex5/lush.html",
  },
  {
    id: 3,
    title: "OLIVE YOUNG",
    content:
      "제작기간 : 1.5일 , 이벤트홈페이지 \n사용기술 : html, css, javascript \nDesign:100% | publising:100%",
    imgSrc: olive,
    url: "https://soxxy95.ivyro.net/oliveyoung.ex4/newoliveyoung.html",
  },
  {
    id: 4,
    title: "ZRAR",
    content:
      "제작기간 : 1일 , 이벤트홈페이지 \n사용기술 : html, css, javascript \nDesign:100% | publising:100%",
    imgSrc: zara,
    url: "https://soxxy95.ivyro.net/zara.ex9/zara.html",
  },
  {
    id: 5,
    title: "CHANEL",
    content:
      "제작기간 : 2일 , 이벤트홈페이지 \n사용기술 : html, css, javascript \nDesign:100% | publising:100%",
    imgSrc: chanel,
    url: "https://soxxy95.ivyro.net/canel.ex2/chanel.html",
  },
  {
    id: 6,
    title: "VOUGE",
    content:
      "제작기간 : 1일 , 이벤트홈페이지 \n사용기술 : html, css, javascript \nDesign:100% | publising:100%",
    imgSrc: vouge,
    url: "https://soxxy95.ivyro.net/vogue.ex3/vogue.html",
  },
  {
    id: 7,
    title: "SULBING",
    content:
      "제작기간 : 1일 , 이벤트홈페이지 \n사용기술 : html, css, javascript \nDesign:100% | publising:100%",
    imgSrc: sulbing,
    url: "https://soxxy95.ivyro.net/vogue.ex3/vogue.html",
  },
];
