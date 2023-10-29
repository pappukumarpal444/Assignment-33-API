const loadRanDomUser = () =>{
fetch('https://randomuser.me/api/?results=50')
.then(res => res.json())
.then(data => displayRanDomUser(data))
}
loadRanDomUser()

const displayRanDomUser = (data) =>{
    const users = data.results;
    const showDiv = document.getElementById('ram')
  for (const user of users) {
    console.log(user)
    const div = document.createElement('div')
    div.classList.add('design')
    div.innerHTML = `
    <h3>Title: ${user.name.title}</h3>
    <h3>First Name: ${user.name.first}</h3>
    <h3>Last Name: ${user.name.last}</h3>
    <h4>Gender: ${user.gender}</h4>
    <h4>Country: ${user.location.country}</h4>
    `
    showDiv.appendChild(div)
}
}






















