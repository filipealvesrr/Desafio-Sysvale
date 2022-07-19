const anchorData = require('./anchorData');
const companyData = require('./companyData');

function employeesWrongWage(anchorDatas, companyDatas) {
    let listEmployes = [];
    for (let i = 0; i < anchorDatas.length; i++) {
        if(anchorDatas[i].salario !== companyDatas[i].salario) {
            const obj = {}
            obj.name = anchorDatas[i].nome;
            obj.difference = Math.abs(anchorDatas[i].salario - companyDatas[i].salario);
            listEmployes.push(obj);
        }
    }
    return listEmployes;
}

function sumWage(datas) {
    let sum = 0;

    for(let data of datas) {
        sum += data.salario;
    }

    return sum;
}

function calculateAverage(data) {
    
    const media = sumWage(data)/data.length;
    return media;
}

function wageDifference(anchorDatas, companyDatas) {
    const sumAnchor = sumWage(anchorDatas);
    const sumCompany = sumWage(companyDatas);
    const difference = Math.abs(sumAnchor - sumCompany);

    return difference;

}

function averageDifference(anchorDatas, companyDatas) {
    const averageAnchor = calculateAverage(anchorDatas);
    const averageCompany = calculateAverage(companyDatas);
    const difference = Math.abs(averageAnchor - averageCompany);

    return difference;

}

function sendMessage() {
    const differenceAverage = averageDifference(anchorData, companyData);
    const differenceWage = wageDifference(anchorData, companyData);
    const listEmployees = employeesWrongWage(anchorData, companyData);

    for(let employee of listEmployees) {
        console.log(`Nome do colaborador: ${employee.name} => Diferença no salário entre as tabelas: ${employee.difference}`)
    }
    
    console.log(`A diferença entre o valor de referência e o valor enviado pela empresa é de R$ ${differenceWage}`); 
    console.log(`A diferença entre as médias dos salários é de R$ ${differenceAverage}`); 
}

sendMessage();
