//1) //class Samkutxedi {
//    constructor(gverdiA, gverdiB, gverdiC) {
//        this.gverdiA = gverdiA;
//        this.gverdiB = gverdiB;
//       this.gverdiC = gverdiC;
//    }

//    getPerimeter() {
//        return this.gverdiA + this.gverdiB + this.gverdiC;
//    }

//    getArea() {
//        let p = this.getPerimeter() / 2; // naxevarperimetri
//        // heronis formula
//        let farti = Math.sqrt(p * (p - this.gverdiA) * (p - this.gverdiB) * (p - this.gverdiC));
//        return farti;
//    }

//    isRightTriangle() {
//        let gverdabi = [this.gverdiA, this.gverdiB, this.gverdiC].sort((x, y) => x - y);
///        // pitagoras teorema: a^2 + b^2 === c^2
//        let martkutxaa = Math.pow(gverdabi[0], 2) + Math.pow(gverdabi[1], 2) === Math.pow(gverdabi[2], 2);
//        return martkutxaa;
//    }
//}

//const chemiSamkutxedi = new Samkutxedi(3, 4, 5);
///console.log("1. Perimetri:", chemiSamkutxedi.getPerimeter());
//console.log("1. Fartobi:", chemiSamkutxedi.getArea());
//console.log("1. Martkutxaa?:", chemiSamkutxedi.isRightTriangle());



//2) class Smartphoni {
//    constructor(brendi, modeli, gamoshvebisWeli) {
//        this.brendi = brendi;
//        this.modeli = modeli;
//        this.gamoshvebisWeli = gamoshvebisWeli;
///    }
//}

//class GamingPhone extends Smartphoni {
//    constructor(brendi, modeli, gamoshvebisWeli, gpuScore, batteryCapacity) {
//        super(brendi, modeli, gamoshvebisWeli); // gadaaqvs deda klasidan
//        this.gpuScore = gpuScore;
///        this.batteryCapacity = batteryCapacity;
//    }

//    performanceIndex() {
    
//        let indeqsi = (this.gpuScore * 0.7) + (this.batteryCapacity * 0.3);
//        return indeqsi;
//    }
//}

//const chemiTelefoni = new GamingPhone("Asus", "Rog Phone", 2024, 90, 6000);
//console.log("2. Telefoni:", chemiTelefoni.modeli);
//console.log("2. Simshlavris Indeqsi:", chemiTelefoni.performanceIndex());




//3) class CryptoWallet {
//    constructor(misamarti, sawyisiBalansi = 0) {
//        this.misamarti = misamarti;
////        this.balansi = sawyisiBalansi;
//        this.istoria = [];
//    }

//    deposit(tanxa) {
//        this.balansi = this.balansi + tanxa;
//        this.istoria.push("Shemotanilia: " + tanxa);
//    }

//    withdraw(tanxa) {
//        if (tanxa > this.balansi) {
///            console.log("Error: Ar gajvs sakmarisi tanxa!");
//           return;
//        }
//        this.balansi = this.balansi - tanxa;
//       this.istoria.push("Gatanilia: " + tanxa);
//    }

//    transfer(vis, tanxa) {
//        if (tanxa > this.balansi) {
//            console.log("Error: Gadaricxva ver moxerxda!");
//            return;
//        }
//        this.balansi = this.balansi - tanxa;
//        this.istoria.push("Gadaricxulia " + vis + "-tan: " + tanxa);
//    }

//    getHistory() {
//        return this.istoria;
//    }
//}

//const chemiSafule = new CryptoWallet("0x123", 100);
//chemiSafule.deposit(50);
//chemiSafule.withdraw(30);
//chemiSafule.transfer("0x999", 40);
///console.log("3. Balansi:", chemiSafule.balansi);
//console.log("3. Istoria:", chemiSafule.getHistory());









//4) class Wishlist {
//    constructor() {
        this.nivtebi = [];
//    }

//    addItem(id, saxeli, fasi) {
//        let axaliNivti = { id: id, saxeli: saxeli, fasi: fasi };
//        this.nivtebi.push(axaliNivti);
//   }

//    deleteItem(id) {
//       this.nivtebi = this.nivtebi.filter(nivti => nivti.id !== id);
//    }

//    updateItem(id, axaliFasi) {
//        let nivti = this.nivtebi.find(n => n.id === id);
//        if (nivti) {
//            nivti.fasi = axaliFasi;
//        }
//    }
//}


//const chemiSia = new Wishlist();
///chemiSia.addItem(1, "Naushnikebi", 150);
//chemiSia.addItem(2, "Mausi", 80);
//chemiSia.updateItem(1, 130); 
//chemiSia.deleteItem(2);
//console.log("4. Sia:", chemiSia.nivtebi);



//class Freelancer {
//    constructor(saxeli, saatobriviTarifi) {
//        this.saxeli = saxeli;
//        this.saatobriviTarifi = saatobriviTarifi;
//    }

//    calculateEarnings(saatebi) {
//       let dziritadiSaatebi = saatebi;
//        let bonusSaatebi = 0;

//        if (saatebi > 160) {
//            dziritadiSaatebi = 160;
//            bonusSaatebi = saatebi - 160;
//       }

//        let dziritadiTanxa = dziritadiSaatebi * this.saatobriviTarifi;
    
//        let bonusTanxa = bonusSaatebi * (this.saatobriviTarifi * 1.5); 

//        return dziritadiTanxa + bonusTanxa;
//    }
//}

//const programisti = new Freelancer("Giorgi", 20);
//console.log("5. Gamomushaveba (150st):", programisti.calculateEarnings(150)); 
//console.log("5. Gamomushaveba (170st):", programisti.calculateEarnings(170));