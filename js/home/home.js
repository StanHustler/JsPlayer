`document.querySelector('#app').innerHTML = '111';`

/**
 * home template
 * @type {string}
 */
const homePageTemplate = `
<div class="w">
    <div class="carousel-wrapper">
        <div class="carousel-container ">
            <!-- 切换箭头 -->
            <!-- 轮播图图片需要动态生成 -->
        </div>
        <!-- 指示器 -->
        <ul class="carousel-indicators d-flex">

        </ul>
    </div>
    <div class="recommend-playlist">
        <h3 class="recommend-playlist-header">推荐歌单<svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-arrow-right"></use>
            </svg>
        </h3>
        <ul class="recommend-playlist-container d-flex justify-content-between align-items-start">
            <!-- 推荐歌单需要动态生成 -->
        </ul>
    </div>
</div>
`;

import {getBannerList} from '../service/ajax.js';
import {carouselRender, initCarouselEvent} from "./carousel.js";
import {recommendRender, initRecommendEvent} from "./recommend.js"


export async function homePage() {
    //首页初始化
    document.querySelector('#app').innerHTML = homePageTemplate;
    const result = await getBannerList()
    const carouselData = result.data.blocks[0].extInfo.banners;
    //首次渲染轮播图
    carouselRender(carouselData);
    //轮播图事件绑定
    initCarouselEvent();

    const recommendData = result.data.blocks[1].creatives;
    // 初始化歌单推荐列表
    recommendRender(recommendData);
    // 初始化页面事件
    initRecommendEvent()
}