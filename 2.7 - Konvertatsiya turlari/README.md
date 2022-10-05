``` js 
    Konvertatsiya turi
Ko'pincha operatorlar va funktsiyalar ularga berilgan qiymatlarni avtomatik ravishda kerakli turga aylantiradi.

Misol uchun, alerthar qanday qiymatni avtomatik ravishda ko'rsatish uchun satrga aylantiradi. Matematik operatsiyalar qiymatlarni raqamlarga aylantiradi.

Qiymatni kutilgan turga aniq aylantirishimiz kerak bo'lgan holatlar ham mavjud.

* * *

    Hali ob'ektlar haqida gapirmayapman
Ushbu bobda biz ob'ektlarni ko'rib chiqmaymiz. Hozircha biz  boshlang'ichlar haqida gaplashamiz.

Keyinchalik, ob'ektlar bilan tanishganimizdan so'ng, ob'ektni boshlang'ich konvertatsiya qilish bo'limida biz ob'ektlar qanday mos kelishini ko'rib chiqamiz.

* * *

    String konvertatsiyasi
String konvertatsiyasi bizga qiymatning satr shakli kerak bo'lganda sodir bo'ladi.

Masalan, alert(value)qiymatni ko'rsatish uchun qiladi.

Bundan tashqari String(value), qiymatni satrga aylantirish uchun funktsiyani chaqirishimiz mumkin:

    Raqamli konvertatsiya
Raqamli konvertatsiya matematik funktsiyalar va ifodalarda avtomatik ravishda sodir bo'ladi.

Misol uchun, bo'linish /raqamlar bo'lmaganlarga nisbatan qo'llanilganda:

alert( "6" / "2" );  // javob 3 sababi, stringlarni raqamlarga aylantiriladi

Biz Number(value)funktsiyadan a ni raqamga aniq aylantirish uchun foydalanishimiz mumkin value:

let str = "123";
alert(typeof str); // string

let num = Number(str); // 123 raqamlarga aylanadi

alert(typeof num); // raqam
Matn shakli kabi satrga asoslangan manbadan qiymatni o'qiganimizda, lekin raqam kiritilishini kutganimizda, odatda aniq konvertatsiya talab qilinadi.

Agar satr to'g'ri raqam bo'lmasa, bunday konvertatsiya natijasi NaN. Masalan:

let age = Number("an arbitrary string instead of a number");

alert(age); // NaN, konvertatsiya qilinmadi

Raqamli konvertatsiya qilish qoidalari:

Qiymat	                Bo'ladi…
undefined	          NaN
null	                   0
true and false	     1va0
string	                  Boshidan va oxiridagi bo'shliqlar (bo'shliqlar, yorliqlar \t, yangi qatorlar \nva boshqalarni o'z ichiga oladi) olib tashlanadi. Qolgan qator bo'sh bo'lsa, natija 0. Aks holda, raqam satrdan "o'qiladi". Xato beradi NaN.


Misollar:

alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN ("z" dagi raqamni o'qishda xatolik)
alert( Number(true) );        // 1
alert( Number(false) );       // 0

Shuni yodda tuting nullva undefinedbu erda boshqacha yo''l tuting: null nolga undefined aylanadi va NaN.

Aksariyat matematik operatorlar ham shunday o'zgartirishni amalga oshiradilar, biz buni keyingi bobda ko'ramiz.

    Mantiqiy konvertatsiya
Mantiqiy konvertatsiya eng oddiy hisoblanadi.

Bu mantiqiy operatsiyalarda sodir bo'ladi (keyinchalik shart testlari va boshqa shunga o'xshash narsalarga duch kelamiz), lekin ga qo'ng'iroq qilish bilan ham aniq bajarilishi mumkin Boolean(value).

Konvertatsiya qilish qoidasi:

Intuitiv ravishda "bo'sh" bo'lgan qiymatlar 0bo'sh qatorga o'xshaydi, null, undefined, va NaN, ga aylanadi false.
Boshqa qadriyatlarga aylanadi true.
Masalan:

alert( Boolean(1) ); // true
alert( Boolean(0) ); // false

alert( Boolean("hello") ); // true
alert( Boolean("") ); // false

*   *   *

    E'tibor bering: nolga teng bo'lgan "0"qatortrue
Ba'zi tillar (ya'ni, PHP) "0"sifatida qabul qilinadi false. Lekin JavaScript-da bo'sh bo'lmagan satr har doim truebo'ladi.

alert( Boolean("0") ); // true
alert( Boolean(" ") ); // bo'shliqlar, shuningdek, rost (har qanday bo'sh bo'lmagan satr to'g'ri)

*   *   *


    Xulosa
Eng ko'p ishlatiladigan uchta turdagi konvertatsiyalar qatorga, raqamga va mantiqiy konvertatsiyadir.

String Conversion– Biz biror narsani chiqarganimizda paydo bo'ladi. bilan bajarilishi mumkin String(value). Satrga o'tkazish odatda ibtidoiy qiymatlar uchun aniq bo'ladi.

Numeric Conversion– Matematik operatsiyalarda uchraydi. bilan bajarilishi mumkin Number(value).

Konvertatsiya quyidagi qoidalarga muvofiq amalga oshiriladi:

Qiymat	        Bo'ladi…
undefined	  NaN
null	            0
true / false	1 / 0
string	           Satr "xuddi shunday" o'qiladi, har ikki tomondagi bo'shliqlar (bo'shliqlar, tablar \t, yangi qatorlar va boshqalarni o'z ichiga oladi) e'tiborga olinmaydi. \nBo'sh satrga aylanadi 0. Xato beradi NaN.
Boolean Conversion– Mantiqiy amallarda uchraydi. bilan bajarilishi mumkin Boolean(value).

Qoidalarga amal qiladi:

Qiymat	                                    Bo'ladi…
0, null, undefined, NaN,""	       false
har qanday boshqa qiymat	   true

Ushbu qoidalarning aksariyatini tushunish va yodlash oson. Odamlar odatda xatoga yo'l qo'yadigan muhim istisnolar:

undefinedraqam NaN sifatida emas, balki 0.
"0"va faqat bo'sh joy kabi satrlar " "mantiqiy sifatida to'g'ri.
Bu yerda ob'ektlar qamrab olinmaydi. Biz JavaScript haqida ko'proq asosiy narsalarni o'rganganimizdan so'ng, biz ularga faqat ob'ektlarga bag'ishlangan "Ibtidoiy konvertatsiya qilish ob'ekti " bo'limida qaytamiz .
```