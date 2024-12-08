const mongoose = require("mongoose")

mongoose.connect(process.env.DB_URL)

.then(() => {
    console.log("Veri tabanına başarılı bir şekilde bağlanıldı")
})

.catch((err) => {
    console.log("Veri tabanına bağlanırken sorun yaşandı.")
})