const fs = require("fs")


// araba verilerini al
let cars = JSON.parse(
    fs.readFileSync(`${__dirname}/../data/cars.json`, "utf-8")
  );


  
//butun araclari al
exports.getAllCars = (req, res) => {
    res.status(200).json({message:"Arac verikeri alindi",
        results:cars.length,
        cars,
    })
}

//yeni arac ekle
exports.createCar = (req, res) => {
    res.status(201).json({message:"yeni arac olusturuldu",
        
    })
}

//bir araci al
exports.getCar = (req, res) => {
    res.status(200).json({message:"Arac bulundu",
        
    })
}

//bir aarci sil
exports.deleteCar = (req, res) => {
    res.status(200).json({message:"Arac silindi",
        results:cars.length,
        cars,
    })
}


//bir araci guncelle
exports.updateCar = (req, res) => {
    res.status(200).json({message:"Arac guncellendi",
        results:cars.length,
        cars,
    })
}



//butun araclari al
exports.getAllCars = (req, res) => {
    res.status(200).json({message:"Arac verikeri alindi",
        results:cars.length,
        cars,
    })
}
