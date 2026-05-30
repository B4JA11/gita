//var arr = [1, [2, 3, [4, 5]], 5, [2, [3, 6]]];
//var flatArr = [];

//function amogeba(array) {
//    for (var i = 0; i < array.length; i++) {
//        if (Array.isArray(array[i])) {
//            amogeba(array[i]);
//        } else {
//            flatArr.push(array[i]);
//        }
//    }
//}
//amogeba(arr);

//var uniqueArr = [];
//for (var i = 0; i < flatArr.length; i++) {
//    var arisTuAra = false;
//    for (var j = 0; j < uniqueArr.length; j++) {
//        if (flatArr[i] === uniqueArr[j]) {
//           arisTuAra = true;
//        }
//    }
//    if (arisTuAra === false) {
//        uniqueArr.push(flatArr[i]);
//    }
//}

//for (var i = 0; i < uniqueArr.length; i++) {
//    for (var j = 0; j < uniqueArr.length - 1; j++) {
//        if (uniqueArr[j] > uniqueArr[j + 1]) {
//            var droebiti = uniqueArr[j];
//           uniqueArr[j] = uniqueArr[j + 1];
//           uniqueArr[j + 1] = droebiti;
//        }
//    }
//}

//console.log("pasuxi :", uniqueArr);


//var products = [
//    { name:"Phone", price:1200, rating:4.5 },
//    { name:"Laptop", price:2500, rating:4.8 },
//    { name:"Book", price:30, rating:4.9 },
//    { name:"TV", price:800, rating:4.0 }
//  ];
  
//  var yvelazeKargi = null;
  
//  for (var i = 0; i < products.length; i++) {
//      if (products[i].price < 1000) {
//          if (yvelazeKargi === null || products[i].rating > yvelazeKargi.rating) {
//              yvelazeKargi = products[i];
//          }
//      }
//  }
  
//  console.log("es aris yvelaze kargi 1000 larshi:", yvelazeKargi);



//var sentence = "dog cat dog bird cat dog fish bird";
//var sityvebi = sentence.split(" "); 

//var sityvebisTvladi = sityvebi.reduce(function(aqumulatori, esSityva) {
//    if (aqumulatori[esSityva] === undefined) {
//        aqumulatori[esSityva] = 1;
//    } else {
//        aqumulatori[esSityva] = aqumulatori[esSityva] + 1;
//   }
//    return aqumulatori;
//}, {});

//console.log("yvela sityvis raodenoba:", sityvebisTvladi);

//var maqsimumi = 0;
//var yvelazeXshiriSityva = "";

//for (var sityva in sityvebisTvladi) {
//    if (sityvebisTvladi[sityva] > maqsimumi) {
//        maqsimumi = sityvebisTvladi[sityva];
//       yvelazeXshiriSityva = sityva;
//    }
//}

//console.log("yvelaze xshirad es meordeba:", yvelazeXshiriSityva, "esec raodenoba: " + maqsimumi);





//function asoebisTvla(teqsti, aso) {
//    var counteri = 0;
//    for (var i = 0; i < teqsti.length; i++) {
//        if (teqsti[i] === aso) {
//            counteri++;
//        }
//    }
//    return counteri;
//}

//console.log("ramdenjeraa aso 'a'?", asoebisTvla("salami ana, rogor xar", "a"));



//function palindromiaTuAra(sityva) {
//    var shebrunebuli = "";
//    for (var i = sityva.length - 1; i >= 0; i--) {
//        shebrunebuli = shebrunebuli + sityva[i];
//    }
    
//    if (sityva === shebrunebuli) {
//        return true;
//    } else {
//        return false;
//    }
//}
//
//console.log("ana aris?", palindromiaTuAra("ana")); 
//console.log("gamarjoba aris?", palindromiaTuAra("gamarjoba"));


//function sheergebaDaJami(masivi1, masivi2) {
//    var dapyupebuli = masivi1.concat(masivi2);
//    var wmindaMasivi = [];
//    var sabolooJami = 0;
    
//    for (var i = 0; i < dapyupebuli.length; i++) {
//        if (wmindaMasivi.indexOf(dapyupebuli[i]) === -1) {
//            wmindaMasivi.push(dapyupebuli[i]);
//        }
//    }
    
//    for (var j = 0; j < wmindaMasivi.length; j++) {
//        sabolooJami = sabolooJami + wmindaMasivi[j];
//    }
    
//    return sabolooJami;
//}

//console.log("jami aris:", sheergebaDaJami([1, 2, 3], [3, 4, 5]));


//function faqtoriali(ricxvi) {
//    var pasuxi = 1;
//    for (var i = 1; i <= ricxvi; i++) {
//        pasuxi = pasuxi * i;
//    }
//    return pasuxi;
//}

//console.log("5-is faqtoriali:", faqtoriali(5));



//function kideErtiTwoSum(ricxvebisMasivi, sasurveliJami) {
//    var wyvili = [];
    
//    for (var i = 0; i < ricxvebisMasivi.length; i++) {
//        for (var j = i + 1; j < ricxvebisMasivi.length; j++) {
//            if (ricxvebisMasivi[i] + ricxvebisMasivi[j] === sasurveliJami) {
//                wyvili.push(ricxvebisMasivi[i]);
//                wyvili.push(ricxvebisMasivi[j]);
//                return wyvili;
//            }
//        }
//    }
//    return "ver vishovet egეთი wyvili";
//}

//var chemiMasivi = [1, 2, 3, 4, 5, 6, -7, -8];
//console.log("wyvili ipova:", kideErtiTwoSum(chemiMasivi, -15));