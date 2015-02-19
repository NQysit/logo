/*
 * 
 * functions.js
 * contén todas as funcións que usaremos para xestionar a configuración de valores de index.html
 * será a encargada de comunicarse con logo.js e chamar ás funcións que xenerarán o canvas
 * 
 */

/*
 * dimensionsCanvas()
 * da tamaño á área de canvas
 * unha vez modificado o tamaño, chama á función que xenera o logo
 */
function dimensionsCanvas()
{
	var w = document.getElementById("widthCanvas").value;
	var h = document.getElementById("heightCanvas").value;
	document.getElementById("areaCanvas").width = w;
	document.getElementById("areaCanvas").height = h;
	
	cambiaFieldEstiloLogo();
}

/*
 * cargaDatos()
 * recolle os valores de todos os formularios
 * crea o obxecto Logo e chama ás súas funcións
 */
function cargaDatos()
{
	
	
	//variables scale
	var scaleX = document.getElementById("logoScaleX").value;
	var scaleY = document.getElementById("logoScaleY").value;
	
	//variables logo XY
	var logoX = document.getElementById("xLogo").value;
	var logoY = document.getElementById("yLogo").value;
	
	//variables logo
	var lc1 = document.getElementById("logoC1").value;
	var ln1 =	document.getElementById("logoN1").value;
	var ln2 =	document.getElementById("logoN2").value;
	var ln3 =	document.getElementById("logoN3").value;
	var ln4 =	document.getElementById("logoN4").value;
	var lc2 =	document.getElementById("logoC2").value;
	var ln5 =	document.getElementById("logoN5").value;
	var ln6 =	document.getElementById("logoN6").value;
	var ln7 =	document.getElementById("logoN7").value;
	var ln8 =	document.getElementById("logoN8").value;
	
	//variables textos
	var fB = document.getElementById("selectBrand").value;
	var sB = document.getElementById("sizeBrand").value;
	var txtB = document.getElementById("txtBrand").value;
	var iB = document.getElementById("itaBrand").checked;
	var cB = document.getElementById("colorBrand").value;
	var xB = document.getElementById("xBrand").value;
	var yB = document.getElementById("yBrand").value;

	var fURL = document.getElementById("selectURL").value;
	var sURL = document.getElementById("sizeURL").value;
	var txtURL = document.getElementById("txtURL").value;
	var iURL = document.getElementById("itaURL").checked;
	var cURL = document.getElementById("colorURL").value;
	var xURL = document.getElementById("xURL").value;
	var yURL = document.getElementById("yURL").value;

	
	//crear obxecto Logo
	var l = new Logo();
	
	//cargar background
	if(document.getElementById("checkBG").checked)
	{
		if(document.getElementById("gradientStyle_linear").checked)
		{
			var angulo = document.getElementById("rangeAngulo").value;
			l.squareBG(getColores(),getPosiciones(),angulo);
		}
		if(document.getElementById("gradientStyle_radial").checked)
		{
			var innerX = document.getElementById("rangeInnerX").value;
			var innerY = document.getElementById("rangeInnerY").value;
			var innerR = document.getElementById("rangeInnerR").value;
			var extX = document.getElementById("rangeExtX").value;
			var extY = document.getElementById("rangeExtY").value;
			var extR = document.getElementById("rangeExtR").value;
			
			l.circleBG(getColores(),getPosiciones(),innerX, innerY,innerR, extX, extY,extR);			
		}
		
	}
		
	if(document.getElementById("checkCirculo").checked)
		l.generateCircleBG(cc1, cc2, radioc1, radioc2);
	
	//cargar logo segundo modelo selecccionado
	var tipo="custom";
	if(document.getElementById("logoStyle_liso").checked)
		tipo="liso";
	if(document.getElementById("logoStyle_3d").checked)
		tipo="3d";
	if(document.getElementById("logoStyle_neon").checked)
		tipo="neon";
	if(document.getElementById("logoStyle_sandwich").checked)
		tipo="sandwich";
	if(document.getElementById("logoStyle_profundo").checked)
		tipo="profundo";
	
	//carga logo
	l.setScale(scaleX, scaleY);
	l.setLogoXY(logoX, logoY);
	l.generateGraphic(tipo, lc1, ln1, ln2, ln3, ln4, lc2, ln5, ln6, ln7, ln8);
	
	//cargar textos
	if(document.getElementById("checkBrand").checked)
		l.insertaTexto(txtB, fB, iB, sB, cB, xB, yB);	

	if(document.getElementById("checkURL").checked)
		l.insertaTexto(txtURL, fURL, iURL, sURL, cURL, xURL, yURL);	
		
	//cargar texto
	/*
	if(document.getElementById("checkText").checked)
		l.write("@NQysit", ct);	
	*/
	
	
	//cargar canvas demo
	cargaDemo();
}

/*
 * cargaDemo
 * crea unha demo de como quedarán as cores que se seleccionan
 */
function cargaDemo()
{
	var d = new Demo();
	
	d.gradient(getColores(),getPosiciones());	
}

/*
 * cambiaFieldEstiloLogo()
 * Ao seleccionar un estilo predefinido para o logo
 * mostra únicamente os campos necesarios para ese estilo
 * e fixa uns valores iniciais
 */
function cambiaFieldEstiloLogo()
{
	//nomes de etiquetas, posicións e valores
	// lbl - label
	// C - input = color
	// N - input = number
	/*
	 * lbl1 - C1 - lbl2 - N1 (0,50) - lbl3 - N2 (-50,50) - lbl4 - N3 (-50,50) - lbl5 - N4 (0,50)
	 * lbl6 - C2 - lbl7 - N5 (0,50) - lbl8 - N6 (-50,50) - lbl9 - N7 (-50,50) - lbl10 - N8 (0,50)
	 */
		
	if(document.getElementById("logoStyle_liso").checked)
	{
		//visibles
		document.getElementById("logolbl1").style.visibility = "visible";
		document.getElementById("logoC1").style.visibility = "visible";
		document.getElementById("logolbl2").style.visibility = "visible";
		document.getElementById("logoN1").style.visibility = "visible";
		document.getElementById("logolbl3").style.visibility = "hidden";
		document.getElementById("logoN2").style.visibility = "hidden";
		document.getElementById("logolbl4").style.visibility = "hidden";
		document.getElementById("logoN3").style.visibility = "hidden";
		document.getElementById("logolbl5").style.visibility = "hidden";
		document.getElementById("logoN4").style.visibility = "hidden";
		document.getElementById("logolbl6").style.visibility = "visible";
		document.getElementById("logoC2").style.visibility = "visible";
		document.getElementById("logolbl7").style.visibility = "visible";
		document.getElementById("logoN5").style.visibility = "visible";
		document.getElementById("logolbl8").style.visibility = "hidden";
		document.getElementById("logoN6").style.visibility = "hidden";
		document.getElementById("logolbl9").style.visibility = "hidden";
		document.getElementById("logoN7").style.visibility = "hidden";
		document.getElementById("logolbl10").style.visibility = "hidden";
		document.getElementById("logoN8").style.visibility = "hidden";
		
		//valores
		document.getElementById("logoC1").value = "#006600";
		document.getElementById("logoN1").value = "15";
		document.getElementById("logoC2").value = "#000000";
		document.getElementById("logoN5").value = "22.5";	
	}
	if(document.getElementById("logoStyle_3d").checked)
	{
		//visibles
		document.getElementById("logolbl1").style.visibility = "visible";
		document.getElementById("logoC1").style.visibility = "visible";
		document.getElementById("logolbl2").style.visibility = "visible";
		document.getElementById("logoN1").style.visibility = "visible";
		document.getElementById("logolbl3").style.visibility = "hidden";
		document.getElementById("logoN2").style.visibility = "hidden";
		document.getElementById("logolbl4").style.visibility = "hidden";
		document.getElementById("logoN3").style.visibility = "hidden";
		document.getElementById("logolbl5").style.visibility = "hidden";
		document.getElementById("logoN4").style.visibility = "hidden";
		document.getElementById("logolbl6").style.visibility = "visible";
		document.getElementById("logoC2").style.visibility = "visible";
		document.getElementById("logolbl7").style.visibility = "hidden";
		document.getElementById("logoN5").style.visibility = "hidden";
		document.getElementById("logolbl8").style.visibility = "visible";
		document.getElementById("logoN6").style.visibility = "visible";
		document.getElementById("logolbl9").style.visibility = "visible";
		document.getElementById("logoN7").style.visibility = "visible";
		document.getElementById("logolbl10").style.visibility = "visible";
		document.getElementById("logoN8").style.visibility = "visible";
		
		//valores
		document.getElementById("logoC1").value = "#006600";
		document.getElementById("logoN1").value = "10";
		document.getElementById("logoC2").value = "#000000";
		document.getElementById("logoN5").value = "10";
		document.getElementById("logoN6").value = "10";
		document.getElementById("logoN7").value = "15";
		document.getElementById("logoN8").value = "10";
	}
	if(document.getElementById("logoStyle_neon").checked)
	{
		//visibles
		document.getElementById("logolbl1").style.visibility = "hidden";
		document.getElementById("logoC1").style.visibility = "hidden";
		document.getElementById("logolbl2").style.visibility = "hidden";
		document.getElementById("logoN1").style.visibility = "hidden";
		document.getElementById("logolbl3").style.visibility = "hidden";
		document.getElementById("logoN2").style.visibility = "hidden";
		document.getElementById("logolbl4").style.visibility = "hidden";
		document.getElementById("logoN3").style.visibility = "hidden";
		document.getElementById("logolbl5").style.visibility = "hidden";
		document.getElementById("logoN4").style.visibility = "hidden";
		document.getElementById("logolbl6").style.visibility = "hidden";
		document.getElementById("logoC2").style.visibility = "hidden";
		document.getElementById("logolbl7").style.visibility = "hidden";
		document.getElementById("logoN5").style.visibility = "hidden";
		document.getElementById("logolbl8").style.visibility = "hidden";
		document.getElementById("logoN6").style.visibility = "hidden";
		document.getElementById("logolbl9").style.visibility = "hidden";
		document.getElementById("logoN7").style.visibility = "hidden";
		document.getElementById("logolbl10").style.visibility = "hidden";
		document.getElementById("logoN8").style.visibility = "hidden";
		
		//valores
		document.getElementById("logoC1").value = "#000000";
		document.getElementById("logoN1").value = "10";
		document.getElementById("logoN2").value = "0";
		document.getElementById("logoN3").value = "0";
		document.getElementById("logoN4").value = "0";
		document.getElementById("logoC2").value = "#000000";
		document.getElementById("logoN5").value = "10";
		document.getElementById("logoN6").value = "0";
		document.getElementById("logoN7").value = "0";
		document.getElementById("logoN8").value = "0";	
	}
	if(document.getElementById("logoStyle_sandwich").checked)
	{
		//visibles
		document.getElementById("logolbl1").style.visibility = "visible";
		document.getElementById("logoC1").style.visibility = "visible";
		document.getElementById("logolbl2").style.visibility = "visible";
		document.getElementById("logoN1").style.visibility = "visible";
		document.getElementById("logolbl3").style.visibility = "visible";
		document.getElementById("logoN2").style.visibility = "visible";
		document.getElementById("logolbl4").style.visibility = "visible";
		document.getElementById("logoN3").style.visibility = "visible";
		document.getElementById("logolbl5").style.visibility = "visible";
		document.getElementById("logoN4").style.visibility = "visible";
		document.getElementById("logolbl6").style.visibility = "visible";
		document.getElementById("logoC2").style.visibility = "visible";
		document.getElementById("logolbl7").style.visibility = "visible";
		document.getElementById("logoN5").style.visibility = "visible";
		document.getElementById("logolbl8").style.visibility = "visible";
		document.getElementById("logoN6").style.visibility = "visible";
		document.getElementById("logolbl9").style.visibility = "visible";
		document.getElementById("logoN7").style.visibility = "visible";
		document.getElementById("logolbl10").style.visibility = "visible";
		document.getElementById("logoN8").style.visibility = "visible";
		
		//valores
		document.getElementById("logoC1").value = "#707070";
		document.getElementById("logoN1").value = "10";
		document.getElementById("logoN2").value = "5";
		document.getElementById("logoN3").value = "5";
		document.getElementById("logoN4").value = "0";
		document.getElementById("logoC2").value = "#eeeeee";
		document.getElementById("logoN5").value = "10";
		document.getElementById("logoN6").value = "7";
		document.getElementById("logoN7").value = "7";
		document.getElementById("logoN8").value = "0";	
	}
	if(document.getElementById("logoStyle_profundo").checked)
	{
		//visibles
		document.getElementById("logolbl1").style.visibility = "visible";
		document.getElementById("logoC1").style.visibility = "visible";
		document.getElementById("logolbl2").style.visibility = "visible";
		document.getElementById("logoN1").style.visibility = "visible";
		document.getElementById("logolbl3").style.visibility = "hidden";
		document.getElementById("logoN2").style.visibility = "hidden";
		document.getElementById("logolbl4").style.visibility = "hidden";
		document.getElementById("logoN3").style.visibility = "hidden";
		document.getElementById("logolbl5").style.visibility = "hidden";
		document.getElementById("logoN4").style.visibility = "hidden";
		document.getElementById("logolbl6").style.visibility = "visible";
		document.getElementById("logoC2").style.visibility = "visible";
		document.getElementById("logolbl7").style.visibility = "hidden";
		document.getElementById("logoN5").style.visibility = "hidden";
		document.getElementById("logolbl8").style.visibility = "visible";
		document.getElementById("logoN6").style.visibility = "visible";
		document.getElementById("logolbl9").style.visibility = "visible";
		document.getElementById("logoN7").style.visibility = "visible";
		document.getElementById("logolbl10").style.visibility = "visible";
		document.getElementById("logoN8").style.visibility = "visible";
		
		//valores
		document.getElementById("logoC1").value = "#dd5500";
		document.getElementById("logoN1").value = "10";
		document.getElementById("logoC2").value = "#ff9922";
		document.getElementById("logoN6").value = "0";
		document.getElementById("logoN7").value = "2";
		document.getElementById("logoN8").value = "3";	
	}
	if(document.getElementById("logoStyle_custom").checked)
	{
		//visibles
		document.getElementById("logolbl1").style.visibility = "visible";
		document.getElementById("logoC1").style.visibility = "visible";
		document.getElementById("logolbl2").style.visibility = "visible";
		document.getElementById("logoN1").style.visibility = "visible";
		document.getElementById("logolbl3").style.visibility = "visible";
		document.getElementById("logoN2").style.visibility = "visible";
		document.getElementById("logolbl4").style.visibility = "visible";
		document.getElementById("logoN3").style.visibility = "visible";
		document.getElementById("logolbl5").style.visibility = "visible";
		document.getElementById("logoN4").style.visibility = "visible";
		document.getElementById("logolbl6").style.visibility = "visible";
		document.getElementById("logoC2").style.visibility = "visible";
		document.getElementById("logolbl7").style.visibility = "visible";
		document.getElementById("logoN5").style.visibility = "visible";
		document.getElementById("logolbl8").style.visibility = "visible";
		document.getElementById("logoN6").style.visibility = "visible";
		document.getElementById("logolbl9").style.visibility = "visible";
		document.getElementById("logoN7").style.visibility = "visible";
		document.getElementById("logolbl10").style.visibility = "visible";
		document.getElementById("logoN8").style.visibility = "visible";
		
		//valores
		document.getElementById("logoC1").value = "#000000";
		document.getElementById("logoN1").value = "10";
		document.getElementById("logoN2").value = "0";
		document.getElementById("logoN3").value = "0";
		document.getElementById("logoN4").value = "0";
		document.getElementById("logoC2").value = "#000000";
		document.getElementById("logoN5").value = "10";
		document.getElementById("logoN6").value = "0";
		document.getElementById("logoN7").value = "0";
		document.getElementById("logoN8").value = "0";	
	}
	
	cargaDatos();
}

/*
 * exportaIMG()
 * abre unha nova pestaña cunha imaxen .png co estado actual do canvas
 */
function exportaIMG()
{
	var c=document.getElementById("areaCanvas");
	window.open(c.toDataURL('image/png'));	
}

/*
 * exportaPDF()
 * crea un PDF co nome especificado na aplicación
 */
function exportaPDF()
{
	var c = document.getElementById("areaCanvas");
	var exportar = document.getElementById("txtExportar").value;
	
	var imgData = c.toDataURL('image/png', 1.0);	
	var pdf = new jsPDF('l','px','a3');

	pdf.addImage(imgData, 'PNG', 15, 15);
	pdf.save('' + exportar +'.pdf');
}


/*
 * 
 */
function updateScale(axis)
{
	if(document.getElementById("checkLogoProporciones").checked)
	{
		if(axis=="x")
			document.getElementById("logoScaleY").value = document.getElementById("logoScaleX").value * 20;
		else
			document.getElementById("logoScaleX").value = document.getElementById("logoScaleY").value / 20;
	}	
	
	cargaDatos();
}

/*
 * agregaColor()
 * añade un div para configurar un nuevo color en el fieldset de colores
 */
function agregaColor()
{
	var n = cuentaColores() + 1;
	
	var txt="";
	txt += '<label class="col-sm-2 control-label" id="lblColor'+n+'">Color #'+n+'</label>';
	txt += '<div class="col-sm-2">';
	txt += '	<input class="form-control" type="color" name="colorFondo'+n+'" id="colorFondo'+n+'" value="#000000" onchange="cargaDatos()" />'; 				
	txt += '</div>';
	txt += '<div class="col-sm-5">';
	txt += '	<input class="form-control" type="range" min="0" max="100" step="1" value="50" name="rangeColor'+n+'" id="rangeColor'+n+'" onchange="cambiaRange(\'range\', \'Color'+n+'\')" />';
	txt += '</div>';
	txt += '<div class="col-sm-2">';
	txt += '	<input class="form-control" type="number" min="0" max="100" value="50" name="numberRangeColor'+n+'" id="numberRangeColor'+n+'" onchange="cambiaRange(\'number\', \'Color'+n+'\')" />';
	txt += '</div>';
	txt += '<div class="col-sm-1">';
	txt += '	<button type="button" class="btn btn-default" onclick="removeColor('+n+')">';
	txt += '		<span class="glyphicon glyphicon-remove"> </span>';
	txt += '	</button>';
	txt += '</div>';
		
	var newColor = document.createElement('div');
	
	newColor.id = "colorBG"+n;
	newColor.className = "form-group";

    newColor.innerHTML= txt;
    document.getElementById("fieldColores").appendChild(newColor);    
	
	cargaDatos();
}

/*
 * cuentaColores
 * devuelve número de colores dentro del fieldtest de colores
 */
function cuentaColores()
{
	var toret = 0;
	
    var i, len, inputs = document.getElementById("fieldColores").getElementsByTagName("input");
	for (i = 0, len = inputs.length; i < len; i++) {
        if (inputs[i].type === "color")
        	toret++;
    }
	
	return toret;
}

/*
 * function cambiaRange
 * cambia valores de range e number
 */
function cambiaRange(tipo, name)
{
	if(tipo=="range")
		document.getElementById("numberRange"+ name).value = document.getElementById("range"+ name).value;
	if(tipo=="number")
		document.getElementById("range"+ name).value = document.getElementById("numberRange"+ name).value;
		
	cargaDatos();		
}


function getColores()
{
	var toret = new Array();
	
	var max = cuentaColores();
	var i;
	
	for(i = 1; i<=max; i++)
	{
		toret[i-1] = document.getElementById("colorFondo"+i).value;
		
	}
	return toret;
}


function getPosiciones()
{
	var toret = new Array();
	
	var max = cuentaColores();
	var i;
	
	for(i = 1; i<=max; i++)
	{
		toret[i-1] = document.getElementById("numberRangeColor"+i).value / 100;
		
	}
	
	return toret;
}

function removeColor(n)
{
	var i;
	
	for(i=n; i<cuentaColores();i++)
	{		
		document.getElementById("lblColor"+ i).value = document.getElementById("lblColor"+ (i+1)).value;
		document.getElementById("colorFondo"+ i).value = document.getElementById("colorFondo"+ (i+1)).value;
		document.getElementById("rangeColor"+ i).value = document.getElementById("rangeColor"+ (i+1)).value;
		document.getElementById("numberRangeColor"+ i).value = document.getElementById("numberRangeColor"+ (i+1)).value;	
	}
	
	var div = document.getElementById("colorBG"+cuentaColores());
	document.getElementById("fieldColores").removeChild(div);
	
	cargaDatos();
	
}

function swapCheckBG()
{
	document.getElementById("demoColores").disabled = !document.getElementById("checkBG").checked;
	document.getElementById("btnAddColor").disabled = !document.getElementById("checkBG").checked;
	for(var i=1; i<=cuentaColores();i++)
	{
		var nodes = document.getElementById("colorBG"+i).getElementsByTagName('*');
		for(var j = 0; j < nodes.length; j++)
		{
		     nodes[j].disabled = !document.getElementById("checkBG").checked;
		}
		//document.getElementById("colorBG"+i).disabled = !document.getElementById("checkBG").checked;
	}
	
	var n = document.getElementById("fieldConfColores").getElementsByTagName('*');
	for(var j = 0; j < n.length; j++)
	{
	     n[j].disabled = !document.getElementById("checkBG").checked;
	}
	
	cargaDatos();
}

function cambiaGradientDiv(tipo)
{
	var div = document.getElementById("gradientDiv");
	var t="";
	
	if(tipo=="linear")
	{
		t+='<label class="col-sm-3 control-label" id="lblAngulo">&Aacute;ngulo</label>';
		t+='<div class="col-sm-6">';
		t+='	<input class="form-control" type="range" min="0" max="360" step="1" value="0" name="rangeAngulo" id="rangeAngulo" onchange="cambiaRange(\'range\', \'Angulo\')" />';
		t+='</div>';
		t+='<div class="col-sm-3">';
		t+='	<input class="form-control" type="number" min="0" max="360" value="0"name="numberRangeAngulo" id="numberRangeAngulo" onchange="cambiaRange(\'number\', \'Angulo\')" />';
		t+='</div>';
	}
	if(tipo=="radial")
	{
		var maxX = document.getElementById("widthCanvas").value;
		var maxY = document.getElementById("heightCanvas").value;
		
		t+='<label class="col-sm-3 control-label">inner_X</label>';
		t+='<div class="col-sm-6">';
		t+='	<input class="form-control" type="range" min="0" max="'+maxX+'" step="1" value="'+maxX/2+'" name="rangeInnerX" id="rangeInnerX" onchange="cambiaRange(\'range\', \'InnerX\')" />';
		t+='</div>';
		t+='<div class="col-sm-3">';
		t+='	<input class="form-control" type="number" min="0" max="'+maxX+'" value="'+maxX/2+'" name="numberRangeInnerX" id="numberRangeInnerX" onchange="cambiaRange(\'number\', \'InnerX\')" />';
		t+='</div>';
		
		t+='<label class="col-sm-3 control-label">inner_Y</label>';
		t+='<div class="col-sm-6">';
		t+='	<input class="form-control" type="range" min="0" max="'+maxY+'" step="1" value="'+maxY/2+'" name="rangeInnerY" id="rangeInnerY" onchange="cambiaRange(\'range\', \'InnerY\')" />';
		t+='</div>';
		t+='<div class="col-sm-3">';
		t+='	<input class="form-control" type="number" min="0" max="'+maxY+'" value="'+maxY/2+'" name="numberRangeInnerY" id="numberRangeInnerY" onchange="cambiaRange(\'number\', \'InnerY\')" />';
		t+='</div>';
		
		t+='<label class="col-sm-3 control-label">inner_R</label>';
		t+='<div class="col-sm-6">';
		t+='	<input class="form-control" type="range" min="0" max="'+maxX+'" step="1" value="'+maxX/4+'" name="rangeInnerR" id="rangeInnerR" onchange="cambiaRange(\'range\', \'InnerR\')" />';
		t+='</div>';
		t+='<div class="col-sm-3">';
		t+='	<input class="form-control" type="number" min="0" max="'+maxX+'" value="'+maxX/4+'" name="numberRangeInnerR" id="numberRangeInnerR" onchange="cambiaRange(\'number\', \'InnerR\')" />';
		t+='</div>';
		
		t+='<label class="col-sm-3 control-label">ext_X</label>';
		t+='<div class="col-sm-6">';
		t+='	<input class="form-control" type="range" min="0" max="'+maxX+'" step="1" value="'+maxX/2+'" name="rangeExtX" id="rangeExtX" onchange="cambiaRange(\'range\', \'ExtX\')" />';
		t+='</div>';
		t+='<div class="col-sm-3">';
		t+='	<input class="form-control" type="number" min="0" max="'+maxX+'" value="'+maxX/2+'" name="numberRangeExtX" id="numberRangeExtX" onchange="cambiaRange(\'number\', \'ExtX\')" />';
		t+='</div>';
		
		t+='<label class="col-sm-3 control-label">ext_Y</label>';
		t+='<div class="col-sm-6">';
		t+='	<input class="form-control" type="range" min="0" max="'+maxY+'" step="1" value="'+maxY/2+'" name="rangeExtY" id="rangeExtY" onchange="cambiaRange(\'range\', \'ExtY\')" />';
		t+='</div>';
		t+='<div class="col-sm-3">';
		t+='	<input class="form-control" type="number" min="0" max="'+maxY+'" value="'+maxY/2+'" name="numberRangeExtY" id="numberRangeExtY" onchange="cambiaRange(\'number\', \'ExtY\')" />';
		t+='</div>';
		
		t+='<label class="col-sm-3 control-label">ext_R</label>';
		t+='<div class="col-sm-6">';
		t+='	<input class="form-control" type="range" min="0" max="'+maxX+'" step="1" value="'+maxX/1.5+'" name="rangeExtR" id="rangeExtR" onchange="cambiaRange(\'range\', \'ExtR\')" />';
		t+='</div>';
		t+='<div class="col-sm-3">';
		t+='	<input class="form-control" type="number" min="0" max="'+maxX+'" value="'+maxX/1.5+'" name="numberRangeExtR" id="numberRangeExtR" onchange="cambiaRange(\'number\', \'ExtR\')" />';
		t+='</div>';
	}
	
	div.innerHTML = t;
	
	cargaDatos();
}


