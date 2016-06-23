
function get(child) {
	var fb = new Firebase("https://synctimer.firebaseio.com")
	fb.child(child).once("value", function(data) {
  		var timerdata = data.val();
	});
}
function getTime(date) {
    var d = new Date(date);
    return {
    	"seconds": d.getSeconds(),
    	"minutes": d.getMinutes(),
    	"hours": d.getHours(),
    	"day": d.getDay(),
    	"date": d.getDate(),
    	"month": d.getMonth()
    }

}