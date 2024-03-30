// File:
//   extract.js
// Author:
//   Samuel A. Rebelsky
//   This code may be freely reused for non-commercial purposes.
// Description:
//   Functions for extracting information (from query strings or
//   cookies or ...)
// Contents:
//   queryField(fieldname) -- extract a field from the query string
// Last modified:
//   Wednesday, June 11, 1997

// alert("Loading extract.js") // DEBUG

// Function
//   queryField(fieldname)
// Description
//   Looks at the query string to the document, and extracts
//   a field from the query. 
// Note
//   The query string has the form
//      ?<fldname>=<value>&<fldname>=<value>
function queryField(opt)
{
  var keyloc		// The location of the start of "key=value"
  var nextkey 		// The start of the next key
  var start 		// The start of the value
  var opts			// The options specified by the search string
  var optval		// The value of the selected option
  // Determine the options/search string
  opts=location.search
  // Most keys start after an & and are followed by an = sign
  keyloc = opts.indexOf("&" + opt + "=")
  // If a string isn't found, indexOf returns -1.  So, we try the "first"
  // key, which appears right after the initial question mark
  if(keyloc == -1) {
    keyloc = opts.indexOf("?" + opt + "=")
  }
  // If, at this point, we still haven't found the key, stop.
  if (keyloc == -1) {
    return ""
  } 
  // The value normally ends with an ampersand (which marks the start of the next key/value pair)
  nextkey = opts.indexOf("&",keyloc+1)  
  // But sometimes there is no next pair
  if (nextkey == -1) {
    nextkey = opts.length
  }
  // Okay, what next?  Verify that it's reasonable
  if (nextkey < keyloc) {
    return ""
  }  
  // Get and return the value
  sval = keyloc+2+opt.length
  optval = plustospace(unescape(opts.substring(sval,nextkey)))
  return optval
} // getOption()

// Function
//   plustospace
// Description
//   Converts all the plus signs in a string to spaces.
//   (Most browsers convert spaces to pluses for form submission)
// Note
//   Not all of the code is what I'd expect, but this has been
//   thoroughly tested on Netscape Navigator 3.0 for the Mac.
function plustospace(txt)
{
  // Sanity check on empty string
  if (txt == "") { return txt }
  
  // Variables
  var newtxt=""  // The txt without the spaces
  var pos=0      // The position of the plus sign
  var prev=0     // The position of the previous plus sign
  var done=false // sentinel for loop
  var tmp        // Used for debugging
  
  // Repeatedly find the next + sign, stopping when no more
  // are found
  // alert("Text is '" + txt + "'") // DEBUG
  while (!done) {
    pos = txt.indexOf("+",prev)
    // tmp = prompt("Plus found at '" + pos + "'", "OK")  // DEBUG
    // if (tmp != "OK") { done = 1 }// DEBUG
    if (prev >= txt.length) {
      done = true
    }
    else if (pos == 0) {
      prev=1
      newtxt += " "
    }
    else if ((pos < 0) || (pos == "")) {
      // Not found ... exit
      done = true
    }
    else {
      // Copy text
      if (pos>prev) { newtxt += txt.substring(prev,pos) }
      newtxt += " "
      // And move on
      prev=pos+1
    }
  }
  // Get the last little bit
  newtxt += txt.substring(prev,txt.length)
  return newtxt  
} // plustospace()
