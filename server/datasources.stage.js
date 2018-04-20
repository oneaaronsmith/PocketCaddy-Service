module.exports = {
    "pocketcaddy_prod": {
      "host": process.env.DB_HOST,
      "port": 3306,
      "url": "",
      "database": process.env.DB_NAME,
      "password": process.env.DB_PASS,
      "name": "pocketcaddy_prod",
      "user": process.env.DB_USER,
      "connector": "mysql"
    }
}