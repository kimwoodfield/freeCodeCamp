/* Change the provided string to a string with single quotes at the beginning and end and no escape characters.

Right now, the <a> tag in the string uses double quotes everywhere. You will need to change the outer quotes to single quotes so you can remove the escape characters.

var myStr = "<a href=\"http://www.example.com\" target=\"_blank\">Link</a>";
*/

var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
// Instead of using backslashes, we can instead use single quotation marks instead of double quotation marks and the value will still be interpreted as a string. This way, double quoatation marks can be used freely without needing to worry about accidentally causing errors.