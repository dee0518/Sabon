# Sabon

https://dee0518.github.io/Sabon/

<br>

## 소개

웹 퍼블리셔로 준비했던 반응형 웹 포트폴리오. <br>
프리미엄 바디케어 브랜드 sabon 웹 페이지를 직접 시안을 만들어 작업했습니다. <br>
모바일 퍼스트로 코드를 작성했으며 분기는 모바일, 768, 1024, 1280으로 나누어 작업했습니다. <br>
퍼블리셔 때 코드인 만큼 마크업관련 html, css로 구현되어있으면 기능들을 작동하지 않습니다.

<br>

## 반응형 CSS 코드

모바일 퍼스트로 진행했으며 주석으로 어떤 section인지 표기하는 컨벤션으로 코드 작성.

```css
/* .navWrap */
.navWrap {
    position: fixed; left: 0; top: 0; z-index: 2;
    width: 100%; height: 80px;
}
header.on .navWrap {
    height: 75px; border-bottom: 1px solid #c6a456;
    background: #fff;
}

/* gte 768 */
@media screen and (min-width:768px) {
    /* header */

    /* .navWrap */
    .navWrap {
        height: 85px;
    }
}


/* gte 1024 */
@media screen and (min-width:1024px) {
    /* reset */
    .mobile {display: none;}
    .pc {display: block;}

    /* header */

    /* .navWrap */
    .navWrap:before, .navWrap:after {
        width: 40.527%;
    }
    .navWrap .pc {
        display: none;
    }
}

/* gte 1280 */
@media screen and (min-width:1280px) {
    /* header */

    /* .navWrap */
    header.on .navWrap {
        height: 85px; border-bottom: 2px solid #c6a456;
    }
    .navWrap:before, .navWrap:after {
        width: 43.359%; height: 2px;
    }
}
```
