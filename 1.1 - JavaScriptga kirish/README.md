``` js 

 JavaScript nima?

JavaScript dastlab "veb-sahifalarni jonli qilish" uchun yaratilgan.

Bu tildagi dasturlar skriptlar deb ataladi . Ular to'g'ridan-to'g'ri veb-sahifaning HTML-da yozilishi va sahifa yuklanganda avtomatik ravishda ishga tushishi mumkin.

Skriptlar oddiy matn sifatida taqdim etiladi va bajariladi. Ularni ishga tushirish uchun maxsus tayyorgarlik yoki kompilyatsiya kerak emas.

Bu jihatdan JavaScript Java deb nomlangan boshqa tildan juda farq qiladi .

* * *

    Nima uchun u Java Script deb ataladi?
JavaScript yaratilganda, u dastlab boshqa nomga ega edi: "LiveScript". Ammo o'sha paytda Java juda mashhur edi, shuning uchun yangi tilni Java tilining "kenja ukasi" sifatida joylashtirish yordam berishiga qaror qilindi.

Ammo rivojlanish jarayonida JavaScript o'zining ECMAScript deb nomlangan spetsifikatsiyasiga ega bo'lgan to'liq mustaqil tilga aylandi va endi uning Java bilan umuman aloqasi yo'q.

* * *

Bugungi kunda JavaScript nafaqat brauzerda, balki serverda yoki aslida JavaScript dvigateli deb nomlangan maxsus dasturga ega bo'lgan har qanday qurilmada ham ishlashi mumkin .

Brauzerda ba'zan "JavaScript virtual mashinasi" deb ataladigan o'rnatilgan dvigatel mavjud.

Turli dvigatellarda turli xil "kod nomlari" mavjud. Masalan:
    V8 - Chrome, Opera va Edge-da.
    SpiderMonkey - Firefox-da.
    …IE uchun “Chakra”, “JavaScriptCore”, “Nitro” va Safari uchun “SquirrelFish” kabi boshqa kod nomlari mavjud.
Yuqoridagi shartlarni eslab qolish yaxshidir, chunki ular Internetdagi ishlab chiquvchilar maqolalarida qo'llaniladi. Biz ham ulardan foydalanamiz. Misol uchun, agar "X xususiyati V8 tomonidan qo'llab-quvvatlansa", u ehtimol Chrome, Opera va Edge'da ishlaydi.

* * *

    Dvigatellar qanday ishlaydi?

Dvigatellar murakkab. Lekin asoslar oson.

    1. Dvigatel (agar u brauzer bo'lsa, o'rnatilgan) skriptni o'qiydi ("tahlillaydi").
    2. Keyin u skriptni mashina kodiga o'zgartiradi ("kompilyatsiya qiladi").
    3. Va keyin mashina kodi juda tez ishlaydi.
    4. Dvigatel jarayonning har bir bosqichida optimallashtirishni qo'llaydi. U hatto tuzilgan skriptni ishlayotganini kuzatib boradi, u orqali o'tadigan ma'lumotlarni tahlil qiladi va shu bilimlar asosida mashina kodini yanada optimallashtiradi.

* * *

Brauzer ichidagi JavaScript nima qila oladi?
Zamonaviy JavaScript - bu "xavfsiz" dasturlash tili. U xotira yoki protsessorga past darajadagi kirishni ta'minlamaydi, chunki u dastlab buni talab qilmaydigan brauzerlar uchun yaratilgan.

JavaScript-ning imkoniyatlari ko'p jihatdan u ishlayotgan muhitga bog'liq. Masalan, Node.js JavaScript-ga ixtiyoriy fayllarni o'qish/yozish, tarmoq so'rovlarini bajarish va h.k. imkonini beruvchi funksiyalarni qo'llab-quvvatlaydi.

Brazerda JavaScript veb-sahifani manipulyatsiya qilish, foydalanuvchi va veb-server bilan o'zaro aloqa qilish bilan bog'liq hamma narsani qila oladi.

Misol uchun, brauzerda JavaScript quyidagilarga qodir:

    Sahifaga yangi HTML qo'shing, mavjud tarkibni o'zgartiring, uslublarni o'zgartiring.
    Foydalanuvchi harakatlariga munosabat bildiring, sichqonchani bosish, kursor harakati, tugmachalarni bosish orqali ishga tushirish.
    Tarmoq orqali masofaviy serverlarga so'rovlar yuboring, fayllarni yuklab oling va yuklang ( AJAX va COMET texnologiyalari deb ataladi).
    Cookie-fayllarni oling va o'rnating, tashrif buyuruvchiga savollar bering, xabarlarni ko'rsating.
    Mijoz tomonidagi ma'lumotlarni eslab qoling ("mahalliy saqlash").
```
