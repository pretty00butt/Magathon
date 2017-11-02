$(document).ready(function () {
  $('form').on('submit', function (e) {
    e.preventDefault()

    var nonSleepTime = 24 - $('#input-sleeptime').val()
    var lifeTimeRatio = $('#input-lifetime').val() / parseFloat(nonSleepTime)
    var balanceType;
    if (lifeTimeRatio < 0.2) {
      balanceType = 1
    } else if (lifeTimeRatio < 0.4) {
      balanceType = 2
    } else if (lifeTimeRatio < 0.6) {
      balanceType = 3
    } else if (lifeTimeRatio < 0.8) {
      balanceType = 4
    } else {
      balanceType = 5
    }

    window.location.href = '/result.html?type=' + balanceType
  })
})
