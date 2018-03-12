var vid;
var song;
function setup() {
vid=createVideo('ibiza.mp4', vidloader)
song=loadSound('Vengabois.mp3', rainbow)

}
function vidloader(){
  vid.play();
  vid.size(600,600);
  vid.position(200,80);
}

function rainbow(){
song.play();
}
