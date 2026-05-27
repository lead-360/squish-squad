// =============================================
// SQUISH SQUAD ★ Y2K hyperpop script ✨🦋
// =============================================

// =============================================
// I18N — English + Arabic 🇦🇪
// =============================================
const T = {
  en: {
    // nav
    nav_home: 'Home', nav_shop: 'Shop', nav_mystery: 'Mystery', nav_admin: 'Admin',
    lang_other: 'عربي',
    // hero / home
    hero_tagline: '★ Hyperpop Squishy Hub ★ Drop Your Reality ★',
    btn_shop_drop: 'Shop the Drop 🛍️',
    btn_mystery_box: 'Mystery Box 🎁',
    feature_ship_title: 'Free Ship AED 100+',
    feature_ship_text: 'Dubai delivery in 1-3 days 💅',
    feature_viral_title: 'Viral Picks', feature_viral_text: 'Straight off the FYP',
    feature_mystery_title: 'Mystery Mode', feature_mystery_text: 'Surprise drops every box',
    feature_curated_title: 'Hand-Curated', feature_curated_text: 'By Rawda, for the squad',
    section_squad_faves: 'Squad Faves', section_squad_faves_sub: "The drops everyone's obsessing over",
    section_lucky: 'Feeling Lucky?', section_lucky_text: 'Drop a Mystery Box. Get 3-8 surprise squishies.',
    btn_open_box: 'Open the Box! 🎀',
    footer_made_by: 'Made with 💖 by Rawda ★ Squish Squad © 2026',
    footer_handle: '@squishsquad on the internet 🌐',
    // shop
    shop_title: 'The Shop', shop_subtitle: 'Every squish. All the drops. Hand-picked vibes only.',
    filter_all: 'All ★', filter_needoh: 'Nee Doh 🌈', filter_mystery: 'Mystery 🎁',
    filter_viral: 'Viral 🔥', filter_cute: 'Cute 💖',
    shop_footer_hint_pre: 'Want to add products? Head to the', shop_footer_hint_link: 'Admin panel',
    // mystery page
    mystery_title: 'Mystery Box', mystery_subtitle: 'Tap the box. Reveal a random squish drop.',
    mystery_tap_hint: '👆 Tap to reveal 👆',
    mystery_inside_title: "What's Inside?", mystery_inside_sub: 'Hand-packed surprise drops, every single time',
    feature_mochi_title: 'Mochi Drops', feature_mochi_text: 'Slow-rising mochi cuties',
    feature_needoh_title: 'Nee Doh Balls', feature_needoh_text: 'The stretchy classic',
    feature_viral_pick_title: 'Viral Heat', feature_viral_pick_text: 'Trending squishies inside',
    feature_sticker_title: 'Bonus Sticker', feature_sticker_text: 'Holo sticker every box',
    mystery_pick_title: 'Pick Your Box',
    tier_mini_name: 'Mini 🌸',
    tier_mini_1: '3 surprise squishies', tier_mini_2: '1 holo sticker', tier_mini_3: 'Mystery scratch card',
    tier_squad_name: 'Squad 🌈', tier_most_loved: 'MOST LOVED',
    tier_squad_1: '5 surprise squishies', tier_squad_2: '1 GUARANTEED viral',
    tier_squad_3: '3 stickers + mini charm', tier_squad_4: 'Rainbow mystery card',
    tier_ultra_name: 'Ultra 👑',
    tier_ultra_1: '8 surprise squishies', tier_ultra_2: '2 GUARANTEED virals',
    tier_ultra_3: 'Limited edition squish', tier_ultra_4: 'Sticker pack + plush bag',
    mystery_secret_title: 'Lil Secret',
    mystery_secret_text: 'Every box is hand-packed by Rawda with a lil handwritten note 💌',
    btn_drop_in_cart: 'Drop in Cart 💖',
    // admin
    admin_title: 'Control Panel', admin_subtitle: 'Boss mode ★ Add, edit & delete your squishies',
    admin_form_title_add: '+ Add New Squish', admin_form_title_edit: '✏️ Edit Squish',
    admin_label_name: 'Name', admin_label_name_ar: 'Name in Arabic (optional)',
    admin_label_price: 'Price (AED)',
    admin_label_photo: 'Photo',
    admin_photo_upload_text: 'Click or drop a photo', admin_photo_upload_small: 'JPG / PNG · auto-resized',
    admin_label_emoji: 'Emoji (shows if no photo)',
    admin_label_desc: 'Description', admin_label_desc_ar: 'Description in Arabic (optional)',
    admin_label_color: 'Color', admin_label_badge: 'Badge (optional)',
    badge_none: 'No badge', badge_new: 'NEW! ✨', badge_viral: 'VIRAL 🔥',
    badge_hot: 'HOT 🔥', badge_limited: 'LIMITED ★',
    admin_label_category: 'Category',
    cat_needoh: 'Nee Doh', cat_mystery: 'Mystery', cat_cute: 'Cute',
    cat_needoh_viral: 'Nee Doh + Viral', cat_mystery_viral: 'Mystery + Viral', cat_cute_viral: 'Cute + Viral',
    admin_btn_add: 'Add Squish ✨', admin_btn_save: 'Save Changes 💾',
    admin_btn_cancel: 'Cancel', admin_btn_reset: '↺ Reset to Defaults',
    admin_all_products: 'All Products',
    admin_btn_edit: '✏️ Edit', admin_btn_delete: '🗑️ Delete',
    admin_photo_loaded: 'Photo loaded ✓', admin_photo_remove: '✕ Remove',
    admin_empty: 'No products yet!', admin_empty_sub: 'Use the form to add your first squish.',
    admin_footer_hint: 'Admin mode ⚙️ ★ All changes save instantly to your browser',
    // cart
    cart_title: '🛒 CART',
    cart_empty_title: 'So empty!', cart_empty_text: 'Add some squishies ★',
    cart_btn_shop_now: 'Shop Now 🦋',
    cart_total: 'Total ★',
    cart_item: 'item', cart_items: 'items',
    cart_ship_add: 'add {amount} for free shipping 🚚',
    cart_ship_unlocked: 'free shipping unlocked! 🚚✨',
    cart_clear: 'Clear', cart_checkout: 'Checkout ★',
    cart_each: 'ea',
    // checkout
    checkout_title: '🚚 CHECKOUT',
    checkout_step: 'Step 2 of 2 ★ Tell us where to send the squishes',
    checkout_label_name: 'Full Name *', checkout_label_phone: 'Phone Number *',
    checkout_label_email: 'Email (optional)', checkout_label_emirate: 'Emirate *',
    checkout_label_address: 'Full Address *', checkout_label_notes: 'Delivery Notes (optional)',
    checkout_ph_name: 'Rawda A.', checkout_ph_phone: '+971 50 123 4567',
    checkout_ph_email: 'you@email.com', checkout_ph_address: 'Building, street, area, landmark',
    checkout_ph_notes: 'Apartment number, buzzer code, preferred time...',
    checkout_items_shipping: 'items being shipped 🚚',
    checkout_free_ship_over: 'free ship over',
    checkout_btn_back: '← Back', checkout_btn_place_order: 'Place Order ★',
    checkout_missing: 'Missing',
    // success
    success_yay: 'YAY', success_order_num: 'Order',
    success_squishies: '📦 Squishies', success_total: 'Total',
    success_delivering: '🚚 Delivering to', success_uae: 'UAE 🇦🇪',
    success_call: "We'll call you to confirm 💖", success_eta: 'Squishes arriving in 1-3 days ★',
    success_btn_done: 'Done ★',
    // toasts
    toast_added: '{name} added 💖', toast_removed: 'Removed {name} 🗑️',
    toast_cart_cleared: 'Cart cleared 🌟', toast_already_empty: 'Already empty 🌟',
    toast_add_first: 'Add some squishies first! 💖', toast_cart_empty: 'Cart is empty! 🛒',
    toast_updated: 'Updated {name}! ✨', toast_added_product: 'Added {name}! 💖',
    toast_deleted: 'Deleted {name} 🗑️', toast_reset: 'Reset to defaults! ↺',
    toast_photo_processing: 'Processing photo… 📸', toast_photo_loaded: 'Photo loaded! ✨',
    toast_storage_full: 'Storage full! Try smaller photos 📸',
    toast_save_failed: 'Save failed 😢',
    toast_pick_image: 'Pick an image file',
    confirm_delete: 'Delete "{name}" forever?',
    confirm_reset: 'Reset all products to the defaults? This will erase any products you added.',
    // empty states
    shop_empty: 'No squishies yet! Add some in the Admin panel.',
    // mystery box rarities
    rarity_common: 'COMMON 💖', rarity_rare: 'RARE ★',
    rarity_epic: 'EPIC 🌈', rarity_legendary: 'LEGENDARY 👑',
    mystery_its_a: "It's a {name}!"
  },

  ar: {
    nav_home: 'الرئيسية', nav_shop: 'المتجر', nav_mystery: 'المفاجآت', nav_admin: 'الإدارة',
    lang_other: 'EN',
    hero_tagline: '★ متجر سكويشي هايبربوب ★ بدّل واقعك ★',
    btn_shop_drop: 'تسوّق المجموعة 🛍️',
    btn_mystery_box: 'صندوق المفاجآت 🎁',
    feature_ship_title: 'شحن مجاني فوق 100 درهم',
    feature_ship_text: 'توصيل دبي خلال 1-3 أيام 💅',
    feature_viral_title: 'الأكثر رواجاً', feature_viral_text: 'مباشرة من التيك توك',
    feature_mystery_title: 'وضع المفاجآت', feature_mystery_text: 'سكويشي مفاجأة في كل صندوق',
    feature_curated_title: 'مختارة بعناية', feature_curated_text: 'من روضة، إلى الصحاب',
    section_squad_faves: 'مفضلات الصحاب', section_squad_faves_sub: 'الأكثر طلباً والأكثر حباً',
    section_lucky: 'تحب تجرب حظك؟', section_lucky_text: 'اطلب صندوق مفاجآت واحصل على 3-8 قطع سكويشي.',
    btn_open_box: 'افتح الصندوق! 🎀',
    footer_made_by: 'صنع بـ 💖 من روضة ★ سكويش سكواد © 2026',
    footer_handle: '@squishsquad على الإنترنت 🌐',
    shop_title: 'المتجر', shop_subtitle: 'كل أنواع السكويشي. كل المجموعات. مختارة بحب.',
    filter_all: 'الكل ★', filter_needoh: 'ني-دوه 🌈', filter_mystery: 'مفاجآت 🎁',
    filter_viral: 'الأكثر رواجاً 🔥', filter_cute: 'كيوت 💖',
    shop_footer_hint_pre: 'تبي تضيف منتجات؟ روح لـ', shop_footer_hint_link: 'لوحة الإدارة',
    mystery_title: 'صندوق المفاجآت', mystery_subtitle: 'اضغط على الصندوق واكتشف السكويشي المفاجأة.',
    mystery_tap_hint: '👆 اضغط للكشف 👆',
    mystery_inside_title: 'شو في داخل الصندوق؟', mystery_inside_sub: 'مفاجآت مرتبة بعناية في كل مرة',
    feature_mochi_title: 'موتشي', feature_mochi_text: 'موتشي ناعم وبطيء الانتفاخ',
    feature_needoh_title: 'كرات ني-دوه', feature_needoh_text: 'الكلاسيكية المطاطية',
    feature_viral_pick_title: 'الأكثر رواجاً', feature_viral_pick_text: 'سكويشي ترند داخل الصندوق',
    feature_sticker_title: 'ملصق مجاني', feature_sticker_text: 'ملصق هولوغرافي مع كل صندوق',
    mystery_pick_title: 'اختر صندوقك',
    tier_mini_name: 'صغير 🌸',
    tier_mini_1: '3 قطع سكويشي مفاجأة', tier_mini_2: 'ملصق هولوغرافي واحد', tier_mini_3: 'بطاقة خدش غامضة',
    tier_squad_name: 'سكواد 🌈', tier_most_loved: 'الأكثر مبيعاً',
    tier_squad_1: '5 قطع سكويشي مفاجأة', tier_squad_2: 'قطعة رائجة مضمونة',
    tier_squad_3: '3 ملصقات + تميمة صغيرة', tier_squad_4: 'بطاقة قوس قزح غامضة',
    tier_ultra_name: 'ألترا 👑',
    tier_ultra_1: '8 قطع سكويشي مفاجأة', tier_ultra_2: 'قطعتين رائجتين مضمونتين',
    tier_ultra_3: 'سكويشي إصدار محدود', tier_ultra_4: 'باكيت ملصقات + كيس فرو',
    mystery_secret_title: 'سر صغير',
    mystery_secret_text: 'كل صندوق ترتبه روضة بنفسها مع رسالة صغيرة بخط اليد 💌',
    btn_drop_in_cart: 'أضف للسلة 💖',
    admin_title: 'لوحة التحكم', admin_subtitle: 'وضع المدير ★ أضف، عدّل، واحذف السكويشي',
    admin_form_title_add: '+ إضافة سكويشي جديد', admin_form_title_edit: '✏️ تعديل السكويشي',
    admin_label_name: 'الاسم بالإنجليزي', admin_label_name_ar: 'الاسم بالعربي (اختياري)',
    admin_label_price: 'السعر (درهم)',
    admin_label_photo: 'الصورة',
    admin_photo_upload_text: 'اضغط أو اسحب صورة', admin_photo_upload_small: 'JPG / PNG · يتم تصغيرها تلقائياً',
    admin_label_emoji: 'إيموجي (يظهر بدون صورة)',
    admin_label_desc: 'الوصف بالإنجليزي', admin_label_desc_ar: 'الوصف بالعربي (اختياري)',
    admin_label_color: 'اللون', admin_label_badge: 'الشارة (اختيارية)',
    badge_none: 'بدون شارة', badge_new: 'جديد ✨', badge_viral: 'رائج 🔥',
    badge_hot: 'مميز 🔥', badge_limited: 'محدود ★',
    admin_label_category: 'الفئة',
    cat_needoh: 'ني-دوه', cat_mystery: 'مفاجآت', cat_cute: 'كيوت',
    cat_needoh_viral: 'ني-دوه + رائج', cat_mystery_viral: 'مفاجآت + رائج', cat_cute_viral: 'كيوت + رائج',
    admin_btn_add: 'إضافة سكويشي ✨', admin_btn_save: 'حفظ التغييرات 💾',
    admin_btn_cancel: 'إلغاء', admin_btn_reset: '↺ إعادة للافتراضي',
    admin_all_products: 'كل المنتجات',
    admin_btn_edit: '✏️ تعديل', admin_btn_delete: '🗑️ حذف',
    admin_photo_loaded: 'تم تحميل الصورة ✓', admin_photo_remove: '✕ إزالة',
    admin_empty: 'لا توجد منتجات بعد!', admin_empty_sub: 'استخدم النموذج لإضافة أول سكويشي.',
    admin_footer_hint: 'وضع الإدارة ⚙️ ★ كل التغييرات تحفظ فوراً في متصفحك',
    cart_title: '🛒 السلة',
    cart_empty_title: 'فاضية!', cart_empty_text: 'أضف بعض السكويشي ★',
    cart_btn_shop_now: 'تسوّق الآن 🦋',
    cart_total: 'الإجمالي ★',
    cart_item: 'قطعة', cart_items: 'قطع',
    cart_ship_add: 'أضف {amount} للشحن المجاني 🚚',
    cart_ship_unlocked: 'شحن مجاني مفعّل! 🚚✨',
    cart_clear: 'إفراغ', cart_checkout: 'الدفع ★',
    cart_each: 'للقطعة',
    checkout_title: '🚚 إتمام الطلب',
    checkout_step: 'الخطوة 2 من 2 ★ أخبرنا وين نوصل السكويشي',
    checkout_label_name: 'الاسم الكامل *', checkout_label_phone: 'رقم الهاتف *',
    checkout_label_email: 'البريد الإلكتروني (اختياري)', checkout_label_emirate: 'الإمارة *',
    checkout_label_address: 'العنوان الكامل *', checkout_label_notes: 'ملاحظات التوصيل (اختياري)',
    checkout_ph_name: 'روضة أ.', checkout_ph_phone: '+971 50 123 4567',
    checkout_ph_email: 'you@email.com', checkout_ph_address: 'المبنى، الشارع، المنطقة، معلم قريب',
    checkout_ph_notes: 'رقم الشقة، رمز الجرس، الوقت المفضل...',
    checkout_items_shipping: 'قطعة في الطريق 🚚',
    checkout_free_ship_over: 'شحن مجاني فوق',
    checkout_btn_back: 'رجوع →', checkout_btn_place_order: 'تأكيد الطلب ★',
    checkout_missing: 'ناقص',
    success_yay: 'ييي', success_order_num: 'طلب رقم',
    success_squishies: '📦 السكويشي', success_total: 'الإجمالي',
    success_delivering: '🚚 التوصيل إلى', success_uae: 'الإمارات 🇦🇪',
    success_call: 'بنتصل عشان نأكد الطلب 💖', success_eta: 'السكويشي بتوصل خلال 1-3 أيام ★',
    success_btn_done: 'تم ★',
    toast_added: 'تمت إضافة {name} 💖', toast_removed: 'تم حذف {name} 🗑️',
    toast_cart_cleared: 'تم إفراغ السلة 🌟', toast_already_empty: 'السلة فاضية أصلاً 🌟',
    toast_add_first: 'أضف بعض السكويشي أولاً! 💖', toast_cart_empty: 'السلة فاضية! 🛒',
    toast_updated: 'تم تحديث {name}! ✨', toast_added_product: 'تمت إضافة {name}! 💖',
    toast_deleted: 'تم حذف {name} 🗑️', toast_reset: 'تم الإرجاع للافتراضي! ↺',
    toast_photo_processing: 'جاري معالجة الصورة… 📸', toast_photo_loaded: 'تم تحميل الصورة! ✨',
    toast_storage_full: 'الذاكرة ممتلئة! جرب صور أصغر 📸',
    toast_save_failed: 'فشل الحفظ 😢',
    toast_pick_image: 'اختر ملف صورة',
    confirm_delete: 'حذف "{name}" نهائياً؟',
    confirm_reset: 'إعادة كل المنتجات للافتراضي؟ بيتم حذف أي منتجات أضفتها.',
    shop_empty: 'لا توجد سكويشي بعد! أضف بعض من لوحة الإدارة.',
    rarity_common: 'عادي 💖', rarity_rare: 'نادر ★',
    rarity_epic: 'إيبيك 🌈', rarity_legendary: 'أسطوري 👑',
    mystery_its_a: 'إنه {name}!'
  }
};

function getLang() {
  return localStorage.getItem('squishLang') || 'en';
}

function t(key, vars) {
  const dict = T[getLang()] || T.en;
  let str = dict[key] || T.en[key] || key;
  if (vars) {
    Object.keys(vars).forEach(k => {
      str = str.replace(new RegExp('\\{' + k + '\\}', 'g'), vars[k]);
    });
  }
  return str;
}

function applyTranslations() {
  const dict = T[getLang()] || T.en;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key] !== undefined) el.textContent = dict[key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.dataset.i18nPh;
    if (dict[key] !== undefined) el.placeholder = dict[key];
  });
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.dataset.i18nTitle;
    if (dict[key] !== undefined) el.title = dict[key];
  });
}

function setLanguage(lang) {
  if (!T[lang]) lang = 'en';
  localStorage.setItem('squishLang', lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  applyTranslations();
  // re-render anything dynamic
  renderShop();
  renderFeatured();
  if (document.getElementById('adminProducts')) renderAdminProducts();
  // if cart is open, re-render whichever state it's in
  const drawer = document.getElementById('cartDrawer');
  if (drawer && drawer.classList.contains('open')) renderCart();
  updateLangToggleUI();
}

function updateLangToggleUI() {
  document.querySelectorAll('.lang-toggle .lang-label').forEach(el => {
    el.textContent = t('lang_other');
  });
}

function setupLangToggle() {
  document.querySelectorAll('.lang-toggle').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      setLanguage(getLang() === 'en' ? 'ar' : 'en');
    });
  });
}

// Returns the right name/desc for a product based on current language
function localizedName(p) {
  if (getLang() === 'ar' && p.nameAr) return p.nameAr;
  return p.name;
}
function localizedDesc(p) {
  if (getLang() === 'ar' && p.descAr) return p.descAr;
  return p.desc || '';
}
function localizedBadge(badge) {
  if (!badge) return '';
  const map = { 'new': 'badge_new', 'viral': 'badge_viral', 'hot': 'badge_hot', 'holo': 'badge_limited' };
  return t(map[badge] || 'badge_none');
}


// ---------- CURRENCY (Dubai, AED) ----------
const CURRENCY = 'AED';
const FREE_SHIP_THRESHOLD = 100; // AED

function formatPrice(amount) {
  return `${CURRENCY} ${Number(amount).toFixed(0)}`;
}

// ---------- DEFAULT PRODUCTS (used on first visit / reset) — prices in AED ----------
const PRODUCTS_VERSION = 3; // bump when defaults change so existing users get fresh data

const DEFAULT_PRODUCTS = [
  { id: 'p1',  name: 'Peachy Nee Doh',        nameAr: 'ني-دوه الخوخ',        price: 33, emoji: '🍑', color: 'pink',    badge: '',      desc: 'Stretchy ball with a peachy scent.',          descAr: 'كرة مطاطية برائحة الخوخ.',                 category: 'needoh' },
  { id: 'p2',  name: 'Groovy Glow Nee Doh',   nameAr: 'ني-دوه الفسفوري',     price: 37, emoji: '🐸', color: 'lime',    badge: 'viral', desc: 'Glow in the dark. Super stretchy.',           descAr: 'يضيء في الظلام. مطاطي جداً.',              category: 'needoh viral' },
  { id: 'p3',  name: 'Ocean Wave Nee Doh',    nameAr: 'ني-دوه أمواج البحر',  price: 37, emoji: '🌊', color: 'blue',    badge: 'new',   desc: 'Calming blue with sparkle bits inside.',      descAr: 'لون أزرق هادئ مع بريق داخلي.',             category: 'needoh' },
  { id: 'p4',  name: 'Galaxy Nee Doh',        nameAr: 'ني-دوه المجرة',       price: 40, emoji: '🪐', color: 'purple',  badge: 'hot',   desc: 'Purple swirls + tiny silver stars inside.',   descAr: 'لفّات بنفسجية مع نجوم فضية صغيرة.',         category: 'needoh' },
  { id: 'p5',  name: 'Mystery Dumpling',      nameAr: 'موتشي مفاجأة',        price: 25, emoji: '🍡', color: 'purple',  badge: '',      desc: 'Unwrap to reveal a surprise mochi.',          descAr: 'افتح الغلاف واكتشف موتشي مفاجأة.',          category: 'mystery' },
  { id: 'p6',  name: 'Rainbow Dumpling Pack', nameAr: 'باكيت موتشي قوس قزح', price: 92, emoji: '🥟', color: 'rainbow', badge: 'viral', desc: '5 mystery dumplings in one drop.',            descAr: '5 قطع موتشي مفاجأة في علبة واحدة.',         category: 'mystery viral' },
  { id: 'p7',  name: 'Lucky Squish Fortune',  nameAr: 'كوكي الحظ',           price: 22, emoji: '🥠', color: 'yellow',  badge: 'new',   desc: 'Squishy fortune cookie with a surprise.',     descAr: 'كوكي الحظ المطاطي مع مفاجأة بالداخل.',      category: 'mystery' },
  { id: 'p8',  name: 'Unicorn Cloud Squish',  nameAr: 'يونيكورن السحاب',     price: 48, emoji: '🦄', color: 'rainbow', badge: 'hot',   desc: 'Slow-rising rainbow unicorn cutie.',          descAr: 'يونيكورن قوس قزح بطيء الانتفاخ.',          category: 'cute viral' },
  { id: 'p9',  name: 'Cupcake Mochi',         nameAr: 'موتشي الكب كيك',      price: 28, emoji: '🧁', color: 'pink',    badge: '',      desc: 'Vanilla scented, frosting top.',              descAr: 'برائحة الفانيليا مع كريمة على الوجه.',      category: 'cute' },
  { id: 'p10', name: 'Baby Duck Squish',      nameAr: 'سكويشي البطة',        price: 22, emoji: '🐥', color: 'yellow',  badge: 'viral', desc: 'Tiny duck that squeaks when squeezed.',       descAr: 'بطة صغيرة تصدر صوت عند الضغط.',            category: 'cute viral' },
  { id: 'p11', name: 'Toast Bunny Bread',     nameAr: 'خبز الأرنب',           price: 31, emoji: '🍞', color: 'orange',  badge: 'new',   desc: 'Smells like bread, looks like a bunny.',      descAr: 'رائحة خبز وشكل أرنب لطيف.',                category: 'cute' },
  { id: 'p12', name: 'Sprinkle Donut Squish', nameAr: 'دونات الحلويات',      price: 26, emoji: '🍩', color: 'pink',    badge: 'viral', desc: 'Slow-rising donut with cute sprinkles.',      descAr: 'دونات بطيئة الانتفاخ مع حلويات ملونة.',     category: 'cute viral' }
];

const BADGE_LABELS = {
  '':      '',
  'new':   'NEW! ✨',
  'viral': 'VIRAL 🔥',
  'hot':   'HOT 🔥',
  'holo':  'LIMITED ★'
};

// ---------- STORAGE ----------
function getProducts() {
  try {
    const savedVersion = parseInt(localStorage.getItem('squishProductsVersion') || '0', 10);
    const saved = localStorage.getItem('squishProducts');
    if (saved && savedVersion === PRODUCTS_VERSION) return JSON.parse(saved);
  } catch (e) {}
  // first visit OR version bump — seed defaults
  saveProducts(DEFAULT_PRODUCTS);
  return [...DEFAULT_PRODUCTS];
}

function saveProducts(products) {
  try {
    localStorage.setItem('squishProducts', JSON.stringify(products));
    localStorage.setItem('squishProductsVersion', String(PRODUCTS_VERSION));
    return true;
  } catch (e) {
    if (e.name === 'QuotaExceededError' || /quota/i.test(e.message || '')) {
      showToast(t('toast_storage_full'), true);
    } else {
      showToast(t('toast_save_failed'), true);
    }
    return false;
  }
}

// Read an uploaded image file, resize to fit maxSize, return a JPEG data URL
function processImageFile(file, maxSize = 600, quality = 0.85) {
  return new Promise((resolve, reject) => {
    if (!file || !file.type || !file.type.startsWith('image/')) {
      reject(new Error(t('toast_pick_image')));
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        let { width, height } = img;
        if (width > height && width > maxSize) {
          height = Math.round(height * maxSize / width);
          width = maxSize;
        } else if (height > maxSize) {
          width = Math.round(width * maxSize / height);
          height = maxSize;
        }
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        canvas.getContext('2d').drawImage(img, 0, 0, width, height);
        try {
          resolve(canvas.toDataURL('image/jpeg', quality));
        } catch (err) { reject(err); }
      };
      img.onerror = () => reject(new Error('Could not read that image'));
      img.src = e.target.result;
    };
    reader.onerror = () => reject(new Error('File read failed'));
    reader.readAsDataURL(file);
  });
}

function getCart() {
  try {
    return JSON.parse(localStorage.getItem('squishCart')) || [];
  } catch (e) { return []; }
}

function saveCart(cart) {
  localStorage.setItem('squishCart', JSON.stringify(cart));
}

function updateCartCount() {
  const count = getCart().length;
  document.querySelectorAll('#cartCount').forEach(el => el.textContent = count);
}

// ---------- TOAST ----------
function showToast(message, isError = false) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.toggle('error', isError);
  toast.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('show'), 2200);
}

// ---------- PRODUCT CARD RENDERER ----------
function productCardHTML(p) {
  const badgeText = localizedBadge(p.badge);
  const badgeHtml = p.badge && badgeText
    ? `<div class="product-badge ${p.badge}">${badgeText}</div>`
    : '';
  return `
    <div class="product-card" data-category="${p.category || ''}">
      ${badgeHtml}
      <div class="product-image ${p.color}">${productImageInner(p)}</div>
      <h3 class="product-name">${escapeHtml(localizedName(p))}</h3>
      <p class="product-desc">${escapeHtml(localizedDesc(p))}</p>
      <div class="product-price">${formatPrice(p.price)}</div>
      <button class="add-to-cart" data-product="${escapeHtml(p.name)}">${t('btn_drop_in_cart')}</button>
    </div>
  `;
}

// Returns either an <img> tag or a fallback emoji span, depending on whether
// the product has a photo. Used everywhere a product is rendered.
function productImageInner(p, emojiClass = 'emoji', photoClass = 'product-photo') {
  if (p.image) {
    return `<img src="${p.image}" alt="${escapeHtml(p.name || '')}" class="${photoClass}" loading="lazy">`;
  }
  return `<span class="${emojiClass}">${p.emoji || '🧸'}</span>`;
}

function escapeHtml(str) {
  if (str == null) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// ---------- SHOP PAGE — render products ----------
function renderShop() {
  const grid = document.getElementById('productGrid');
  if (!grid) return;
  const products = getProducts();
  if (products.length === 0) {
    grid.innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1;">
        <div class="big">🛍️</div>
        <p>${t('shop_empty')}</p>
      </div>`;
    return;
  }
  grid.innerHTML = products.map(productCardHTML).join('');
  bindAddToCart();
}

// ---------- HOME PAGE — render 4 featured ----------
function renderFeatured() {
  const grid = document.getElementById('featuredGrid');
  if (!grid) return;
  const products = getProducts();
  // pick first 4 with a badge, fall back to first 4 overall
  const withBadge = products.filter(p => p.badge);
  const featured = (withBadge.length >= 4 ? withBadge : products).slice(0, 4);
  grid.innerHTML = featured.map(productCardHTML).join('');
  bindAddToCart();
}

// ---------- ADD TO CART BINDING ----------
function bindAddToCart() {
  document.querySelectorAll('.add-to-cart').forEach(button => {
    if (button._wired) return;
    button._wired = true;
    button.addEventListener('click', () => {
      const product = button.dataset.product || 'Squishy';
      const cart = getCart();
      cart.push(product);
      saveCart(cart);
      updateCartCount();

      const original = button.textContent;
      button.textContent = 'Added! ✓';
      button.classList.add('added');
      setTimeout(() => {
        button.textContent = original;
        button.classList.remove('added');
      }, 1500);

      showToast(t('toast_added', { name: product }));
      makeConfetti(button);
    });
  });
}

// ---------- CART DRAWER 🛒 (Y2K themed) ----------
const EMIRATES = ['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'Ras Al Khaimah', 'Fujairah', 'Umm Al Quwain'];

function ensureCartDrawer() {
  if (document.getElementById('cartDrawer')) return;

  const overlay = document.createElement('div');
  overlay.className = 'cart-overlay';
  overlay.id = 'cartOverlay';

  const drawer = document.createElement('aside');
  drawer.className = 'cart-drawer';
  drawer.id = 'cartDrawer';
  drawer.innerHTML = `
    <header class="cart-header">
      <h2 id="cartHeaderTitle">🛒 CART</h2>
      <button class="cart-close" id="cartClose" aria-label="Close cart">✕</button>
    </header>
    <div class="cart-body" id="cartBody"></div>
    <footer class="cart-footer" id="cartFooter"></footer>
  `;

  document.body.appendChild(overlay);
  document.body.appendChild(drawer);

  overlay.addEventListener('click', closeCart);
  drawer.querySelector('#cartClose').addEventListener('click', closeCart);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) closeCart();
  });
}

function openCart() {
  ensureCartDrawer();
  renderCart();
  document.getElementById('cartOverlay').classList.add('open');
  document.getElementById('cartDrawer').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  const overlay = document.getElementById('cartOverlay');
  const drawer = document.getElementById('cartDrawer');
  if (overlay) overlay.classList.remove('open');
  if (drawer) drawer.classList.remove('open');
  document.body.style.overflow = '';
}

// Group cart (array of names) into { name, qty, product } rows
function groupCart() {
  const cart = getCart();
  const products = getProducts();
  const productByName = {};
  products.forEach(p => { productByName[p.name] = p; });

  const rows = {};
  cart.forEach(name => {
    if (!rows[name]) {
      rows[name] = { name, qty: 0, product: productByName[name] };
    }
    rows[name].qty += 1;
  });
  return Object.values(rows);
}

function setCartTitle(text) {
  const t = document.getElementById('cartHeaderTitle');
  if (t) t.textContent = text;
}

function renderCart() {
  const body = document.getElementById('cartBody');
  const footer = document.getElementById('cartFooter');
  if (!body || !footer) return;

  setCartTitle(t('cart_title'));
  const rows = groupCart();

  if (rows.length === 0) {
    body.innerHTML = `
      <div class="cart-empty">
        <div class="big">🛍️</div>
        <h3>${t('cart_empty_title')}</h3>
        <p>${t('cart_empty_text')}</p>
        <a href="shop.html" class="btn btn-holo" style="margin-top: 10px;">${t('cart_btn_shop_now')}</a>
      </div>
    `;
    footer.style.display = 'none';
    footer.innerHTML = '';
    return;
  }

  body.innerHTML = rows.map(row => {
    const p = row.product || { emoji: '🧸', color: 'pink', price: 0 };
    const displayName = p.name ? localizedName(p) : row.name;
    return `
      <div class="cart-item" data-name="${escapeHtml(row.name)}">
        <div class="cart-item-image ${p.color || 'pink'}">${productImageInner(p, 'emoji', 'cart-item-photo')}</div>
        <div class="cart-item-info">
          <div class="cart-item-name">${escapeHtml(displayName)}</div>
          <div class="cart-item-price">${formatPrice(p.price || 0)} ${t('cart_each')}</div>
          <div class="qty-controls">
            <button class="qty-btn qty-down" data-name="${escapeHtml(row.name)}" aria-label="−">−</button>
            <span class="qty-value">${row.qty}</span>
            <button class="qty-btn qty-up" data-name="${escapeHtml(row.name)}" aria-label="+">+</button>
          </div>
        </div>
        <button class="cart-item-remove" data-name="${escapeHtml(row.name)}" aria-label="✕">✕</button>
      </div>
    `;
  }).join('');

  const total = rows.reduce((sum, r) => sum + (Number(r.product?.price || 0) * r.qty), 0);
  const totalCount = rows.reduce((sum, r) => sum + r.qty, 0);
  const remaining = Math.max(0, FREE_SHIP_THRESHOLD - total);
  const shipNote = remaining > 0
    ? t('cart_ship_add', { amount: formatPrice(remaining) })
    : t('cart_ship_unlocked');

  footer.style.display = '';
  footer.innerHTML = `
    <div class="cart-total">
      <span class="cart-total-label">${t('cart_total')}</span>
      <span class="cart-total-value">${formatPrice(total)}</span>
    </div>
    <div class="cart-item-count">${totalCount} ${totalCount === 1 ? t('cart_item') : t('cart_items')} ★ ${shipNote}</div>
    <div class="cart-actions">
      <button class="btn btn-yellow" id="clearCartBtn">${t('cart_clear')}</button>
      <button class="btn btn-pink" id="checkoutBtn">${t('cart_checkout')}</button>
    </div>
  `;

  body.querySelectorAll('.qty-down').forEach(btn => {
    btn.addEventListener('click', () => changeQty(btn.dataset.name, -1));
  });
  body.querySelectorAll('.qty-up').forEach(btn => {
    btn.addEventListener('click', () => changeQty(btn.dataset.name, +1));
  });
  body.querySelectorAll('.cart-item-remove').forEach(btn => {
    btn.addEventListener('click', () => removeAllOfItem(btn.dataset.name));
  });

  document.getElementById('clearCartBtn').addEventListener('click', () => {
    saveCart([]);
    updateCartCount();
    renderCart();
    showToast(t('toast_cart_cleared'));
  });
  document.getElementById('checkoutBtn').addEventListener('click', renderCheckoutForm);
}

// ---------- CHECKOUT FORM ----------
function renderCheckoutForm() {
  const body = document.getElementById('cartBody');
  const footer = document.getElementById('cartFooter');
  if (!body || !footer) return;

  const rows = groupCart();
  if (rows.length === 0) { renderCart(); return; }

  const total = rows.reduce((sum, r) => sum + (Number(r.product?.price || 0) * r.qty), 0);
  const totalCount = rows.reduce((sum, r) => sum + r.qty, 0);

  // load saved info to auto-fill
  let saved = {};
  try { saved = JSON.parse(localStorage.getItem('squishCheckoutInfo')) || {}; } catch (e) {}

  setCartTitle(t('checkout_title'));

  // Emirate labels — use the Arabic name in Arabic mode for display, but keep the English value internally
  const emirateLabels = {
    'Dubai': { en: 'Dubai', ar: 'دبي' },
    'Abu Dhabi': { en: 'Abu Dhabi', ar: 'أبوظبي' },
    'Sharjah': { en: 'Sharjah', ar: 'الشارقة' },
    'Ajman': { en: 'Ajman', ar: 'عجمان' },
    'Ras Al Khaimah': { en: 'Ras Al Khaimah', ar: 'رأس الخيمة' },
    'Fujairah': { en: 'Fujairah', ar: 'الفجيرة' },
    'Umm Al Quwain': { en: 'Umm Al Quwain', ar: 'أم القيوين' }
  };
  const lang = getLang();

  body.innerHTML = `
    <div class="checkout-form-wrap">
      <div class="checkout-step-note">${t('checkout_step')}</div>
      <form id="checkoutForm" novalidate>
        <div class="form-row">
          <label for="ckName">${t('checkout_label_name')}</label>
          <input type="text" id="ckName" name="ckName" value="${escapeHtml(saved.name || '')}" required placeholder="${t('checkout_ph_name')}">
        </div>
        <div class="form-row">
          <label for="ckPhone">${t('checkout_label_phone')}</label>
          <input type="tel" id="ckPhone" name="ckPhone" value="${escapeHtml(saved.phone || '')}" required placeholder="${t('checkout_ph_phone')}" pattern="[0-9+\\s()-]{7,}">
        </div>
        <div class="form-row">
          <label for="ckEmail">${t('checkout_label_email')}</label>
          <input type="email" id="ckEmail" name="ckEmail" value="${escapeHtml(saved.email || '')}" placeholder="${t('checkout_ph_email')}">
        </div>
        <div class="form-row">
          <label for="ckEmirate">${t('checkout_label_emirate')}</label>
          <select id="ckEmirate" name="ckEmirate" required>
            ${EMIRATES.map(em => `<option value="${em}" ${saved.emirate === em ? 'selected' : ''}>${emirateLabels[em] ? emirateLabels[em][lang] : em}</option>`).join('')}
          </select>
        </div>
        <div class="form-row">
          <label for="ckAddress">${t('checkout_label_address')}</label>
          <textarea id="ckAddress" name="ckAddress" required placeholder="${t('checkout_ph_address')}">${escapeHtml(saved.address || '')}</textarea>
        </div>
        <div class="form-row">
          <label for="ckNotes">${t('checkout_label_notes')}</label>
          <textarea id="ckNotes" name="ckNotes" placeholder="${t('checkout_ph_notes')}">${escapeHtml(saved.notes || '')}</textarea>
        </div>
      </form>
    </div>
  `;

  footer.style.display = '';
  footer.innerHTML = `
    <div class="cart-total">
      <span class="cart-total-label">${t('cart_total')}</span>
      <span class="cart-total-value">${formatPrice(total)}</span>
    </div>
    <div class="cart-item-count">${totalCount} ${t('checkout_items_shipping')} ★ ${t('checkout_free_ship_over')} ${formatPrice(FREE_SHIP_THRESHOLD)}</div>
    <div class="cart-actions">
      <button class="btn btn-yellow" id="backToCartBtn">${t('checkout_btn_back')}</button>
      <button class="btn btn-pink" id="placeOrderBtn">${t('checkout_btn_place_order')}</button>
    </div>
  `;

  document.getElementById('backToCartBtn').addEventListener('click', renderCart);
  document.getElementById('placeOrderBtn').addEventListener('click', () => {
    const form = document.getElementById('checkoutForm');
    // grab fields
    const name    = form.ckName.value.trim();
    const phone   = form.ckPhone.value.trim();
    const email   = form.ckEmail.value.trim();
    const emirate = form.ckEmirate.value;
    const address = form.ckAddress.value.trim();
    const notes   = form.ckNotes.value.trim();

    // validate (themed — no native popup)
    const missing = [];
    if (!name) missing.push(t('checkout_label_name').replace(' *', ''));
    if (!phone || phone.replace(/\D/g, '').length < 7) missing.push(t('checkout_label_phone').replace(' *', ''));
    if (!address) missing.push(t('checkout_label_address').replace(' *', ''));
    if (missing.length) {
      showToast(`${t('checkout_missing')}: ${missing.join(', ')} ❗`, true);
      // highlight first missing field
      const firstId = missing[0] === 'name' ? 'ckName' : missing[0] === 'phone' ? 'ckPhone' : 'ckAddress';
      const el = document.getElementById(firstId);
      if (el) {
        el.focus();
        el.style.background = '#fff0f6';
        setTimeout(() => { el.style.background = ''; }, 1200);
      }
      return;
    }

    const info = { name, phone, email, emirate, address, notes };
    localStorage.setItem('squishCheckoutInfo', JSON.stringify(info));
    renderCheckoutSuccess(info, total, rows);
  });
}

// ---------- CHECKOUT SUCCESS ----------
function renderCheckoutSuccess(info, total, rows) {
  const body = document.getElementById('cartBody');
  const footer = document.getElementById('cartFooter');
  if (!body || !footer) return;

  const itemCount = rows.reduce((s, r) => s + r.qty, 0);
  const orderNumber = 'SS-' + Math.floor(100000 + Math.random() * 900000);
  const itemsList = rows.map(r => {
    const p = r.product || {};
    const displayName = p.name ? localizedName(p) : r.name;
    return `<li>${r.qty}× ${escapeHtml(displayName)}</li>`;
  }).join('');

  // emirate display label
  const emirateLabels = {
    'Dubai': { en: 'Dubai', ar: 'دبي' }, 'Abu Dhabi': { en: 'Abu Dhabi', ar: 'أبوظبي' },
    'Sharjah': { en: 'Sharjah', ar: 'الشارقة' }, 'Ajman': { en: 'Ajman', ar: 'عجمان' },
    'Ras Al Khaimah': { en: 'Ras Al Khaimah', ar: 'رأس الخيمة' },
    'Fujairah': { en: 'Fujairah', ar: 'الفجيرة' }, 'Umm Al Quwain': { en: 'Umm Al Quwain', ar: 'أم القيوين' }
  };
  const lang = getLang();
  const emirateLabel = emirateLabels[info.emirate] ? emirateLabels[info.emirate][lang] : info.emirate;

  setCartTitle('🎉 ' + t('cart_title').replace('🛒 ', ''));

  body.innerHTML = `
    <div class="checkout-success">
      <div class="big">🎉</div>
      <h3>${t('success_yay')} ${escapeHtml(info.name.split(' ')[0])}!</h3>
      <p>${t('success_order_num')} #${orderNumber} ★</p>

      <div class="success-card">
        <div class="success-section">
          <div class="success-label">${t('success_squishies')}</div>
          <ul class="success-items">${itemsList}</ul>
          <div class="success-total">${t('success_total')}: <strong>${formatPrice(total)}</strong></div>
        </div>

        <div class="success-section">
          <div class="success-label">${t('success_delivering')}</div>
          <div class="success-line"><strong>${escapeHtml(info.name)}</strong></div>
          <div class="success-line">📞 ${escapeHtml(info.phone)}</div>
          ${info.email ? `<div class="success-line">✉️ ${escapeHtml(info.email)}</div>` : ''}
          <div class="success-line">📍 ${escapeHtml(info.address)}</div>
          <div class="success-line">${escapeHtml(emirateLabel)}, ${t('success_uae')}</div>
          ${info.notes ? `<div class="success-line success-note">📝 ${escapeHtml(info.notes)}</div>` : ''}
        </div>
      </div>

      <p class="success-cta">${t('success_call')}<br><span class="success-eta">${t('success_eta')}</span></p>
    </div>
  `;

  footer.style.display = '';
  footer.innerHTML = `
    <div class="cart-actions" style="grid-template-columns: 1fr;">
      <button class="btn btn-holo" id="doneBtn">${t('success_btn_done')}</button>
    </div>
  `;

  document.getElementById('doneBtn').addEventListener('click', closeCart);

  // big confetti + clear cart
  const drawer = document.getElementById('cartDrawer');
  if (drawer) makeConfetti(drawer, 60);
  saveCart([]);
  updateCartCount();
}

function changeQty(name, delta) {
  const cart = getCart();
  if (delta > 0) {
    cart.push(name);
  } else {
    const idx = cart.indexOf(name);
    if (idx !== -1) cart.splice(idx, 1);
  }
  saveCart(cart);
  updateCartCount();
  renderCart();
}

function removeAllOfItem(name) {
  const cart = getCart().filter(n => n !== name);
  saveCart(cart);
  updateCartCount();
  renderCart();
  showToast(t('toast_removed', { name }));
}

function setupCartButton() {
  ensureCartDrawer();
  document.querySelectorAll('.cart-button').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openCart();
    });
  });
}

// ---------- FILTER PILLS (shop page) ----------
function setupFilters() {
  const pills = document.querySelectorAll('.filter-pill');
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const filter = pill.dataset.filter;
      document.querySelectorAll('#productGrid .product-card').forEach(card => {
        const cats = card.dataset.category || '';
        if (filter === 'all' || cats.includes(filter)) {
          card.style.display = '';
          card.style.animation = 'pop 0.4s ease-out';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// ---------- MYSTERY BOX ----------
// Each surprise has nameKey for English/Arabic via localizedName-style lookup.
const surprises = [
  { emoji: '🦄', name: 'Unicorn Cloud Squish', nameAr: 'يونيكورن السحاب',  rarityKey: 'rarity_rare' },
  { emoji: '🍑', name: 'Peachy Nee Doh',       nameAr: 'ني-دوه الخوخ',     rarityKey: 'rarity_common' },
  { emoji: '🐸', name: 'Glow Frog Nee Doh',    nameAr: 'ني-دوه الضفدع',    rarityKey: 'rarity_epic' },
  { emoji: '🧁', name: 'Cupcake Mochi',        nameAr: 'موتشي الكب كيك',   rarityKey: 'rarity_common' },
  { emoji: '🌈', name: 'Rainbow Star Squish',  nameAr: 'نجمة قوس قزح',     rarityKey: 'rarity_legendary' },
  { emoji: '🐥', name: 'Baby Duck Squish',     nameAr: 'سكويشي البطة',     rarityKey: 'rarity_common' },
  { emoji: '🍰', name: 'Strawberry Shortcake', nameAr: 'كيكة الفراولة',    rarityKey: 'rarity_rare' },
  { emoji: '🥟', name: 'Mystery Dumpling',     nameAr: 'موتشي مفاجأة',     rarityKey: 'rarity_epic' },
  { emoji: '🍩', name: 'Sprinkle Donut',       nameAr: 'دونات الحلويات',   rarityKey: 'rarity_common' },
  { emoji: '🪐', name: 'Galaxy Squish',        nameAr: 'سكويشي المجرة',    rarityKey: 'rarity_legendary' },
  { emoji: '🐰', name: 'Toast Bunny Bread',    nameAr: 'خبز الأرنب',        rarityKey: 'rarity_rare' },
  { emoji: '🦋', name: 'Butterfly Squish',     nameAr: 'سكويشي الفراشة',   rarityKey: 'rarity_epic' }
];

function setupMysteryBox() {
  const box = document.getElementById('mysteryBox');
  const reveal = document.getElementById('mysteryReveal');
  if (!box) return;

  box.addEventListener('click', () => {
    box.classList.add('shake');
    reveal.textContent = '';

    setTimeout(() => {
      box.classList.remove('shake');
      const pick = surprises[Math.floor(Math.random() * surprises.length)];
      box.textContent = pick.emoji;
      box.classList.add('revealed');
      const displayName = (getLang() === 'ar' && pick.nameAr) ? pick.nameAr : pick.name;
      reveal.innerHTML = `${t('mystery_its_a', { name: displayName })}<br><span style="font-size: 22px;">${t(pick.rarityKey)}</span>`;

      makeConfetti(box, 35);

      setTimeout(() => {
        box.classList.remove('revealed');
        box.textContent = '🎁';
      }, 4000);
    }, 500);
  });
}

// ---------- CONFETTI ----------
function makeConfetti(el, count = 14) {
  const rect = el.getBoundingClientRect();
  const startX = rect.left + rect.width / 2;
  const startY = rect.top + rect.height / 2;
  const symbols = ['✨', '💖', '⭐', '🌈', '🎀', '💜', '💛', '💚', '🦋', '💎'];

  for (let i = 0; i < count; i++) {
    const piece = document.createElement('div');
    piece.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    piece.style.position = 'fixed';
    piece.style.left = startX + 'px';
    piece.style.top = startY + 'px';
    piece.style.fontSize = (16 + Math.random() * 18) + 'px';
    piece.style.pointerEvents = 'none';
    piece.style.zIndex = '9999';
    piece.style.transition = 'all 1.1s cubic-bezier(0.2, 0.8, 0.4, 1)';
    document.body.appendChild(piece);

    requestAnimationFrame(() => {
      const angle = Math.random() * Math.PI * 2;
      const distance = 100 + Math.random() * 140;
      piece.style.transform = `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) rotate(${Math.random() * 720}deg)`;
      piece.style.opacity = '0';
    });

    setTimeout(() => piece.remove(), 1200);
  }
}

// =============================================
// ADMIN PANEL ⚙️
// =============================================

let editingId = null;

function renderAdminProducts() {
  const wrap = document.getElementById('adminProducts');
  const countEl = document.getElementById('productCount');
  if (!wrap) return;
  const products = getProducts();
  if (countEl) countEl.textContent = `(${products.length})`;

  if (products.length === 0) {
    wrap.innerHTML = `
      <div class="empty-state">
        <div class="big">📦</div>
        <p>${t('admin_empty')}</p>
        <p style="opacity: 0.6; font-family: 'Space Grotesk'; margin-top: 8px;">${t('admin_empty_sub')}</p>
      </div>`;
    return;
  }

  wrap.innerHTML = products.map(p => `
    <div class="admin-product ${p.id === editingId ? 'editing' : ''}" data-id="${p.id}">
      <div class="mini-image ${p.color}">${productImageInner(p, 'emoji', 'mini-photo')}</div>
      <h4>${escapeHtml(localizedName(p))}</h4>
      <div class="price">${formatPrice(p.price)}</div>
      <div class="admin-badge-line">${localizedBadge(p.badge)}</div>
      <div class="admin-actions">
        <button class="edit-btn" data-id="${p.id}">${t('admin_btn_edit')}</button>
        <button class="delete-btn" data-id="${p.id}">${t('admin_btn_delete')}</button>
      </div>
    </div>
  `).join('');

  // wire edit/delete
  wrap.querySelectorAll('.edit-btn').forEach(btn => {
    btn.addEventListener('click', () => startEdit(btn.dataset.id));
  });
  wrap.querySelectorAll('.delete-btn').forEach(btn => {
    btn.addEventListener('click', () => deleteProduct(btn.dataset.id));
  });
}

// ---------- PHOTO UPLOAD (admin form) ----------
function showPhotoUploader() {
  const slot = document.getElementById('photoSlot');
  if (!slot) return;
  slot.innerHTML = `
    <label class="photo-upload" id="photoUpload">
      <span class="photo-upload-icon">📸</span>
      <span class="photo-upload-text">
        <span>${t('admin_photo_upload_text')}</span>
        <span class="small">${t('admin_photo_upload_small')}</span>
      </span>
      <input type="file" id="productPhotoFile" accept="image/*">
    </label>
  `;
  wirePhotoUpload();
}

function showPhotoPreview(dataUrl) {
  const slot = document.getElementById('photoSlot');
  if (!slot) return;
  const sizeKB = Math.max(1, Math.round((dataUrl.length * 0.75) / 1024));
  slot.innerHTML = `
    <div class="photo-preview">
      <img src="${dataUrl}" alt="Photo preview">
      <div class="photo-preview-info">
        ${t('admin_photo_loaded')}
        <span class="small">~${sizeKB} KB</span>
      </div>
      <button type="button" class="photo-remove" id="photoRemove">${t('admin_photo_remove')}</button>
    </div>
  `;
  document.getElementById('productImage').value = dataUrl;
  document.getElementById('photoRemove').addEventListener('click', clearPhoto);
}

function clearPhoto() {
  document.getElementById('productImage').value = '';
  showPhotoUploader();
}

function wirePhotoUpload() {
  const fileInput = document.getElementById('productPhotoFile');
  const dropZone = document.getElementById('photoUpload');
  if (!fileInput || !dropZone) return;

  async function handleFile(file) {
    try {
      showToast(t('toast_photo_processing'));
      const dataUrl = await processImageFile(file);
      showPhotoPreview(dataUrl);
      showToast(t('toast_photo_loaded'));
    } catch (err) {
      showToast(err.message || 'Photo error', true);
    }
  }

  fileInput.addEventListener('change', (e) => {
    if (e.target.files && e.target.files[0]) handleFile(e.target.files[0]);
  });

  ['dragenter', 'dragover'].forEach(ev => {
    dropZone.addEventListener(ev, (e) => {
      e.preventDefault();
      dropZone.classList.add('dragover');
    });
  });
  ['dragleave', 'drop'].forEach(ev => {
    dropZone.addEventListener(ev, (e) => {
      e.preventDefault();
      dropZone.classList.remove('dragover');
    });
  });
  dropZone.addEventListener('drop', (e) => {
    if (e.dataTransfer.files && e.dataTransfer.files[0]) handleFile(e.dataTransfer.files[0]);
  });
}

function setupColorPicker() {
  const picker = document.getElementById('colorPicker');
  const hidden = document.getElementById('productColor');
  if (!picker) return;
  picker.addEventListener('click', (e) => {
    const swatch = e.target.closest('.color-swatch');
    if (!swatch) return;
    picker.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('selected'));
    swatch.classList.add('selected');
    hidden.value = swatch.dataset.color;
  });
}

function setupAdminForm() {
  const form = document.getElementById('productForm');
  const cancelBtn = document.getElementById('cancelBtn');
  const resetBtn = document.getElementById('resetBtn');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('productName').value.trim();
    const nameAr = document.getElementById('productNameAr').value.trim();
    const price = parseFloat(document.getElementById('productPrice').value);
    const emoji = document.getElementById('productEmoji').value.trim();
    const desc = document.getElementById('productDesc').value.trim();
    const descAr = document.getElementById('productDescAr').value.trim();
    const color = document.getElementById('productColor').value;
    const badge = document.getElementById('productBadge').value;
    const category = document.getElementById('productCategory').value;
    const image = document.getElementById('productImage').value || null;

    if (!name || isNaN(price) || !emoji) {
      showToast('Fill out all the required fields!', true);
      return;
    }

    const products = getProducts();

    if (editingId) {
      // EDIT existing
      const idx = products.findIndex(p => p.id === editingId);
      if (idx !== -1) {
        products[idx] = { ...products[idx], name, nameAr, price, emoji, desc, descAr, color, badge, category, image };
        if (saveProducts(products)) showToast(t('toast_updated', { name }));
      }
      cancelEdit();
    } else {
      // ADD new
      const id = 'p' + Date.now();
      products.push({ id, name, nameAr, price, emoji, desc, descAr, color, badge, category, image });
      if (saveProducts(products)) {
        showToast(t('toast_added_product', { name }));
        makeConfetti(document.getElementById('submitBtn'), 20);
      }
      form.reset();
      // restore color pick + clear photo
      document.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('selected'));
      document.querySelector('.color-swatch[data-color="pink"]').classList.add('selected');
      document.getElementById('productColor').value = 'pink';
      clearPhoto();
    }

    renderAdminProducts();
  });

  cancelBtn.addEventListener('click', cancelEdit);

  resetBtn.addEventListener('click', () => {
    if (confirm(t('confirm_reset'))) {
      saveProducts([...DEFAULT_PRODUCTS]);
      cancelEdit();
      renderAdminProducts();
      showToast(t('toast_reset'));
    }
  });
}

function startEdit(id) {
  const products = getProducts();
  const p = products.find(x => x.id === id);
  if (!p) return;

  editingId = id;
  document.getElementById('productId').value = p.id;
  document.getElementById('productName').value = p.name;
  document.getElementById('productNameAr').value = p.nameAr || '';
  document.getElementById('productPrice').value = p.price;
  document.getElementById('productEmoji').value = p.emoji;
  document.getElementById('productDesc').value = p.desc || '';
  document.getElementById('productDescAr').value = p.descAr || '';
  document.getElementById('productBadge').value = p.badge || '';
  document.getElementById('productCategory').value = p.category || 'cute';
  document.getElementById('productColor').value = p.color;

  document.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('selected'));
  const swatch = document.querySelector(`.color-swatch[data-color="${p.color}"]`);
  if (swatch) swatch.classList.add('selected');

  // load the photo (or show uploader) — also fills hidden #productImage
  if (p.image) showPhotoPreview(p.image);
  else clearPhoto();

  document.getElementById('formTitle').textContent = t('admin_form_title_edit');
  document.getElementById('submitBtn').textContent = t('admin_btn_save');
  document.getElementById('cancelBtn').style.display = '';

  renderAdminProducts();

  // scroll to form
  document.querySelector('.admin-panel').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function cancelEdit() {
  editingId = null;
  document.getElementById('productForm').reset();
  document.getElementById('formTitle').textContent = t('admin_form_title_add');
  document.getElementById('submitBtn').textContent = t('admin_btn_add');
  document.getElementById('cancelBtn').style.display = 'none';
  document.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('selected'));
  document.querySelector('.color-swatch[data-color="pink"]').classList.add('selected');
  document.getElementById('productColor').value = 'pink';
  clearPhoto();
  renderAdminProducts();
}

function deleteProduct(id) {
  const products = getProducts();
  const p = products.find(x => x.id === id);
  if (!p) return;
  const displayName = localizedName(p);
  if (!confirm(t('confirm_delete', { name: displayName }))) return;
  const filtered = products.filter(x => x.id !== id);
  saveProducts(filtered);
  if (editingId === id) cancelEdit();
  renderAdminProducts();
  showToast(t('toast_deleted', { name: displayName }));
}

// =============================================
// BOOT
// =============================================
document.addEventListener('DOMContentLoaded', () => {
  // i18n FIRST so all renders below already use the right language
  const lang = getLang();
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  applyTranslations();
  updateLangToggleUI();
  setupLangToggle();

  // make sure defaults are seeded
  getProducts();

  updateCartCount();
  setupCartButton();
  setupMysteryBox();

  // page-specific renders
  renderShop();          // shop page
  renderFeatured();      // home page
  setupFilters();        // shop page

  // admin page
  if (document.getElementById('adminProducts')) {
    setupColorPicker();
    setupAdminForm();
    wirePhotoUpload();
    renderAdminProducts();
  }
});
