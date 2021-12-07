const BASE_URL = 'http://localhost:3000';
/**
 * @constructor
 * @param method {string} 默认为'get'请求
 * @param url {string} urls
 * @param data
 * @returns {Promise<unknown>}
 */
export default function Ajax(
    { //请求参数配置
        method = "GET",
        url,
        data = {}
    }
) {
    return new Promise(resolve => { // 返回异步请求
        const xhr = new XMLHttpRequest();
        xhr.open(method, BASE_URL + url)
        xhr.onload = function () {
            // 将数据转换为 JavaScript 对象
            resolve(JSON.parse(xhr.response))
        }
        xhr.onerror = function () {
            console.log(xhr)
            // if (xhr.status == 0) {
            //
            // }
        }
        xhr.send(JSON.stringify(data));
    })
}

/**
 * @description: 获得轮播图信息
 * @return {*}
 */
export async function getBannerList() {
    const result = Ajax({
        url: `/homepage/block/page`
    })
    return result;
}

/**
 * @description: 获得推荐歌单列表
 * @param {*} musicId
 * @return {*}
 */
export async function getRecommendList(musicId) {
    const result = Ajax({
        url: `/playlist/detail?id=${musicId}`
    })
    return result;
}

/**
 * @description: 获得音乐的播放地址
 * @param {*} musicId
 * @return {*}
 */
export async function getAudioSrc(musicId) {
    let result = `https://music.163.com/song/media/outer/url?id=${musicId}`;
    // try {
    //     result = Ajax({
    //         url: `/music/url?id=${musicId}`
    //     })
    // } catch (error) {
    //     result = `https://music.163.com/song/media/outer/url?id=${musicId}`
    // }
    return result;
}

/**
 * @description: 获得歌曲信息
 * @param {*} musicId
 * @return {*}
 */
export async function getAudioInfo(musicId) {
    const result = Ajax({
        url: `/song/detail?ids=${musicId}`
    });
    return result;
}

/**
 * @description: 获得歌曲歌词
 * @param {*} musicId
 * @return {*}
 */
export async function getAudioLyric(musicId) {
    const result = Ajax({
        url: `/lyric?id=${musicId}`
    })
    return result;
}
