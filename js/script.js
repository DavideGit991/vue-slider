
// facciamo funzionare i bottoni next e prev
// e mettiamo in pagina i pallini

var app = new Vue(
{
  el:"#app",
  data:
  {
    indexImg:0,
    imgLink:['img/image1.jpg','img/image2.jpg','img/image3.jpg','img/image4.jpg'],
    dot:[]
  },
  methods:
  {
    nextImg()
    {
      this.indexImg ++
      if(this.indexImg > (this.imgLink.length-1))
      {
       this.indexImg = 0;
      }
      console.log(this.indexImg,this.imgLink.length-1)
    },
    prevImg()
    {
      (this.indexImg == 0)? this.indexImg = (this.imgLink.length-1) : this.indexImg --;
      console.log(this.indexImg,this.imgLink.length-1)
    },
    insertDot()
    {
      for (let i = 1; i < this.imgLink.length; i++)
      {
        this.dot.push("fas fa-circle")
      }
    }
  }
}
);




// BONUS:
// vediamo se troviamo una nostra tecnica per affrontare la cosa;
// facciamo si che sia evidenziato solo il pallino relativo all’img in corso;
// altro che volete provare.
