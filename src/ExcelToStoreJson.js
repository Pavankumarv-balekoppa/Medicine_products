const XLSX = require('xlsx');
const fs = require('fs');


const workbook = XLSX.readFile('../INTERVIEWDATA.xlsx');
const worksheet = workbook.Sheets[workbook.SheetNames[0]];
const data = XLSX.utils.sheet_to_json(worksheet);
fs.writeFileSync('ExcelDataToJsonDataStore.json', JSON.stringify(data));
