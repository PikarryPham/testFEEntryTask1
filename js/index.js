
//get the day of the next week
const setDay = (number) => {
    let day = new Date();
    console.log(day);
    let days = 7 - day.getDay() + number - 1;
    console.log(days);
    let nextDay = new Date(day.setDate(day.getDate() + days)); 
    console.log(nextDay.toString());
    return nextDay.toString();
    //today = dd + '/'+mm+'/'+yyyy;
}

//chuyen thang tu chu thanh so. VD: Apr --> 4, Jun --> 6, Jan --> 1....
const getMonth = (monthStr) =>{
    return new Date(monthStr+'-1-01').getMonth()+1
}
//tra ve ket qua cua x ngay tiep theo duoi format: yyyy-mm-dd
const formatDate = (number) => {
    date = setDay(number);
    let mm = date.slice(4,7);
    let dd = date.slice(8,10);
    let yy = date.slice(11,15);
    let month = getMonth(mm);
    if (month < 10)
    {
        month = '0' + month;
    }
    let str = `${yy}-${month}-${dd}`;
    console.log(`${yy}-${month}-${dd}`);
    return str;
    //return [year, month, day].join('-');
}

//Ham tra ve thu 7 toi
//Neu ngay hom nay la thu 7 hoac CN, thi se xet den thu 7 cua 1 tuan tiep theo
//Neu ngay hom nay la thu 2 --> thu 6, thi ngay thu 7 toi se la thu 7 trong tuan
const returnTheNextWeekSaturday = () => {
    let today = new Date();
    let dd = today.getDay(); //6: Saturday
    console.log(dd);
    let theday = '';
    //console.log(dd);
    if (dd == 0) //0: Sunday
    {
        theday = formatDate(0);
    }
    else if(dd == 6) // 6: Saturday
    {
        //return the saturday of the next week
        theday = formatDate(7);
    }
    else if (dd == 5){ //5: Friday
        //5: Friday
        theday = formatDate(1);
    }
    else if (dd == 4){ //4: Thurs
        //5: Friday
        theday = formatDate(2);
    }
    else if (dd == 3){ //3: Wed
        //5: Friday
        theday = formatDate(3);
    }
    else if (dd == 2){ //2: Tue
        //5: Friday
        theday = formatDate(4);
    }
    else if (dd == 1){ //1: Mon
        //5: Friday
        theday = formatDate(5);
    }
    return theday;
}

//Ham tra ve thu 7 toi cua toi
//Neu ngay hom nay la thu 7 hoac CN, thi se xet den thu 7 cua 2 tuan tiep theo
// 
const returnTheSecondNextWeekSaturday = () => {
    let today = new Date();
    let dd = today.getDay(); //6: Saturday
    //console.log(dd);
    let theday = '';
    switch (dd) {
        case 0: //0: sunday
            theday = formatDate(7);
            return theday;
        case 6: //6: saturday
            theday = formatDate(14);
            return theday;
        case 5: 
            theday = formatDate(12);
            return theday;
        case 4: 
            theday = formatDate(11);
            return theday;
        case 3: 
            theday = formatDate(10);
            return theday;
        case 2: 
            theday = formatDate(9);
            return theday;
        case 1: 
            theday = formatDate(8);
            return theday;
        default:
            return('Invalid date');
    }
}
//returnTheSecondNextWeekSaturday();
//gan gia tri vao hai bien can thiet cua cot "Ngay thi"
document.getElementById('valueof1Sat').innerHTML = returnTheNextWeekSaturday();
document.getElementById('valueof2Sat').innerHTML = returnTheSecondNextWeekSaturday();

//gan gia tri timestamp vao cac truong thoi gian bat dau va tho gian ket thuc
let getthedate = (new Date(`${returnTheSecondNextWeekSaturday()} 19:30:00 UTC+7`).getTime()/100);
document.getElementById('tgianbdau1').innerHTML = (new Date(`${returnTheNextWeekSaturday()} 19:30:00 UTC+7`).getTime()/100);
document.getElementById('tgianbdau2').innerHTML = (new Date(`${returnTheSecondNextWeekSaturday()} 19:30:00 UTC+7`).getTime()/100);
document.getElementById('tgiankethuc1').innerHTML = (new Date(`${returnTheNextWeekSaturday()} 22:30:00 UTC+7`).getTime()/100);
document.getElementById('tgiankethuc2').innerHTML = (new Date(`${returnTheSecondNextWeekSaturday()} 22:30:00 UTC+7`).getTime()/100);

document.getElementById('p-value01').innerHTML = `${returnTheNextWeekSaturday()} 19:30:00 UTC+7`;
document.getElementById('p-value02').innerHTML = `${returnTheNextWeekSaturday()} 22:30:00 UTC+7`;
document.getElementById('p-value03').innerHTML = `${returnTheSecondNextWeekSaturday()} 19:30:00 UTC+7`;
document.getElementById('p-value04').innerHTML = `${returnTheSecondNextWeekSaturday()} 22:30:00 UTC+7`;

