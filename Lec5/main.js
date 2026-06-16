//function ukutvla(sec) {
//    let mimdinareCifri = sec;
//  
//    let taimeri = setInterval(() => {
//      console.log(mimdinareCifri);
//      mimdinareCifri--;
//  
//      if (mimdinareCifri < 0) {
//        clearInterval(taimeri);
//        console.log("დრო ამოიწურა");
//      }
//    }, 1000);
//  }
  
// ukutvla(5);


//function ricxvebi(gadatsemiRicxvi) {
//    let randomRicxvi = -1;
//  
//    while (randomRicxvi !== gadatsemiRicxvi) {
//      randomRicxvi = Math.floor(Math.random() * 11);
//      console.log("შემთხვევითი რიცხვია: " + randomRicxvi);
//    }
//    console.log("დაემთხვა ერთმანეთს!");
//  }
//  
//  ricxvebi(7);


//function shemowmeba(n, qolbeqi) {
//    if (n > 27) {
//      qolbeqi();
//    } else {
//      console.log("ნაკლებია");
//    }
//  }
//  
//  function namdviladMetia() {
//    console.log("ეს ნამდვილად მეტია 27-ზე");
//  }
//  
//  shemowmeba(30, namdviladMetia);


//function miiqeIuzerebiThen(apiBuli) {
//    fetch(apiBuli)
//      .then(pasuxi => pasuxi.json())
//      .then(monacemebi => {
//        let pirveliOtxi = monacemebi.slice(0, 4);
//        console.log(pirveliOtxi);
//      })
//      .catch(shecdoma => console.error("დაფიქსირდა შეცდომა:", shecdoma));
//  }
  
//  miiqeIuzerebiThen("https://jsonplaceholder.typicode.com/users");

//async function miiqeIuzerebiAwait(apiBuli) {
//    try {
//      let pasuxi = await fetch(apiBuli);
//      let monacemebi = await pasuxi.json();
//      let pirveliOtxi = monacemebi.slice(0, 4);
//      console.log(pirveliOtxi);
//    } catch (shecdoma) {
//      console.error("დაფიქსირდა შეცდომა:", shecdoma);
//    }
//  }
  
//  miiqeIuzerebiAwait("https://jsonplaceholder.typicode.com/users");



//let xalxi = [
//    { name: "Giorgi", age: 25 },
//    { name: "Nika", age: 15 },
//    { name: "Mariam", age: 30 },
//    { name: "Luka", age: 18 }
//  ];
  
//  let dajgupeba = xalxi.reduce((damgrovebeli, adamiani) => {
//    if (adamiani.age > 10) {
//      damgrovebeli.atzeMeti.push(adamiani);
//    }
//    if (adamiani.age < 20) {
//      damgrovebeli.oczeNaklebi.push(adamiani);
//    }
//    return damgrovebeli;
//  }, { atzeMeti: [], oczeNaklebi: [] });
  
//  console.log(dajgupeba);


//function sheadare(ricxvi1, ricxvi2, callback) {
//    if (ricxvi1 > ricxvi2) {
//      callback("მეტია");
//    } else {
//      console.log("ნაკლები ან ტოლია");
//    }
//  }
  
//  sheadare(15, 10, (shetyobineba) => {
//    console.log(shetyobineba);
//  });



//let produqtebi = [
//    { name: "Mouse", price: 15 },
//    { name: "Keyboard", price: 45 },
//    { name: "USB Cable", price: 7 },
//    { name: "Headphones", price: 29.9 },
//    { name: "Webcam", price: 52 }
//  ];
  
//  let dajgupdaNivtebi = produqtebi.reduce((damgrovebeli, nivti) => {
//    if (nivti.price > 20) {
//      damgrovebeli.dzviri.push(nivti);
//    } else {
//      damgrovebeli.iafi.push(nivti);
//    }
//    return damgrovebeli;
//  }, { dzviri: [], iafi: [] });
  
//  console.log(dajgupdaNivtebi);



