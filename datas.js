// 07/07/1998 -> new Date(1998, 7, 7)
const { format } = require("date-fns");
const nascimento = new Date(1974, 8, 27);

console.log(format(nascimento, "dd/MM/yyyy"));