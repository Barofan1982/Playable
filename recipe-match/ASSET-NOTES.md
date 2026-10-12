# 资源说明

- 源参考：Playable.zip中Merge Cooking原试玩，inspection编号6。环境、NPC、手势、特效以及玩法引擎来自该授权迁移参考。
- Juicy Journey Logo来自合集corn目录的现有Logo，替换原独立Logo及对应动画图集区域。没有在旧Logo上加页面覆盖层。
- 可匹配的食材和料理选自本地棋子目录；缺少的精确原料与成品由本轮imagegen按JJ材质补绘。原料、成品与配方对应，不使用整盘菜充当原料。
- 保留原纹理尺寸、SpriteFrame UV、Spine骨架和动画时间；新图按比例contain放入原区域，透明留白，不拉伸。
- 订单小票对应缩略图与英文提示随同替换；本地选图及每个替换区域可查source/resource-map.json。
- 原BGM原生文件UUID排除于内嵌资源。短玩家触发音效保留；原序列化依赖通过短静音数据占位兼容，原音乐播放被禁用。
- 原广告SDK入口、追踪和商店跳转移除或改为无操作，资源包不使用外链。成功终点接到本地结果与Retry。
