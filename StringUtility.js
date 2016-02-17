var StringUtility = {}

var StringUtility = {
 // Your Code Goes Here
 }

 // take in an array of strings
 // return an array of Capitalized strings


///////////////////////////////////////////////////////
// function version

var a = ["this", "is", "an", "array", "of", "strings"];
function capitilize (arr) {

	for (var i = 0; i < arr.length; i++ ) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substr(1);
  }
  return arr;
}

capitilize(a);


///////////////////////////////////////////////////////
// object version

var a = ["this", "is", "an", "array", "of", "strings"];

var StringUtility = {
	capitilize: function (arr) {
		for (var i = 0; i < arr.length; i++ ) {
			arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substr(1);
		}
		return arr;
	}
};

StringUtility.capitilize(a);