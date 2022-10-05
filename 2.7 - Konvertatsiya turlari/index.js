alert( "6" / "2" );  // javob 3 sababi, stringlarni raqamlarga aylantiriladi


let str = "123";
alert(typeof str); // string

let num = Number(str); // 123 raqamlarga aylanadi

alert(typeof num); // raqam
alert(age); // NaN, konvertatsiya qilinmadi
alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN ("z" dagi raqamni o'qishda xatolik)
alert( Number(true) );        // 1
alert( Number(false) );       // 0


alert( Boolean(1) ); // true
alert( Boolean(0) ); // false

alert( Boolean("hello") ); // true
alert( Boolean("") ); // false


alert( Boolean("0") ); // true
alert( Boolean(" ") ); // bo'shliqlar, shuningdek, rost (har qanday bo'sh bo'lmagan satr to'g'ri)
