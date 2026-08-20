const fs = require('fs');
const path = require('path');

const packageFilePath = path.join(__dirname,'../data/tour.json');

const getAll = () => {
    const data = fs.readFileSync(packageFilePath , 'utf-8');
    return JSON.parse(data);
}

const getById = (Id) => {
    const data = fs.readFileSync(packageFilePath, 'utf-8');
    const packages = JSON.parse(data);
    return packages.find(pkg => pkg.id === Id);
}

module.exports = {
    getAll,
    getById
  
};