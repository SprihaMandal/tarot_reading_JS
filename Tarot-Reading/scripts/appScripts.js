//Object constructor
function getCard(name,image,des){
    this.name=name;
    this.image=image;
    this.des=des;
}

//array of cards
var deck=[
    new getCard('The Fool','thefool','It means freedom,naveity,new begginings'),
    new getCard('The Devil','thedevil','It means no, wrong way, just stop'),
    new getCard('The High Priestess','thehighpriestess','Silence, spirituality'),
    new getCard('The Lovers','thelovers','love,an important choice,heaven'),
    new getCard('The Magician','themagician','Creativity,Cahnneling energy'),
    new getCard('The Strength','thestrength','Strength,confidence,stamina')
]

function getRandomNum(num){
    //getting full random num
    var randomNum=Math.floor(Math.random()*num);
    console.log(randomNum);
    return randomNum;
}

document.getElementById("btn").onclick=function drawCard(){
    var index=getRandomNum(6);
    var currentCard=deck[index];
    const text='<br><img src="images/'+currentCard.image+'.jpg"><h3>'+currentCard.name+'</h3><p>'+currentCard.des+'</p>';
    document.getElementById("table").innerHTML=text;
}