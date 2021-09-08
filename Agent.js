var Agent = function() { //definerer constructoren Agent som også er en klasse
  this.vector = createVector(random(width), random(height));  //where the first agents spawn when you load the code
  this.vectorOld = this.vector.copy();
  this.isOutside = false; //Agents start with the definition that they are not outside the screen
  this.angle;
};

Agent.prototype.update = function(strokeWidth) {
  this.vector.x += cos(this.angle) * this.stepSize; //cos(this.angle) * this.stepSize makes it so the larger agents move faster by making the agents x increase faster. It also makes it so that the agents move faster the closer the angle is to 0°
  this.vector.y += sin(this.angle) * this.stepSize; //this line does the same just for y 
  this.isOutside = this.vector.x < 0 || this.vector.x > width || this.vector.y < 0 || this.vector.y > height; //checks if the agent is still on the screen
  if (this.isOutside) { //if the agent is not on the screen then:
    this.vector.set(random(width), random(height)); //spawn agent at random location
    this.vectorOld = this.vector.copy();
  }
  strokeWeight(strokeWidth * this.stepSize);
  line(this.vectorOld.x, this.vectorOld.y, this.vector.x, this.vector.y);
  this.vectorOld = this.vector.copy();
  this.isOutside = false;
};

Agent.prototype.color = function() {
  var AgentcolorX = this.vector.x/width;
  var AgentcolorY = this.vector.y/height;
  var AgentcolorZ = random(0,0.9);
  stroke(255*AgentcolorX,255*AgentcolorY,255*AgentcolorZ, agentAlpha);
}

Agent.prototype.update1 = function(noiseScale, noiseStrength, strokeWidth) {  //the drawMode 1 agents
  this.angle = noise(this.vector.x / noiseScale, this.vector.y / noiseScale) * noiseStrength; //k
  this.stepSize = random(1, 5); //makes the agents vary in size
  this.color();
  this.update(strokeWidth); //makes it so it gets the information from Agent.prototype.update
};

Agent.prototype.update2 = function(strokeWidth) {  //the drawMode 2 agents
  this.angle = mouseX / width * 6.289;
  this.stepSize = mouseY / height * 6.289;
  this.color();
  this.update(strokeWidth); //makes it so it gets the information from Agent.prototype.update
};

Agent.prototype.update3 = function(strokeWidth) {  //the drawMode 2 agents
  this.angle = mouseX / width * 6.289;
  this.stepSize = mouseY / height * 6.289;
  if(imgKey == 1) imageColor = img1.get(this.vector.x, this.vector.y);
  if(imgKey == 2) imageColor = img2.get(this.vector.x, this.vector.y);
  if(imgKey == 3) imageColor = img3.get(this.vector.x, this.vector.y);
  if(imgKey == 4) imageColor = img4.get(this.vector.x, this.vector.y);
  if(imgKey == 5) imageColor = img5.get(this.vector.x, this.vector.y);
  if(imgKey == 6) imageColor = img6.get(this.vector.x, this.vector.y);
  if(imgKey == 7) imageColor = img7.get(this.vector.x, this.vector.y);
  if(imgKey == 8) imageColor = img8.get(this.vector.x, this.vector.y);
  if(imgKey == 9) imageColor = img9.get(this.vector.x, this.vector.y);
  if(imgKey == 10) imageColor = img10.get(this.vector.x, this.vector.y);
  stroke(imageColor);
  this.update(strokeWidth); //makes it so it gets the information from Agent.prototype.update
};
