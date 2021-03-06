const fs = require('fs');
const colors = require('colors/safe');

let listarTabla = (base, limite = 10) => {

    console.log('===================='.blue);
    console.log(`tabla de ${ base }`.blue);
    console.log('===================='.blue);

    for (let i = 0; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${ base*i }`);
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base, limite)) {
            reject(`El valor introducido ${ base } no es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${ base }-al-${ limite }.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`Tabla-${ base }-al-${ limite }.txt`);
        });

    });
};

module.exports = {
    crearArchivo,
    listarTabla
};