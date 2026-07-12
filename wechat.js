/*
 * 微信读书 VIP 解锁
 * 平台: QuantumultX (圈叉)
 */

const SCRIPT_NAME = '微信读书VIP';

let body = $response.body;

try {
    let obj = JSON.parse(body);

    if (obj && obj.readConfig !== undefined || obj && obj.vip !== undefined) {
        if (obj.vip !== undefined) obj.vip = 1;
        if (obj.vip_expire !== undefined) obj.vip_expire = 4070880000;
        if (obj.vipType !== undefined) obj.vipType = 1;
        if (obj.isVip !== undefined) obj.isVip = true;

        if (obj.readConfig !== undefined) {
            if (obj.readConfig.bookrack !== undefined) {
                obj.readConfig.bookrack.open = true;
            }
            if (obj.readConfig.endReadTime !== undefined) {
                obj.readConfig.endReadTime = 4070880000;
            }
        }

        if (obj.payType !== undefined) obj.payType = "VIP";
        if (obj.expiredTime !== undefined) obj.expiredTime = 4070880000;
        if (obj.expireTime !== undefined) obj.expireTime = 4070880000;
        if (obj.member !== undefined) obj.member = 1;
        if (obj.isMember !== undefined) obj.isMember = true;
        if (obj.subscribe !== undefined) obj.subscribe = true;
        if (obj.subscribed !== undefined) obj.subscribed = true;

        if (obj.bookstore !== undefined) {
            if (obj.bookstore.isPay !== undefined) obj.bookstore.isPay = 1;
        }
    }

    if (obj && obj.book !== undefined) {
        if (obj.book.payType !== undefined) obj.book.payType = 0;
        if (obj.book.price !== undefined) obj.book.price = 0;
        if (obj.book.isPurchased !== undefined) obj.book.isPurchased = true;
        if (obj.book.earlyEnd !== undefined) obj.book.earlyEnd = false;
    }

    if (obj && obj.chapter !== undefined) {
        if (obj.chapter.payType !== undefined) obj.chapter.payType = 0;
        if (obj.chapter.isPay !== undefined) obj.chapter.isPay = 0;
        if (obj.chapter.price !== undefined) obj.chapter.price = 0;
        if (obj.chapter.isPurchased !== undefined) obj.chapter.isPurchased = true;
        if (obj.chapter.canRead !== undefined) obj.chapter.canRead = true;
    }

    if (obj && obj.data !== undefined && typeof obj.data === 'object' && obj.data !== null) {
        if (obj.data.vip !== undefined) obj.data.vip = 1;
        if (obj.data.isVip !== undefined) obj.data.isVip = true;
        if (obj.data.expiredTime !== undefined) obj.data.expiredTime = 4070880000;
        if (obj.data.expireTime !== undefined) obj.data.expireTime = 4070880000;
        if (obj.data.payType !== undefined) obj.data.payType = 0;
        if (obj.data.isPurchased !== undefined) obj.data.isPurchased = true;
    }

    $done({ body: JSON.stringify(obj) });

} catch (e) {
    console.log(`${SCRIPT_NAME} 解析失败: ${e}`);
    $done({});
}