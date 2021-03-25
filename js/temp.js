// function validTime(startTime,endTime){
//     var checkin = startTime.split("-");

//     var checkout = endTime.split("-");

//     var date1=new Date(parseInt(checkin[0]),parseInt(checkin[1])-1,parseInt(checkin[2]),0,0,0);

//     var date2=new Date(parseInt(checkout[0]),parseInt(checkout[1])-1,parseInt(checkout[2]),0,0,0);

//     if(date1.getTime()>date2.getTime()) {
//     alert('checkout date cannot late than checkin date',this);

//     return false;

//     }else{
//     return true;

//     }

//     return false;

//     }


// function checkDate(){
//     var str_date = document.getElementById("checkin").value;
//     var end_date = document.getElementById("checkout").value;
//     if(getDate(str_date)-getDate(end_date)>0){
//         alert("结束时间不能小于开始时间！");
//         return false;
//     }
// }
// function getDate(date){
//     var dates = date.split("-");
//     var dateReturn = '';
//     for(var i=0; i<dates.length; i++){
//         dateReturn+=dates[i];
//     }
//     return dateReturn;
// // }

// $(function() {
//     let $checkIn = $('#checkin');
//     let $checkOut = $('#checkout');

//     $checkIn.datetimepicker({

//         useCurrent: false,
//         format: 'YYYY-MM-DD',
//         minDate: moment()
//     });

//     $checkOut.datetimepicker({
//         useCurrent: false,
//         format: 'YYYY-MM-DD',
//     });

//     $checkIn.on("dp.change", function(e) {

//       //Here we add a day more to the Check-out
//         $checkOut.data("DateTimePicker").minDate(e.date.add(1, 'day'));
//     });

//     $checkOut.on("dp.change", function(e) {
//         $checkIn.data("DateTimePicker").maxDate(e.date);
//     });
// });

var totalArr = []; //所有客户订房的所有日期数组的集合

//获取id

function $$(checkin) {

    return document.getElementById(checkin);

}

date({

    dateId: "checkin", //input 上面的id

    skin: "red", //皮肤配置参数

    interval: "-" // 分隔符参数配置

});

date({

    dateId: "checkout",

    skin: "blue",

    //interval:" /\ "

    interval: "-" // 分隔符参数配置

});

//获取时间戳，不含分秒.时间格式：2020-01-02

function getTimeChuo(times) {

    var now = new Date();

    var dateNow = now.getFullYear() + "-" + Number(now.getMonth() + 1) + "-" + now.getDate();

    times = !times ? new Date(dateNow).getTime() : new Date(times).getTime();

    return times;

}

//获取某一个年某一月有多少天

var getDaysInOneMonth = function(year, month) {

    month = parseInt(month, 10); //强转成数字

    var d = new Date(year, month, 0); //这个是都可以兼容的

    return d.getDate();

};

//传入两个日期，求出中间所差的天数

function getAllDate(d1, d2) {

    var resultArr = []; //所有日期的数组集合

    var darr1 = d1.split("-");

    var darr2 = d2.split("-");

    var year = darr2[0] - darr1[0];

    //同一年的计算

    if (year == 0) {

        var tempMonth = []; //月份存储的临时数组

        var month = darr2[1] - darr1[1];

        for (var i = Number(darr1[1]); i <= Number(darr2[1]); i++) {

            tempMonth.push(i);

            //console.log(i);

        }

        //这时候判定月份,当发现数组中只有一个值的时候，那么证明是同月

        if (tempMonth.length == 1) {

            //只计算天数差了多少天

            for (var i = darr1[2]; i <= darr2[2]; i++) {

                var str = darr2[0] + "-" + tempMonth[0] + "-" + i;

                resultArr.push(str);

            }

        }

        //如果数组中只有两个值的时候，证明当前月到下个月
        else if (tempMonth.length == 2) {

            //只计算数组中第一个值到月底有多少天

            //只计算数组中第二个值到月初有多少天

            //获取当前月的天数

            var lastMonthDate = getDaysInOneMonth(darr2[0], tempMonth[0]);



            //计算数组中第一个值，从当前天到月底的天数

            for (var i = darr1[2]; i <= lastMonthDate; i++) {



                var str = darr1[0] + "-" + tempMonth[0] + "-" + i;

                resultArr.push(str);

            }



            //计算数组中第最后的一个值，从当前天到月初1号的天数

            for (var i = 1; i <= darr2[2]; i++) {



                var str = darr2[0] + "-" + tempMonth[tempMonth.length - 1] + "-" + i;

                resultArr.push(str);

            }

        }

        //当超过2值时候发现多出了月份
        else {

            //获取当前月的天数

            var lastMonthDate = getDaysInOneMonth(darr2[0], tempMonth[0]);



            //计算数组中第一个值，从当前天到月底的天数

            for (var i = darr1[2]; i <= lastMonthDate; i++) {



                var str = darr1[0] + "-" + tempMonth[0] + "-" + i;

                resultArr.push(str);

            }







            var mon = []; //多余出来的月份数组

            for (var i = 1; i < tempMonth.length - 1; i++) {

                mon.push(tempMonth[i]);

            }

            //循环获取每个月天数

            for (var i = 0; i < mon.length; i++) {

                var tempdate1 = getDaysInOneMonth(darr2[0], mon[i]);

                for (var j = 1; j <= tempdate1; j++) {

                    var str = darr2[0] + "-" + mon[i] + "-" + j;

                    //  console.log(j);

                    resultArr.push(str);

                }



            }

            //计算数组中第最后的一个值，从当前天到月初1号的天数

            for (var i = 1; i <= darr2[2]; i++) {



                var str = darr2[0] + "-" + tempMonth[tempMonth.length - 1] + "-" + i;

                resultArr.push(str);

            }

            /***  2020年 6月份 到 8月份所有天

            **/

        }

        return resultArr;

    }

    //当前年到下一年的计算
    else if (year == 1) {

        //当前年的当前月的所有天数

        var currentMonth = getDaysInOneMonth(darr1[0], darr1[1]);

        //当前月到月底的天数

        for (var i = darr1[2]; i <= currentMonth; i++) {

            var str = darr1[0] + "-" + darr1[1] + "-" + i;

            resultArr.push(str);

        }

        //当前年的下一个月到 12月中间所有的月份

        for (var i = Number(darr1[1]) + 1; i <= 12; i++) {

            var MonthDate = getDaysInOneMonth(darr1[0], i);

            //这些月份对应的天数

            for (var j = 1; j <= MonthDate; j++) {

                var str = darr1[0] + "-" + i + "-" + j;

                resultArr.push(str);

            }

        }

        //下一年的1月份到下一年的上个月

        for (var i = 1; i < darr2[1]; i++) {

            var MonthDate = getDaysInOneMonth(darr2[0], i);

            //这些月份对应的天数

            for (var j = 1; j <= MonthDate; j++) {

                var str = darr2[0] + "-" + i + "-" + j;

                resultArr.push(str);

            }

        }

        //下一年的最后的月份所对应的天数

        for (var i = 1; i <= darr2[2]; i++) {

            var str = darr2[0] + "-" + darr2[1] + "-" + i;

            resultArr.push(str);

        }

        return resultArr;

    }

    //当前年份 到 中间隔了1一年以上 到 下一年  如 2020-1-2 到 2023-1-6
    else {

        //当前年的当前月的所有天数

        var currentMonth = getDaysInOneMonth(darr1[0], darr1[1]);

        //当前月到月底的天数

        for (var i = darr1[2]; i <= currentMonth; i++) {

            var str = darr1[0] + "-" + darr1[1] + "-" + i;

            resultArr.push(str);

        }

        //当前年的下一个月到 12月中间所有的月份

        for (var i = Number(darr1[1]) + 1; i <= 12; i++) {

            var MonthDate = getDaysInOneMonth(darr1[0], i);

            //这些月份对应的天数

            for (var j = 1; j <= MonthDate; j++) {

                var str = darr1[0] + "-" + i + "-" + j;

                resultArr.push(str);

            }

        }





        //获取中间那几年,那几月的那几天

        for (var i = Number(darr1[0]) + 1; i < darr2[0]; i++) {

            for (var j = 1; j <= 12; j++) {

                var MonthDate = getDaysInOneMonth(i, j);

                for (var k = 1; k <= MonthDate; k++) {

                    var str = i + "-" + j + "-" + k;

                    resultArr.push(str);

                }

            }

        }



        //下一年的1月份到下一年的上个月

        for (var i = 1; i < darr2[1]; i++) {

            var MonthDate = getDaysInOneMonth(darr2[0], i);

            //这些月份对应的天数

            for (var j = 1; j <= MonthDate; j++) {

                var str = darr2[0] + "-" + i + "-" + j;

                resultArr.push(str);

            }

        }

        //下一年的最后的月份所对应的天数

        for (var i = 1; i <= darr2[2]; i++) {

            var str = darr2[0] + "-" + darr2[1] + "-" + i;

            resultArr.push(str);

        }

        return resultArr;

    }



    //console.log(year,month)  

}

//数组查找函数

function isArrIndex(msg, a) {

    if (a.length == 0) {

        return -1;

    } else {

        for (var i = 0; i < a.length; i++) {

            if (a[i] == msg) {

                return i;

            }

        }

        return -1;

    }

}

//酒店选择的时间数组

$$("surebtn").onclick = function() {

    //预定时间不得小于今天

    if (getTimeChuo($$("ipt").value) < getTimeChuo()) {

        alert("预订时间，不能小于今天");

        return;

    }

    //预定时间不得大于离店时间

    if (getTimeChuo($$("ipt").value) > getTimeChuo($$("ipt1").value)) {

        alert("预订时间，不能大于离店时间");

        return;

    }

    //获取选择好的日期数组

    var dateArr = getAllDate($$("ipt").value, $$("ipt1").value);

    if (totalArr.length == 0) {

        alert("订房成功");

        totalArr = totalArr.concat(dateArr);

    } else {

        //比对预订时间 - 离店时间段内是否已经被订房了！

        var dateArr1 = getAllDate($$("ipt").value, $$("ipt1").value);

        for (var i = 0; i < dateArr1.length; i++) {

            if (totalArr.indexOf(dateArr1[i]) != -1) {

                alert("该时间段:" + dateArr1[i] + " 已经被人订了");

                return;

            }

        }

        totalArr = totalArr.concat(dateArr1);

        //console.log();

    }



    console.log(totalArr);

}