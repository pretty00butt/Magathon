$(document).ready(function () {
  const type = getUrlVars()['type']
  $('#' + type).addClass('active')

  setTimeout(function () {
    $('.spinner').fadeOut('slow', function () {
      $('#main').fadeIn('slow', function () {
        console.log('start')
        setTimeout(function () {
          for (var i = 1; i<= 5; i++) {
            console.log(i)
            $('#' + i).addClass('active')
          }
        }, 3000)
      })

    })
  }, 3000)
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