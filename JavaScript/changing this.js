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
//    video.showTags();

//    second solution use methods like bind , call , apply 

// example 

 function playvideo (a,b) {
console.log (this);
 }
 playvideo.call ({name: 'ali'}, 1,2);
 playvideo.apply ({name: 'asad'},[1,2]);
 const fn = playvideo.bind ({name: 'saad'}, 1,2)(); 

 playvideo();