const fs = require("fs");

// araba verilerini al
let cars = JSON.parse(
  fs.readFileSync(`${__dirname}/../data/cars.json`, "utf-8")
);

module.exports = (req, res, next) => {
  // isteğe parametre olarak gelen id'li elemanı diziden al
  const found = cars.find((car) => car.id === req.params.id);

  // eleman bulunazsa hata gönder
  if (!found)
    return res
      .status(404)
      .json({ message: "Gönderilen id'ye sahip bir araç bulunamadı" });

  // sonraki adımda founda erisebilmek için istege ekle
  req.car = found;

  // id geçerliyse bir sonraki çalışıcak olan controller fonksiyona geç
  next();
};