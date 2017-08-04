import { Component } from '@angular/core';

@Component({
  selector: 'example-app',
  template: `
  	
      <script src="http://code.jquery.com/jquery-latest.min.js"></script>
      <script src="https://code.jquery.com/jquery-1.10.2.js"></script>
     


	      <style> 
	      #special {
	      	position: absolute;
	      	z-index: 10;
	      	top: 220px;
			left: 100px;
			width: 39.984375px;
			height: 17px;
			border: 1px solid blue;

	      }
	      </style>

      <div id="special"> 

      </div>

	  <div>
	      <label>PDF src</label>
	      <input type="text" placeholder="PDF src" [(ngModel)]="pdfSrc">
	  </div>

	  <div id="some">
	      <label>Page:</label>
	      <input type="number" placeholder="Page" [(ngModel)]="page" id='second'>
	  </div>

	  <div>
	      <label class="zoom">zoom:</label>
	      <input type="number" placeholder="zoom" [(ngModel)]="zoom">
	  </div>
	  
	  <input type="submit" value="Отправить">

	  	//http://www.inion.ru/files/File/Ursul_A_D_Priroda_informacii.pdf
	  	//https://vadimdez.github.io/ng2-pdf-viewer/pdf-test.pdf
	  	//http://dev.exerica.com/ExericaFiles/58c30cff967a413208604b79/document.pdf
	 
	 <script> 
	  $("#second").css( "border", "2px solid red" )
	 </script>	


	 
	  <pdf-viewer [src]="pdfSrc" 
	              [zoom]="zoom"
	              [page]="page" 
	              [rotation]="0"
	              [original-size]="true" 
	              style="display: block;"
	              [show-all]="false"
	              [render-text]="true"	
	  ></pdf-viewer>


	  
  `
})

export class PDFComponent {
  pdfSrc = 'http://dev.exerica.com/ExericaFiles/58c30cff967a413208604b79/document.pdf';
  page: number = 4;
  zoom: number = 1;
  
}

