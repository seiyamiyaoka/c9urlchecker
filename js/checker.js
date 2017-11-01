checkURL = () => {
  const url = document.getElementById("form").value;
  const result = convertURL(url)
  createLink(result)
}

convertURL = (url) => {
  if ( url.match(/ide.c9.io/) === null) {
    const start = url.indexOf('/', url.indexOf('/') + 1);
    const end = url.indexOf(".", start)
    let needStr = url.substring(start + 1, end)
    let firstURL;
    let lastURL;
    if (url.match(/dive-into-code/) !== null) {
      checkPoint = needStr.lastIndexOf("-")
      firstURL = needStr.substring(checkPoint + 1, needStr.length)
      lastURL = needStr.substring(0, checkPoint)
      return `https://ide.c9.io/${firstURL}/${lastURL}`
    } else {

      const finish = needStr.indexOf("-", 1)
      lastURL = needStr.substring(0, finish)
      firstURL = needStr.substring(finish + 1, needStr.length)
      return `https://ide.c9.io/${firstURL}/${lastURL}`
    }
  }
  return false
}

createLink = (url) => {

  let baseTag = document.getElementsByClassName("result")
  if (url === false) {
    let pTag = document.createElement("p")
    pTag.append("正しいURLです")
    return baseTag[0].appendChild(pTag)
  }
  let aTag = document.createElement("a")
  aTag.setAttribute('href',url);
  aTag.appendChild(document.createTextNode('replacedurl'));
  baseTag[0].appendChild(aTag)
}

//   debugger
//   https://js-sample-dive-into-code.c9users.io
//   https://ayapanmi-puniii.c9users.io
//   https://ide.c9.io/puniii/ayapanmi
//   if (url )
