module.exports = function getActive(users) {
  var result = []
  for (var i = 0; i < users.length; i++) {
    if (users[i].user_data.active === 1) {
      result.push(users[i])
    }
  }
  return result
}
