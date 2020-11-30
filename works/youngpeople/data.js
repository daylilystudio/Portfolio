// 選單
var menu = [
  "業師團隊介紹","活動看板","線上學習","創業補給站",
]


// 各選單內網頁的配色
var menucolor = [
  "#509F7A","#2AB4C1","#D0D74C","#E14C60",
]


// 活動看板
var activity = [
  {
    img: "img/news01.jpg",
    title: "2020鹿港慶端陽系列活動",
    date: "2020-11-02",
    text: "「2020鹿港慶端陽系列活動」名列全國十二大節慶活動，今年為第43年舉辦，是全台舉辦歷史最悠久且規模最大的端午節慶活動，系列精采節目自6月25日開始等著民眾參與，包括有傳統戲曲定點演出、宮廟活動、創意彩繪立蛋、DIY活動等精彩節目。"
  },
  {
    img: "img/news02.jpg",
    title: "彰農學堂 歡迎報名參加",
    date: "2020-10-20",
    text: "王縣長表示，吃當季、享在地，最健康、最安全，縣府認真行銷「彰化優鮮」農特產品，希望農友種植的農產品如符合「三章一Q」，請趕快至縣府申請「彰化優鮮」品牌，由縣府共同幫忙行銷，目前已透過小三美日、中華郵政i郵購網路增加銷售通路，東森購物等也可洽談合作中。"
  },
  {
    img: "img/news03.jpg",
    title: "『從青出發!』2020彰化縣青年創意論壇，受理報名中! 熱情廣邀青年參與",
    date: "2020-10-16",
    text: "「2020彰化縣青年創意論壇」系列活動「青創探路」、「青年桌長培力」、「青創共學平台」皆順利辦理完畢，除邀請專家學者授課分享，也採用審議式民主討論精神與小組審議的模式進行共學，已陸續匯集許多青年朋友的意見，正式論壇將於109年9月19-20日（周六、日）於彰化縣立圖書館演講廳登場，屆時將有更多精彩的討論對話出現，備受青年關注及期待。"
  },
]


// 最新課程 (代號請看所有課程中的number，總數請保持4的倍數)
var newcourse = [
  "a001","a002","c001","c002",
]


// 課程分類 (intro限制72字以內排版才好看)
// !! 注意課程number不可重複，否則版面會亂掉
// Youtube有限制影片嵌入權限設定可參考 https://support.google.com/youtube/answer/6301625?hl=zh-Hant
var classify = [

  // 分類1 start
  {
    name: "行銷管理類",
    class: [
      {
        number: "a001",
        classname: "七縣市特色步道",
        classimg: "img/class/a001.jpg",
        intro: "課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介",
        intromore: "臺行新東歡空令？保沒回後進專必來道與，大種廠？較光物顯居問術口帶看。成人我！自燈親什學是童國在前青定他打會間野德安站太跟們清大西，滿黃都於回對民可減的自度教戰護的信影上代支的風少金但，都書兒老因濟方；這唱女風條成醫次是。我生光上；土提陸富說子解不能中調有。地飯電他制力、門我等前地……更和單天半。",
        vedio: "https://www.youtube.com/embed/S9W4vauY7Tg",
        teacher: "陳世家",
      },
      {
        number: "a002",
        classname: "瑞楓花卉農園",
        classimg: "img/class/a002.jpg",
        intro: "課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介",
        intromore: "課程說明課程說明課程說明課程說明課程說明課程說明課程說明課程說明課程說明課程說明課程說明課程說明課程說明",
        vedio: "https://www.youtube.com/embed/PdZb53SysEI",
        teacher: "陳世家",
      },
      {
        number: "a003",
        classname: "行銷三",
        classimg: "img/class/a003.jpg",
        intro: "課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介",
        intromore: "課程說明課程說明課程說明課程說明課程說明課程說明課程說明課程說明課程說明課程說明課程說明課程說明課程說明",
        vedio: "http://a.com",
        teacher: "陳世家",
      },
      {
        number: "a004",
        classname: "行銷四",
        classimg: "img/class/a004.jpg",
        intro: "課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介",
        intromore: "課程說明課程說明課程說明課程說明課程說明課程說明課程說明課程說明課程說明課程說明課程說明課程說明課程說明",
        vedio: "http://a.com",
        teacher: "吳春美",
      },
      {
        number: "a005",
        classname: "行銷五",
        classimg: "img/class/a005.jpg",
        intro: "課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介",
        intromore: "課程說明課程說明課程說明課程說明課程說明課程說明課程說明課程說明課程說明課程說明課程說明課程說明課程說明",
        vedio: "http://a.com",
        teacher: "陳世家",
      },
    ]
  },
  // 分類1 end

  // 分類2 start
  {
    name: "媒體設計類",
    class: [
      {
        number: "b001",
        classname: "媒體一",
        classimg: "img/class/b001.jpg",
        intro: "課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介",
        intromore: "課程說明課程說明課程說明課程說明課程說明課程說明課程說明課程說明課程說明課程說明課程說明課程說明課程說明",
        vedio: "http://a.com",
        teacher: "吳春美",
      },
      {
        number: "b002",
        classname: "媒體二",
        classimg: "img/class/b002.jpg",
        intro: "課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介",
        intromore: "課程說明課程說明課程說明課程說明課程說明課程說明課程說明課程說明課程說明課程說明課程說明課程說明課程說明",
        vedio: "http://a.com",
        teacher: "吳春美",
      },
      {
        number: "b003",
        classname: "媒體三",
        classimg: "img/class/b003.jpg",
        intro: "課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介",
        intromore: "課程說明課程說明課程說明課程說明課程說明課程說明課程說明課程說明課程說明課程說明課程說明課程說明課程說明",
        vedio: "http://a.com",
        teacher: "",
      },
      {
        number: "b004",
        classname: "媒體四",
        classimg: "img/class/b004.jpg",
        intro: "課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介",
        intromore: "課程說明課程說明課程說明課程說明課程說明課程說明課程說明課程說明課程說明課程說明課程說明課程說明課程說明",
        vedio: "http://a.com",
        teacher: "吳春美",
      },
      {
        number: "b005",
        classname: "媒體五",
        classimg: "img/class/b005.jpg",
        intro: "課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介",
        intromore: "課程說明課程說明課程說明課程說明課程說明課程說明課程說明課程說明課程說明課程說明課程說明課程說明課程說明",
        vedio: "http://a.com",
        teacher: "克萊爾",
      },
    ]
  },
  // 分類2 end

  // 分類3 start
  {
    name: "農業指導類",
    class: [
      {
        number: "c001",
        classname: "農業一",
        classimg: "img/class/c001.jpg",
        intro: "課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介",
        intromore: "課程說明課程說明課程說明課程說明課程說明課程說明課程說明課程說明課程說明課程說明課程說明課程說明課程說明",
        vedio: "http://a.com",
        teacher: "克萊爾",
      },
      {
        number: "c002",
        classname: "農業二",
        classimg: "img/class/c002.jpg",
        intro: "課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介",
        intromore: "課程說明課程說明課程說明課程說明課程說明課程說明課程說明課程說明課程說明課程說明課程說明課程說明課程說明",
        vedio: "http://a.com",
        teacher: "克萊爾",
      },
      {
        number: "c003",
        classname: "農業三",
        classimg: "img/class/c003.jpg",
        intro: "課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介",
        intromore: "課程說明課程說明課程說明課程說明課程說明課程說明課程說明課程說明課程說明課程說明課程說明課程說明課程說明",
        vedio: "http://a.com",
        teacher: "克萊爾",
      },
      {
        number: "c004",
        classname: "農業四",
        classimg: "img/class/c004.jpg",
        intro: "課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介",
        intromore: "課程說明課程說明課程說明課程說明課程說明課程說明課程說明課程說明課程說明課程說明課程說明課程說明課程說明",
        vedio: "http://a.com",
        teacher: "米老師",
      },
      {
        number: "c005",
        classname: "農業五",
        classimg: "img/class/c005.jpg",
        intro: "課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介課程簡介",
        intromore: "課程說明課程說明課程說明課程說明課程說明課程說明課程說明課程說明課程說明課程說明課程說明課程說明課程說明",
        vedio: "http://a.com",
        teacher: "米老師",
      },
    ]
  },
  // 分類3 end
]


// 師資
var teachers = [
  {
    number: "T01",
    name: "陳世家",
    intro: "觀程作他有實可學好走他父收城望舞……他常回減，共坡關不早，人現樹張上！認開皮速水的天像陸未色？心是行期為長停，住畫行？實時高以以廣才要，就的那體處白這利金之充就案美命分。",
    photo: "img/T01.jpg",
    fb: "",
    youtube: "http://1.com",
  },
  {
    number: "T02",
    name: "吳春美",
    intro: "路連斯。了過不大所因最小己是完值面究從真黃依，車生爭識，這樣著苦為色助直目問開的於院有，發點需提員任保後。那媽多公告文加個之。",
    photo: "img/T02.jpg",
    fb: "http://1.com",
    youtube: "http://1.com",
  },
  {
    number: "T03",
    name: "克萊爾",
    intro: "來達流兒上不書無研洋和清，行會而：要像遠，們首試理提然腦出心少員到人的標程道球的出立究內才語打北說青都或行一品我下有石步子詩能會從積高到效學本微口講機只良山都文人打的下以故經我它著。",
    photo: "img/T03.jpg",
    fb: "http://1.com",
    youtube: "http://1.com",
  },
  {
    number: "T03",
    name: "米老師",
    intro: "統不經第定麼影路當價觀立美了客低子，球己用的然不土謝施樣加我在來世為可。任校你弟這感位資日和會引步史司差外花。長不響率前動備人兩然為到存是，石處廣天受達我度化長美動給。",
    photo: "img/T04.jpg",
    fb: "http://1.com",
    youtube: "http://1.com",
  },
]


// 創業補給站
var links = [
  {
    img: "img/logo_chcg.png",
    url: "https://www.chcg.gov.tw/",
    intro: "彰化縣資訊網，視覺以紙飛機迴繞整個彰化，意指飛翔與穿梭鄉鎮，宣示領航、改造彰化的決心。"
  },
  {
    img: "img/logo_bocach.png",
    url: "https://www.bocach.gov.tw/",
    intro: "配合行政院文化部推動台灣全國文藝季根植地方及社區總體營造等業務，是推動地方文化的主力。"
  },
  {
    img: "img/logo_coa.png",
    url: "https://www.coa.gov.tw/",
    intro: "農業委員會主管全國農、林、漁、牧及糧食行政事務，各處室並視業務之需要，分科辦事。"
  },
  {
    img: "img/logo_sme.png",
    url: "https://sme.moeasmea.gov.tw/",
    intro: "臺灣最大的創業資源平台，提供創業貸款、創新創業、創業計劃書撰寫方法等資訊以及提供創業諮詢服務。"
  },
  {
    img: "img/logo_ustart.png",
    url: "https://ustart.yda.gov.tw/",
    intro: "教育部青年署U-start創新創業計畫,為建立大專校院產學合作創新創業機制，供甫出大學青年的創業場域。"
  },
  {
    img: "img/logo_niea.png",
    url: "https://www.careernet.org.tw/",
    intro: "中華民國全國創新創業總會，由一群獲得政府青年創業貸款補助，創業有成且熱心社會的有為企業家組成。"
  },
]


// 關於我們、聯繫我們
var about = {
  about_intro: "裡情景此快！獨地張亞你不大是動程資際，臺之家今力多樂息；跟展班加統臺此，死良或研就多如，後此覺成究行日會速書邊差發那只意主說風北節人備吃區不病進房在用帶能有終一。德印即一否器他小馬經例美速老？商能職社黨，生足小回長福法近是紙海怎南大又路，銷手愛時言團。言個地房了經的的黃部早爾王容在新到、立個自經以節一教市半開你運出民那文得怕我大？行是生。司綠條製、加性會市作，所外經事呢、我能廣關味心結頭、往不過動演教對有士人力時，界此如很長運要或：何近家分主沒明不他兒用專難。想之勢支，口的亮花組酒獨弟天；如作大狀生部另業則：根人個著外海母、量孩決處的是回；中農直立賽校正，音且真國時。裡一天於卻身電生助形些地半英務，達立不節是著小三重是國中候年得大西大少人關？神位國熱文主動基縣頭色色管旅：時在室媽去時灣：經間沒已真值如金裡色還對入藥人方法回來汽來變？",
  line: "https://line.ee/8irVsdfsdf",
  googleForm: "https://docs.google.com/forms/d/e/1FAIpQLScb9l4nodHrd9trHuCvmNjgn4d5ZM6p1eq0a7zj8c8jr0Sc2Q/formResponse",
  FormNameNum: "entry.2079302642",
  FormMailNum: "entry.1566832314",
  FormTxtNum: "entry.333083870",
}