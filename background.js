/*
Copyright 2014 Google Inc. All rights reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
var contextID = -1;
var l = {
"-":"[","_":"{","=":"]","+":"}",
"q": "\'", "Q": "\"", "w": ",", "W": "<", "e": ".", "E":">", "r": "p", "R":"P","t":"y","T":"Y","y":"f","Y":"F","u":"g","U":"G","i":"c","I":"C","o":"r","O":"R","p":"l","P":"L","[":"/","{":"?","]":"=","}":"+",
/* "a": "a", "A": "A", */ "s": "o", "S": "O", "d": "e", "D":"E", "f": "u", "F":"U","g":"i","G":"I","h":"d","H":"D","j":"h","J":"H","k":"t","K":"T","l":"n","L":"N",";":"s",":":"S","'":"-","\"":"_",
"z": ";", "Z": ":", "x": "q", "X": "Q", "c": "j", "C":"J", "v": "k", "V":"K","b":"x","B":"X","n":"b","N":"B","m":"m","M":"M",",":"w","<":"W",".":"v",">":"V","/":"z","?":"Z"
}
//var m = ["Backspace","Shift","Ctrl","Alt","Esc"];
chrome.input.ime.onFocus.addListener((c)=>{contextID = c.contextID;});
chrome.input.ime.onBlur.addListener(() => { contextID = 0;})
chrome.input.ime.onKeyEvent.addListener(function(engineID, keyData) {
      if (keyData.type == "keydown" && l[keyData.key]) {
        chrome.input.ime.commitText({"contextID": contextID,"text": l[keyData.key]});
        return true
      }
      /* if (keyData.type == "keydown" && !(m.includes(keyData.key))) {
        if (l[keyData.key]) {
          chrome.input.ime.commitText({"contextID": contextID,"text": l[keyData.key]});
          return true
        }
        else if(l[keyData.key.toLowerCase()]) {
          chrome.input.ime.commitText({"contextID": contextID,"text": l[keyData.key].toUpperCase()});
          return true;
        }
      }
      else if(chrome.input.ime.sendKeyEvents != undefined && m.includes(keyData.key) ){
        chrome.input.ime.sendKeyEvents({"contextID": contextID, "keyData": [{key:keyData.key,code:keyData.code});
        return true;
      } */
      return false;
});
