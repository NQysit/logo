/*
 * Clase Demo
 * representa todas as funcións necesarias para xenerar o canvas de demo de cores
 */
function Demo()
{	
	/*
	* Recuperar canvas
	*/
	canvas = document.getElementById("demoColores");
	ctx = canvas.getContext("2d");
	canvas.width = canvas.width;
	
	var grd;
	
	this.gradient = function(colores, posicion)
	{		
		 // Create gradient
	      grd = ctx.createLinearGradient(0,canvas.height,canvas.width,canvas.height);
	      
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
	
}