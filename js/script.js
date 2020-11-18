
// facciamo funzionare i bottoni next e prev
// e mettiamo in pagina i pallini

var app = new Vue(
{
  el:"#app",
  data:
  {
    indexImg:0,
    imgLink:['img/image1.jpg','img/image2.jpg','img/image3.jpg','img/image4.jpg']
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
      console.log(this.indexImg)
    },
    prevImg()
    {
      (this.indexImg == 0)? this.indexImg = (this.imgLink.length-1) : this.indexImg --;
      console.log(this.indexImg)
    },
    changeIndex(i)
    {
     this.indexImg = i ;
    }
  }
}
);




// BONUS:
// vediamo se troviamo una nostra tecnica per affrontare la cosa;
// facciamo si che sia evidenziato solo il pallino relativo all’img in corso;
// altro che volete provare.
