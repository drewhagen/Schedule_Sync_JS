var daysOfWeek = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday"
];

function hour(i, container) {
    var hour = $("<canvas>").addClass("hour")
        .html(milTimeBy_nth_hr(i)+"-"+milTimeBy_nth_hr(i+1));
    $(container).append(hour);
}

function milTimeBy_nth_hr(n) {
    if (n==24) n=0;
    var milTime = n.toString() + "00";
    if (milTime.length == 3) milTime = "0" + milTime;
    return milTime;
}

function daily(i) {
    var daily;
    daily = $("<div>").addClass("daily").attr("id", daysOfWeek[i]);
    daily.append(createDaybel(i));
    return $("body").append(daily);
}

function createDaybel(i) {
    var fancy_Day = toSentenceCase(daysOfWeek[i]);
    var frame = $("<div>").addClass("day-bels");
    var daybel = $("<div>")
        .addClass("day-label")
        .attr("id", fancy_Day+"-label")
        .html(fancy_Day);
    return $(frame).append(daybel);
}

function toSentenceCase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

/*for (i = 0; i < 24; i++) {
 hour(i, "#side");
 }*/

for (i = 0; i < 7; i++) {
    daily(i);
    for (j = 0; j < 24; j++) {
        var d = "#" + daysOfWeek[i];
        hour(j, d);
  }
}

/* DEPRECIATED: Code to create identifiers based on an Hour Block.
 Example: 0000-0100, 2000=2100
 function milTime_durStr(i) {
 var durationOf;
 durationOf =
 print_milTime_by_nth_hour(i)+"-"+
 print_milTime_by_nth_hour(i+1);
 return durationOf;
 }*/

/*function print_milTime_by_nth_hour(i) {
 var mth_hour;
 if ((0<=i<=9))
 mth_hour = "0"+i.toString+"00";
 else if ((10<=i<=23))
 mth_hour = i.toString+"00";
 else if ((i=24)) mth_hour = "0000";
 else mth_hour = "error";
 return mth_Hour;
 }*/