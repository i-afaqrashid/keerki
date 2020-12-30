import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n);
const messages = {
    'en':
        { login: "Login", signup: "Register", home: "Home", product: "Product", about: "About", contact: "Contact", 
        randomSmall: `Lorem ipsum dolor sit amet consectetur.`, 
        randomLarge: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint unde inventore fuga.", 
        tryForFree: "Try for Free!", catalogs: "Catalogs",services:"Our Services",
        randomHuge:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero corrupti, praesentium unde natus dignissimos laborum! Repellat eos aliquam tempora sit.",
        gallery:"Gallery",galleryText:"We focus on ergonomics and meeting you where you work. It's only a keystroke away."
        },
    'ar':
        { login: "تسجيل الدخول", signup: "تسجيل", home: "الصفحة الرئيسية", product: "المنتج", about: "حول", 
        contact: "اتصل", randomSmall: "الأميركية تحدي التي الأردن مخاوف", 
        randomLarge: "الأميركية تحدي التي الأردن مخاوف تتعاون في معها الأسلحة كما مصالح ويعبر", 
        tryForFree: "حاول مجانا!", catalogs: "كتالوجات",services:"خدماتنا",
        randomHuge:"الأميركية تحدي التي الأردن مخاوف تتعاون في معها الأسلحة كما مصالح ويعبرالأميركية تحدي التي الأردن مخاوف تتعاون في معها الأسلحة كما مصالح ويعبر",
        gallery:"صالة عرض",galleryText:"نحن نركز على بيئة العمل ونلتقي بك في مكان عملك. انها مجرد ضغطة مفتاح."
    },
    'ch':
        { login: "登录", signup: "寄存器", home: "家", product: "产品", about: "关于", contact: "联系", 
        randomSmall: "常理態重社俊避続", randomLarge: "常理態重社俊避続常理態重社俊避続", 
        tryForFree: "免费试用！", catalogs: "目录",services:"我们的服务",
        randomHuge:"常理態重社俊避続常理態重社俊避続常理態重社俊避続常理態重社俊避続",gallery:"画廊",
        galleryText:"我们专注于人体工程学，并在您的工作地点与您会面。这只是一个按键。"
    }
}
export default new VueI18n({ locale: 'en', fallbackLocale: 'en', messages, });
