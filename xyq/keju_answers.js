const answerList = [
	["游戏内一共有几个频道", "7个"],
	["平定安邦任务在哪里领取？", "挂机界面"],
	["以下哪个主角使用剑作为武器？", "剑侠客"],
	["打造装备需要什么道具？", "百炼精铁"],
	["抓鬼任务需在长安找到何人？", "钟馗"],
	["梦幻西游手游中没有下列哪个种族？", "兽"],
	["下列哪种宝石可以增加法术防御？", "翡翠石"],
	["下列选项中不属于狮驼岭门派技能的是？", "降龙十八掌"],
	["下列选项中不属于阴曹地府门派技能的是？", "鬼影重重拳"],
	["瑶池中没有什么怪物？", "鲛将军"],
	["包括队长在内，每支队伍最多有几名队员？", "5名"],
	["下列哪种宝石可以增加物理防御？", "月亮石"],
	["海底迷宫中没有什么怪物？", "蛟龙"],
	["下面哪种不是梦幻西游手游里的宝石？", "孔雀石"],
	["下列哪种宝石可以增加气血？", "光芒石"],
	["多少块宝石可以合成一块更高级的宝石", "2"],
	["多少级可以参加抓鬼任务？", "20级"],
	["下列哪种宝石可以增加封印命中？", "红纹石"],
	["以下哪个主角使用法杖作为武器？", "巫蛮儿"],
	["下列哪个门派擅长治疗法术？", "普陀山"],
	["下列哪个门派擅长物理输出？", "大唐官府"],
	["多少级可以参加科举大赛?", "30级"],
	["下列选项中不属于方寸山门派技能的是?", "翩鸿一击"],
	["每个玩家每天可以完成多少个双倍师门任务?", "20个"],
	["不为五斗米折腰的古代人物是", "陶渊明"],
	["金屋藏娇说的是哪一位皇帝", "刘彻"],
	["洛阳纸贵指的作品是下面哪一部？", "左思的《三都赋》"],
	["清明寒食是吴王为了纪念哪一个大臣设的规矩", "介子推"],
	["四羊方尊是哪个朝代的文物", "商"],
	["下列哪个门派擅长封印法术？", "方寸山"],
	["多少级可以参加三界奇缘?", "30级"],
	["王侯将相，宁有种乎这句话出自谁之口", "陈胜、吴广"],
	["智者乐水后一句是:", "仁者乐山"],
	["北宋的两个著名词人晏殊和晏几道是什么关系", "父子"],
	["北魏末年贾思勰编写的《齐民要术》所总结的是", "农业生产技术"],
	["被称为万园之园后被烧毁的建筑是", "圆明园"],
	["称为两榜出身的是", "进士"],
	["成语鸡鸣狗盗与战国四君子哪位有所关联", "孟尝君"],
	["传说中文字是谁发明的", "仓颉"],
	["春秋战国时期的诸子百家不包括", "佛家"],
	["东汉时期的黄巾起义领导者是", "张角"],
	["古代六艺礼、乐、射、御、书、数中的御是指", "驾御车马"],
	["古代许多诗句中都有折柳二字，这是什么情况下的习俗", "送别"],
	["古琴的音色有泛音、散音和", "按音"],
	["古有 三省六部制 ，下列哪个不是三省之一？", "政事省"],
	["康熙和乾隆所题名的七十二景位于哪里", "避暑山庄"],
	["嫘祖为我们所熟知，是因为她", "养蚕制衣"],
	["历史上著名的《胡蓝之狱》发生在哪个朝代", "明"],
	["廉颇与蔺相如", "王翦与王贲"],
	["清朝入关后的第一位皇帝是", "顺治"],
	["清代曹雪芹所著的小说《红楼梦》最初时命名为", "《石头记》"],
	["世界上发现的最大的青铜器是", "司母戊鼎"],
	["世界上最早记载《哈雷彗星》的书是", "《春秋》"],
	["是哪位君主采纳 废黜百家，独尊儒术 的建议", "汉武帝"],
	["手绢是由古代的什么演化而来？", "头巾"],
	["司母戊鼎是为了什么而建造的？", "儿子祭祀母亲"],
	["宋代大型酒店、食店在门前用木枋扎彩楼，加种种装饰，施朱绿彩画，称为", "欢门"],
	["太平天国起义的核心领导人中，冯云山被封为", "南王"],
	["唐代长安城大街上种植的树是", "槐树"],
	["唐太宗精擅书法，经常以什么字体写碑", "行书"],
	["唐太宗李世民在位时年号叫什么", "贞观"],
	["西周时期出现的十五国风是指", "十五种地方民歌"],
	["孝文帝拓拔宏属于以下哪个民族", "鲜卑族"],
	["以下不是中国四大发明的是", "中药"],
	["以下谁不是《玄武门》之变的参与者", "李元霸"],
	["在 淝水之战 中的大败的君主是", "苻坚"],
	["指南针为什么不叫指北针", "面南为尊"],
	["中国古代历法名著《授时历》的作者是", "郭守敬"],
	["中国哪位皇帝采取了焚书坑儒的政策", "秦始皇"],
	["著名的棉纺织革新家黄道婆是哪个朝代的人", "元朝"],
	["著名历史事件 玄武门之变 中，最终的赢家是谁？", "李世民"],
	["著有《徐霞客游记》的徐霞客是哪个朝代的人", "明朝"],
	["祖冲之第一个把圆周率准确推算到小数点后第几位？", "第七位"],
	["最早提出地理名称的书是", "《周易》"],
	["将相和讲的是廉颇和蔺相如的故事，他们是战国时期的哪国人", "赵国"],
	["农田水利法是历史上哪次变法中提出的兴农措施", "王安石变法"],
	["元曲四大家除了关汉卿、白朴、马致远外还有", "郑光祖"],
	["煮酒论英雄的典故发生在哪个时期", "三国时期"],
	["《资治通鉴》是我国第一部编年体通史，它的作者是", "司马光"],
	["北宋建国时所定的京都（首都）是", "开封"],
	["承德避暑山庄是哪个皇帝开始建造", "康熙"],
	["平遥古城位于", "山西省中部"],
	["清朝推行 摊丁入亩 制度的皇帝是", "雍正"],
	["三国时建造铜雀台的是谁？", "曹操"],
	["三国时期火烧连营一战的对阵双方是", "陆逊VS刘备"],
	["三国时期的名将马超具有下列哪个民族的血统", "羌族"],
	["三国时期马谡曾在街亭一战败给哪位魏国大将", "张郃"],
	["宋太祖赵匡胤通过哪个事件夺取政权建立宋朝", "陈桥兵变"],
	["太平天国起义的核心领导人中，封为西王的是", "萧朝贵"],
	["太平天国起义核心人物之一，被称为北王的是", "韦昌辉"],
	["唐朝灭亡后，中原一带先后出现了五个朝代，史称五代，除后梁、后唐、后晋外还有", "后汉和后周"],
	["提出 心外无物、心外无理 之说的明朝思想家是", "王守仁"],
	["一言九鼎这个典故中涉及的历史人物是", "毛遂"],
	["以下三个皇帝按时间先后顺序排列正确的是", "康熙雍正乾隆"],
	["在肥水之战中，大败的君主错误的是", "曹操"],
	["战国时期，与合纵连横这一外交军事政策关联的人物是", "苏秦与张仪"],
	["我国第一个奴隶制的王朝是什么?", "夏朝"],
	["床前明月光的床是什么意思？", "井栏"],
	["铜权是古代常见的金属器物，后来被俗称为", "秤砣"],
	["传说中的八大山人有几个人", "1个人"],
	["词语芊芊代表着什么颜色", "翠绿色"],
	["词语司空见惯中的司空指的是", "官职"],
	["宫城的正门被称为", "午门"],
	["古代成语爱鹤失众的寓意是", "因小失大"],
	["古代成语白龙鱼服的意思是形容", "微服出行的危险"],
	["按古代兄弟排行的顺序，次子应该称为", "仲"],
	["唐朝古琴有几根弦", "7根"],
	["五禽戏起源于汉代，它属于", "强身健体的功法"],
	["以下不属于五谷的农作物是", "大蒜"],
	["我国最早的表演艺术是", "杂技"],
	["下列哪个是唐朝高等学府", "国子监"],
	["以下不是古代春节习俗的是", "赏月亮"],
	["最古老的绘画形式是", "壁画"],
	["古代军队调兵遣将的信物是", "虎符"],
	["华夏民族在哪里诞生", "黄河流域"],
	["乞巧节指的是农历", "七月初七"],
	["火把节在每年农历的什么时间举行？", "六月二十四日"],
	["孟夏 在古代时令中是指农历几月", "四月"],
	["《道德经》是谁写的？", "老子"],
	["足踝扭伤采取哪种应急措施", "冷水或冰块敷"],
	["太阳是什么星？", "恒星"],
	["急，猜一成语", "争先恐后"],
	["在科举大赛中，法宝“地王令”的作用是?", "去掉一个错误答案"],
	["太平道教是谁创立的", "张角"],
	["“七绝圣手”是谁？", "王昌龄"],
	["初唐四杰是王勃、杨炯、卢照龄和", "骆宾王"],
	["战斗中长按住一个单位有什么用?", "查看单位信息"],
	["“赤壁之战”中谁战败了?", "曹操"],
	["以下谁以忠义著称？", "关羽"],
	["五斗米教是谁创立的", "张道陵"],
	["成语“乌合之众”中的“乌”指的是什么动物", "乌鸦"],
	["十月十日，猜一字", "朝"],
	["诗鬼是谁？", "李贺"],
	["书中有画，画中有诗 的诗人时候谁？", "王维"],
	["无不落木潇潇下，不尽长江滚滚来”中那个字错了？", "潇"],
	["角色多少级可以杀星宿？", "50级"],
	["“一花一世界”的后一句是什么?", "一树一菩提"],
	["鬼将的参战等级是多少级？", "75级"],
	["玄武门之变是谁发起的", "李世民"],
	["活跃度达到多少点，才能申请运镖任务", "50"],
	["天覆阵阵法效果时什么", "全体成员增加伤害2%，减少速度2%"],
	["PK安全区是那几个地方", "皇城、长安城、建邺城"],
	["角色到达多少级以后，正式 开启“助战”功能", "13级"],
	["秘境降妖中在关卡中角色死亡几次后，玩家需要花费仙玉才能继续挑战", "2次"],
	["角色PK中死亡，损失多少装备耐久？", "5%"],
	["角色多少级后，可以重置属性点？", "40"],
	["每月第一次重置角色属性点，需要多少梦幻银币？", "50万"],
	["制作一张临时符，需要消耗多少活力？", "25点"],
	["鬼谷子的作者是谁?", "鬼谷子"],
	["临时符的效果持续几小时？", "2小时"],
	["火把节每年在农历什么时候举行？", "六月二十四日"],
	["铜权是古代常用的金属器物，后来被称为什么？", "秤砣"],
	["传说中的八大山人有几个人？", "1个人"],
	["芊芊代表着什么颜色？", "翠绿色"],
	["华夏民族在哪里诞生？", "黄河流域"],
	["古代带兵调兵遣将的信物是什么？", "虎符"],
	["以下不是古代春节习俗的是？", "赏月亮"],
	["使用回梦丹增加多少双倍点数", "100点"],
	["抓鬼任务每次消耗多少双倍点？", "4点"],
	["离线挂机可以活动经验，离线多少分钟开始计算离线挂机奖励？", "30分钟"],
	["多少侠义值可以兑换一颗3级黑宝石？", "1200"],
	["帮派分红找谁领取？", "白虎堂总管"],
	["下列哪个门派擅长治疗？", "普陀"],
	["七绝圣手是谁", "王昌龄"],
	["哪里的烤鸭比较有名？", "北京"],
	["女儿红是什么酒?", "黄酒"],
	["角色多少级开启修炼界面？", "45级"],
	["李世民的帝号是什么", "唐太宗"],
	["红孩儿被观音菩萨带走后，被称为什么?", "善财童子"],
	["甲骨文出现在哪个朝代？", "商朝"],
	["“桃李满天下”的“桃李“指什么?", "学生"],
	["《三国演义》中，张飞的长子是?", "张苞"],
	["“望闻问切”四诊法是谁发明的?", "扁鹊"],
	["“田忌赛马”故事中，是谁为田忌出的主意?", "孙膑"],
	["孔子提倡的中庸之道的理论基础是什么？", "天人合一"],
	["三国时期“割须弃袍”的是谁?", "曹操"],
	["“西楚霸王”是谁?", "项羽"],
	["“焚书坑儒”是谁干的?", "秦始皇"],
	["“约法三章”讲的是谁的故事?", "刘邦"],
	["战国时期的兵器大多用哪种材料制成", "青铜"],
	["卧薪尝胆讲的是谁的故事?", "勾践"],
	["“霸王别姬”讲的是谁的故事?", "项羽"],
	["梦幻西游手游中有多少个主角人物", "6"],
	["下列哪个门派拥有抗封法术？", "阴曹地府"],
	["第一次进入梦幻西游时所在的地方是?", "门派内"],
	["下面哪种不是梦幻西游手游的宝石", "孔雀石"],
	["以下哪个主角使用长枪作为武器？", "龙太子"],
	["心魔宝珠每天最多可以使用几个", "10个"],
	["以下哪个主角使用爪刺作为武器?", "骨精灵"],
	["以下哪个主角使用弓箭作为武器?", "杀破狼"],
	["春秋战国时期的“三家分晋”，以下哪个国家不是其中之一?", "齐"],
	["以下哪个不是佛家三宝?", "经"],
	["以下哪个不是道家三宝?", "弃道者"],
	["以下哪个不是佛教“四谛”?", "生谛"],
	["以下哪个不是佛教中的“四大天王”之一?", "无闻天王"],
	["以下哪个不是世界三大宗教之一?", "道教"],
	["下列哪个门派擅长法术输出?", "龙宫"],
	["以下哪个主角使用魔棒作为武器?", "玄彩娥"],
	["科举诞生于哪个朝代?", "隋朝"],
	["“商鞅变法”是在哪个国家进行的?", "秦国"],
	["杨继洲是哪个朝代的针灸大师?", "明朝"],
	["下列哪种宝石可以增加物理伤害?", "太阳石"],
	["下列哪种宝石可以增加法术伤害?", "舍利子"],
	["下列哪种宝石可以增加速度?", "黑宝石"],
	["下列哪种宝石可以增加抵抗封印?", "神秘石"],
	["回梦丹是用来干什么的?", "增加双倍点数"],
	["送给异性好友金兰花会增加多少好友度?", "0"],
	["送给同性好友金兰花会增加多少好友度?", "99"],
	["送给异性好友玫瑰花会增加多少好友度?", "99"],
	["送给同性好友玫瑰花会增加多少好友度?", "0"],
	["孙悟空的一个跟斗可以翻多远?", "十万八千里"],
	["“爆竹声中一岁除，春风送暖入屠苏”中的“屠苏”指的是什么?", "酒"],
	["我国的京剧脸谱色彩含义丰富，红色一般表示什么?", "忠勇侠义"],
	["我国的京剧脸谱色彩含义丰富，白色一般表示什么?", "阴险奸诈"],
	["我国的京剧脸谱色彩含义丰富，黑色一版表示什么?", "忠耿正直"],
	["下列不属于《三十六计》的是什么?", "后发制人"],
	["“成吉思汗”中的“汗”是指大王，“成吉思”的意思是什么?", "大海"],
	["下列哪项不是端午节的习俗?", "登高采菊"],
	["以下哪个不是“五福临门”中的一个福?", "聪慧"],
	["当你听到别人说“翻滚吧!牛宝宝!”他实际的意思是什么?", "滚犊子"],
	["哪里的黄酒比较有名?", "绍兴"],
	["通常大家说的“江浙沪包邮”中“江”指的是哪里?", "江苏"],
	["陕西乾陵的“无字碑” ，是哪位皇帝的功德碑?", "武则天"],
	["佛教中高僧经过火化后留下的结晶体，被作为圣物供奉的叫什么?", "舍利子"],
	["龙井茶的产地在哪里?", "浙江"],
	["我们通常所说的“干冰”是那种气体的固态存在方式?", "二氧化碳"],
	["烟草里毒性最大的物质是什么?", "尼古丁"],
	["清朝被称为“扬州八怪”的八个人中以画竹子闻名的是哪一位?", "郑板桥"],
	["小说《封神演义》中，哪位著名的的人物用直的鱼钩钓鱼?", "姜太公"],
	["金庸小说《射雕英雄传》中第一次华山论剑的胜利者是哪一位?", "王重阳"],
	["“铁观音”茶的原产发源地在中国的哪个省份?", "福建"],
	["“救人一命胜造七级浮屠”其中的“浮屠”是什么意思?", "宝塔"],
	["唐僧西行取经，取的是什么?", "大乘佛法"],
	["五行相克中，火克什么?", "金"],
	["五行相克中，水克什么?", "火"],
	["唐僧名什么?", "玄奘"],
	["下列哪位不是道教的四大天师之一?", "萨镇冰"],
	["明朝永乐年间，从西洋归来的郑和船队带回的西方异域兽“麒麟”，是什么动物?", "长颈鹿"],
	["“三更半夜”中的“三更”指的是几点?", "23点至凌晨1点"],
	["风筝最初是用来做什么的?", "通报消息"],
	["天干地支纪年始于汉代，请问这种纪年是以哪一天为起点的?", "立春"],
	["“阳春白雪”和“下里巴人”这两个成语最初指的是什么?", "乐曲"],
	["黄河流经我国的多少个省份?", "9"],
	["老鼠不吃木头但又要咬坏木制品是为了什么?", "磨牙"],
	["世界上第一家七星级酒店“帆船酒店”，是在哪个城市?", "迪拜"],
	["一般被称为“万能献血者”的血型是什么?", "O型"],
	["最早发明二进制的人，最有可能是谁?", "伏羲"],
	["太阳系最亮的星星是哪一颗?", "金星"],
	["月亮是什么星?", "卫星"],
	["对人体来说，最高的安全电压是多少伏?", "36"],
	["一根竹竿有2个头，2跟半竹竿有几个头?", "6"],
	["口算：876+234+124+766+555=?", "2555"],
	["经常被用来辨别方向的北极星是属于哪个星座的?", "小熊星座"],
	["我们通常所说“煤气中毒”是由于煤气中哪种气体吸入过量造成的?", "一氧化碳"],
	["阿姆斯特朗登上月球后，说了“个人的一小步”后一句是什么?", "人类的一大步"],
	["十月十日出售，猜一常用词语?", "卖萌"],
	["正五边形有多少条对角线?", "5"],
	["一个直角三角形，斜边长10，一条直角边长6，请问另一条直角边多长?", "8"],
	["一个直角三角形，两条直角边分别是3和4，请问三角形的斜边多长?", "5"],
	["1,1,2,3,5,8,( ),21,34请问括号中最适合的数字是几?", "13"],
	["1,3,6,( ),15,21请问括号中最适合的数字是几?", "10"],
	["举重比赛，猜一成语?", "斤斤计较"],
	["亚，猜一成语?", "有口难言"],
	["田，猜一成语?", "挖空心思"],
	["七仙女嫁出去一个，猜一成语?", "六神无主"],
	["导游，猜一成语?", "引人入胜"],
	["火，猜一成语?", "灭顶之灾"],
	["武大郎设宴，猜一成语?", "高朋满座"],
	["部位相反，猜一字?", "陪"],
	["池里不见水，地上不见泥，猜一字?", "也"],
	["一口吃掉牛尾巴，猜一字?", "告"],
	["手无寸铁，猜一字?", "控"],
	["我国首位升空的女航天员刘洋所在的机组是?", "神舟九号"],
	["谁第一个将圆周率计算到了小数点后7位?", "祖冲之"],
	["下列哪个数字被6整除，被5除余3，被4除余2?", "18"],
	["《在水一方》的歌词来源于哪里?", "《诗经》"],
	["“但愿人长久，千里共婵娟”中的“婵娟”指什么?", "月亮"],
	["“工欲善其事，必先利其器”是出自哪部名著?", "论语"],
	["“说者无心”后半句是什么?", "听者有意"],
	["“金玉其外，败絮其中”中的“絮”指的是什么?", "棉花"],
	["“壮志饥餐胡虏肉”的下一句是什么?", "笑谈渴饮匈奴血"],
	["在成语“按图索骥”中，“骥”指的是什么?", "马"],
	["“人在江湖，身不由己”这句话出自哪一位武侠作家?", "古龙"],
	["信天游是中国哪个省的民歌风格?", "陕西"],
	["经典台词“向我开炮!”出自中国哪一部老电影?", "英雄儿女"],
	["“醉里挑灯看剑，梦回吹角连营。”是谁写的词?", "辛弃疾"],
	["“菩提本无树，明镜亦非台。本来无一物”后半句是什么?", "何处惹尘埃"],
	["“青青园中葵”下半句是什么?", "朝露待日晞"],
	["“诗中有画，画中有诗”是赞美谁?", "王维"],
	["李白被称为什么?", "诗仙"],
	["“山外青山楼外楼，()歌舞几时休”，缺少的词语是什么?", "西湖"],
	["“朝辞白帝彩()间”，缺少的字的是什么?", "云"],
	["“四海无闲田，农夫犹饿死。”揭露的是?", "腐败的制度"],
	["“月落乌啼霜满天，江枫渔火对愁眠。”这两句词描写的是?", "秋天景色"],
	["“飞流直下三千尺，疑是银河落九天”指的是哪个风景区?", "庐山"],
	["“但使龙城飞将在”其中的“飞将”指的是谁?", "飞将军李广"],
	["“死亦为鬼雄”的前一句是什么?", "生当作人杰"],
	["唐太宗时期以直言敢谏著称，去世后被唐太宗感叹“失去一面镜子”的一代贤臣是?", "魏征"],
	["“人固有一死，或重于泰山，或轻于鸿毛”是哪位史学家说的?", "司马迁"],
	["中国的成语至少由几个汉字组成?", "3"],
	["“应怜屐齿印苍苔，小叩柴扉久不开。”这两句诗中哪个字是错别字?", "叩"],
	["成语“前事不忘”的后半句是?", "后事之师"],
	["“己所不欲”下一句是?", "勿施于人"],
	["“我以我血荐轩辕”是哪位伟大革命家的誓言?", "鲁迅"],
	["刻舟求剑这个故事出自哪部古籍?", "《吕氏春秋》"],
	["“桃花潭水深千尺，不及汪伦送我情”中，“我”是哪位诗人?", "李白"],
	["唐朝的哪位大诗人不畏权贵，让高力士为其脱靴?", "李白"],
	["谁言寸草心，报得三春晖。的作者是谁?", "孟郊"],
	["举杯邀明月，的下一句是什么?", "对影成三人"],
	["孔子为什么“三月不知肉滋味”?", "听到好乐曲"],
	["下面哪个剧种被称为“中国百戏之师”?", "昆曲"],
	["下列哪个成语典故说的是吕不韦的故事?", "一字千金"],
	["“甄姬”是三国时哪位君主的皇后?", "曹丕"],
	["成语“毛遂自荐”中的毛遂是战国四公子中谁的门客?", "平原君"],
	["晋代车胤小时家贫，夏天晚上用什么光源坚持读书?", "萤火虫"],
	["曹雪芹的《红楼梦》中，葬花的人是谁?", "林黛玉"],
	["秦始皇死前所立的太子是谁?", "扶苏"],
	["塑造聂小倩这一人物形象的作家是谁?", "蒲松龄"],
	["西藏布达拉宫最初是松赞干布为了迎接谁而兴建的?", "文成公主"],
	["大唐官府门派是谁创建的?", "程咬金"],
	["谁和泾河龙王打赌，最终导致泾河龙王犯了死罪?", "袁守诚"],
	["“梦中斩龙王”的是谁?", "魏征"],
	["谁推行了“罢黜百家，独尊儒术”?", "汉武帝"],
	["“四面楚歌”讲的是谁被困了?", "项羽"],
	["儒家的代表人物是谁?", "孔子"],
	["墨家的代表人物是谁?", "墨子"],
	["“空城计”是谁的计谋?", "诸葛亮"],
	["《孙子兵法》是谁写的?", "孙武"],
	["“破釜沉舟”讲的是谁的故事?", "项羽"],
	["《论语》是谁写的?", "孔子的弟子"],
	["上古时代，是谁治理大水三过家门而不入?", "大禹"],
	["1级阵法所获得加成的属性，是满级阵法的多少?", "60%"],
	["阵法最高可以升值多少级?", "5"],
	["世界频道发言需要消耗多少活力值?", "50"],
	["抓到野生宠物后，可以交给谁换银币?", "花香香"],
	["金柳露是用来干什么的?", "重置宠物属性"],
	["一个3技能吸血鬼与一个4技能吸血鬼合宠，最多可以拥有多少个技能?", "9"],
	["完成宝图任务，每天最多获得多少张藏宝图?", "10"],
	["在建邺城，是谁和首席弟子一起帮助你战胜了妖风?", "星宿神君"],
	["开双倍捉鬼，每场战斗消耗多少点双倍点数?", "4点"],
	["捉鬼任务需在长安找到何人，通过交谈领取?", "钟馗"],
	["多少级可以参加捉鬼任务?", "20级"],
	["多少个师门任务为1轮?", "10个"],
	["在科举大赛中，法宝“天王令”的作用是?", "系统自动作答"],
	["下列选项中不属于普陀山门派技能的是?", "观音大悲咒"],
	["下列选项中不属于龙宫门派技能的是?", "龙战于野"],
	["下列选项中不属于大唐官府门派技能的是?", "六道轮回"],
	["地狱迷宫中没有什么怪物?", "天兵"],
	["大雁塔中没有什么怪物?", "千年僵尸"],
	["天干纪年法中天干有10个，那么地支有几个？", "12"],
	["“公天下”变成了“家天下”的标志性事件是什么？", "夏启继承王位"],
	["出自《木兰诗》的成语“扑朔迷离”最早形容什么动物？", "兔子"],
	["“人类一思考，上帝就发笑“这句话出自哪位著名的小说家", "米兰·昆德拉"],
	["范仲淹的名篇《岳阳楼记》是写给哪位时任巴陵郡的好友？", "滕子京"],
	["狼来了，打一水果", "杨桃"],
	["出售珍品道具或宠物，公示期要多久", "8小时"],
	["参加”门派闯关“活动，并获得前10的排名，可以获得什么称谓", "三界菁英"],
	["在战斗，队长如何使用战斗指挥功能", "长按战斗单位"],
	["第一次进入梦幻游戏你在哪里", "门派内"],
	["强化打造腰带，需要哪种强化石？", "玄武石"],
	["完成一次任务链，需要完成多少环？", "300"],
	["强化打造武器，需要哪种强化石？", "青龙石"],
	["作家金庸的最后一部长篇武侠小说是什么", "鹿鼎记"],
	["进入地府后，孟婆会给你喝什么汤？", "孟婆汤"],
	["素有“巴蜀之地”“天府之国”之称的是我国哪个省会", "四川"],
	["以下谁不是三国时期的江东四杰", "黄盖"],
	["女娲的形象是人首什么动物身？", "蛇身"],
	["《诗经》共有305篇，可分为三部分，以下哪个不是其中的一部分？", "俗"],
	["“伉俪”常常用来指代什么？", "夫妻"],
	["歇后语“猫哭耗子”的后一句是什么", "假慈悲"],
	["丝竹常常用来指代什么？", "音乐"],
	["埋骨何须桑梓地的后一句是什么", "人生无处不青山"],
	["流行语“世界那么大，我想去看看”出自于哪里", "辞职信"],
	["世界上最大的一尊弥勒佛坐像位于我国哪里", "乐山"],
	["一个直角三角形，两条直角边分别是5是12，请问三角形的斜边是多长", "13"],
	["“颜值”是用来评价一个人哪一方面的？", "长相"],
	["和尚打伞，打一成语", "无法无天"],
	["猴子互相抓背,在彼此的身上抓什么吃?", "盐粒"],
	["以下谁被称为人文始祖", "黄帝"],
	["商朝第一任统治者是谁", "商汤"],
	["中国上古时期的三皇是谁", "蚩尤"],
	["三国演义中，刘备的五虎上将里最后病逝的名将是哪一位？", "赵云"],
	["周武王在那一场战役中给予商朝致命一击", "牧野之战"],
	["夜来风雨声的后一句是什么", "花落知多少"],
	["千里送鹅毛的后一句是什么", "礼轻情意重"],
	["社稷常常用来指代什么？", "国家"],
	["猪八戒照镜子的后一句是什么？", "里外不是人"],
	["巾帼常常用来代指什么？", "女子"],
	["山中无老虎的后一句是什么", "猴子称大王"],
	["桑梓常常用来指代什么？", "家乡"],
	["少壮不努力的后一句是什么", "老大徒伤悲"],
	["中国最早的历法是什么", "夏历"],
	["被称为麒麟才子的是谁", "梅长苏"],
	["3个空啤酒瓶可以换1瓶啤酒，18瓶空啤酒瓶最多可以免费喝几瓶啤酒？", "9"],
	["小明对妈妈说 妈妈我饿了，妈妈我饿了，妈妈我饿了，为什么", "重要的事情说三遍"],
	["壁咚一词最早出现在哪里", "日本漫画"],
	["愤怒特效只会出现在哪一类装备上", "腰带"],
	["强化打造衣服，需要哪种强化石？", "白虎石"],
	["强化打造鞋子，需要哪种强化石？", "玄武石"],
	["合成高级宝石时，以下哪个道具可以保证合成成功率", "宝石锤"],
	["帮派刚建立，可以容纳多少个成员？", "100"],
	["100仙玉可以从商城购买多少金币？", "10000"],
	["傲来渔港的神机道长可以为什么事情祈福", "打开福缘宝箱"],
	["二十八星宿在每天几点投放", "每个小时整点"],
	["1层内丹加成的宠物数值，是满层（5层）的多少", "50%"],
	["每个帮派，最多拥有几个帮主", "1个"],
	["夏朝的最后一任统治者是谁", "夏桀"],
	["提出“顺其自然，无为而治&思想的是先秦哪个思想家", "老子"],
	["分封制最早出现在哪个朝代", "西周"],
	["湘江是哪个省的母亲河", "湖南"],
	["“天苍苍，野茫茫，风吹草低现牛羊”描绘的是哪个地方的景色", "蒙古草原"],
	["小明与小强比赛爬楼梯，小明爬到3楼，小强到4楼，小明爬到7楼，小强到几楼", "10"],
	["一寸光阴一寸金是形容什么", "时间宝贵"],
	["一个数乘8后比原数多了84，原来的数是多少", "12"],
	["现存于陕西碑林中的“多宝塔碑”是我国唐代哪位著名书法家的作品？", "颜真卿"],
	["宿舍里四个人在打麻将，为什么班主任带走了5个人", "麻将是被打的同学"],
	["春望中城春草木深的城是当时的那个城", "长安"],
	["我们常说“毁三观”，以下哪个不是三观之一？", "贞操观"],
	["为什么老张家的马吃掉了老李家的象", "他们在下象棋"],
	["一人3块钱买了一只鸡，5块钱卖掉，然后6块钱又买了回来，7块钱卖掉，他赚了多少？", "3"],
	["著名旅游景点月牙泉、鸣沙山都位于哪个市？", "敦煌"],
	["明明可以考长相吃饭，偏偏要靠什么？", "才华"],
	["几月几日是我国的植树节？", "3月12日"],
	["中秋吃什么点心表示“团圆”", "月饼"],
	["小明明明考了全班第一，为什么爸爸妈妈还要打他", "倒数第一"],
	["红楼梦中贾宝玉梦里去的仙境叫什么名字？", "太虚幻境"],
	["流行词“duang”来源于谁", "成龙"],
	["下列哪种方式可以增加活力值？", "完成日常任务"],
	["以下哪种行为可以获得变异宝宝？", "金柳露洗炼"],
	["消耗活力打工可以获得多少金币？", "100"],
	["神兽可以提升几次？", "3"],
	["梦幻西游手游中一共有多少个种族", "3"],
	["以下哪个不是魔族角色", "玄彩娥"],
	["以下什么行为对账号使用会更安全", "给账号绑定手机"],
	["65级宠物最多可拥有多少个内丹", "4个"],
	["1个师傅最多拥有几个徒弟", "3个"],
	["过奈河桥要喝什么？", "孟婆汤"],
	["误服强酸后，以下哪种方法急救方法不正确", "大量喝水"],
	["选择营地时，我们要在哪里扎营", "靠近水源"],
	["利用植物也可以辨别方向，如果我们在北半球，哪个方向的植物枝叶茂盛", "南面"],
	["在森林野营缺水时，我们可以用什么来接露水", "胶布"],
	["当有异物进入眼内，以下哪种方法是错误的", "用手揉眼，将异物揉出来"],
	["在林中负重前行时，什么鞋有利于我们前进", "耐磨的软底鞋"],
	["当有异物进入眼内，以下方法中，哪个不正确？", "用手揉眼，把异物揉出来"],
	["搬运脊柱骨折患者，下列搬运工具中，什么材料不宜使用？", "软担架"],
	["当多次尝试无法自己找回密码/解绑手机时，怎么办？", "登陆mima.163.com申述"],
	["废弃的电池会对人体引发什么中毒", "镉"],
	["出现食物中毒症状后 采取的措施正确的是", "催吐"],
	["白色污染指的是什么", "塑料废气造成的污染"],
	["以下哪个个人资料可以给别人", "角色所在门派"],
	["哪个不是岁寒三友", "菊"],
	["以下哪个不是中国三大国粹", "风水学"],
	["穿什么裤子最显年轻", "纸尿裤"],
	["能提高身体排污能力的食品", "粗粮，豆类，海藻"],
	["买回来的蔬菜，最好在清水中浸泡多长时间可除掉大部分残留的农药？", "30-60分钟"],
	["狂犬病主要表现为", "高度兴奋"],
	["安全驾驶汽车，驾驶人不应该穿哪种鞋子", "拖鞋"],
	["发生交通事故，有人被压在车轮和重物下，错误的做法是", "拉拽伤者肢体"],
	["摩托车后座不得乘坐未满多少周岁的未成年人", "12"],
	["问鼎中原是谁的故事？", "楚庄王"],
	["机动车C1本的有效期的时间是", "6年"],
	["对成年病人实施胸外心脏挤压法，应该每分钟挤压多少次", "至少100次"],
	["三线电缆中的红色线是？", "火线"],
	["超过机动车驾驶证有效期几年以上未换证，车辆管理所可以注销其机动车驾驶证", "1年"],
	["乘坐客车外出，客车意外失火，车门无法打开，应该如何逃生？", "砸碎侧风窗玻璃"],
	["哪种不属于交通信号", "交通宣传广告"],
	["哪个妖怪住在毒敌山琵琶洞", "蝎子精"],
	["哪个宠物拥有死亡召唤技能", "幽冥书生"],
	["以下哪个不属于“三原色”？", "白"],
	["阵法大克可以增加多少伤害结果？", "0.06"],
	["佛教传说中释迦摩尼在哪种树下修道成佛？", "菩提树"],
	["一名玄彩娥可以将哪种武器转换为魔棒？", "法杖"],
	["以下哪种食品中所含致癌物质最多？", "烤羊肉串"],
	["下面哪种灭火器不适用于扑灭电器火灾？", "泡沫灭火器"],
	["白居易曾经在琵琶行里用“大珠小珠落玉盘”来形容的乐器是？", "琵琶"],
	["下列哪种生活行为不利于环保？", "使用一次性餐具"],
	["“三十年河东，三十年河西”，中的“河”最初指什么？", "黄河"],
	["保护水环境，我们应该选择什么洗衣粉？", "无磷"],
	["一根绳子，对折2次后从中剪断，绳子变为几段？", "5"],
	["一名剑侠客转换成龙太子，再转换成杀破狼。此时他能将哪种武器转换为弓？", "都可以"],
	["什么酒不能喝？", "碘酒"],
	["在公共汽车 地铁 火车 飞机等公共场所，朋友或熟人间说话应该", "轻声细语，不妨碍别人"],
	["为了账号安全，绝对不要进行以下哪个行为？", "线下买卖账号"],
	["哪一种变身卡附带反击效果？", "白象王变身卡"],
	["变化之术之间相互克制，每高一级伤害结果增加多少？", "0.005"],
	["乘坐二轮摩托车时", "须戴安全帽"],
	["多少周岁以下儿童不能骑自行车上街", "12"],
	["机动车通过没有信号控制的人行横道时", "必须减速，避让行人"],
	["唐朝科举最高级别的考试是什么", "殿试"],
	["下面哪张变身卡不适合封系", "杨戬变身卡"],
	["你添加的好友没有加你，你们友好度是多少？", "0"],
	["以下哪个不是引起电气设备火灾的原因？", "消耗电量小"],
	["如果因电器引起火灾，在许可的情况下，你必须首先", "将有开关的电源关掉"],
	["哪一张变化之术克制黄莽？", "赤炎"],
	["当身上衣服着火时，可立即", "就地打滚，压灭身上火苗"],
	["被电击的人能否获救，关键在于", "能否尽快脱离电源"],
	["重一点的烫伤应立即用冷水冲洗不少于多少分钟？", "30"],
	["常见的贫血一般是缺什么？", "铁"],
	["以下哪种食品可以食用？", "变绿的豆芽"],
	["室外如需吐痰，应该怎么办？", "把痰吐入纸巾再丢入垃圾桶"],
	["洗有颜色的衣服时，先用什么水浸泡10分钟后再洗，不容易掉色？", "5%的盐水"],
	["废电池乱丢对人体可能造成", "镉中毒"],
	["桌上有10只点燃的蜡烛，一阵风吹灭了3只，一夜过后，桌上还剩几只蜡烛？", "3"],
	["喝哪种开水对健康有益？", "冷却到25度的温凉白开水"],
	["当账号遇到密码丢失、被盗问题时，应该找谁帮忙？", "官方客服"],
	["以下食品中铅含量最高的是", "松花蛋"],
	["我国是一个缺水的国家，人均水资源仅为世界人均量的", "1/4"],
	["质能方程的提出者是", "爱因斯坦"],
	["以下哪3个数字的和与积相同？", "1、2、3"],
	["哪一种变身卡附带法术躲避效果？", "菩提老祖变身卡"],
	["特殊修理70级装备需要消耗几颗珍珠？", "2"],
	["小花的爸爸有3个儿子，大儿子叫大毛，二儿子叫二毛，三儿子叫什么？", "小花"],
	["“一日不见，如隔三秋”里的“三秋”指", "三个季度"],
	["下面哪个阵法具有抗封效果加成？", "雷绝阵"],
	["划分山东、山西的“山”指", "太行山"],
	["我国历代船工、海员、渔民所信奉的神祗是谁", "妈祖"],
	["白茶产于我国的哪一省", "福建"],
	["划分湖南、湖北的“湖”指", "洞庭湖"],
	["任务链任务需要找谁领取", "陆萧然"],
	["哪一张变化之术克制赤炎？", "青苍"],
	["香港特别行政区的区花是什么", "紫荆花"],
	["歇后语十五个吊桶打水的下一句是什么", "七上八下"],
	["以下哪个门派没有恢复气血类技能？", "狮驼岭"],
	["人体具有解毒作用的内脏是", "肝脏"],
	["没有划分机动车道、非机动车道和人行道时，非机动车道和行人在道路哪里通行？", "两侧"],
	["迄今为止世界上发现的最大古代出土青铜器是什么？", "司母戊鼎"],
	["应该给账号设置什么资料保护安全？", "以上所有信息均要设置"],
	["交通信号灯中红灯表示禁止通行，绿灯表示准许通行，黄灯表示什么？", "警示"],
	["按照风俗习惯戒指带在中指上表示", "恋爱中"],
	["被誉为绿色林海的大兴安岭位于我国哪个省份", "黑龙江"],
	["以下谁不是“春秋五霸”？", "秦桓公"],
	["动画片中舒克贝塔历险记中，舒克是什么职业", "飞行员"],
	["与“刮骨疗伤”有关的人物是谁", "关羽、华佗"],
	["下面哪张变身卡不适合物理系？", "酒肉和尚"],
	["以下哪种行为无法缓解轻度抑郁症？", "唉声叹气"],
	["丝绸之路的开辟可追溯到", "西汉"],
	["哪个技能回复的气血值会受失去气血的比例来决定", "推气过宫"],
	["人体含水量百分比最高的器官是", "眼球"],
	["九十九，猜一字", "白"],
	["相传孔子讲学的地方叫", "杏坛"],
	["打断念头，猜一字", "心"],
	["“点灯”指的是什么技能？", "普渡众生"],
	["以下哪个角色不能拜入化生寺？", "神天兵"],
	["“打蛇打七寸”的七寸是指？", "心脏"],
	["千言万语，猜一字", "够"],
	["被人家放了鸽子还高兴的人是谁？", "鸽子"],
	["世界上第二大空军是", "美国海军"],
	["敖包相会中的敖包是", "石堆"],
	["隐形飞机是指什么样的飞机", "雷达测不到"],
	["可以把手机获取到的验证码，提供给谁？", "谁都不给，会被盗号"],
	["化生寺金刚护体技能的效果是什么？", "群体增加物理防御"],
	["在加油站为汽车加油时，可以做以下哪种行为？", "购买矿泉水"],
	["“爬塔”指的是哪个活动玩法？", "勇闯迷魂塔"],
	["目前考证所知，我国第一部中医理论经典是什么？", "黄帝内经"],
	["以下哪个不属于《春秋三传》？", "邹氏春秋传"],
	["频道里大家通常喊的“一条”不包括", "押送高级镖银"],
	["“龙眼”又被称作什么？", "桂圆"],
	["如果炒菜时油锅起火，应该使用哪种抢救措施？", "迅速盖上锅盖，关闭煤气"],
	["成就奖励的主要用途是什么？", "装扮空间"],
	["在火灾扑救中，要坚持什么指导思想？", "救人第一"],
	["以下哪些道具可以对人物进行染色？", "彩果"],
	["我国传统表示次序的天干一共有几个字", "10个"],
	["千里传音可以在哪个频道看到", "系统"],
	["古人称为“手谈”的是指", "围棋"],
	["人的舌头的哪个部位对苦味最敏感", "舌根"],
	["水漫金山有以下哪个特性", "降低敌人伤害"],
	["下列哪个人不属于唐宋八大家", "陆游"],
	["“落霞与孤鹜齐飞，秋水共长天一色”描写的是哪里的景色", "滕王阁"],
	["最早的春联", "刻在木上"],
	["蟋蟀是靠什么发出鸣叫的", "翅膀"],
	["负荆请罪与哪个宰相有关", "蔺相如"],
	["世界上最大的宫殿是", "故宫"],
	["洛阳纸贵比喻作品风行一时，与司马相如的长六赋有关？", "不是"],
	["麻婆豆腐是我国哪个菜系的菜", "川菜"],
	["传说每年平安夜圣诞老人乘坐的雪橇是什么动物拉的", "驯鹿"],
	["环装是指", "50.60级"],
	["大气吸收紫外线是靠", "臭氧"],
	["马可波罗什么时候来到中国", "元代"],
	["每个帮派，最多拥有几个堂主？", "4"],
	["高层建筑失火时，正确的做法是？", "从疏散楼层逃离"],
	["以下哪个角色不是人族可选角色？", "巨魔王"],
	["化生寺的门派师傅是谁？", "空度禅师"],
	["下面哪张变身卡不适合法系？", "星宿神君变身卡"],
	["以下哪个临时符对于方寸玩家作用意义最小？", "物理伤害符"],
	["“金屋藏娇”的故事与哪一位皇帝有关", "汉武帝"],
	["侠义鬼是指捉鬼队伍中有两个等级相差至少", "10级"],
	["中国面积最大的省份是哪一个", "新疆"],
	["歇后语“泥菩萨过河”的后一句是什么？", "自身难保"],
	["使用变身卡进行门派闯关，每场战斗扣除多少变身点？", "1"],
	["我们常说“三教九流”，以下哪个不属于“三教”？", "法教"],
	["下面哪个阵法大克虎翼阵？", "鸟翔阵"],
	["成语“祸起萧墙”中“萧墙”指的是哪种家具？", "屏风"],
	["骨质疏松症主要是身体缺乏哪种矿物质？", "钙"],
	["冰箱或空调泄露的哪种物质会破坏大气层臭氧层？", "氟利昂"],
	["过了奈何桥要喝了什么可以忘记人间所有事情？", "孟婆汤"],
	["大气中起吸收紫外线、保护地球生命作用的是哪种成分", "臭氧"],
	["使用变身卡进行玩家之间的战斗，每场最多扣除多少变身点？", "10"],
	["化生寺唧唧歪歪技能首目标会附加什么类型的效果？", "降低攻击"],
	["发现媒体中毒人员，采取以下行动中，哪种急救方法是正确的？", "迅速打开门窗通风"],
	["遇有交通信号灯、交通标志或交通标线与交通警察的指挥不一致时", "服从交通警察指挥"],
	["地球四季起因？", "地球公转"],
	["液体面包是？", "啤酒"],
	["速度最慢的治疗系助战伙伴是谁", "惠岸行者"],
	["哪一种变身卡附带死亡禁锢效果？", "地藏菩萨变身卡"],
	["变化之术之间相互克制，最高可以增加多少伤害结果？", "0.025"],
	["被称为“武圣”的是谁？", "关羽"],
	["夜晚仰望天空，我们应该用通过什么来辨别方向？", "北极星"],
	["珍品装备至少多少级可以染色？", "60级"],
	["同样的阵法等级,哪个阵法加成的法伤最高", "龙飞阵"],
	["我国国酒茅台酒出于哪个省份", "贵州"],
	["每个帮派，最多拥有几个副帮主？", "1"],
	["变化之术需要找谁学习？", "孙悟空"],
	["国家消防宣传活动日“119”是几月几日？", "11月9日"],
	["哪一张变化之术克制青苍？", "黄莽"],
	["如果服务器等级为80，以下哪个等级可以领取五行修业任务", "77"],
	["以下哪个角色不是仙族可选角色？", "杀破狼"],
	["下面哪一项不是变身卡的变化之术？", "炎黄"],
	["梦幻西游手游中“魔族”有多少个主角人物？", "5"],
	["脸儿亮光光，坐在桌子上，妹妹跑过来，请它照个相。（打一日用品）", "镜子"],
	["楼台接楼台，一层一层接起来，上面冒白气，下面水开花（打一日常用品）", "蒸笼"],
	["失足青楼，连栽跟头（猜一成语）", "红尘仆仆"],
	["小李广回乡（猜一成语）", "荣归故里"],
	["有风不动无风动，不动无风动有风。（猜一物）", "扇子"],
	["一只雀，飞上桌，捏尾巴，跳下河（打日常用品）", "汤匙"],
	["一条小小虫，自己做灯笼，躲在灯笼里，变个飞仙女。（猜昆虫）", "蚕"],
	["十年未改旧官职（猜一成语）", "原封不动"],
	["坐也是立，立也是立，行也是立，卧也是立。（猜动物）", "马"],
	["黄金布，包银条，中间弯弯两头翘（猜水果）", "香蕉"],
	["脊梁冒汗人惊悚（猜一成语）", "背水一战"],
	["身无分文想学魔术（猜一成语）", "穷则思变"],
	["盲人摸象（猜一成语）", "不识大体"],
	["以下哪项不是公司内常见的消防设施？", "沙袋"],
	["“古来稀”代指什么年纪", "七十岁"],
	["使用灭火器灭火时，灭火器的喷射口应该对准火焰的", "根部"],
	["公共场所内严禁带入和存放", "易燃易爆物品"],
	["大禹治水是家喻户晓的故事，那大禹治的是？", "黄河"],
	["八卦中代表雷的卦象叫卦？", "是的"],
	["“不惑”代指40岁？", "是的"],
	["“伯乐一顾”中的伯乐看的是什么", "马"],
	["韩湘子是“八仙过海”中的八仙之一？", "是的"],
	["古代著名的水利工程都江堰建立于唐朝？", "不是"],
	["“乐府”最早是指音乐机构？", "是的"],
	["《三国演义》中刘备见到诸葛亮家悬挂了一幅对联，写的是“淡泊以明志，宁静而致远”？", "是的"],
	["地球上的四季变迁是由什么引起的", "地球公转"],
	["我们常用“社稷”来指代国家，其中“社”字代表的是土地之神？", "是的"],
	["100级装备打造时不需要以下哪种材料？", "强化石"],
	["强化打造头盔，需要哪种强化石？", "朱雀石"],
	["使用变身卡进行擂台切磋，每场战斗扣除多少变身点？", "1"],
	["梦幻西游手游中，以下哪个角色不是魔族角色？", "漠少君"],
	["“美”字最初的含义是戴着头饰站立的人？", "是的"],
	["中东哪一个城市是三大宗教圣地（）", "耶路撒冷"],
	["在古代人们尊称对方的妻子为“令正”？", "是的"],
	["中国第一颗月球探测卫星“嫦娥一号”的发射日期是（）", "2007年10月24日"],
	["草书、行书、楷书、隶书四种字体当中楷书是其余三种的起源？", "不是"],
	["成语中“惊弓之鸟”的“鸟”应是一只雁？", "是的"],
	["在古代，人们将乐器分为“丝”、“竹”，分别指弹弦乐器和吹奏乐器，其中竹  是指吹奏乐器？", "是的"],
	["埃及人利用哪一颗天体制定365日的历法？", "天狼星"],
	["按星区划分，全天共有多少个星座？", "88"],
	["唐代传述奇闻异事的短篇小说称为“拍案惊奇”？", "不是"],
	["“逼上梁山”的典故出自文学著作《西游记》？", "不是"],
	["歇后语“司马昭之心”的后一句是什么？", "路人皆知"],
	["我国农历实际上是", "阴阳合历"],
	["成语“一日三秋”是形容思念心切？", "是的"],
	["成语“白驹过隙”比喻时光飞逝？", "是的"],
	["“双簧”是我们一门独特的曲艺艺术，它得名于初演的两个人都姓黄？", "是的"],
	["西气东输工程西起我国四大油田中的（）", "塔里木油气田"],
	["对于地球上的观测者，肉眼可见的恒星大概是几颗？", "6000"],
	["“在天愿做比翼鸟，在地愿为连理枝”这句诗描写的是唐明皇和杨贵妃的爱情故事？", "是的"],
	["“沉鱼落雁，闭月羞花”中的“沉鱼”是指“西施”？", "是的"],
	["《红楼梦》是我国古代著名的长篇小说之一，它的别名是《石头记》？", "是的"],
	["两眼外秃大嘴巴，有个尾巴比身大，青草假山来相伴，绽放朵朵大红花。（打一动物名", "金鱼"],
	["前面来只船，舵手在上边，来时下小雨，走后路已干（打一日常用品）", "熨斗"],
	["白天草里住，晚上空中游，金光闪闪动，见尾不见头。（猜昆虫）", "萤火虫"],
	["袭人芳官伴宝玉（猜一成语）", "花花公子"],
	["头戴红顶帽，身穿白布袄，走路像摇船，说话像驴叫。（猜动物）", "鹅"],
	["脚像细牛脚，身像大狗重。行象后生子，须象老大人（打一动物名）", "羊"],
	["身上滑腻腻，喜欢钻河底。张嘴吐泡泡，可以测天气（打一动物）", "泥鳅"],
	["一个说可以，一个说凑合，还有一个无所谓（猜一成语）", "行将就木"],
	["口比肚子大，给啥就吃啥。它吃为了你，你吃端着它（打一日常用品）", "碗"],
	["不是点心不是糖，软软凉凉肚里藏，不能吃来不能喝，每天也要尝一尝（打一日常用品）", "牙膏"],
	["秦始皇死前遗诏是让谁继承皇位？", "扶苏"],
	["我国书法艺术博大精深，请问“欧体”是指欧阳询的字体？", "是的"],
	["王羲之对鹅十分偏爱，并从它的体态姿势上领悟到书法执笔运笔的道理？", "是的"],
	["“大禹治水”的故事家喻户晓，大禹治理的是黄河流域的洪水？", "是的"],
	["成语“画饼充饥”和曹操有关？", "不是"],
	["“知天命”代指50岁？", "是的"],
	["古琴最初只有五根弦，代表着金、木、水、火、土。后来又增加了两根弦，这两根弦代表阴、阳？", "不是"],
	["每人可以穿戴多少件装备？", "6"],
	["给武器染色需要哪种道具？", "虹石"],
	["军火外销（猜一成语）", "出口伤人"],
	["晋升要由别人推荐（猜一成语）", "不能自拔"],
	["憾山易，憾隋文帝难（猜一成语）", "坚不可摧"],
	["金钩吊银圈，姐妹隔座山。若要来相会，需到天色晚（打一日常用品）", "耳环"],
	["夏季在烈日下工作或运动量过大出汗多时，为预防中暑应多喝什么？", "盐开水"],
	["《三国演义》中，道号为“风雏”的人是诸葛亮？", "不是"],
	["“名落孙山”中的“孙山”是一个人名？", "是的"],
	["《梅花三弄》是传世名曲，其中“三弄”指的是演奏技巧？", "不是"],
	["我国明代“七下西洋”的航海家是谁", "郑和"],
	["使用门派绝技后，次回合休息不可做什么？", "使用药品"],
	["于2015年年底推出的结拜系统，最高能支持多少个人一起结拜？", "20"],
	["“生旦净末丑”是京剧的行当，其中“净”是女角？", "不是"],
	["古人讲究谦辞礼让，谈到对方父亲时一般称为“令尊”？", "是的"],
	["我国古代的很多事物都有自己的雅称，请问我们常说的“润笔”指的是文章书画稿费？", "是的"],
	["陛下是古代对君王的尊称，其中“陛”的意思是天的别称？", "不是"],
	["“苦心人，天不负，卧薪尝胆，三千越甲可吞吴”描写的是勾践？", "是的"],
	["“三个臭皮匠，顶个诸葛亮”中的皮匠指的是副将？", "是的"],
	["“风车之国”的风车是用来（）", "提水的"],
	["《霸王别姬》是京剧中的名段，“虞姬”这一角色在京剧中属于青衣？", "是的"],
	["古琴和古筝不为同一种乐器？", "是的"],
	["“戊”字常用作表示顺序的第五位？", "是的"],
	["“醉里挑灯看剑，梦回吹角连营”出自岳飞的作品？", "不是"],
	["太阳直射北回归线是24节气中的（）", "夏至"],
	["“杏林”指代的是医学界？", "是的"],
	["半耕半读（猜一字）", "讲"],
	["娘子娘子，身似盒子。麒麟剪刀，八个钗子。（打一动物）", "蟹将"],
	["一把刀，顺水漂，有眼睛，没眉毛。（打一动物名）", "鱼"],
	["一条怪牛，两条圆腿，骑他肚上，抓他双角。（猜交通工具）", "自行车"],
	["灭火器上的压力表用红、黄、绿表示压力情况，当指针在绿色区域表示什么？", "正常"],
	["世界上最大的动物是：", "蓝鲸"],
	["在五行理论中，水生木，金生水？", "是的"],
	["“寿比南山”一词中的“南山”指的是终南山？", "是的"],
	["“才高八斗”用来形容一个人学问高深，第一个被赞的人是李白？", "不是"],
	["“一门父子三词客，千古文章八大家”这幅对联中提到的“三父子”是曹操、曹  丕、曹植？", "不是"],
	["古时候，一个时辰等于现在2小时？", "是的"],
	["“圆寂”是指佛门中的人去世？", "是的"],
	["孔子弟子中擅长做生意的是子路？", "不是"],
	["于猴年贺岁之际推出的第七门派是？", "魔王寨"],
	["月宫的门派师傅是谁？", "月灵"],
	["《梦幻西游》手游推出的第七个角色是？", "虎头怪"],
	["绿刀侠的由来是什么？", "击杀的宝宝神佑了"],
	["每个帮派，最多拥有多少个成员", "250"],
	["中国领土横跨（）时区", "5"],
	["诗句“问世间，情是何物，直教生死相许”的原作者是元好问？", "是的"],
	["“老吾老以及人之老，幼吾幼以及人之幼”出自孟子？", "是的"],
	["冬夜星空中最具有代表性的星座是", "猎户座"],
	["《百家姓》中没有肖姓？", "是的"],
	["距离太阳最远的行星是（）", "海王星"],
	["一般来说，彗星运动方向与彗尾运动方向一致", "不是"],
	["古琴最初只有五根弦，代表着金、木、水、火、土。后来又增加了两根弦，这两根弦代表文、武？", "是的"],
	["北斗七星属于什么星座？", "大熊座"],
	["张贴“乾坤定矣，钟鼓乐之”的对联表明有人结婚？", "是的"],
	["月球是地球唯一的彗星", "不是"],
	["唱念做打是中国戏曲表演的四种艺术手段，也是戏曲表演的四项基本功，其中“做”指的是面部表情？", "不是"],
	["下列地区动植物种类最为繁多的地方是（）", "非洲"],
	["太阳系中大气活动最猛烈、表面风俗最快的行星是（）", "海王星"],
	["古人所称的“拙荆”是指自己的妻子？", "是的"],
	["名诗句“落霞与孤鹜齐飞”的下句是“秋水共长天一色”？", "是的"],
	["以下哪个不属于“岁寒三友”？", "菊"],
	["平均海拔最低的大洲是大洋洲", "不是"],
	["“途有饿殍而不知发”中的“发”字文中义为发财", "不是"],
	["著名的英仙座流星雨的极大发生在每年的几月份？", "8"],
	["人类宇航员第一次进行太空漫步是哪一年？", "1965"],
	["猛将百余人，无事不出城。出城就放火，引火自烧身（打一日常用品）", "火柴"],
	["老人大联欢（猜一成语）", "非同儿戏"],
	["晚来日沉星点稀（字谜）", "兔"],
	["坐也是行，立也是行，行也是行，卧也是行。（猜动物）", "鱼"],
	["出现食物中毒症状或者误食化学品时，最先采取的急救措施是？", "催吐"],
	["“翡”和“翠”指的不是同一种颜色？", "是的"],
	["苏轼是苏门四学士之一？", "不是"],
	["在古代人们尊称对方的妻子为“令爱”？", "不是"],
	["“三十年河东，三十年河西”中的“河”最初指的是黄河？", "是的"],
	["中国历史上被誉为“药王”的是孙思邈？", "是的"],
	["“讳疾忌医”典故中的君王是齐桓公？", "不是"],
	["唐朝盛世“贞观之治”出现于哪位皇帝的执政时期", "唐太宗"],
	["古代称呼不才是称呼自己的？", "是的"],
	["横跨两大洲，首都在西半球的国家是（）", "美国"],
	["京剧被称为“中国百戏之师”？", "不是"],
	["俗语说“化干戈为玉帛”，干戈都是兵器，其中“干”指的是防御武器？", "是的"],
	["下列城市中，冬天寒冷干燥，夏季高温多雨的是（）", "北京"],
	["五岳名山中的东岳是（）", "泰山"],
	["我国长江沿岸的“三大火炉”没有（）", "吐鲁番"],
	["“大弦嘈嘈如急雨，小弦切切如私语”描述的乐器是琵琶？", "是的"],
	["“金戈铁马，气吞万里如虎”是岳飞的词句？", "不是"],
	["“弟子不必不如师，师不必不贤于弟子”是韩愈最早提出的？", "是的"],
	["杀颜良，诛文丑，温酒斩华雄（猜一成语）", "性命攸关"],
	["悟空思做遮体裙（猜一成语）", "与虎谋皮"],
	["瑞气升腾罩金乌（猜一成语）", "蒸蒸日上"],
	["身子轻如燕，飞在天地间，不怕相隔远，也能把话传（打一动物名）", "信鸽"],
	["顶破天（打一字）", "夫"],
	["云长义子性随和（猜一成语）", "平易近人"],
	["虾类依靠什么呼吸", "鳃"],
	["在车辆没停稳之前", "不准开车门和上下人"],
	["被称为“画圣”的古代画家是吴道子？", "是的"],
	["我国古代能工巧匠的杰出代表鲁班不姓“鲁”？", "是的"],
	["古代宫殿大门前成对的石狮一般都是左雄右雌？", "是的"],
	["武当山是中国四大佛教名山之一？", "不是"],
	["杜甫《春望》中“城春草木深”指的是当时哪座城？", "长安城"],
	["古代称呼足下是称呼自己的？", "不是"],
	["神兽的参战等级是多少？", "0级"],
	["下列选项中不属于月宫门派技能的是", "天狗食月"],
	["“惊雷初响，万物复苏”，描述的是哪一个节气？", "惊蛰"],
	["黄道12宫中，太阳在白羊宫停留的时间最短", "不是"],
	["1989年3月发生的几十个强烈的（）活动，引起短波通讯15次终端，24次全部中  断", "磁暴"],
	["切脉是中医独创的诊法，中医把脉时摸的是动脉？", "是的"],
	["《短歌行》是曹操的名篇。《短歌行》比《长歌行》字数多？", "是的"],
	["歇后语“肉包子打狗”的后一句是什么？", "有去无回"],
	["成语典故“泾渭分明”和棋文化有关？", "不是"],
	["除春秋分日外，地球上凡太阳正在直射的地方必然是（）", "昼长夜短"],
	["目前国内正式发行的天文科普刊物是（）？", "天文爱好者"],
	["“一身归朔漠，数代靖兵戎，若以功名论，几与卫霍同”这位人物是王昭君？", "是的"],
	["屋里一座亭，亭中有个人，天天荡秋千，不荡就有病（打一日常用品）", "钟摆"],
	["左手五个，右手五个。拿去十个，还剩十个（打一日常用品）", "手套"],
	["坐也是坐，立也是坐，行也是坐，卧也是坐。（猜动物）", "青蛙"],
	["向别人介绍自己的弟弟妹妹应该用舍弟舍妹？", "是的"],
	["“庖丁解牛”形容做事得心应手，“庖丁”指的是一个名叫“丁”的厨师？", "是的"],
	["文学史上被称作“小李杜”的是杜牧和李商隐？", "是的"],
	["“易安居士”是白居易的号？", "不是"],
	["我国古代对于年龄有很多独特的称呼，其中满一百岁被称为“期颐”？", "是的"],
	["“如意丹”的作用是什么？", "调整宠物的初始属性点"],
	["轩辕十四位于哪一个星座？", "狮子座"],
	["“黄粱一梦”中的“黄粱”指的是“小米”？", "是的"],
	["乞拉朋齐成为雨极的原因是？", "地形雨"],
	["当长江发生特大洪水时，下列城市受到威胁最大的是", "武汉"],
	["《二十四史》是我国古代二十四史的总称，其中只有一部是完全意义上的通史，它是《三国志》？", "不是"],
	["薄薄一张口，能啃硬骨头。吃肉不喝汤，吃瓜不嚼豆（打一日常用品）", "菜刀"],
	["书中自有黄金屋（猜一成语）", "一本万利"],
	["遇有骑自行车人攀附机动车，此时机动车驾驶人应", "平稳停车"],
	["陛下是古代对君王的尊称，其中“陛”的意思是宫殿的别称？", "是的"],
	["以下哪件事情不需要消耗活力？", "打造装备"],
	["北美五大湖的成因是", "冰川侵蚀"],
	["世界上火山最多的洲是南美洲", "不是"],
	["古人讲究谦辞礼让，谈到自己儿子时一般称为“犬子”？", "是的"],
	["在《关雎》一诗中青年男子爱上的“窈窕淑女”在摘野菜？", "是的"],
	["“弄璋之喜”是指新婚？", "不是"],
	["长江三峡位于最西面的一个峡谷是", "瞿塘峡"],
	["“三人行，必有我师”出自三字经？", "不是"],
	["京剧中，饰演性格活泼、开朗的青年女性的是老生？", "不是"],
	["曹操《短歌行》实际上是为了表达一种追求爱情的心情？", "不是"],
	["有面无口，有脚无手。听人说话，陪人吃酒（打一日常用品）", "桌子"],
	["小时像逗号，在水中玩耍。长大跳得高，捉虫是冠军（打一动物名）", "青蛙"],
	["带着平顶帽，身穿圆筒袄，虽然一只眼，暗中逞英豪（打一日常用品）", "手电筒"],
	["火灾致人死亡的最主要原因是", "吸入有毒烟气窒息死亡"],
	["天然气主要成分是", "甲烷"],
	["张衡发明的地动仪上有十二条龙？", "不是"],
	["孔子弟子中擅长做生意的是子贡？", "是的"],
	["“羽化”是指佛门中的人去世？", "不是"],
	["参与泡泡王战斗并坚持到泡泡王第五形态，可以获得什么称谓？", "泡泡王·霸王"],
	["我国不受寒潮影响的地区是", "雅鲁藏布江谷地"],
	["长江三峡位于最西面的一个峡谷是", "瞿塘峡"],
	["《春秋》属于四书中的一本？", "不是"],
	["京剧中，饰演性格活泼、开朗的青年女性的是老生？", "不是"],
	["“态生两靥之愁，娇袭一身之病”玉对黛玉的第一印象，其中“靥”是指酒窝？", "是的"],
	["“顷刻间千秋事业，方寸地万里江山；三五步行遍天下,六七人百万雄兵”描写的是下棋？", "不是"],
	["世界上最大的海湾是", "孟加拉湾"],
	["坐也是卧，立也是卧，行也是卧，卧也是卧。（猜动物）", "蛇"],
	["鼻子朝天，嘴巴朝地。敲它一锤，惊天动地（打一日常用品）", "大钟"],
	["低盐饮食有利于预防什么疾病？", "高血压"],
	["火警电话和医院急救电话分别是？", "119，120"],
	["唐朝文宗御封的“三绝”指的是李白的诗歌、张旭的草书和吴道子的画？", "不是"],
	["古代宫殿大门前成对的石狮一般都是左雌右雄？", "不是"],
	["“弱冠”指的是男子十六岁？", "不是"],
	["以下哪个主角使用弯刀作为武器？", "漠少君"],
	["封妖每天前几次可以获得奖励？", "10"],
	["“高屋建瓴”一词中的“瓴”是指屋檐？", "不是"],
	["“轻于鸿毛”中的鸿毛是大雁的毛？", "是的"],
	["一般来说男子行拱手礼时应该左手在外？", "是的"],
	["琵琶本名“批把”，“批把”一词来源于演奏琵琶的方式？", "是的"],
	["从地球上看月球，人们最多可以看到月球表面的百分之几？", "59"],
	["唐诗“东边日出西边雨”的下一句是“天若有情天亦老”？", "不是"],
	["牛郎星位于", "天鹰座"],
	["外套改马甲（猜一成语）", "双管齐下"],
	["一只八宝袋，样样都能装。能装棉和纱，能装铁和钢（打一日常用品）", "针线包"],
	["人民通常在中秋节吃什么点心以示“团圆”？", "月饼"],
	["“空城计”里，诸葛亮在城楼上做的事是跳舞？", "不是"],
	["“凡有井水处，即能歌柳词”中的“柳”指的是柳永？", "是的"],
	["泡泡乐园中泡泡王一共有几种表情？", "4"],
	["宠物内丹，最高可以升至几级？", "5"],
	["法宝的最高等级是多少？", "10"],
	["成语“文不加点”是形容文笔简洁，没有废话？", "不是"],
	["成语“机不可失”出自张九龄之笔，它的下句是时不再来？", "是的"],
	["若新月是日出时落下，那下弦月什么时候升起？", "午夜"],
	["圆圆像个瓜，人们爱玩他，没有到手抢他，抢到手丢他。（猜运动器材）", "篮球"],
	["“一门父子三词客，千古文章八大家”这幅对联中提到的“三父子”是苏洵、苏轼、苏辙？", "是的"],
	["苏轼在《念奴娇赤壁怀古》中提高了“羽扇纶巾，谈笑间，樯橹灰飞烟灭”，“羽扇纶巾”形容的是诸葛亮？", "不是"],
	["韩非子是“八仙过海”中的八仙之一？", "不是"],
	["强化打造项链，需要哪种强化石？", "玄武石"],
	["《诗经》和《孔雀东南飞》合称“乐府双璧”？", "不是"],
	["不属于世界三大宗教的是", "道教"],
	["《诗经》分为风、雅、颂三部分，共有305篇？", "是的"],
	["大陆漂移假说的创始人是", "魏格纳"],
	["挥动钳子一双，玩弄尖刀八把，一生霸道横行，总爱胡抓乱爬（打一动物）", "蟹将"],
	["动物中视角最大的是", "鱼"],
	["消防工作的方针是什么？", "预防为主，防消结合"],
	["海洋中等深线最密集的地方是", "海沟"],
	["长庚是我国古代对哪一颗行星的称呼", "金星"],
	["东南亚最长的国际性河流是湄公河", "是"],
	["“有朋自远方来，不亦乐乎！”是孔子说的？", "是的"],
	["“上穷碧落下黄泉”中的“碧落”指天界、天宫？", "是的"],
	["古人用“父母教，须敬听；父母责，须顺承”来劝谕人们要尊敬父母，这句话出自《三字经》？", "不是"],
	["巴以战争争端的焦点在于", "土地主权"],
	["八卦中代表雷的卦象叫坎？", "不是"],
	["“乞巧节”就是向织女乞求一双巧手的意思，乞巧最普遍的方式是对月穿针？", "是的"],
	["被称为“画圣”的古代画家是顾恺之？", "不是"],
	["1994年撞击木星的彗星名叫", "苏梅克-列维9号"],
	["地球的自转周期比公转周期多一天", "不是"],
	["我们熟悉的《百家姓》是按照人口数量排列的？", "不是"],
	["“七擒七纵”讲述的是关羽和张飞的故事？", "不是"],
	["无脚也无手，身穿鸡皮皱。（打一动物名）", "海毛虫"],
	["被誉为“万园之园”的是颐和园？", "不是"],
	["变脸是我国哪个表演戏剧的绝活", "川剧"],
	["父母之命，媒妁之言（猜一成语）", "不由自主"],
	["鲁菜、川菜、粤菜、闽菜、苏菜、浙菜、湘菜、徽菜合成八大菜系？", "是的"],
	["王羲之对鱼十分偏爱，并从它的体态姿势上领悟到书法执笔运笔的道理？", "不是"],
	["“何以解忧，唯有杜康”的作者是杜康？", "不是"],
	["《诗经》分为风、雅、颂三部分，共有300篇？", "不是"],
	["成语“退避三舍”是说军队退让了三十里地？", "不是"],
	["小龙虾属于什么垃圾？", "湿垃圾"],
	["榴莲壳属于哪种垃圾？", "干垃圾"],
	["碎玻璃属于什么垃圾", "可回收垃圾"]
];