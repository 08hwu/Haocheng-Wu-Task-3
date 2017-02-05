function setup() {
  resizeCanvas(600,450)
noStroke();
  

}




 var value = 0;
  var value2 = 0;






function draw() {


  var x2 = map(mouseX, 0, width, mouseY,0);
  var y2 = map(0,mouseY,width,mouseX,0);


  
 




  
  
  var c = color(255,mouseY,0);
  fill(c);
  noStroke();
  rect(0,0,6000,6000);
  
   var c4 = color(255, 204, 0);
  fill(c4);
  noStroke();
  ellipse(mouseX, mouseY, 80, 80);
  
    
  var c5 = color('rgb(231, 95, 3)');
  fill(c5);
  noStroke();
  rect(0,250,600,350);
 
 
  
  
  var c3 = color('rgb(0,0,180)');
  fill(c3);
  noStroke();
  
  triangle(150,150,50,250,250,250);


 
  fill(c3);
  noStroke();
  
  triangle(450,150,350,250,550,250);
  
  var c2 = color('rgb(0,0,250)');
  fill(c2);
  noStroke();
  
  triangle(300,100,200,250,400,250);
  
        
        
        
        
         var c9 = color(0, 1, 50);
  fill(c9);
  noStroke();
  
  var aX = map(mouseX, 0, width, width, 0);
  var aY = map(mouseY, 0, height, height, 0);
  
  // max(0, 100) = 100
  aY = max(aY, 250);
  
  triangle(aX,aY,50,250,250,250);
 triangle(aX+200,aY,350,250,550,250);
 triangle(aX+100,aY,200,250,400,250);
  
}