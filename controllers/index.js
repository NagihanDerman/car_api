const fs = require("fs")
const crypto = require("crypto")
const write = require("../utils/write")
// Araç verilerini tutan dizi



// arac verilerini al
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
    // arac verisine id ekle
    const newCar = { ...req.body, id: crypto.randomUUID() };
  
    // yeni araci diziye ekle
    cars.push(newCar);
  
    // json dosyasını guncelle
    write(cars);
  
    // client'a cevap gonder
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
    // id'si gelen aracı diziden kaldir
    cars = cars.filter((car) => car.id !== req.params.id);
  
    // json dosyasini güncelle
    write(cars);
  
    // client'a cevap gonder
    res.status(204).json({
      message: "Araç silindi",
    });
  };
  
  // Bir aracı guncelle:
  exports.updateCar = (req, res) => {
    // istegin body kisminndaki guncellenecek degerleri al
    const updatedData = req.body;
  
    // aracın guncel degerlerine sahip yeni bir nesne olustur
    const updatedCar = { ...req.car, ...updatedData };
  
    // guncellenecek elemanin sirasini bul
    const index = cars.findIndex((car) => car.id === updatedCar.id);
  
    // dizideki eski aracin yerine yeni aracı koy
    cars.splice(index, 1, updatedCar);
  
    // json dosyasını guncelle
    write(cars);
  
    // client'a cevap gonder
    res.status(200).json({
      message: "Araç güncellendi",
      car: updatedCar,
    });
  };