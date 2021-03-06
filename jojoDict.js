// Fetch data from json
var data;
fetch('data.json').then(function(response) {
  if(response.ok) {
    response.json().then(function(json) {
      data = json;
    });
  } else {
    console.log('Network request for data.json failed with response ' + response.status + ': ' + response.statusText);
  }
});

var language = document.querySelector('#language');
var searchTerm = document.getElementById('input');

function returnValue(){//get language selection
    if (language.value==="CN->EN"){
        var ENresult = new Array();
        var found = false;
        for(var i = 0; i < data.length; i++){
            var word = data[i].CN
            word = word.toLowerCase();
            word =  word.replace(/[\ |\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|||\-|\_|\+|\=|\||\\|||\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?]/g,"");
            var targetWord = searchTerm.value
            targetWord = targetWord.toLowerCase();
            targetWord = targetWord.replace(/[\ |\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|||\-|\_|\+|\=|\||\\|||\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?]/g,"");
            if (word === targetWord){
                ENresult.push(data[i].EN);
                found = true;
            }
        }
        if (found==true){
            document.getElementById("output").innerHTML = ENresult;
        }
        else{
            document.getElementById("output").innerHTML = "没找到_(:з」∠)_</br>检查一下翻译语言？还是没找到的话就发邮件提醒管理员吧";
        }
    }
    else if(language.value==="EN->CN"){
        var CNresult;
        var found = false;
        for(var i = 0; i < data.length; i++){
            var word = data[i].EN
            word = word.toLowerCase();
            word =  word.replace(/[\ |\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|||\-|\_|\+|\=|\||\\|||\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?]/g,"");
            var targetWord = searchTerm.value
            targetWord = targetWord.toLowerCase();
            targetWord = targetWord.replace(/[\ |\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|||\-|\_|\+|\=|\||\\|||\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?]/g,"");
            if (word === targetWord){
                CNresult=data[i].CN;
                found = true;
            }
        }
        if (found==true){
        document.getElementById("output").innerHTML = CNresult;        
        }
        else{
        document.getElementById("output").innerHTML = "Target word not found.</br>_(-ω-`_)⌒)_</br>Please email me to add the term you're looking for.";
        }
    }
}

function changeImg(){
    var obj = document.getElementById("imageSection");  
    if (obj.getAttribute("src") == "img/1.jpg") {
        obj.setAttribute("src", "img/2.jpg");     
    }
    else if (obj.getAttribute("src") == "img/2.jpg") {
        obj.setAttribute("src", "img/3.jpg");     
    }
    else if (obj.getAttribute("src") == "img/3.jpg") {
        obj.setAttribute("src", "img/4.jpg");     
    }    
    else if (obj.getAttribute("src") == "img/4.jpg") {
        obj.setAttribute("src", "img/5.jpg");     
    }    
    else if (obj.getAttribute("src") == "img/5.jpg") {
        obj.setAttribute("src", "img/6.jpg");     
    }    
    else if (obj.getAttribute("src") == "img/6.jpg") {
        obj.setAttribute("src", "img/7.jpg");     
    }
    else if (obj.getAttribute("src") == "img/7.jpg") {
        obj.setAttribute("src", "img/8.jpg");     
    }   
    else if (obj.getAttribute("src") == "img/8.jpg") {
        obj.setAttribute("src", "img/9.jpg");     
    }    
    else if (obj.getAttribute("src") == "img/9.jpg") {
        obj.setAttribute("src", "img/1.jpg");
    }    
}

Array.prototype.unique = function(){
	this.sort();
	var res = [];
	var json = {};
	for (var i = 0; i < this.length; i++) {
		if(!json[this[i]]){
			res.push(this[i]);
			json[this[i]] = 1;
		}
	}
	return res;
}

var setClass = {
	hasClass: function(elements,cName){	
		if(elements.className.match(new RegExp( "(\\s|^)" + cName + "(\\s|$)") ))
			return true;
		else
			return false;
	},
	addClass: function(elements,cName){	
		if( !this.hasClass( elements,cName ) ){ 
			elements.className += " " + cName; 
		};
	},
	removeClass: function(elements,cName){	
		if( this.hasClass( elements,cName ) ){ 
			elements.className = elements.className.replace( new RegExp( "(\\s|^)" + cName + "(\\s|$)" )," " ); 
		}
	}
}

var Bind = function(This){
	return function(){
		This.init();
	}
}

function AutoComplete(input,auto,arr) {
	this.obj = document.getElementById(input);
	this.autoObj = document.getElementById(auto);
	this.search_value = "";
	this.index = -1;		
	this.value_arr = ['近射程替身', '替身', '引力', 'JoJo的奇妙冒险', '星尘斗士', '白金之星', '空条承太郎', '红色魔术师', '穆罕默德.阿布德尔', '隐者之紫', '乔瑟夫.乔斯达', '绿之法皇', '花京院典明', '银色战车', '简·皮耶尔·波鲁纳雷夫', '愚者', '伊奇', '世界', '迪奥', '灰塔', '暗蓝之月', '提尼尔船长', '力', '永恒', '黑檀木恶魔', '诅咒的迪波', '迪波', '黄色节制', '橡胶灵魂', '倒吊男', 'J·凯尔', '皇帝', '荷尔·荷斯', '女帝', '尼娜', '妮娜', '命运车轮', '正义', '奈亚婆婆', '恩雅婆婆', '恋人', '钢铁阿丹', '太阳', '死神13', '男子气概', '审判', '卡梅欧', '女教皇', '蜜特拉', '盖布神', '盖布', '恩多尔', '克努姆神', '欧因哥', '托托神', '波因哥', '阿努比斯神', '恰卡', '巴丝提女神', '玛莱雅', '赛特神', '阿雷西', '奥西里斯神', '丹尼尔·J·达比', '达比', '荷鲁斯神', '佩特夏', '宠物店', '阿图姆神', '泰伦斯·T·达比', '泰伦斯', '高音萨克斯', '肯尼·G', '亚空瘴气', '华尼拉·艾斯', '不灭钻石', '疯狂钻石', '东方仗助', '轰炸空间', '虹村亿泰', '回音', '广濑康一', '天堂之门', '岸边露伴', '杀手皇后', '吉良吉影', '银水链', '片桐安十郎', '极恶中队', '虹村形兆', '辛红辣椒', '音石明', '心锁',"艾哲红石", '小林玉美', '表面', '间田敏和', '紫色恋人', '山岸由花子', '珍珠果酱', '托尼欧·托拉萨迪', '透明宝宝', '静·乔斯达', '虫眼', '虫噬', '收成者', '矢安宫重清', '灰姑娘', '辻彩', '原子心之父', '吉良吉广', '猜拳小子', '大柳贤', '大地风火', '支仓未起隆', '公路之星', '喷上裕也', '迷途猫', '猫草', '超能平底锅', '钢田一丰大', '折纸师', '宫本辉之辅', '廉价把戏', '乙雅三', '黄金之风', '黄金体验', '乔鲁诺·乔巴拿', '祖罗·祖班纳', '布罗诺·布加拉提', '布鲁诺·布差拉迪', '布鲁诺·普查拉提', '蓝色忧郁', '雷欧·阿帕基', '阿帕基', '雷奥·艾班乔', '性感手枪', '盖多·米斯达', '史密斯飞船', '纳兰迦·吉尔卡', '基尔迦·纳兰卓', '紫烟', '潘纳科特·弗葛', '辣妹', '特里休·乌纳', '银色战车镇魂曲', '黄金体验镇魂曲', '绯红之王', '狄阿波罗', '迪亚波罗', '多比欧', '黑色安息日', '波尔波', '柔软机器', '马里奥.兹凯罗', '兹凯罗', '手艺工作', '沙雷', '小脚', '霍尔马吉欧', '镜中人', '伊鲁索', '海滩男孩', '贝西', '壮烈成仁', '娃娃脸', '梅洛尼', '白色相簿', '加丘', '冲击', '史克亚罗', '脸部特写', '提查诺', '诺特里亚斯B.I.G', '臭名昭著的B.I.G', '卡涅尔', '金属制品', '里苏特·涅罗', '青春岁月', '绿D', '乔可拉特', '绿洲', '塞可', '滚石', '史可利比', '石之海', '石之自由', '空条徐伦', '白金之星.世界', '亲吻', '艾梅斯·罗斯提罗', '放火烧厝', '斗魂骇客', '智能', '斗魂骇客', '艾罗特', '天气预报', '安波里欧.亚曼纽', '恩波里欧.亚曼纽', '潜行者', '纳鲁西索·阿纳苏', '安纳苏', '阿那苏', '白蛇', '新月', '天堂制造', '普奇神父', '恩里克·普奇', '天堂制造', '咕咕娃娃', '奎丝', '曼哈顿传送站', '曼哈顿转运站', '约翰葛利.A', '地狱高速公路', '桑达.麦奎恩', '讨债人.玛丽莲曼森', '蜜拉休', '跳跃闪电杰克', '朗库朗库拉', '阴魂.冰兹基特', '史波兹.马克思', '生存者', '古奇', '行星波动', '维瓦诺.魏斯伍德', '龙之梦', '马友友', 'D&G', '不知道是啥', '绿色婴儿', '恶魔枷锁', '缪柯雅.缪拉', '缪缪', '波西米亚狂想曲', '盎格鲁', '骇游天外', '里奇艾尔', '地底世界', '唐那泰罗.凡赛思', '飙马野郎', '獠牙', '乔尼.乔斯达', '铁球破坏者', '杰洛·齐贝林', '贾一乐', '喔！寂寞的我', '曼登.提姆', '骇人恶兽', '费迪南特', '迪亚哥.布兰度', '护霜旅行者', '赫特.潘兹', '泪之乘车卷', '露西.史提尔', '轻易发生的肮脏行为', 'D4C', '华尼.瓦伦泰', '幸福列车', '寂静之道', '音人', '砂男', '盛世之墓', '聆听我的旋律', '奥耶哥摩巴', '连线', '波克派哈特小子', '男人领域', '林可·罗德艾根', '林果·罗德艾根', '触碰彩虹', '布拉克摩亚', '香糖山之泉', '为你纹身', '神秘十一人众', '管钟', '麦克.O', '二十世纪少年', '马杰特.马杰特', '南北战争 ', '艾萨尔.RO', '巧克力迪斯可', 'JoJo福音', '柔软且湿润', '东方定助', '空条仗世文', '佩斯利公园', '广濑康穗', '螺丝之王', '东方常秀 ', '纸月之王', '东方剑', '虚无之王', '东方宪助IV', '笹目樱二郎', '加州大床', '东方大弥', '天生完美', '虹村京', '秋日落叶', '欺诈小路', '我即岩石', '八木山夜露', '速度之王', '东方常敏', '嘟比.哇', '大年寺山爱唱', '华丽挚爱', '作并卡蕾拉', '艾.费克斯兄弟', '维他命C', '田最环', '步行之心', '东方鸩', '蓝色夏威夷', '多洛米特？', '犬型？？？', '豆銑礼',"银色波纹疾走" , 'SpeedWagon财团', '埃及九荣神', '热情', '布加拉提小队', '暗杀小队', '迪亚波罗亲卫队', '东方水果店', '吸血鬼', '尸身人', '柱男', '幽灵', '岩石人类', '胎记', '波纹', '波纹使者', '七十七辉轮', '能看见幽灵少女的小路', 'SBR大赛', '回旋', '恶魔掌心', '壁眼', '石化病', '命运', '亚利桑那沙漠', '平行宇宙', '石鬼面', '红宝石', '神圣遗体', '洛卡卡卡果实', '洛卡卡卡走私集团', '岸边露伴一动不动', '战斗潮流', '少年Jump周刊', '史特雷', '乔纳森.乔斯达', '乔瑟夫.乔斯达', '空条贞夫', '声优', '迪奥.布兰度', '威尔·A·谢皮利', '史比特瓦根', '艾莉娜', '达里奥.布兰度', '乔瑟夫·乔斯达', '桑塔拿', '卡兹', '艾特西', '华姆', '瓦姆乌', '瓦乌姆', '华姆', '战斗天才', '风之流法', '神砂岚',  "山吹色波纹疾走", "波纹乱涡疾走", '最终流法', "生命磁气波纹疾走", '浑楔飒', '神砂岚', '最后的波纹', '棺材', "波纹气功", "太阳子民阿兹特克", "恩嘉红宝石", "究极深仙脉疾走", "波纹切断法", "波纹仙踢", "仙道", "替身攻击", "波纹疾走", "强制波纹呼吸", "波纹探知器", "绯红色波纹疾走", "水中青绿波纹疾走", "波纹疾走连打", "波纹回旋刀", "波纹肘支疾走", "弹簧拳", "蛇首立带", "太阳光波", "怪人齐贝林", "风之骑士镇", "人类的赞歌", "勇气的赞歌", "波克","布拉霍", "塔卡斯", "多配地", "旦亚", "史摩基", "修特罗哈姆", "龙舌兰", "西撒·安德里欧·齐贝林", "丹尼", "火焰艾特西", "战术大师", "炎之流法", "流法", "怪焰王流法", "怪焰王大车狱流法", "献祭", "光之流法", "辉彩华刃", "究极生物", "露骨的肋骨","紫棠花色波纹疾走","金黄色波纹疾走","深仙脉疾走", 'Close-Range Stands', 'Stand', 'Gravity', 'JoJo\'s Bizarre Adventure', 'Stardust Crusaders', 'Star Platinum', 'Jotaro Kujo', 'Magician\'s Red', 'Muhammad Avdol', 'Hermit Purple', 'Joseph Joestar', 'Hierophant Green', 'Noriaki Kakyoin', 'Silver Chariot', 'Jean Pierre Polnareff', 'The Fool', 'Iggy', 'The World', 'DIO', 'Tower of Gray', 'Dark Blue Moon', 'Impostor Captain Tennille', 'Strength', 'Forever', 'Ebony Devil', 'Devo the Cursed', "Red Stone of Aja",'Devo', 'Yellow Temperance', 'Rubber Soul', 'Hanged Man', 'J. Geil', 'Emperor', 'Hol Horse', 'Empress', 'Nena', 'Wheel of Fortune', 'Justice', 'Enya the Hag', 'Lovers', 'Steely Dan', 'Sun', 'Death Thirteen', 'Mannish Boy', 'Judgement', 'Cameo', 'High Priestess', 'Midler', 'Geb', 'N\'Doul', 'Khnum', 'Oingo', 'Tohth', 'Boingo', 'Anubis', 'Chaka', 'Bastet', 'Mariah', 'Sethan', 'Alessi', 'Osiris', 'Daniel J. D\'Arby', 'D\'Arby', 'Horus', 'Pet Shop', 'Atum', 'Telence T. D\'Arby', 'Telence', 'Tenore Sax', 'Kenny G.', 'Cream', 'Vanilla Ice', 'Diamond is Unbreakable', 'Crazy Diamond', 'Josuke Higashikata', 'The Hand', 'Okuyasu Nijimura', 'Echoes', 'Koichi Hirose', 'Heaven\'s Door', 'Rohan Kishibe', 'Killer Queen', 'Yoshikage Kira', 'Aqua Necklace', 'Anjuro Katagiri', 'Bad Company', 'Keicho Nijimura', 'Red Hot Chili Pepper', 'Akira Otoishi', 'The Lock', 'Tamami Kobayashi', 'Surface', 'Toshikazu Hazamada', 'Love Deluxe', 'Yukako Yamagishi', 'Pearl Jam', 'Tonio Trussardi', 'Achtung Baby', 'Shizuka Joestar', 'Ratt', 'Bug-Eaten', 'Harvest', 'Shigekiyo Yangu', 'Cinderella', 'Aya Tsuji', 'Atom Heart Father', 'Yoshihiro Kira', 'Boy II Man', "Metal Silver Overdrive", 'Ken Oyanagi', 'Earth Wind and Fire', 'Mikitaka Hazekura', 'Highway Star', 'Yuya Fungami', 'Stray Cat', 'Tama', 'Super Fly', 'Toyohiro Kanedaichi', 'Enigma', 'Terunosuke Miyamoto', 'Cheap Trick', 'Masazo Kinoto', 'Vento Aureo', 'Goldenwind', 'Gold Experience', 'Giorno Giovanna', 'Sticky Fingers', 'Bruno Bucciarati', 'Moody Blues', 'Leone Abbacchio', 'Abbacchio', 'Leone Abbacchio', 'Sex Pistols', 'Guido Mista', 'Aerosmith', 'Narancia Ghirga', 'Purple Haze', 'Pannacotta Fugo', 'Spice Girl', 'Trish Una', 'Chariot Requiem', 'Gold Experience Requiem', 'King Crimson', 'Diavolo', 'Vinegar Doppio', 'Black Sabbath', 'Polpo', 'Soft Machine', 'Mario Zucchero', 'Zucchero', 'Kraft Work', 'Sale', 'Little Feet', 'Formaggio', 'Man in the Mirror', 'Illuso', 'Mr.President', 'Beach Boy', 'Pesci', 'The Grateful Dead', 'Prosciutto', 'Baby Face', 'Melone', 'White Album', 'Ghiaccio', 'Clash', 'Squalo', 'Talking Head', 'Tiziano', 'Notorious B.I.G.', 'Carne', 'Metallica', 'Risotto Nero', 'Green Day', 'Cioccolata', 'Oasis', 'Secco', 'Rolling Stones', 'Scolippi', 'Stone Ocean', 'Stone Free', 'Jolyne Cujoh', 'Star Platinum: The World', 'Kiss', 'Ermes Costello', 'Burning Down the House', 'Foo Fighters', 'intellect', 'F.F', 'Foo Fighters', 'Weather Report', 'Emporio Alniño', 'Diver Down', 'Narciso Anasui', 'Anasui', 'Whitesnake', 'C-Moon', 'Made in Heaven', 'The priest Enrico Pucci', 'Enrico Pucci', 'Made in Heaven', 'Goo Goo Dolls', 'Gwess', 'Manhattan Transfer', 'Johngalli A', 'Highway to Hell', 'Thunder McQueen', 'Marilyn Manson', 'Miraschon', 'Jumpin\' Jack Flash', 'Lang Rangler', 'Limp Bizkit', 'Sports Maxx', 'Survivor', 'Guccio', 'Planet Waves', 'Viviano Westwood', 'Dragon\'s Dream', 'Yo-Yo Ma', 'D an G', 'Green, Green Grass of Home', 'The Green Baby', 'Jail House Lock', 'Miuccia Miuller', 'MiuMiu', 'Bohemian Rhapsody', 'Ungalo', 'Sky High', 'Rikiel', 'Under World', 'Donatello Versus', 'Steel Ball Run', 'Tusk', 'Johnny Joestar', 'Ball Breaker', 'Gyro Zeppeli', 'Gyro', 'Oh! Lonesome Me', 'Mountain Tim', 'Scary Monsters', 'Dr. Ferdinand', 'Diego Brando', 'Cream Starter', 'Hot Pants', 'Ticket to Ride', 'Lucy Steel', 'Dirty Deeds Done Dirt Cheap', 'Funny Valentine', 'Love Train', 'In a Silent Way', 'Soundman', 'Sandman', 'Hey Ya!', 'Pocoloco', 'Tomb of the Boom', 'Boom Boom Family', 'Boku no Rhythm wo Kiitekure', 'Oyecomova', 'Wired', 'Pork Pie Hat Kid', 'Mandom', 'Ringo Roadagain', 'Catch the Rainbow', 'Blackmore', 'Sugar Mountain\'s Spring', 'Tatoo You!', 'Eleven Men', 'Tubular Bells', 'Mike O.', '20th Century Boy', 'Magent Magent', 'Civil War', 'Axl RO', 'Chocolate Disco', 'JoJolion', 'Soft & Wet', 'Josuke Higashikata', 'Josefumi Kujo', 'Paisley Park', 'Yasuho Hirose', 'Nut King Call', 'Joshu Higashikata', 'Paper Moon King', 'Tsurugi Higashikata', 'King Nothing', 'Norisuke Higashikata IV', 'Ojiro Sasame', 'California King Bed', 'Daiya Higashikata', 'Born This Way', 'Kyo Nijimura', 'Les Feuilles', 'Shakedown Road', 'I Am a Rock', 'Yotsuyu Yagiyama', 'Speed King', 'Jobin Higashikata', 'Doobie Wah!', 'Aisho Dainenjiyama', 'Love Love Deluxe', 'Karera Sakunami', 'A. Phex brother', 'Vitamin C', 'Tamaki Damo', 'Walking Heart', 'Hato Higashikata', 'Milagro Man', 'Blue Hawaii', 'Dolomite', 'Doggy Style', 'Rai Mamezuku', 'Brain Storm', 'Ozon Baby', 'Poor Tom', 'Families', 'Speedwagon Foundation', 'Egypt 9 Glory Gods', 'Passione', 'Bucciarati\'s Gang', 'La Squadra di Esecuzione', 'Diavolo\'s Guard Squad', 'Higashikata Fruit Company', 'Vampires', 'Zombies', 'Pillar Men', 'Ghosts', 'Rock Humans', 'Birthmark', 'Ripple', 'Ripple User', '77 Rings', 'Ghost Girl\'s Alley', 'Steel Ball Run (race)', 'Spin', 'Devil\'s Palm', 'Wall Eyes', 'Rock Disease', 'Fate', 'Arizona Desert', 'Alternate Universe', 'Stone Mask', 'Red Stone of Aja', 'Saint\'s Corpse', 'Rokakaka Fruits', 'Rokakaka Smuggling Organization', 'Rohan Kishibe Does Not Move', 'Battle Tendency', 'Weekly Shōnen Jump', 'Straizo', 'Jonathan Joestar', 'Joseph Joestar', 'Sadao Kujo', 'Voice Actor', 'Dio Brando', 'Will Anthonio Zeppeli', 'Robert E. O. Speedwagon', 'George Joestar', 'Dario Brando', 'Wang Chan', 'Jack the Ripper', 'Poko', 'Bruford', 'Tarkus', 'Tonpetty', 'Dire', 'Adams', 'Doobie', 'Styx', 'Smokey Brown', 'Rudol von Stroheim', 'Donovan', 'Santana', 'Caesar Anthonio Zeppeli ', 'Kars', 'Esidisi', 'ACDC', 'Esidisi of the Flame', 'Body Manipulation', 'Master Strategis', 'Flame Mode', 'Mode', 'Erratic Blaze King Mode', 'Erratic Blaze King\'s Giant Cartwheel Prison', 'Self Detonation', 'Light Mode', 'Light Slip Blades', 'Ultimate Life Form', 'Wamuu', 'Wham', 'Fighting Genius', 'Head Gear', 'Wind Mode', 'Fighting Technique', 'Divine Sandstorm', 'Wind Suit', 'Final Mode', 'Atmospheric Rift ', 'Holy Sandstorm', 'Wind Protector', 'Ribs Blades', 'The Final Ripple', 'coffin', "Life Magnetism Overdrive", "Tornado Overdrive", "Ultimate Deep Pass Overdrive", "Ripple Cutter", "Sendo Wave Kick", "Sendō (lit. Way of The Hermit/Wizard)", "Claw-like bones", "the Sun People Aztecs", "Stand Attack", "Overdrives(lit. Ripple Dash/Sprint)", "Forced Ripple Breathing", "Ripple Detector", "Ripple Detector", "Turquoise Blue Overdrive", "Rebuff Overdrive", "Bubble Cutter Gliding","Overdrive Barrage", "Snake Muffler", "Sun Rays", "Zepelli the Eccentric", "Windnights Lot", "Human Praise", "Praise of Bravery", "Tequila", "Danny"];	
}
AutoComplete.prototype = {
	init: function(){
		var This = this;
		setClass.removeClass(This.autoObj,"hidden");
		this.autoObj.style.left = this.obj.offsetLeft + "px";
		this.autoObj.style.top = this.obj.offsetTop + this.obj.offsetHeight + "px";
	},
	deleteDIV: function(){
		while(this.autoObj.hasChildNodes()){
			this.autoObj.removeChild(this.autoObj.firstChild);
		}
		setClass.addClass(this.autoObj,"hidden");
	},
	autoOnmouseover: function(index){
		if(index != this.index){
			setClass.addClass(this.autoObj.children[index],"on");
			setClass.removeClass(this.autoObj.children[this.index],"on");
			this.index = index;
		}
	},
	setValue: function(This){
		return function(){
			This.obj.value = this.seq;
			setClass.addClass(This.autoObj,"hidden");
		}
	},
	pressKey: function(event){
		var code = event.keyCode;
		var length = this.autoObj.children.length;
		if(code == 38){		//↑
			setClass.removeClass(this.autoObj.children[this.index],"on");
			this.index--;
			if(this.index < 0){
				this.index = length - 1;
			}
			setClass.addClass(this.autoObj.children[this.index],"on");
			this.obj.value = this.autoObj.children[this.index].seq;
		}else if(code == 40){	//↓
			setClass.removeClass(this.autoObj.children[this.index],"on");
			this.index++;
			if(this.index > length-1){
				this.index = 0;
			}
			setClass.addClass(this.autoObj.children[this.index],"on");
			this.obj.value = this.autoObj.children[this.index].seq;
		}else{		
			this.obj.value = this.autoObj.children[this.index].seq;
			setClass.addClass(this.autoObj,"hidden");
			this.index = -1;
		}
	},

    start: function(event){
		event = event || window.event;
		var code = event.keyCode;
		var This = this;
		if(code != 13 && code != 38 && code != 40){
			this.init();
			this.deleteDIV();
			this.search_value = this.obj.value;
			var valueArr = this.value_arr.unique();
			if(this.obj.value.replace(/(^\s*)|(\s*$)/g,"") == ""){ return;}
			try{
				var reg = new RegExp("("+ this.obj.value +")","i");	//输
			}catch(e){
				alert(e.message); 
			}
			var div_index = 0;	
			for (var i = 0; i < valueArr.length; i++) {
				if(reg.test(valueArr[i])){
					var div = document.createElement("div");
					div.className = "auto_out";
					div.seq = valueArr[i];
					div.index = div_index;
					div.innerHTML = valueArr[i].replace(reg,"<strong>$1</strong>");
					this.autoObj.appendChild(div);
					setClass.removeClass(this.autoObj,"hidden");
					div_index++;
					if(div_index == 1) {
						setClass.addClass(this.autoObj.firstChild,"on");
						this.index = 0;
					}
					div.onmouseover = function(){
						This.autoOnmouseover(this.index);
					}
					div.onclick = this.setValue(This);
				}
			}
		}else{
			this.pressKey(event);
		}
		window.onresize = Bind(This);
	}
}