
// this keyword 

// Method => object 
// Function =>  global (window, global)

const video = {
 title : 'a',
Tags : ['a', 'b' , 'c'],
showTags () {
    this. Tags .forEach (function (Tags){
          console.log(this.title, Tags);
    },this)
}
};

video.showTags();