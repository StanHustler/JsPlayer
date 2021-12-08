/**
 * @description 推荐列表生成器
 * @param data jsonData
 */
export function recommendRender(data) {
    //获得推荐歌单盒子
    const recommendWrapper = document.querySelector('.recommend-playlist-container');
    let template = '';
    let length = data.length;
    data.forEach((item, index) => {
        // 此处相较于 home.html 中有添加一个 a 标签包裹图片和文字，目的是用来完成页面跳转，达到单页面应用的目的
        template += `
            <li data-index=${index} class="recommend-playlist-item d-flex flex-column }" style="width:${98 / length}%">
                <div class="recommend-playlist-cover">
                    <a href='#/recommendList/:${item.creativeId}'>
                        <img src="${item.uiElement.image.imageUrl}"
                            alt="">
                        <svg class="recommend-playlist-icon icon" aria-hidden="true">
                            <use xlink:href="#icon-zanting"></use>
                        </svg>
                    </a>
                </div>
                <div class="recommend-playlist-title multi-text-omitted">
                    ${item.uiElement.mainTitle.title}
                </div>
            </li>
            `
    });
    recommendWrapper.innerHTML = template;
}

/**
 * @description 初始化推荐列表事件
 */
export function initRecommendEvent() { //动态增加 hover 类
    const recommendWrapper = document.querySelector('.recommend-playlist-container');
    // TODO: Standardize
    recommendWrapper.addEventListener('mouseenter', (e) => {
        if (e.target.tagName === "LI") {
            e.target.setAttribute('class', 'recommend-playlist-item d-flex flex-column hover')
        }
    }, true)
    recommendWrapper.addEventListener('mouseleave', (e) => {
        if (e.target.tagName === "LI") {
            e.target.setAttribute('class', 'recommend-playlist-item d-flex flex-column ')
        }
    }, true)
}