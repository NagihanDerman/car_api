const fs = require("fs")
const crypto = require("crypto")
const write = require("../utils/write")
// Araç verilerini tutan dizi



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
    // araç verisine id ekle
    const newCar = { ...req.body, id: crypto.randomUUID() };
  
    // yeni aracı diziye ekle
    cars.push(newCar);
  
    // json dosyasını güncelle
    write(cars);
  
    // client'a cevap gönder
    res.status(201).json({
      message: "Yeni araç oluşturuldu",
      car: newCar,
    });
  };

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

// Bir aracı sil:
exports.deleteCar = (req, res) => {
    // id'si gelen aracı diziden kaldır
    cars = cars.filter((car) => car.id !== req.params.id);
  
    // json dosyasını güncelle
    write(cars);
  
    // client'a cevap gönder
    res.status(204).json({
      message: "Araç silindi",
    });
  };
  
  // Bir aracı güncelle:
  exports.updateCar = (req, res) => {
    // isteğin body kısmındaki güncellenicek değerleri al
    const updatedData = req.body;
  
    // aracın güncel değerlerine sahip yeni bir nesne oluştur
    const updatedCar = { ...req.car, ...updatedData };
  
    // güncellenicek elemanın sırasını bul
    const index = cars.findIndex((car) => car.id === updatedCar.id);
  
    // dizideki eski aracın yerine yeni aracı koy
    cars.splice(index, 1, updatedCar);
  
    // json dosyasını güncelle
    write(cars);
  
    // client'a cevap gönder
    res.status(200).json({
      message: "Araç güncellendi",
      car: updatedCar,
    });
  };