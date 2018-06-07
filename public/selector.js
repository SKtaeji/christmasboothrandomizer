function getRandomUser()
{
  const xmasDay = ["Alex Martinez", "rudolph", "adolf"];
  var randomUser = xmasDay[Math.floor(Math.random() * xmasDay.length)];
  var user = document.getElementById("xmasUser");

  user.innerHTML = randomUser;
  console.log(randomUser);
}

getRandomUser();


// 2. call random() to select index of xmasUsers array
// function getRandomUser(xmasDay) {
//     Math.random(xmasDay[i]);
// }
// 3. return name of selected index
