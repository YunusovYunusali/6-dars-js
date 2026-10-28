console.log("1-masala");
//for loop yordamida 1 dan 10 gacha bo‘lgan sonlarni konsolga chiqaring.
//Kutilgan natija: 1 2 3 4 5 6 7 8 9 10
for( let i=1; i<=10; i++){
    console.log(i);
}
console.log("2-masala");
//1 dan 30 gacha bo‘lgan sonlar orasidan faqat juft sonlarni konsolga chiqaring
for (let i = 1; i <=30; i++){
    if ( i % 2 == 0) {
          console.log(i);
    }
}
console.log("3-masala");
//1 dan 50 gacha bo‘lgan barcha sonlarning yig‘indisini hisoblang
let son = 0;
for( let i=0; i<=50; i++){
    son+=i;
}
 console.log(son);

 console.log("4-masala");
 //1 dan 100 gacha bo‘lgan toq sonlarning yig‘indisini hisoblang va natijani konsolga chiqaring
 son = 0;
 for( let i=0; i<=100; i++){
    if(i % 2==1){
    console.log(i);
    }
    son+=i;
 }
 console.log(`Toq sonlar yigindisi =${son}`);

 console.log("5-masala");
 //1 dan 100 gacha bo‘lgan sonlar ichidan 3 ga qoldiqsiz bo‘linadigan sonlarni chiqaring. Shu
//sonlarning nechta ekanini ham aniqlang
let sanoq = 0;
for( let i = 0; i <= 100; i++){
    if(i%3==0){
        console.log(i);
        sanoq++  
    }
}
 console.log(`Soni :${sanoq}`);

 console.log("6-masala");
 //let number = 7 deb o‘zgaruvchi yarating. Loop yordamida shu sonning 1 dan 10 gacha ko‘paytirish
//jadvalini chiqaring.
let number = 7;
for( let i=1; i<=10; i++){
  
    console.log(`${number} x ${i} = ${number*i}`);
}
console.log("7-masala");
//let number = -15 deb o‘zgaruvchi yarating. Agar son musbat bo‘lsa, 1 dan shu songacha bo‘lgan
//sonlarni chiqaring. Agar son manfiy bo‘lsa, uning modulini aniqlab, 1 dan shu songacha bo‘lgan
//sonlarni chiqaring. Agar son 0 bo‘lsa, “Son nolga teng” xabarini chiqaring.
let raqam = -15;
if(raqam > 0){
    for( let i=1; i <=raqam; i++){
        console.log(i);
    }
}else if(raqam < 0 ){
    let modul = raqam * -1;
    for( let i = 1; i<=modul; i++)
        console.log(i)
}else if(raqam = 0){
    console.log("Son nolga teng");
}
console.log("8-masala")
//let secretNumber = 8 deb belgilang. 1 dan 10 gacha bo‘lgan sonlarni loop yordamida tekshiring. Son
//secretNumber ga teng bo‘lsa, “Son topildi” deb chiqaring. Qolgan sonlar uchun “Bu son emas” deb
//chiqaring.
let secretNumber = 8;
for( let i =1; i<=10; i++){
      console.log(i);

    if( i==secretNumber ){
        console.log("Son topildi");
        break;
    }else{
        console.log("Bu son emas");
    }
}
console.log("9-masala");
//let number = 58324 soni berilgan. Uning nechta raqamdan iborat ekanini loop yordamida aniqlang.
//Kutilgan natija: 5 ta raqam. Yordam: sonni 10 ga bo‘lib, butun qismini olish orqali oxirgi raqamlarni
//ketma-ket olib tashlash mumkin. Math.floor() dan foydalanishingiz yoki boshqa usul topishingiz mumkin
 let bolinuvchi = 582324;
 count = 0;
 for( ; bolinuvchi > 0; count++){
bolinuvchi = Math.floor(bolinuvchi/10)
 }
 console.log(count);
  console.log("10-masala");
  //Mukammal son — o‘zidan tashqari barcha musbat bo‘luvchilarining yig‘indisi o‘ziga teng bo‘lgan son.
//Masalan, 6 mukammal son, chunki 1 + 2 + 3 = 6. let number = 28 deb o‘zgaruvchi yarating va loop
//yordamida bu son mukammal yoki mukammal emasligini aniqlang.
//Kutilgan natija: “Bu mukammal son”. Shart: for, if va % operatorlaridan foydalaning.

let mson = 6;
let suum = 0;
for( let i = 1; i<= mson/2; i++){
    if(mson%i==0){
        suum+=i;
    }
}
if (suum == mson) {
    console.log("Bu mukammal son");
} else {
    console.log("Bu mukammal son emas");
}
  
 

 
 
 
 