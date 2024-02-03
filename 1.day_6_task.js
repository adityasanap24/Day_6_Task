// 1.class movie
class Movie{
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating
        
        if(rating==undefined||null){
            this.rating="PG"
        }else{
            this.rating=rating
        }
    }
    

    getPG(arr){
        console.log(arr)
        // rating=>PG -3 obj
        // return this
        let pgResult=[]
        for(var i=0;i<arr.length;i++){
            if(arr[i].rating=="PG"){
                pgResult.push(arr[i])
            }
        }
        console.log(pgResult)
        
    }

}
let film1=new Movie("Casino Royale","Eon Productions","PG­13")
let film2=new Movie("life in sea","yrs Productions")

const array=[film1,film2]
film1.getPG(array)