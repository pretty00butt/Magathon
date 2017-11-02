$(document).ready(function () {
  var queries = getUrlVars()
  const workHours = Number(queries['hours'])
  const freeHours = 24 - workHours
  const freeMinutes = (24 - workHours) * 60
  const salary = queries['salary']

  $( document ).on( "mousemove", function(event) {
    const width = $(document).width()
    const left = event.pageX * 100 / width
    const right = 100 - left

    $('#axis').css('left', left + '%')
    const resultSalary = Math.floor(salary * (left / 50))
    $('#salary').text(addCommasToNumber(resultSalary) + '원')

    var resultMinutes = freeMinutes
    if (right > 50) {
      resultMinutes += Math.floor(workHours * 60 * ((right - 50) / 50)) 
    } else {
      resultMinutes -= Math.floor(freeHours * 60 * ((50 - right) / 50))
    }
    console.log('here')
    console.log(resultMinutes / 60)
    $('#time').text(Math.floor(resultMinutes / 60) + '시간' + resultMinutes % 60 + '분')
  })
})

function getUrlVars () {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&')

    for(var i = 0; i < hashes.length; i++) {
      hash = hashes[i].split('=');
      vars.push(hash[0]);
      vars[hash[0]] = hash[1];
    }

    return vars;
}

function addCommasToNumber (value) {
  if (!value || isNaN(Number(value))) return 0

  let rest = ('' + value).split('.')[1]

  value = '' + Math.floor(value / 1)
  const length = value.length
  var count = Math.floor(length / 3)
  if (length % 3 === 0) count -= 1

  for (var i = 1; i <= count; i++) {
    var indexOfComma = i * -1 * 3 + (-1 * (i - 1))
    value = value.slice(0, indexOfComma) + ',' + value.slice(indexOfComma)
  }

  value = rest ? value + '.' + rest : value
  return value
}