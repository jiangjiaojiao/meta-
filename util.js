let util = {

};
util.title = function (title) {
    title = title ? title + ' - Home' : '品牌商品互相分享系统';
    window.document.title = title;
};

export default util;