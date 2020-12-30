import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n);
const messages = {
    'en':
    {
        login: "Login", signup: "Register", home: "Home", product: "Product", about: "About", contact: "Contact",
        randomSmall: `Lorem ipsum dolor sit amet consectetur.`,
        randomLarge: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint unde inventore fuga.",
        tryForFree: "Try for Free!", catalogs: "Catalogs", services: "Our Services",
        randomHuge: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inaute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu",
        gallery: "Gallery", galleryText: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
        seeMore: "See More", partners: "Our partners",
        partnerText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnauptate velit esse cillum dolore eu",
        partnerBtn: "All Partners", clients: "What clients say",
        clientCard: "Lorem ipsum dolor sit Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun t utamet, consectetur adipiscing elit, sed do eiusmod temporincididunt utLorem ipsum dolor sit amet, consectetur adipiscing elit, s",
        designer: "Designer",
        clientCardHuge: "Lorem ipsum dolor sit Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun t utamet, consectetur adipiscing elit, sed do eiusmod temporincididunt utLorem ipsum dolor sit amet, consectetur adipiscing elit, sLorem ipsum dolor dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun t ut",
        containerOffer:"Have you tried our Container Offer?",address:"Guanghzou,China",contactNo:"1885265612",
        main:"Main",copyRight:"copyright Keerki 2020",resources:"Resources",freeCatalog:"Free Catalog",blog:"Blog",
        request:"Request",updates:"Updates"
    },
    'ar':
    {
        login: "تسجيل الدخول", signup: "تسجيل", home: "الصفحة الرئيسية", product: "المنتج", about: "حول",
        contact: "اتصل", randomSmall: "الأميركية تحدي التي الأردن مخاوف",
        randomLarge: "الأميركية تحدي التي الأردن مخاوف تتعاون في معها الأسلحة كما مصالح ويعبر",
        tryForFree: "حاول مجانا!", catalogs: "كتالوجات", services: "خدماتنا",
        randomHuge: "الأميركية تحدي التي الأردن مخاوف تتعاون في معها الأسلحة كما مصالح ويعبرالأميركية تحدي التي الأردن مخاوف تتعاون في معها الأسلحة كما مصالح ويعبر",
        gallery: "صالة عرض", galleryText: "نحن نركز على بيئة العمل ونلتقي بك في مكان عملك. انها مجرد ضغطة مفتاح.",
        seeMore: "شاهد المزيد", partners: "شركاؤنا", partnerText: "نحن نركز على بيئة العمل ونلتقي بك في مكان عملك. انها مجرد ضغطة مفتاح",
        partnerBtn: "كل الشركاء", clients: "客户 怎么 说", clientCard: "الأسلحة كما مصالح ويعبرالأميركية تحدي التي الأردن مخاوف تتعاون في معها الأسلحة كما مصالح ويعبر الأميركية تحدي التي الأردن مخاوف تتعاون في معها الأسلحة كما مصالح ويعبرالأميركية تحدي التي الأردن مخاوف تتعاون في معها الأسلحة كما مصالح ويعبر",
        designer: "مصمم",
        clientCardHuge: "الأسلحة كما مصالح ويعبرالأميركية تحدي التي الأردن مخاوف تتعاون في معها الأسلحة كما مصالح ويعبر الأميركية تحدي التي الأردن مخاوف تتعاون في معها الأسلحة كما مصالح ويعبرالأميركية تحدي التي الأردن مخاوف تتعاون في معها الأسلحة كما مصالح ويعبالأسلحة كما مصالح ويعبرالأميركية تحدي التي الأردن مخاوف تتعاون في معها الأسلحة كما مصالح ويعبر الأ",
        containerOffer:"هل جربت عرض الحاويات الخاص بنا؟",address:"قوانغتشو، الصين",contactNo:"1885265612",
        main:"الأساسية",copyRight:"حقوق النشر Keerki 2020",resources:"مصادر",freeCatalog:"كتالوج مجاني",blog:"مدونة",
        request:"طلب",updates:"التحديثات"

    },
    'ch':
    {
        login: "登录", signup: "寄存器", home: "家", product: "产品", about: "关于", contact: "联系",
        randomSmall: "常理態重社俊避続", randomLarge: "常理態重社俊避続常理態重社俊避続",
        tryForFree: "免费试用！", catalogs: "目录", services: "我们的服务",
        randomHuge: "常理態重社俊避続常理態重社俊避続常理態重社俊避続常理態重社俊避続", gallery: "画廊",
        galleryText: "我们专注于人体工程学，并在您的工作地点与您会面。这只是一个按键。",
        seeMore: "查看更多", partners: "我们的伙伴", partnerText: "我们专注于人体工程学，并在您的工作地点与您会面。这",
        partnerBtn: "所有合作伙伴", clients: "客户怎么说",
        clientCard: "常理態重社俊避続常理態重社俊避続常理態重社俊避続常理態重社俊避続常理態重社俊避続常理態重社俊避続常理態重社俊避続常理態重社俊避続常理態重社俊避続常理態重社俊避続常理態重社俊避続常理態重社俊避続",
        designer: "设计师",
        clientCardHuge: "常理態重社俊避続常理態重社俊避続常理態重社俊避続常理態重社俊避続常理態重社俊避続常理態重社俊避続常理態重社俊避続常理態重社俊避続常理態重社俊避続常理態重社俊避続常理態重社俊避続常理態重社俊避続常理態重社俊避続常理態重社俊避続常理態重社俊避続常理態重社俊避続常理態重社俊避続常理態重社俊避続常理態重社俊避続常理態重社俊避続常理態重社俊避続常理態重社俊避続常理態重社俊避続常理態重社俊避続",
        containerOffer:"您尝试过我们的集装箱优惠吗？",address:"中国广州",contactNo:"1885265612",
        main:"主要",copyRight:"版权所有Keerki 2020",resources:"资源",freeCatalog:"免费目录",blog:"博客",request:"请求",updates:"更新"
    }
}
export default new VueI18n({ locale: 'en', fallbackLocale: 'en', messages, });
