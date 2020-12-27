function convertHTML(str) {

    let copiedStr = [...str];
    console.log(copiedStr);

    for (let i = 0; i < copiedStr.length; i++) {
        if (copiedStr[i] === '&') {
            copiedStr[i] = '&amp;';
        } else if (copiedStr[i] === '<') {
            copiedStr[i] = '&lt;';
        } else if (copiedStr[i] === '>') {
            copiedStr[i] = '&gt;';
        } else if (copiedStr[i] === '"') {
            copiedStr[i] = '&quot;';
        } else  if (copiedStr[i] === "'") {
            copiedStr[i] = '&apos;';
        } 
    }

    let joinedStr = copiedStr.join("");
    console.log(joinedStr);

    return joinedStr;
  }
  
  convertHTML("Dolce & Gabbana");
// convertHTML("Hamburgers < Pizza < Tacos");
// convertHTML("Sixty > twelve")
// convertHTML('Stuff in "quotation marks"');
// convertHTML("Schindler's List");
// convertHTML("<>");
// convertHTML("abc");