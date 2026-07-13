/**
 * 帆书 6.35.0 VIP 解锁脚本 (Quantumult X)
 * 拦截 myPage 接口，Base64 解码后修改会员状态
 * 适用: 帆书 iOS v6.35.0
 */

var body = $response.body;

// 解码 Base64 响应
var decoded = atob(body);
var obj = JSON.parse(decoded);

// 修改会员字段
if (obj.data && obj.data.userInfo && obj.data.userInfo.userSuperVipInfo) {
    obj.data.userInfo.userSuperVipInfo.isSuperVip = true;
    obj.data.userInfo.userSuperVipInfo.isWearing = true;
}

// 重新编码并返回
var modified = JSON.stringify(obj);
var encoded = btoa(modified);
$done({ body: encoded });
