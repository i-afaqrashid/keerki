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
        signUpHeading: "Register Your Account!",
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
        overViewNotification:"Notification",overViewAccount:"Account",overViewOrderForm:"Order Form",help:"Help",companyInfo:"Company info",companyInfoName:"Company Name",companyInfoCountry:"Country",companyInfoContactPerson:"Contact Person",companyInfoCity:"City",companyInfoProvince:"Province",companyInfoPostCode:"Post Code",companyInfoDist:"Dist&Street",
        companyInfoPhone:"Phone Number",companyInfoEmail:"Email",companyInfoAddLogo:"Add logo",companyInfoDropFile:"or drop it right here",shippingInfo:"Shipping Info",shippingInfoPort:"Port",shippingInfoCountry:"Country",currencySAR:"SAR",currencyAED:"AED",currencyUSD:"USD",currencyEURO:"EURO",aboutProducts:"About Products",productUnitPrice:"Unit Price",
        productQuantity:"Quantity",productItem:"Item",productDescription:"Description",remarks:"Remarks",remarksOther:"Other",remarksTradingTerm:"Trading Term",paymentTerm:"Payment Term",paymentTermLC:"LC",paymentTermTT:"TT",shippingMethod:"Shipping Method",shippingMethodBySea:"BY SEA",shippingMethodByAir:"BY AIR",deliveryTime:"Delivery Time",
        deliveryTime30Days:"30 DAYS",deliveryTime20Days:"20 DAYS",deliveryTime10Days:"10 DAYS",companyInfoOthers:"Others",companyInfoSave:"Save and Continue",companyInfoReset:"Reset",formHeaderAccountDetails:"Account Details",formPreviewEdit:"Edit",formPreviewView:"View"
        ,formPreviewCancel:"Cancel",formPreviewSend:"Send",downloadYourCatalog:"Download your catalog",catalogName:"Name*",catalogEmail:"Email*",catalogPhone:"Phone*",catalogDownloadBtn:"Download",allMessages:"All Messages",newMessages:"New Messages",messagesUnReadBtn:"Unread",messagesReadBtn:"Read",messageOrderShipped:"Order Shipped",message1Minute:"1 minute ago",messageView:"View",messageDismiss:"DISMISS",messageNewHadi:"New Message From Hedi",messageOrderDelivered:"Order Delivered",
        allNotifications:"All Notifications",newNotifications:"New Orders",notificationReadBtn:"Read",notificationUnReadBtn:"Unread",notification1Minute:"1 minute ago",notificationView:"View",notificationDismiss:"DISMISS",notificationOrderShipped:"Order Shipped",notificationNewHedi:"New Message From Hedi",notificationOrderDelivered:"Order Delivered",quoteOrders:"Quote Orders",serviceOrders:"Service Orders",shippingOrders:"Shipping Orders",orderFormHistory:"Order forms history",orderSearchByNumber:"Search by order No.",orderSelectAll:"Select all",orderDownloadAll:"Download All",orderStatus:"Status",orderDate:"Date",
        orderPrice:"Price",orderCategories:"Categories",orderSomethingElse:"Something else",inProgressBtn:"IN PROGRESS",doneBtn:"DONE",waitingBtn:"WAITING",canceledBtn:"CANCELED",orderDownload:"Download",keerki:"Keerki",overview:"Overview",orderHistory:"Order History",account:"Account",notifications:"Notifications",messages:"Messages",settings:"Settings",logout:"Logout",continueSession:"Continue Session",logoutTime:"1 minute 52 seconds",automaticLogout:"You will be automatically logged out in",viewInTemplates:"View in templates",popupMessages:"Messages", popupDaysAgo:"2 days ago",popupNewMessages:"You have 3 new Messages",popupDismiss:"DISMISS",popupViewAll:"view all",
        popupNotifications:"Notifications",popupNewNotifications:"You have 3 new notifications",
        dashboardHeading:"Dashboard",dashboardDescription:"Get summary of your weekly online transactions here.",newUserWelcomeHeading:"Welcome to Keerki.",newUserWelcomeDescription:"A new experience designed to help you manage your orders faster!",newUserHistoryPageHeading:"View all orders in one place!",newUserHistoryPageDescription:"Check all  your orders and details in orders history page and check their status.",newUserOrderTemplateHeading:"View your orders in templates ",newUserOrderTemplateDescription:"Even better and faster you can view all your status and orders in templates",newUserAccountInformationHeading:"Manage your account information and add your company details",
        newUserAccountInformationDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ",newUserNotificationHeading:"Send messages and view notification within one screen",newUserNotificationDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo"
        ,newUserNext:"Next",newUserPrev:"Previous",newUserDone:"Done"
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
        signUpHeading: "سجل حسابك!",
        signUpdummy: "الأميركية تحدي التي الأردن مخاوف تتعاون في معها الأسلحة كما مصالح ويعبر",
        yourName: "*اسمك", fullName: "الاسم بالكامل", email: "*عنوان البريد الالكترونى", enterEmail: "أدخل عنوان البريد الالكتروني", phone: "*رقم الهاتف", phonePlaceholder: "رقم الهاتف", createPassword: "*أنشئ كلمة مرور", enterPassword: "ادخل رقمك السري",
        confirmPassword: "*تأكيد كلمة المرور", confirmPasswordPlaceholder: "تأكيد كلمة المرور"
        , termsAndConditions: "أوافق على الشروط والأحكام", registerAccountBtn: "تسجيل حساب", or: "أو",
        registerWithGoogle: "سجل مع جوجل", registerWithFacebook: "سجل مع الفيسبوك"
        , back: "عودة", loginHeading: "تسجيل الدخول إلى حسابك", loginDescription: "تسجيل الدخول إلى حسابك لإدارة جميع المعلومات والتفاصيل الخاصة بك", loginEmail: "البريد الإلكتروني", enterYourEmail: "أدخل عنوان بريدك الالكتروني",
        password: "*كلمه السر", forgotPassword: "هل نسيت كلمة المرور", loginWithSocialMedia: "تسجيل الدخول باستخدام وسائل التواصل الاجتماعي", noAccount: "ليس لديك حساب؟ إنشاء حساب الآن",
        forgotPasswordHeading: "نسيت رقمك السري؟", forgotPasswordDescription: "أدخل بريدك الإلكتروني الذي استخدمته لإنشاء حسابك وسنقوم بإعادة تعيين كلمة المرور الخاصة بك",
        requestNewPassword: "طلب كلمة مرور جديدة", changePassword: "غير كلمة السر", changePasswordDescription: ":يجب أن تحتوي كلمة المرور على 8 أحرف على الأقل وتتضمن واحدًا على الأقل:",
        lowercaseLetter: "حرف صغير-", uppercaseLetter: "الحرف الكبير-", number: "رقم-", specialCharacter: "حرف خاص-", oldPassword: "كلمة سر قديمة", newPassword: "كلمة مرور جديدة", confirmNewPassword: "تأكيد كلمة المرور", changePasswordBtn: "غير كلمة السر",
        activateYourAccount: "فعل حسابك", activateAccountDescription: "!يرجى التحقق من البريد الإلكتروني المرسل إلى بريدك الإلكتروني لتفعيل حسابك والبدء في استخدام حسابك. شكرا لك", invalidEmail: "البريد الإلكتروني أو كلمة السر خاطئة", contactKeerki: "اتصل كیرکی إذا كنت بحاجة إلى مساعدة",
        sessionExpire: ".انتهت جلستك بسبب عدم النشاط. الرجاد الدخول على الحساب من جديد", loginToOtherAccount: ".لقد تم تسجيل خروجك بسبب تسجيل الدخول على جهاز آخر",
        technicalDifficulty: ".صعوبة فنية. آسف للإزعاج؛ حاول مرة اخرى", logoutSuccessful: ".تم تسجيل الخروج بنجاح", accountDeactivated: ".تم تعطيل حسابك", accountSuspended: ".تم تعليق حسابك",
        setNewPhoto: "تعيين صورة جديدة", accountName: ":اسم", accountEmail: ":البريد الإلكتروني", accountPhone: ":هاتف", accountPassword: ":كلمه السر",
        addCompanyInfo: "أضف معلومات شركتك", companyName: "اسم الشركة", companyAddress: "عنوان", companyPhone: "هاتف", companyPersonIncharge: "الشخص المسؤول", companyCountry: "بلد", companySave: "حفظ", companyCancel: "إلغاء", cardClickHere: "انقر هنا", overViewOrderHistory: "تاريخ الطلب",
        overViewNotification: "تنبيه", overViewAccount: "الحساب", overViewOrderForm: "نموذج الطلب", help: "مساعدة", companyInfo: "معلومات الشركة", companyInfoName: "اسم الشركة", companyInfoCountry: "بلد", companyInfoContactPerson: "الشخص الذي يمكن الاتصال به", companyInfoCity: "مدينة", companyInfoProvince: "المحافظة", companyInfoPostCode: "الرمز البريدي", companyInfoDist: "الحي والشارع",
        companyInfoPhone: "رقم الهاتف", companyInfoEmail: "البريد الإلكتروني", companyInfoAddLogo: "أضف الشعار", companyInfoDropFile: "أو أسقطها هنا", shippingInfo: "معلومات الشحن", shippingInfoPort: "ميناء", shippingInfoCountry: "بلد", currencySAR: "ريال سعودي", currencyAED: "درهم إماراتي", currencyUSD: "دولار أمريكي", currencyEURO: "اليورو", aboutProducts: "حول المنتجات", productUnitPrice: "سعر الوحدة",
        productQuantity: "كمية", productItem: "بند", productDescription: "وصف", remarks: "ملاحظات", remarksOther: "آخر", remarksTradingTerm: "مدة التداول", paymentTerm: "شروط الدفع", paymentTermLC: "ایل سی", paymentTermTT: "ٹی ٹی", shippingMethod: "طريقة الشحن", shippingMethodBySea: "عن طريق البحر", shippingMethodByAir: "عن طريق الجو", deliveryTime: "موعد التسليم",
        deliveryTime30Days: "٣٠ يوما", deliveryTime20Days: "٢٠ يوما", deliveryTime10Days: "١٠ يوما", companyInfoOthers: "الآخرين", companyInfoSave: "حفظ ومتابعة", companyInfoReset: "إعادة تعيين", formHeaderAccountDetails: "تفاصيل الحساب", formPreviewEdit: "تعديل", formPreviewView: "رأي"
        , formPreviewCancel: "إلغاء", formPreviewSend: "إرسال", downloadYourCatalog: "قم بتنزيل الكتالوج الخاص بك", catalogName: "*اسم", catalogEmail: "*البريد الإلكتروني", catalogPhone: "*هاتف", catalogDownloadBtn: "تحميل", allMessages: "جميع الرسائل", newMessages: "رسائل جديدة", messagesUnReadBtn: "غير مقروء", messagesReadBtn: "اقرأ", messageOrderShipped: "تم شحن الطلب", message1Minute: "١ منذ دقيقة", messageView: "رأي", messageDismiss: "نبذ", messageNewHadi: "Hedi رسالة جديدة من", messageOrderDelivered: "أجل تسليم",
        allNotifications: "كل الإخطارات", newNotifications: "طلبات جديدة", notificationReadBtn: "اقرأ", notificationUnReadBtn: "غير مقروء", notification1Minute: "١ منذ دقيقة", notificationView: "رأي", notificationDismiss: "نبذ", notificationOrderShipped: "تم شحن الطلب", notificationNewHedi: "Hedi رسالة جديدة من", notificationOrderDelivered: "أجل تسليم", quoteOrders: "أوامر الاقتباس", serviceOrders: "أوامر الخدمة", shippingOrders: "أوامر الشحن", orderFormHistory: "ترتيب النماذج التاريخ", orderSearchByNumber: ".البحث عن طريق رقم الطلب", orderSelectAll: "اختر الكل", orderDownloadAll: "تحميل الكل", orderStatus: "الحالة", orderDate: "تاريخ",
        orderPrice: "السعر", orderCategories: "التصنيفات", orderSomethingElse: "شيء آخر", inProgressBtn: "في تقدم", doneBtn: "منجز", waitingBtn: "انتظار", canceledBtn: "ألغيت", orderDownload: "تحميل", keerki: "كيركي", overview: "نظرة عامة", orderHistory: "تاريخ الطلب", account: "الحساب", notifications: "إشعارات", messages: "الرسائل", settings: "إعدادات", logout: "تسجيل خروج", continueSession: "تواصل الجلسة", logoutTime: "1 دقيقة و 52 ثانية", automaticLogout: "سيتم تسجيل خروجك تلقائيًا", viewInTemplates: "عرض في القوالب", popupMessages: "الرسائل", popupDaysAgo: "٢ منذ أيام", popupNewMessages: "لديك 3 رسائل جديدة", popupDismiss: "نبذ", popupViewAll: "مشاهدة الكل",
        popupNotifications: "إشعارات", popupNewNotifications: "لديك 3 إخطارات جديدة",
        dashboardHeading: "لوحة القيادة", dashboardDescription: ".احصل على ملخص للمعاملات الأسبوعية عبر الإنترنت هنا", newUserWelcomeHeading: "مرحبا بكم في كيركي.", newUserWelcomeDescription: "تجربة جديدة مصممة لمساعدتك على إدارة طلباتك بشكل أسرع!", newUserHistoryPageHeading: "عرض كل الطلبات في مكان واحد!", newUserHistoryPageDescription: "تحقق من جميع طلباتك وتفاصيلك في صفحة سجل الطلبات وتحقق من حالتها.", newUserOrderTemplateHeading: "عرض طلباتك في قوالب ", newUserOrderTemplateDescription: "أفضل وأسرع يمكنك عرض كل حالتك وأوامرك في قوالب", newUserAccountInformationHeading: "إدارة معلومات حسابك وإضافة تفاصيل شركتك",
        newUserAccountInformationDescription: "الأميركية تحدي التي الأردن مخاوف تتعاون في معها الأسلحة كما مصالح ويعبرالأميركية تحدي التي الأردن مخاوف تتعاون في معها الأسلحة كما مصالح ويعبر", newUserNotificationHeading: "إرسال الرسائل وعرض الإخطار في شاشة واحدة", newUserNotificationDescription: "الأميركية تحدي التي الأردن مخاوف تتعاون في معها الأسلحة كما مصالح ويعبرالأميركية تحدي التي الأردن مخاوف تتعاون في معها الأسلحة كما مصالح ويعبر"
        , newUserNext: "التالى", newUserPrev: "السابق", newUserDone: "منجز"
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
        signUpHeading: "注册您的帐户！",
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
        setNewPhoto:"设置新照片",accountName:"名称:",accountEmail:"电子邮件:",accountPhone:"电话:",accountPassword:"密码:",
        addCompanyInfo:"添加公司信息",companyName:"公司名",companyAddress:"地址",companyPhone:"电话",companyPersonIncharge:"负责人",companyCountry:"国家",companySave:"保存",companyCancel:"取消",cardClickHere:"点击这里",overViewOrderHistory:"订单历史",
        overViewNotification:"通知",overViewAccount:"帐户",overViewOrderForm:"订单",help:"救命",companyInfo:"公司资料",companyInfoName:"公司名",companyInfoCountry:"国家",companyInfoContactPerson:"联系人",companyInfoCity:"市",companyInfoProvince:"省",companyInfoPostCode:"邮编",companyInfoDist:"街区",
        companyInfoPhone:"电话号码",companyInfoEmail:"电子邮件",companyInfoAddLogo:"添加徽标",companyInfoDropFile:"或放在这里",shippingInfo:"运输信息",shippingInfoPort:"港口",shippingInfoCountry:"国家",currencySAR:"SAR",currencyAED:"AED",currencyUSD:"USD",currencyEURO:"EURO",aboutProducts:"关于产品",productUnitPrice:"单价",
        productQuantity:"数量",productItem:"项目",productDescription:"描述",remarks:"备注",remarksOther:"其他",remarksTradingTerm:"交易期限",paymentTerm:"付款期限",paymentTermLC:"LC",paymentTermTT:"TT",shippingMethod:"邮寄方式",shippingMethodBySea:"按海",shippingMethodByAir:"空运",deliveryTime:"交货时间",
        deliveryTime30Days:"30天",deliveryTime20Days:"20天",deliveryTime10Days:"10天",companyInfoOthers:"其他",companyInfoSave:"保存并继续",companyInfoReset:"重启",formHeaderAccountDetails:"帐户详细资料",formPreviewEdit:"编辑",formPreviewView:"视图"
        ,formPreviewCancel:"取消",formPreviewSend:"发送",downloadYourCatalog:"下载目录",catalogName:"Name*",catalogEmail:"电子邮件*",catalogPhone:"电话*",catalogDownloadBtn:"下载",allMessages:"所有讯息",newMessages:"新讯息",messagesUnReadBtn:"未读",messagesReadBtn:"读",messageOrderShipped:"订单出货",message1Minute:"1分钟前",messageView:"视图",messageDismiss:"解雇",messageNewHadi:"Hedi的新讯息",messageOrderDelivered:"订单已交付",
        allNotifications:"所有通知",newNotifications:"新订单",notificationReadBtn:"读",notificationUnReadBtn:"未读",notification1Minute:"1分钟前",notificationView:"视图",notificationDismiss:"解雇",notificationOrderShipped:"订单出货",notificationNewHedi:"Hedi的新讯息",notificationOrderDelivered:"订单已交付",quoteOrders:"报价单",serviceOrders:"服务订单",shippingOrders:"运输订单",orderFormHistory:"订单历史记录",orderSearchByNumber:"按订单号搜索",orderSelectAll:"全选",orderDownloadAll:"全部下载",orderStatus:"状态",orderDate:"日期",
        orderPrice:"价钱",orderCategories:"分类目录",orderSomethingElse:"还有别的",inProgressBtn:"进行中",doneBtn:"完成",waitingBtn:"等候",canceledBtn:"取消",orderDownload:"下载",keerki:"基尔基",overview:"总览",orderHistory:"订单历史",account:"帐户",notifications:"通知事项",messages:"留言内容",settings:"设定值",logout:"登出",continueSession:"继续会议",logoutTime:"1分52秒",automaticLogout:"您将自动注销",viewInTemplates:"在模板中查看",popupMessages:"留言内容", popupDaysAgo:"2天前",popupNewMessages:"您有3条新消息",popupDismiss:"解雇",popupViewAll:"查看全部",
        popupNotifications:"通知事项",popupNewNotifications:"您有3条新通知",
        dashboardHeading:"仪表板",dashboardDescription:"在此处获取每周在线交易的摘要。",newUserWelcomeHeading:"欢迎来到Keerki。",newUserWelcomeDescription:"旨在帮助您更快地管理订单的全新体验！",newUserHistoryPageHeading:"在一处查看所有订单！",newUserHistoryPageDescription:"在订单历史记录页面中检查所有订单和详细信息，并检查其状态。“，newUserOrderTemplateHeading：”在模板中查看订单“，newUserOrderTemplateDescription：”甚至更好更快地可以在模板中查看所有状态和订单",newUserAccountInformationHeading:"管理您的帐户信息并添加公司详细信息",
        newUserAccountInformationDescription:"常理態重社俊避続常理態重社俊避続常理態重社俊避続常理態重社俊避続"
        ,newUserNext:"下一个",newUserPrev:"以前",newUserDone:"完成了"
    }
}
export default new VueI18n({ locale: localStorage.currentLanguage || 'en', fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en', messages, });
