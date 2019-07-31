var text = document.querySelectorAll('h1');
var moment = window.moment;
var currentTime = moment().utc();

var debateTimes = [
  {
    start: moment("2019-07-30 20:00:00-0400"),
    end: moment("2019-07-30 22:00:00-0400")
  },
  {
    start: moment("2019-07-31 20:00:00-0400"),
    end: moment("2019-07-31 22:00:00-0400")
  }
];

var set = null;

text.forEach(function(item) {
  debateTimes.forEach(function(time) {
    if (currentTime > time.start.utc()
       && currentTime < time.end.utc()) {
      var diff = time.end.utc().fromNow();
      var header = document.createElement('H6');
      header.innerHTML = "it should end " + diff + ", but";
      item.innerHTML = "who fucking knows";
      document.body.insertBefore(header, item);
    } else if (currentTime < time.start.utc() && !set){
      var diff = time.end.local().format('h:mm a on MMMM Do');
      var header = document.createElement('H6');
      header.innerHTML = "the next one should end at " + diff + ", but";
      item.innerHTML = "who fucking knows";
      document.body.insertBefore(header, item);
      set = true;
    }
  })
})