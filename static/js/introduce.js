var story = {
    nordic: [
        "北歐神話",
        "北歐神話比起其他神話更加著重在描寫毀滅上，許多遊戲或是影視作品常常提到的諸神黃昏就是北歐神話出來的，諸神黃昏指的是北歐的神們經過一定週期所必定會經歷的一場大戰爭，在這場戰爭中，世界會因為眾神的戰爭而毀滅，而倖存的神則會到另一個新世界繼續發展。"
    ],
    china: [
        "中國神話",
        "這裡的中國神話並不是指玉皇大帝那一夥神，而是指上古神話的神，而在這裡也舉出三位有名且對後世影響巨大的神來做介紹。其實中國神祇（不管是神話或是道教的神）中有不少神在歷史上是有真實人物參考的，但跟其他神話比起來反而中國神的性格和慾望比較不明顯，更偏向我們認知的神，而不像人。"
    ],
    egypt: [
        "埃及神話",
        "埃及位在沙漠地區，日照時常影響著人們的生活，所以埃及神畫的主神也同時是太陽神，而跟希臘神比較起來，埃及神中出現很多兄妹通婚的情況，這也導致了埃及王室喜歡近親結婚的習俗。埃及神還有一個特色就是很多神的形象相似，這也導致了用來辨認各個埃及神的方法反而是用飾品來區別。"
    ],
    greece: [
        "希臘神話",
        "雖然說是希臘神話，但其實希臘神話是流傳於巴爾幹半島附近一帶的神話。傳說希臘神會在人類的戰爭中插上一腳，所以在巴爾幹半島還在城市時期的時候才會有不少以神命名的城市。希臘神話的總讓人有種莫名的親近感，因為祂們跟我們人一樣有七情六慾，其中最突出的就是性慾，就像愛神，除了元配丈夫的火神外，還與多位男神有染，而主神宙斯更是神及凡人都不拘，而且個個神之間會互相爭鬥，像戰神及女戰神就長期爭鬥。"
    ],
    india: [
        "印度神話",
        "印度神其實有不少神，不過有很多都是其他宗教融合的神，所以這裡我們舉出了三個最主要的神祇來做介紹。印度的神有一個特色就是通常一個神會有多個形象，而這些形象有可以能會在其他宗教或是其他地區的故事中出現，就像這三大神祇，其實有些就在佛教的故事可串出場，只是名字不同。"
    ]
};

var godName = {
    nordic: [
        "奧丁", "弗麗嘉", "索爾", "希芙", "洛基",
        "巴德爾", "霍德爾", "提爾", "海姆達爾"
    ],
    china: [
        "女媧", "伏羲", "盤古"
    ],
    egypt: [
        "拉", "舒", "泰芙努特", "蓋布",
        "努特", "歐西里斯", "伊西絲",
        "賽特", "奈芙蒂斯"
    ],
    greece: [
        "宙斯", "赫拉", "波賽頓", "狄蜜特", "雅典娜",
        "阿波羅", "阿蒂蜜絲", "羅黛蒂", "阿瑞斯", "赫菲斯托斯",
        "荷米斯", "荷絲提雅"
    ],
    india: [
        "梵天", "毗濕奴", "濕婆"
    ]
};

var slicePath = {
    nordic: [
        "odin_slice.png", "frigga_slice.png", "thor_slice.png",
        "sif_slice.png", "loki_slice.png", "baldur_slice.png",
        "hodr_slice.png", "tyr_slice.png", "heimdall_slice.png"
    ],
    china: [
        "nuwa_slice.png", "fuxi_slice.png", "pangu_slice.png"
    ],
    egypt: [
        "ra_slice.png", "shu_slice.png", "tefnut_slice.png",
        "geb_slice.png", "nut_slice.png", "osiris_slice.png",
        "isis_slice.png", "seth_slice.png", "nephthys_slice.png"
    ],
    greece: [
        "zeus_slice.png", "hera_slice.png", "poseidon_slice.png",
        "demeter_slice.png", "athena_slice.png", "apollo_slice.png",
        "artemis_slice.png", "aphrodite_slice.png", "ares_slice.png",
        "hephaestus_slice.png", "hermes_slice.png", "hestia_slice.png"
    ],
    india: [
        "visnu_slice.png", "brahma_slice.png", "siva_slice.png"
    ]
};

var introduce = {
    // 北歐
    odin: [
        "奧丁",
        "主神，掌管戰爭、死亡、智慧、詩歌等。",
        "永恆之槍、德羅普尼爾（指環）、斯萊布尼爾（天馬）、代表思維及記憶的兩隻烏鴉、代表貪欲及飢餓的兩匹狼。",
        "弗麗嘉的丈夫，也是索爾、巴德爾及霍德爾的父親。",
        "為了獲得知識，奧丁曾以一隻眼睛換得喝一口智慧之泉(密米爾之泉)的泉水，也曾倒吊在世界樹上，以矛刺傷自己，而發現了盧恩文字。奧丁本身也喜歡偽裝成人類的形體，他有多種喬裝方式，如果是要帶來戰爭，他便戴著鷹盔；如果是和平，他就身著黑斗蓬，戴著闊邊帽子來遮掩獨眼。在諸神黃昏中被芬里爾咬死。"
    ],
    frigga: [
        "弗麗嘉",
        "神后，掌管婚姻及家庭。",
        "腰間上的一串奇特鑰匙。",
        "奧丁的妻子，也是索爾、巴德爾及霍德爾的母親。",
        "她喜歡漂亮的服裝和閃光的珠寶。有一次她偷了奧丁的黃金去買一串貴重的項鍊。奧丁發現後，憤而出走。宇宙隨即為冰霜巨人所統治，嚴冬窒息了一切生機。直至七個月後，奧丁回到阿斯加爾德，這場危機才過去。"
    ],
    thor: [
        "索爾",
        "雷神，掌管戰爭及農業。",
        "妙爾尼爾（雷神之槌）、雅恩格麗佩爾（鐵手套）、梅金吉奧德（力量腰帶）。",
        "奧丁及弗麗嘉的兒子，希芙的丈夫。",
        "索爾一生中幾乎無人能敵，但是他仍有一個終生的宿敵，就是大蛇耶夢加得，耶夢加得為洛基的兒子，擁有與地球同等長的巨大身軀與無比的力量，索爾曾經和牠衝突多次，最終在諸神的黃昏（Ragnarok）中索爾力戰耶夢加得，結果雙雙戰亡。"
    ],
    sif: [
        "希芙",
        "土地及收穫女神。",
        "金絲所做的黃金髮。",
        "索爾的妻子。",
        "惡作劇之神洛基趁希芙熟睡時，趁機將她的頭髮剃光，索爾因此勃然大怒。洛基為了平息索爾的怒火，拜託侏儒伊瓦爾迪的兒子們用金絲製成一頂黃金髮作為彌補。"
    ],
    loki: [
        "洛基",
        "淘氣及惡作劇之神。",
        "性格豐富及善惡兼半的立場。",
        "諸神黃昏中最大的敵人──巨狼芬里爾、大蛇耶夢加得和死神赫爾的父親，奧丁的結拜兄弟。",
        "趁希芙熟睡時，趁機將她的頭髮剃光，在之後拜託侏儒伊瓦爾迪的兒子們用金絲製成一頂黃金髮作為彌補。很多其他神的寶物也是經由洛基取得的。他用計殺死了巴德爾，並因此受罰，後來等到諸神黃昏時重獲自由並和其子嗣們一起對眾神復仇。"
    ],
    baldur: [
        "巴德爾",
        "光明之神。",
        "靈舡（最大的船）。",
        "奧丁及弗麗嘉的兒子，霍德爾的攣生兄弟，凡賽堤的父親。",
        "被洛基用計誘騙霍德爾將他殺害，因為其為光明之神所以世界陷入了黑暗。洛基也因此受罰，可以說是引發諸神黃昏的關鍵人物。光明之神巴爾德也象徵著太陽，巴德爾之死暗示著白晝之後必然是接著黑夜。"
    ],
    hodr: [
        "霍德爾",
        "黑暗之神。",
        "雙目失明。",
        "丁及弗麗嘉的兒子，巴德爾的攣生兄弟。",
        "被洛基用計欺騙殺害了自己的兄弟巴德爾，並被奧丁和女巨人琳達的孩子瓦利用弓箭射殺了盲眼的黑暗之神霍德爾，為巴德爾報仇。"
    ],
    tyr: [
        "提爾",
        "戰神。",
        "獨臂。",
        "奧丁之子。",
        "提爾只有一隻手，他的另一隻手是被魔狼芬里爾給咬斷的。眾神想要束縛芬里爾，奧丁卻想不到安置的地方，所以就以測試力氣的理由，想要用鐵鍊將他綁住，但都被芬里爾輕鬆掙脫。這時提爾以自己的右手作為保證，放入魔狼的口中，芬里爾因此相信諸神才甘願被縛。但當他發現自己上當後，就憤而咬斷了口中的手臂，提爾因此成了獨手的神。在諸神的黃昏中，提爾和加姆同歸於盡。"
    ],
    heimdall: [
        "海姆達爾",
        "彩虹橋的看守者。",
        "號角。",
        "一般認為其父為奧丁。",
        "傳說中，人類的三個階級是海姆達爾創出來的。他曾化名為里格，在三個家庭中住宿。" +
        "第一個家庭住著一對老夫妻，過著勤勞、刻苦的生活，里格離開後，這家庭生下一個孩子，被命名為「薩爾」，亦即「奴隸」，「奴隸」階級的人都是從他們傳下來的。" +
        "第二個家庭較為富裕，擅長馴養牲畜，造屋理田。里格離開後，這家庭生下一個孩子，被命名為「卡爾」，亦即「農民」，「自由民」階級的祖先。" +
        "第三個家庭非常富有，擁有精美的裝飾品，配戴者的氣質優雅。里格離開後，這家庭生下一個孩子，被命名為「雅爾」，亦即「王侯」。雅爾長大後，海姆達爾就又出現在他面前，讓他繼承了大量的金銀，又教他如尼文字。於是雅爾在戰爭中獲得許多土地和財富，是為斯堪地那維亞諸邦王室及貴族之始祖。"
    ],
    //中國
    nuwa: [
        "女媧",
        "創世女神。",
        "人首蛇身。",
        "伏羲之妹。",
        "傳說中女媧是人首蛇身的神，以土造人，原本用黃土捏成人形來造人，後來因為過程太過於繁雜，所以改用藤條拍打黃土，而黃土落到地上就變成了人類。而傳說女媧和伏羲開創了婚姻，成為第一對夫妻，但他們同時也是兄妹，而之後規定同姓氏不得結婚。而女媧還有一個知名的傳說，也就是女媧補天，傳說火神祝融和水神共工爭鬥，共工輸了後撞斷支撐天地的一根柱子導致天空破了一個洞，而女媧則花費了七七四十九天煉製五彩神石來補天，後又砍下巨鱉的腳來充當柱子，讓天地得以回復原樣。"
    ],
    fuxi: [
        "伏羲",
        "人類文化始祖、三皇之一。",
        "人首蛇身。",
        "女媧之兄",
        "伏羲被稱為人類文化始祖，他有著無數功績，包括發明了八卦，開創了中國古文字的開端；教民馴養野獸；變革婚姻習俗，提倡男聘女嫁的習俗；結束了原始的子女只知其母不知其父的群婚型態；創古代曆法；發明樂器；創九針，後來成為中醫的根源。"
    ],
    pangu: [
        "盤古",
        "開天闢地的巨人。",
        "巨斧。",
        "無。",
        "傳說中天地本是連在一起，呈現一整塊混沌，而盤古突然誕生，並用手上的巨斧劈開這塊混沌，手撐天；腳踏地，從此世界分成了天和地，並隨著時間，盤古將天地越撐越開，直到變成了我們今天所熟悉的天與地，而盤古死去後，雙目化為日月，身體化為各種自然景觀，變成了我們熟知的世界。"
    ],
    //埃及
    ra: [
        "拉",
        "主神、太陽神、創世之神。",
        "金色的圓盤。",
        "傳說是憑空出現，沒有父母，創造了舒和泰芙努特。",
        "據說所有的生命都是由拉神創造的，他通過念出它們每個的真名而喚出了它們。此外，人類產生於拉神的眼淚和汗水。因此，埃及人自稱為「拉神之牛」。"
    ],
    shu: [
        "舒",
        "風神、空氣之神。",
        "鴕鳥羽毛、象徵生命的安卡。",
        "拉的兒子，泰芙努特的哥哥及丈夫，蓋布和努特的父親。",
        "從很多壁畫中可以看到舒站於努特和蓋布之間，雙手舉著，以撐起代表天空的努特，而代表大地的蓋布則在他之下。舒在埃及文代表了乾燥、易於保存物品的性質，所以他本身也隱含有“秩序”的意思。作為大氣之神，舒性格冷靜，有影響力，是個調停者。"
    ],
    tefnut: [
        "泰芙努特",
        "濕氣女神、雨神、生雨女神。",
        "蛇和日盤的頭飾。",
        "拉的女兒，舒的妹妹及妻子，蓋布和努特的母親。",
        "她的名字在埃及代表了濕氣-導致物品腐化的性質，所以隱含有無秩序的意思 (和舒相反)。泰芙努特在地上的化身是母獅。她與舒神結婚，預示著自然界的復甦和繁茂。"
    ],
    geb: [
        "蓋布",
        "大地之神。",
        "黑或綠皮膚（代表肥沃的泥活合和生長的萬物）。",
        "舒及泰芙努特的兒子，努特的哥哥及丈夫，歐西里斯、賽特、伊西絲及奈芙蒂斯的父親。",
        "蓋布關押著邪惡的人的靈魂，使他們無法進入天堂。因與自己的妹妹努特形影不離而導致世間生物沒有生存的空間，於是其父親空氣之神舒受到太陽神拉的命令，將兩位戀人分開，故埃及壁畫中常可看到，以四肢罩著大地形成天空的女神與平躺形成大地的蓋伯被兩人的父親舒以跪姿分開。"
    ],
    nut: [
        "努特",
        "天空女神。",
        "藍色皮膚、以星辰遮身、通常身體捲曲，象徵蒼穹的弧度。",
        "舒及泰芙努特的女兒，蓋布的妹妹及妻子，歐西里斯、賽特、伊西絲及奈芙蒂斯的母親。",
        "傳說中太陽神拉每天日落後從她口中進入，隔日早晨再被她重新生出，代表了日夜的循環。她同時也是亡靈守護神，常被畫在墓室的屋頂或石棺的頂部。埃及人相信法老死後會進入她體內，然後再跟太陽神一樣重生。"
    ],
    osiris: [
        "歐西里斯",
        "冥神、農業富饒之神。",
        "王冠、身體像木乃伊、曲柄杖、拂塵。",
        "蓋布及努特的長子，伊西絲的哥哥及丈夫，荷魯斯的父親；也和奈芙蒂斯生了阿努比斯。",
        "歐西里斯教會人們種植莊稼、釀酒，深受人們愛戴。賽特很嫉妒自己的兄弟，於是密謀殺死他。賽特和他的親信把棺材扔進了尼羅河，溺死了歐西里斯。這造成了尼羅河每年一次的氾濫。之後伊西絲找回他並借助魔法將它復活，但又再一次被賽特所殺並肢解，之後又被復活，不過之後由於伊西絲無法維持他的生命而再次死亡，後來變成統治陰間的神。"
    ],
    isis: [
        "伊西絲",
        "死者的守護神、生命及健康女神、魔法女神。",
        "頭飾為寶座加上眼鏡蛇。",
        "蓋布及努特的長女，歐西里斯的妹妹及妻子，荷魯斯的母親。",
        "伊西斯對歐西里斯的復活起了關鍵作用。當歐西里斯被賽特殺害並肢解後，她收集散落在大地上的屍塊，並用魔法讓他重新復活。在伊西斯所有的功績中，最有名的是她施計誘騙塞特，在九柱神面前承認自己的罪過，以及發現了拉神的真名。"
    ],
    seth: [
        "賽特",
        "風暴、外國、乾旱、戰爭、沙漠、混亂之神。",
        "不明動物的頭和人身。",
        "蓋布及努特的次子，奈芙蒂斯的哥哥及丈夫。",
        "當太陽神拉在夜間遊歷陰間時，賽特就在他身旁護衛。最值得一提的是，他曾與每晚攻擊拉神的邪惡的黑暗之蛇阿匹卜戰鬥，並殺死了他。後來，當賽特的兄長歐西里斯成為一位重要的神祇時，賽特漸漸被看作與他截然相反。因為一段關於賽特在搏鬥中殺死歐西里斯的神話的產生，賽特開始成為邪惡之神。"
    ],
    nephthys: [
        "奈芙蒂斯",
        "黑暗與死亡之神、死者、屋宇的守護神。",
        "小房屋的頭飾。",
        "蓋布及努特的次女，賽特的妹妹及妻子，卻和哥哥歐西里斯生了阿努比斯（也有一說是阿努比斯是賽特之子）。",
        "據說她暗戀長兄歐西里斯卻被迫嫁給塞特，於是她為了不留遺憾遂色誘歐西里斯和他發生了關係，而這件事被塞特撞見，導致他對歐西里斯痛下殺手，也因為這件事，阿努比斯的出生有了兩種說法，有人覺得應該是原配塞特的，但同時也有非常多的人主張阿努比斯是歐西里斯的兒子。"
    ],
    //希臘
    zeus: [
        "宙斯",
        "眾神之王，也是天空、天氣、雷電、法律、秩序和命運之神。",
        "雷霆、王室權杖和鷹。",
        "克羅諾斯和瑞亞的幼子，既是赫拉的弟弟也是她的丈夫。",
        "希臘神話中跟他有關的故事多是他的情史，以貪花好色著名，女神、仙女、凡人通吃，且吃相難看。"
    ],
    hera: [
        "赫拉",
        "眾神之后，也是婚姻、婦女、生育、繼承、國王和帝國的女神。",
        "皇冠、蓮花權杖、孔雀、杜鵑和石榴。",
        "克羅諾斯和瑞亞的女兒，宙斯的姐姐兼第七任妻子，為火神、戰神、青春女神的母親。",
        "不敢說是宙斯摯愛，但在宙斯眾多的女人中，只有她得到天后的權力與尊榮；貌美但個性潑辣善妒，多次用自己的權力迫害情敵與其子女，對宙斯非常忠貞。"
    ],
    poseidon: [
        "波賽頓",
        "大海、河流、洪水、乾旱、地震和馬匹之神。",
        "三叉戟、海豚和馬。",
        "克羅諾斯和瑞亞之子，宙斯的哥哥，地位僅次於宙斯。",
        "脾氣暴躁，貪婪。他與宙斯一同分割世界，他掌管環繞大陸的所有水域，儘管他在奧林匹斯山有一席之地，但是大部分時間都住在他那海洋深處的金色宮殿裡。"
    ],
    demeter: [
        "狄蜜特",
        "生育、農業、園藝、糧食、收穫、正義的女神。",
        "豐收號角、麥穗、長翅膀的蛇和蓮花組成的神杖。",
        "克羅諾斯和瑞亞之女，宙斯的姐姐，泊瑟芬的母親。",
        "她給予大地生機，教授人類耕種，最喜歡喝冬瓜茶，狄蜜特的形象和赫拉相似，只是相貌較為和善，沒有赫拉威嚴。"
    ],
    athena: [
        "雅典娜",
        "智慧、理性、戰爭、戰略、戰鬥、手工業的女神。",
        "貓頭鷹和橄欖樹。",
        "宙斯和墨提斯之女，她是從宙斯的頭部全副武裝的誕生出來的。",
        "與赫絲緹雅、阿蒂蜜絲並列為三大處女神，她是智慧與力量的完美結合，也是法律與秩序的保護者，還特別會做衣服，在世人心中地位很高，雅典城以她命名，古希臘神殿裡面的女神像幾乎都是雅典娜。"
    ],
    apollo: [
        "阿波羅",
        "光明、真實、音樂、癒合、瘟疫、預言、詩歌和箭術之神。",
        "弓箭、箭袋、里拉琴、烏鴉。",
        "宙斯和勒托之子，和阿蒂蜜絲是孿生兄妹。",
        "精通箭術，百發百中，擅彈七弦琴，個性光明磊落，從不說謊，多才多藝的，顏值絕佳、身材完美，是男神中的極品。"
    ],
    artemis: [
        "阿蒂蜜絲",
        "狩獵、荒野、野生動物、分娩、瘟疫和月亮的女神。",
        "弓、狩獵長矛、動物皮毛、鹿或其他動物。",
        "宙斯和勒托之女，和阿波羅為孿生姐弟。",
        "與赫絲緹雅、雅典娜並列為三大處女神，小時候與哥哥阿波羅關係密切，但因中了阿波羅的陷阱而不小心射死自己的愛人，之後兩人再也不見面，這時傳說中太陽與月亮不會同時出現的原因。"
    ],
    aphrodite: [
        "羅黛蒂",
        "愛、性趣、美麗、誘惑以及樂趣的女神。",
        "鴿子、蘋果、扇貝、貝殼和香桃木花環。",
        "丈夫是赫菲斯托斯，同時也周旋於很多情夫之間，其中最有名的是阿瑞斯。",
        "她常被描繪為被其子厄洛斯跟隨的美麗女子，一出生就擁有最完美的身形樣貌，是女性美的典範。"
    ],
    ares: [
        "阿瑞斯",
        "軍事、戰爭、嗜血、暴力、男子氣概和秩序之神。",
        "黃金裝甲、青銅長矛、雕鴞、禿鷲和毒蛇。",
        "宙斯和赫拉之子。",
        "個性粗暴而嗜血，尚武好鬥，有時情緒來了見人就砍，其實他武功和頭腦都不是特別厲害，頻頻被女戰神雅典娜打敗。"
    ],
    hephaestus: [
        "赫菲斯托斯",
        "火災、冶煉、石匠、雕刻和火山之神。",
        "鐵鎚，鐵鉗和鐵砧。",
        "赫拉單性生殖的兒子，阿芙蘿黛蒂的丈夫。",
        "中唯一長得醜的，不受爸媽喜愛，所以被丟下山還摔成跛子，但他鍛造的技巧高超，為眾神製造武器和鎧甲，太陽神阿波羅的太陽馬車，小愛神的金箭都是他鑄造的，但妻子頻頻出軌，離異後追過女戰神雅典娜，可惜人家是處女神，無情被拒絕。"
    ],
    hermes: [
        "荷米斯",
        "神的信差，也是旅遊、信件、貿易、偷竊、詭計、語言、寫作、外交、體育、格鬥和畜牧業之神。",
        "雙蛇杖，帶翅膀的拖鞋和旅遊者的帽子。",
        "宙斯和邁亞之子。",
        "機智靈敏、口才伶俐，身懷偷竊之術，一出生就偷走哥哥阿波羅的神牛，行走敏捷，是眾神中速度最快者，常為宙斯完成任務，是神界與人界的信差，是將死者帶入冥界的使者，也是穿梭各界的旅行者。"
    ],
    hestia: [
        "荷絲提雅",
        "爐邊、家庭、烹飪和健康的女神。",
        "壁爐和水壺。",
        "克羅諾斯和瑞亞之女，宙斯的姐姐。",
        "沒有顯著的個性，與阿蒂蜜絲、雅典娜並列為三大處女神，所以不能穿太暴露。"
    ],
    //印度
    visnu: [
        "梵天",
        "創造之神、智慧之神。",
        "吠陀經、黃金、孔雀（或天鵝）、王冠、蓮花。",
        "從毗濕奴的肚臍中出生，無父母，配偶為辯才天女。",
        "與毗濕奴、濕婆並稱三主神，掌管世界的創造，但他卻比另外兩位主神更來的沒人氣，傳說中是因為他因為不誠實惹怒了濕婆而給他下了詛咒，除了不誠實外，他也蠻會惹禍的，他可以賜福給苦行者，但胡亂賜福造成世界平衡混亂，需要依靠其他兩位幫忙收拾爛攤子。"
    ],
    brahma: [
        "毗濕奴",
        "保護神。",
        "善見神輪、法螺、蓮花、及金剛杵、大鵬金翅鳥、舍沙（巨蛇）。",
        "梵天從毗濕奴的肚臍中出生，配偶為吉祥天女。",
        "與梵天、濕婆並稱三主神，負責維護世界的存續。性情溫和，常對信徒施予恩惠，曾在因為失去愛妻的濕婆差點毀滅世界時站出來拯救世界，毗濕奴作為保護者和維持者擁有許多化身。"
    ],
    siva: [
        "濕婆",
        "毀滅之神、風暴之神、苦行之神、舞蹈之神、治癒神。",
        "三叉戟、劍、「比那卡」（弓）、「卡特萬伽」（棍棒）、蛇、大白牛。",
        "第一任妻子是薩蒂，在其自焚去世後；第二任妻子為薩蒂轉生的雪山神女。",
        "梵天、濕婆並稱三主神，掌管世界的毀滅，他也是三主神中地位最高的。傳說，其妻雪山神女從後面用雙手摀住濕婆雙目，瞬時從濕婆額頭出現第三隻眼。額上的第三隻眼能噴毀滅一切的神火，在宇宙週期性的毀滅之際，他會用這隻眼睛殺死所有神和其他一切生物。"
    ]
}


function openStroyArea(name) {
    getList(name);
    $("#storyTitle").text(story[name][0]);
    $("#storyContent").text(story[name][1]);
    $("#storyImage").attr("src", "static/image/" + name + ".jpg");
    $(".story_area").attr("class", "story_area opening");
}

function getList(name) {
    $("#list").empty();
    for (var i = 0; i < godName[name].length; i++) {
        var godNameText = godName[name][i];
        var pathText = slicePath[name][i];
        var targetIndex = pathText.search(/_/);
        var godEnglishName = pathText.substring(0, targetIndex);
        $("#list").prepend(
            `<div class="slice_wrap" id="${godEnglishName}">
                <img src="static/image/${name}/${pathText}">
                    <div class="slice_name" onclick="openDetail('${name}', '${godEnglishName}')">
                        <div class="slice_name_text">${godNameText}</div>
                    </div>
            </div>`
        );
    }
}

function closeStroyArea() {
    $(".story_area").addClass("closing")
    $(".introduce_wrap").hide();
    $(".introduce_wrap").css("opacity", "0");
    setTimeout(function () {
        $('body').attr("class", "list_hover_open");
        $(".story_wrap").attr("class", "story_wrap");
        $(".story_area").attr("class", "story_area");
        initIntroducePage();
    }, 200)
}

function initIntroducePage() {
    $(".introduce_wrap").hide();
    $("#introduceInnerContent").show();
    $("#introduce4").hide();
}

function changToList() {
    if ($("body").attr("class") === "list_hover_open") {
        $(".list").show();
        $(".list").attr("class", "list_open list");
        $('body').attr("class", "story_hover_open");
        $(".story_wrap").attr("class", "story_wrap prevpage");
        initIntroducePage();
    }
}

function changToStory() {
    if ($("body").attr("class") === "story_hover_open") {
        $('body').attr("class", "list_hover_open");
        $(".story_wrap").attr("class", "story_wrap");
        $(".introduce_wrap").hide();
        $(".introduce_wrap").css("opacity", "0");
        initIntroducePage();
    }
}

function openDetail(area, godName) {
    $(".list").attr("class", "list");
    setTimeout(function () {
        $(".list").hide();
        var introduceArray = introduce[godName];
        $("#introduceImage").attr("src", "static/image/" + area + "/" + godName + ".png");
        $("#godName").text(introduceArray[0]);
        for (var i = 1; i < introduceArray.length; i++) {
            $("#introduce" + i).text(introduceArray[i]);
        }
        $(".introduce_wrap").show();
        $(".introduce_wrap").css("opacity", "1");
    }, 1000)
}


function goBackList() {
    $(".introduce_wrap").css("opacity", "0");
    setTimeout(function () {
        $(".introduce_wrap").hide();
        $("#introduceInnerContent").show();
        $("#introduce4").hide();
        $(".list").show();
        $(".list").attr("class", "list_open list");
    }, 1000)
}

function statusToggle(openId, closeId) {
    if ($(closeId).is(':visible')) {
        $(closeId).toggle("fast");
    }
    $(openId).toggle("fast");
}
