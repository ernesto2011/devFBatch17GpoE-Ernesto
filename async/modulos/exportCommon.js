const error  ="ERROR"
const warning = "WARNING"
const info ="INFO"
const flag = true

function log(message,leve) {
    console.log('los valores llegaron son', message, leve);
}

module.exports.error = error;
module.exports.warning = warning;
module.exports.info = info;
module.exports.flag = flag;