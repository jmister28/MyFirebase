var setup = function(URL) {
  var myFire = new Firebase (URL);
}
var writeNormal = function(data) {
  myFire.set(data);
}
var writeList = function(listData) {
  myFire.push(listData);
}
var view = function() {
  myFire.on("child_added", function(snapshot) {
    var f = writeNormal.val();
    document.getElementById("#").innerHTML = f;
  }
}
