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
        containerOffer: "Have you tried our Container Offer?", address: "Guanghzou,China", contactNo: "1885265612",
        main: "Main", copyRight: "copyright Keerki 2020", resources: "Resources", freeCatalog: "Free Catalog", blog: "Blog",
        request: "Request", updates: "Updates",
        signUpHeading:"Register Your Account!",
        signUpdummy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed",
        yourName: "Your Name*", fullName: "Full Name", email: "Email address*", enterEmail: "Enter email address", phone: "Phone Number*", phonePlaceholder: "Phone Number", createPassword: "Create Password*", enterPassword: "Enter Your Password",
        confirmPassword: "Confirm Password*",confirmPasswordPlaceholder:"Confirm Password"
        ,termsAndConditions:"I agree to term & conditions",registerAccountBtn:"Register Account",or:"OR",
        registerWithGoogle:"Register With Google",registerWithFacebook:"Register With Facebook"
        ,back:"Back",loginHeading:"Login to your account",loginDescription:"Login to your account to manage all your information and details",loginEmail:"Email",enterYourEmail:"Enter your email address",
        password:"Password*",forgotPassword:"Forgot Password",loginWithSocialMedia:"Login with social media",noAccount:"No account?Create an account now",
        forgotPasswordHeading:"Forgot your password?",forgotPasswordDescription:"Enter your email that you used to create your account and we will reset your passeord for you",
        requestNewPassword:"Request new password",changePassword:"Change Password",changePasswordDescription:"Password must contain atleast 8 characters and include atleast one:",
        lowercaseLetter:"-Lowercase letter",uppercaseLetter:"-Uppercase letter",number:"-Number",specialCharacter:"-Special Character",oldPassword:"Old password",newPassword:"New Password",confirmNewPassword:"Confirm password",changePasswordBtn:"Change password",
        activateYourAccount:"Activate your account",activateAccountDescription:"Please check the email send to your email to activate your account and start using your account. Thank you!",invalidEmail:"Invalid Email or password",contactKeerki:"Contact Keerki if you need help",
        sessionExpire:"Your session expired due to inactivity. Please log in again.",loginToOtherAccount:"You’ve been logged out because of log in on another device.",
        technicalDifficulty:" Technical difficulty. Sorry for the inconvenience; please try again.",logoutSuccessful:"Log out successful.",accountDeactivated:"You account has been deactivated.",accountSuspended:"You account has been suspended.",
        setNewPhoto:"Set new photo",accountName:"Name:",accountEmail:"EMAIL:",accountPhone:"PHONE:",accountPassword:"PASSWORD:",
        addCompanyInfo:"Add your company info",companyName:"Company Name",companyAddress:"Address",companyPhone:"Phone",companyPersonIncharge:"Person in Charge",companyCountry:"Country",companySave:"save",companyCancel:"cancel",cardClickHere:"Click here",overViewOrderHistory:"Order History",
        overViewNotification:"Notification",overViewAccount:"Account",overViewOrderForm:"Order Form",help:"Help"
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
        partnerBtn: "كل الشركاء", clients: "العملاء", clientCard: "الأسلحة كما مصالح ويعبرالأميركية تحدي التي الأردن مخاوف تتعاون في معها الأسلحة كما مصالح ويعبر الأميركية تحدي التي الأردن مخاوف تتعاون في معها الأسلحة كما مصالح ويعبرالأميركية تحدي التي الأردن مخاوف تتعاون في معها الأسلحة كما مصالح ويعبر",
        designer: "مصمم",
        clientCardHuge: "الأسلحة كما مصالح ويعبرالأميركية تحدي التي الأردن مخاوف تتعاون في معها الأسلحة كما مصالح ويعبر الأميركية تحدي التي الأردن مخاوف تتعاون في معها الأسلحة كما مصالح ويعبرالأميركية تحدي التي الأردن مخاوف تتعاون في معها الأسلحة كما مصالح ويعبالأسلحة كما مصالح ويعبرالأميركية تحدي التي الأردن مخاوف تتعاون في معها الأسلحة كما مصالح ويعبر الأ",
        containerOffer: "هل جربت عرض الحاويات الخاص بنا؟", address: "قوانغتشو، الصين", contactNo: "1885265612",
        main: "الأساسية", copyRight: "حقوق النشر كیرکی ٢٠٢٠", resources: "مصادر", freeCatalog: "كتالوج مجاني", blog: "مدونة",
        request: "طلب", updates: "التحديثات",
        signUpHeading:"سجل حسابك!",
        signUpdummy: "الأميركية تحدي التي الأردن مخاوف تتعاون في معها الأسلحة كما مصالح ويعبر",
        yourName: "*اسمك", fullName: "الاسم بالكامل", email: "*عنوان البريد الالكترونى", enterEmail: "أدخل عنوان البريد الالكتروني", phone: "*رقم الهاتف", phonePlaceholder: "رقم الهاتف", createPassword: "*أنشئ كلمة مرور", enterPassword: "ادخل رقمك السري",
        confirmPassword: "*تأكيد كلمة المرور",confirmPasswordPlaceholder:"تأكيد كلمة المرور"
        ,termsAndConditions:"أوافق على الشروط والأحكام",registerAccountBtn:"تسجيل حساب",or:"أو",
        registerWithGoogle:"سجل مع جوجل",registerWithFacebook:"سجل مع الفيسبوك"
        ,back:"عودة",loginHeading:"تسجيل الدخول إلى حسابك",loginDescription:"تسجيل الدخول إلى حسابك لإدارة جميع المعلومات والتفاصيل الخاصة بك",loginEmail:"البريد الإلكتروني",enterYourEmail:"أدخل عنوان بريدك الالكتروني",
        password:"*كلمه السر",forgotPassword:"هل نسيت كلمة المرور",loginWithSocialMedia:"تسجيل الدخول باستخدام وسائل التواصل الاجتماعي",noAccount:"ليس لديك حساب؟ إنشاء حساب الآن",
        forgotPasswordHeading:"نسيت رقمك السري؟",forgotPasswordDescription:"أدخل بريدك الإلكتروني الذي استخدمته لإنشاء حسابك وسنقوم بإعادة تعيين كلمة المرور الخاصة بك",
        requestNewPassword:"طلب كلمة مرور جديدة",changePassword:"غير كلمة السر",changePasswordDescription:":يجب أن تحتوي كلمة المرور على 8 أحرف على الأقل وتتضمن واحدًا على الأقل:",
        lowercaseLetter:"حرف صغير-",uppercaseLetter:"الحرف الكبير-",number:"رقم-",specialCharacter:"حرف خاص-",oldPassword:"كلمة سر قديمة",newPassword:"كلمة مرور جديدة",confirmNewPassword:"تأكيد كلمة المرور",changePasswordBtn:"غير كلمة السر",
        activateYourAccount:"فعل حسابك",activateAccountDescription:"!يرجى التحقق من البريد الإلكتروني المرسل إلى بريدك الإلكتروني لتفعيل حسابك والبدء في استخدام حسابك. شكرا لك",invalidEmail:"البريد الإلكتروني أو كلمة السر خاطئة",contactKeerki:"اتصل كیرکی إذا كنت بحاجة إلى مساعدة",
        sessionExpire:".انتهت جلستك بسبب عدم النشاط. الرجاد الدخول على الحساب من جديد",loginToOtherAccount:".لقد تم تسجيل خروجك بسبب تسجيل الدخول على جهاز آخر",
        technicalDifficulty:".صعوبة فنية. آسف للإزعاج؛ حاول مرة اخرى",logoutSuccessful:".تم تسجيل الخروج بنجاح",accountDeactivated:".تم تعطيل حسابك",accountSuspended:".تم تعليق حسابك",

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
        containerOffer: "您尝试过我们的集装箱优惠吗？", address: "中国广州", contactNo: "1885265612",
        main: "主要", copyRight: "版权所有Keerki 2020", resources: "资源", freeCatalog: "免费目录", blog: "博客", request: "请求", updates: "更新",
        signUpHeading:"注册您的帐户！",
        signUpdummy: "我们专注于人体工程学，并在您的工作地点与您会面。这只是一个按键。",
        yourName: "你的名字*", fullName: "全名", email: "电子邮件地址*", enterEmail: "请输入电邮地址", phone: "电话号码*", phonePlaceholder: "电话号码", createPassword: "创建密码*", enterPassword: "输入密码",
        confirmPassword: "确认密码*",confirmPasswordPlaceholder:"确认密码"
        ,termsAndConditions:"我同意条款和条件",registerAccountBtn:"注册账户",or:"要么",
        registerWithGoogle:"向Google注册",registerWithFacebook:"在Facebook上注册"
        ,back:"背部",loginHeading:"登录到您的帐户",loginDescription:"登录到您的帐户以管理所有信息和详细信息",loginEmail:"电子邮件",enterYourEmail:"输入你的电子邮箱地址",
        password:"密码*",forgotPassword:"忘记密码",loginWithSocialMedia:"用社交媒体登录",noAccount:"没有帐户？立即创建一个帐户",
        forgotPasswordHeading:"忘记密码了吗？",forgotPasswordDescription:"输入您用于创建帐户的电子邮件，我们将为您重置密码",
        requestNewPassword:"需要新密码",changePassword:"更改密码",changePasswordDescription:"密码必须包含至少8个字符，并且至少包含1个字符：",
        lowercaseLetter:"-小写字母",uppercaseLetter:"-大写字母",number:"-数",specialCharacter:"-特殊字符",oldPassword:"旧密码",newPassword:"新密码",confirmNewPassword:"确认密码",changePasswordBtn:"更改密码",
        activateYourAccount:"激活你的账号",activateAccountDescription:"请检查发送到您的电子邮件的电子邮件以激活您的帐户并开始使用您的帐户。谢谢！",invalidEmail:"无效的电子邮件或密码",contactKeerki:"如果需要帮助，请联系Keerki",
        sessionExpire:"您的会话因不活动而过期。请重新登录。",loginToOtherAccount:"您已因在另一台设备上登录而被注销。",
        technicalDifficulty:"技术难度。抱歉给你带来不便;请再试一次。",logoutSuccessful:"Log out successful.",accountDeactivated:"注销成功。",accountSuspended:"您的帐户已被暂停。",
    }
}
export default new VueI18n({ locale: 'en', fallbackLocale: 'en', messages, });
