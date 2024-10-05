// changing this 

// 1st solution  use arrow function 
const video = {
    title : 'a',
   Tags : ['a', 'b' , 'c'],
   showTags () {
       this. Tags .forEach ( Tags => {
             console.log(this.title, Tags);
       })
   }
   };
   video.showTags();

//    second solution use methods like bind , call , apply 

