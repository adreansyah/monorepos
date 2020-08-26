import React from 'react';

const DateOptionBox = () => {

    let result = {
        month: {}, year: {}, date: {}
    }


    result.date = listDate();
    result.month = listMonth();
    result.year = listYear();
    return result;

};

const listDate = () => {
    let DateList = [];
    for (let d = 1; d <= 31; d++) {
        DateList.push({ value: d, selected: false })
    }
    return DateList;
}

const listMonth = () => {
    let MonthList = [];
    const monthName = ['Januari', 'Februari', 'Maret', 'April', 'Mei',
                            'Juni', 'Juli', 'Agustus', 'September', 'Oktober',
                            'November', 'Desember']
    for (let m = 1; m <= monthName.length; m++){
        MonthList.push({value: monthName[m-1], selected: false})
    }
    return MonthList;
}

const listYear = () => {
    let YearList = [];
    for (let y = 2019; y >= 1919; y--) {
        YearList.push({ value: y, selected: false })
    }
    return YearList;
}

export default DateOptionBox;