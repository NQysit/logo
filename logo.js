/*
 * Clase Logo
 * representa todas as funcións necesarias para xenerar o Logo
 */
function Logo()
{	
	/*
	* Recuperar canvas
	*/
	canvas = document.getElementById("areaCanvas");
	ctx = canvas.getContext("2d");
	canvas.width = canvas.width;
	
	
	/*
	 * Initialize app dimensions & coordenades
	 */	
	 
	 
	 
	 ////////////////
	 
	 	this.minX = -15;
        this.minY = -20;
        this.maxX = 15;
        this.maxY = 10;
        
        // relationships
        this.rangeX = this.maxX - this.minX;
        this.rangeY = this.maxY - this.minY;
        this.unitX = canvas.width / this.rangeX;
        this.unitY = canvas.height / this.rangeY;
        this.centerY = Math.round(Math.abs(this.minY / this.rangeY) * canvas.height);
        this.centerX = Math.round(Math.abs(this.minX / this.rangeX) * canvas.width);
        this.iteration = (this.maxX - this.minX) / 1000;
        
        
        /*
         * Default
         * we will charge new values on functions
         */
        this.scaleX = 15; //canvas.width / this.rangeX;
        this.scaleY = 300; //canvas.height / this.rangeY;
        this.logoX = this.centerX;
        this.logoY = this.centerY;
        
	 
	this.drawEquation = function(equation, tipo, lc1, ln1, ln2, ln3, ln4, lc2, ln5, ln6, ln7, ln8){
	        ctx.save();
	        ctx.save();
	        this.transformthis();
	
	        ctx.beginPath();
	        ctx.moveTo(this.minX, equation(this.minX));
	
	        
	
	
	        for(var x = this.minX + this.iteration; x <= this.maxX; x += this.iteration) {
	          ctx.lineTo(x, equation(x));
	        }
	        
	        ctx.restore();
	        ctx.lineJoin = 'round';
	        
	        if(tipo == "liso")
			{	        	
	        	ctx.strokeStyle = lc2;
				ctx.lineWidth = ln5;
	        	ctx.stroke();
	        	
				ctx.strokeStyle = lc1;
				ctx.lineWidth = ln1;
	        	ctx.stroke();
			}
			if(tipo == "3d")
			{
				ctx.strokeStyle = lc1;      	
	        	ctx.lineWidth = ln1;
	        	ctx.shadowColor = lc2;  
				ctx.shadowOffsetX = ln6;
				ctx.shadowOffsetY = ln7;
				ctx.shadowBlur = ln8;
				ctx.stroke();
			}
			if(tipo == "neon")
			{					       
		       //0 0 10px #fff,
		       //0 0 20px #fff
		       //0 0 30px #fff
		       //0 0 40px #ff00de
		       //0 0 70px #ff00de
		       //0 0 80px #ff00de
		       //0 0 100px #ff00de
		       //0 0 150px #ff00de
			}
			if(tipo == "sandwich")
			{
				ctx.strokeStyle = lc2;       	
	        	ctx.lineWidth = ln5;
				ctx.shadowColor = lc1;
				ctx.shadowOffsetX = ln6;
				ctx.shadowOffsetY = ln7;
				ctx.shadowBlur = ln8;		
		        ctx.stroke();
		       
		       	ctx.strokeStyle = lc1;        	
	        	ctx.lineWidth =  ln1;
				ctx.shadowColor = lc2;
				ctx.shadowOffsetX = ln2;
				ctx.shadowOffsetY = ln3;
				ctx.shadowBlur = ln4;
				ctx.stroke();
			}
			if(tipo == "profundo")
			{
				ctx.strokeStyle = lc1;      	
	        	ctx.lineWidth = ln1;
	        	ctx.shadowColor = lc2;  
				ctx.shadowOffsetX = ln6;
				ctx.shadowOffsetY = ln7;
				ctx.shadowBlur = ln8;
				ctx.stroke();
			}
			if(tipo == "custom")
			{				
				ctx.strokeStyle = lc2;      	
	        	ctx.lineWidth = ln5;  
				ctx.shadowOffsetX = ln6;
				ctx.shadowOffsetY = ln7;
				ctx.shadowBlur = ln8;
				ctx.stroke();
				
				ctx.strokeStyle = lc1;      	
	        	ctx.lineWidth = ln1; 
				ctx.shadowOffsetX = ln2;
				ctx.shadowOffsetY = ln3;
				ctx.shadowBlur = ln4;
				ctx.stroke();
			}
	        
	        
	        ctx.restore();
      }


      this.transformthis = function() {
	
	        // move ctx to center of canvas
	        //ctx.translate(this.centerX, this.centerY);
	        
	         ctx.translate(this.logoX, this.logoY);
	
	        //*
	         //* stretch grid to fit the canvas window, and
	         //* invert the y scale so that that increments
	         //* as you move upwards
	         //
	        ctx.scale(this.scaleX, -this.scaleY);
      }
      
      
      ////////////////
	 
	 
	 /*
	  * Functions
	  */
	 
	 //
	 this.generateBG = function(colorCentro, colorFora, radio1, radio2)
	 {
		var grd=ctx.createRadialGradient(canvas.width/2,canvas.height/2,radio1,canvas.width/2 ,canvas.height/2 ,radio2);
		grd.addColorStop(0,colorCentro);
		grd.addColorStop(1,colorFora);
		
		ctx.fillStyle=grd;
		ctx.fillRect(0,0,canvas.width,canvas.height);
	 }
	 
	 this.generateCircleBG = function(colorCentro, colorFora, radio1, radio2)
	 {
	 	ctx.save(); // Save the state of the context
		ctx.fillStyle = '#4433FC'; // Sets the fill color
		ctx.shadowOffsetX = 2; // Sets the shadow offset x, positive number is right
		ctx.shadowOffsetY = 10; // Sets the shadow offset y, positive number is down
		ctx.shadowBlur = 4; // Sets the shadow blur size
	 	ctx.beginPath();
      	ctx.arc(canvas.width / 2, canvas.height / 2, (canvas.width / 2)*.95 , 0, 2 * Math.PI, false);
      	//ctx.fillStyle = colorCentro;
      	ctx.fill();
      	//ctx.lineWidth = 5;
      	//ctx.strokeStyle = colorFora;
      	ctx.stroke();
            
  		ctx.restore(); // Restore the state of the context
	 }
	 
	 
	this.squareBG = function(colores, posicion, angulo)
	{
		/*
		 * 
		 *  0 -> 0, h/2, w, h/2
		 *  0-90 ->
		 * 90-180 ->
		 * 180-270 ->
		 * 270-360 ->
		 */
		 // Create gradient
	      var grd = ctx.createLinearGradient(0,0,canvas.width,canvas.height);
	      
	      // Add colors
	      //grd.addColorStop(0.000, 'rgba(0, 0, 0, 1.000)');
	      
	      
	      for(var i =0; i < colores.length; i++)
	      {
	      	grd.addColorStop(posicion[i], colores[i]);	      	
	      }
	    // Fill with gradient  
		ctx.fillStyle=grd;
		ctx.fillRect(0,0,canvas.width,canvas.height);	
	}
	
	this.circleBG = function(colores, posicion, innerX, innerY, innerR, extX, extY, extR)
	{	
		 // Create gradient
	      var grd = ctx.createRadialGradient(innerX, innerY, innerR, extX, extY, extR);
	      
	      // Add colors
	      //grd.addColorStop(0.000, 'rgba(0, 0, 0, 1.000)');
	      
	      
	      for(var i =0; i < colores.length; i++)
	      {
	      	grd.addColorStop(posicion[i], colores[i]);	      	
	      }
	    // Fill with gradient  
		ctx.fillStyle=grd;
		ctx.fillRect(0,0,canvas.width,canvas.height);
	
		
	}
	 
	 /*
	  * function setScale()
	  * set scale for logo dimensions
	  */
	 this.setScale = function(x,y)
	 {
	 	this.scaleX = x;
	 	this.scaleY = y;
	 }
	 
	 /*
	  * function setLogoXY()
	  * set scale for logo dimensions
	  */
	 this.setLogoXY = function(x,y)
	 {
	 	this.logoX = x;
	 	this.logoY = y;
	 }
	 
	 
	 this.generateGraphic = function(tipo, lc1, ln1, ln2, ln3, ln4, lc2, ln5, ln6, ln7, ln8)
	 {	
	 	this.drawEquation(
      	function(x) {
      		return Math.sin(x)/x
      	; },
      	tipo, lc1, ln1, ln2, ln3, ln4, lc2, ln5, ln6, ln7, ln8
      	);      	
	 }
	 
	 this.insertaTexto = function(text, font, italic, size, color, x, y)
	 {
		ctx.textAlign="center"; 



		var ita="";
		if(italic)
			ita = "Italic ";
    	ctx.font = ''+ ita + size + 'px ' + font +'';

      	ctx.fillStyle = color;
    	//ctx.fillText(text, parseInt(x), parseInt(y));
    	ctx.fillText(text, parseInt(x), parseInt(y));
    	
	 }
  	
	 
	 this.write = function(text, color)
	 {
	 	
	 	/*
	 	ctx.font = '60px Arial';
      	ctx.textAlign = 'center';
      	ctx.fillStyle = "black";
      	ctx.fillText(text, canvas.width/2, 475);
	 	*/
	 	
	 	ctx.font = '60px Gotham';
      	ctx.textAlign = 'center';
      	ctx.fillStyle = color;
    	ctx.fillText(text, canvas.width/2, 470);
      	
      	
      	//ctx.fillStyle = "#444";
		//ctx.fillRect(0, 200, 500, 200)
		
		//ff7700
		
		/*
		ctx.fillStyle = "#d50";
		ctx.shadowColor = "#f92"
		ctx.shadowOffsetX = 0;
		ctx.shadowOffsetY = 2;
		ctx.shadowBlur = 3;
		ctx.fillText(text, canvas.width/2, 470);
		*/
		
		/*
		ctx.shadowColor = "#707070"
		ctx.shadowOffsetX = 7;
		ctx.shadowOffsetY = 7;
		ctx.shadowBlur = blur;
		ctx.fillText(text, canvas.width/2, 270);
		alert("a");
		*/
      	
	 }
	 
	 
    
}