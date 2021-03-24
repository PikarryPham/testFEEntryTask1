//tim so M nho nhat sao cho no lon hon hoac bang N va thoa chia cho 604800000 du 217800000
const today = new Date().getTime();
//console.log(today); //today la 1 so nguyen tinh theo don vi ms

const findNumber = (number) => {
    let a = 0;
    while(a>=0){
        a++;
        if((a*604800000 + 217800000) >= number)
        {
            console.log(a);
            return a;
        }
    }
}


const convertTimeStampFirstColumn =(timestamp) => {
    const day = new Date(timestamp);
    return day.toLocaleString("vi",{
        timeZone: "Asia/Ho_Chi_Minh",
        dateStyle: "short"
    })
}

const convertTimeStampSecondColumn = (timestamp) => {
    const day = new Date(timestamp);
    return day.toLocaleString("vi",{
        timeZone: "Asia/Ho_Chi_Minh",
        dateStyle: "short",
        timeStyle: "long"
    })
}


const nextSaturday = (findNumber(today) * 604800000 + 217800000);
let tstamp_Start1 = nextSaturday/1000;
console.log(tstamp_Start1);
let tstamp_Start2 = (nextSaturday + 604800000)/1000;
console.log(tstamp_Start2);
let tstamp_End1 = (nextSaturday + 3*60*60*1000)/1000; //ms: thoi gian ket thuc cua thu 7 thu 2: cung ngay sau 3 tieng
console.log(tstamp_End1);
let tstamp_End2 = ((nextSaturday + 604800000) + 3*60*60*1000)/1000 ;//thoi gian ket thuc cua ngay thu 7 thu 2: cung ngay sau 3 tieng
console.log(tstamp_End2);

// assign timestamp for each column of the table
document.getElementById('tgianbdau1').innerHTML = '(' + tstamp_Start1 + ')';
document.getElementById('tgianbdau2').innerHTML = '(' + tstamp_Start2 + ')';
document.getElementById('tgiankethuc1').innerHTML = '(' + tstamp_End1 + ')';
document.getElementById('tgiankethuc2').innerHTML = '(' + tstamp_End2 + ')';

//gan gia tri vao hai bien can thiet cua cot "Ngay thi"
document.getElementById('valueof1Sat').innerHTML = convertTimeStampFirstColumn(nextSaturday);
document.getElementById('valueof2Sat').innerHTML = convertTimeStampFirstColumn(nextSaturday + 604800000);

//gan gia tri vao hai cot con lai
document.getElementById('p-value01').innerHTML = convertTimeStampSecondColumn(nextSaturday) ;
document.getElementById('p-value02').innerHTML = convertTimeStampSecondColumn(nextSaturday + 3*60*60*1000);
document.getElementById('p-value03').innerHTML = convertTimeStampSecondColumn(nextSaturday + 604800000);
document.getElementById('p-value04').innerHTML = convertTimeStampSecondColumn(nextSaturday + 604800000 + 3*60*60*1000);;
