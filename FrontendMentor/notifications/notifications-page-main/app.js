let notificationSpace = document.getElementById('notifications')
let users = []
class User{
constructor(name, img,action, text, time ){
    this.name = name
    this.img = img
    this.action = action
    this.text = text
    this.time = time
}}
let nathan = new User('Nathan Peterson', '/notifications-page-main/assets/images/nathan.jpg', 'reacted to your recent post',  '5 end-game strategies to increase your win rate', '1m ago' )
let natacha = new User('Natacha Anderson', '/notifications-page-main/assets/images/natacha.jpg', 'Kimberly Smith commented on your picture',  '', '1 week ago' )

users.push(nathan, natacha)
function mostrarNotificaciones(){
    users.forEach((User) => {
       notificationCards = `
        <div id="notifications--card">
        <div id="img-container" style="background-image:url(${User.img})"></div>
        <div>
        <span id="name"><b>${User.name}</b></span>
        <h5 id='light-text'>${User.action}</h5>&nbsp  <h5>${User.text}</h5>
        <br>
        <div id='time'>
        <span id="send-time">${User.time}</span>
        </div>
        </div>
        
        </div>`
        notificationSpace.innerHTML += notificationCards
    })
}
mostrarNotificaciones()

