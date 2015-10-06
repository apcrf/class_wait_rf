
//****************************************************************************************************

function classWait() {

     //////////////////////////////////////////////////////////////////////////////////////////////////
     // Properties
     //////////////////////////////////////////////////////////////////////////////////////////////////

     this.caliber = "L"; // XXL, XL, L, M
     this.rowHeight = 0; // Specifies the height of the rows (px)
     this.fontSize = 0; // Specifies the size of the font (px)

     this.divFog = {}; // Object Fog

     this.divBox = {}; // Object Box in Fog
     this.divBoxRows = 3; // Specifies the height of the Box (px)
     this.width = 0; // Specifies the width of the divBox (px)
     this.height = 0; // Specifies the height of the divBox (px)

     this.isImage = true;
     this.srcImage = "images/class_wait_clock.png"; // Source of Image
     this.divImage = {}; // Object divImage
     this.imgImage = {}; // Object Image

     this.isMessage = true;
     this.txtMessage = "Please, wait..."; // Txt in Message
     this.divMessage = {}; // Object Message
     this.divMessageTxt = {}; // Object Txt in Message

     //////////////////////////////////////////////////////////////////////////////////////////////////
     // Methods
     //////////////////////////////////////////////////////////////////////////////////////////////////

     this.show = function() {

         var obj = {};

         // Caliber
         switch ( this.caliber ) {
             case "XXL" :
                 if ( this.rowHeight == 0 ) this.rowHeight = 64;
                 if ( this.fontSize == 0 ) this.fontSize = 36;
                 break;
             case "XL" :
                 if ( this.rowHeight == 0 ) this.rowHeight = 48;
                 if ( this.fontSize == 0 ) this.fontSize = 28;
                 break;
             case "L" :
                 if ( this.rowHeight == 0 ) this.rowHeight = 38;
                 if ( this.fontSize == 0 ) this.fontSize = 22;
                 break;
             case "M" :
             default :
                 if ( this.rowHeight == 0 ) this.rowHeight = 30;
                 if ( this.fontSize == 0 ) this.fontSize = 16;
                 break;
         }

         // divFog
         {
             this.divFog = document.createElement("div");
             obj = this.divFog;
             obj.id = "divFog";
             obj.style.position = "fixed";
             obj.style.top = "0px";
             obj.style.left = "0px";
             obj.style.width = "100%";
             obj.style.minHeight = "100%";
             obj.style.backgroundColor = "rgba(0,0,0,0.4)";
             obj.style.overflow = "hidden";
             // Prevent the selection of text
             obj.onmousedown = function( o ) {
                 return function( e ) {
                     if ( e.target !== o ) return true;
                     else return false;
                 }
             } ( obj );
             obj.onselectstart = function( o ) {
                 return function( e ) {
                     if ( e.target !== o ) return true;
                     else return false;
                 }
             } ( obj );
             //
             document.body.appendChild(obj);
         }

         // divBox
         {
             this.divBox = document.createElement("div");
             obj = this.divBox;
             obj.id = "divBox";
             obj.style.position = "absolute";
             if ( this.width == 0 ) this.width = this.rowHeight * this.divBoxRows * 2.2;
             if ( this.height == 0 ) this.height = this.rowHeight * this.divBoxRows;
             obj.style.width = this.width + "px";
             obj.style.height = this.height + "px";
             obj.style.marginLeft = ( window.innerWidth - this.width ) / 2 + "px";
             obj.style.marginTop = 0.8 * ( window.innerHeight - this.height ) / 2 + "px";
             obj.style.backgroundColor = "linen";
             obj.style.borderRadius = "7px";
             obj.style.boxShadow = "0 0 20px";
             this.divFog.appendChild(obj);
         }

         // divImage
         if ( this.isImage ) {
             // divImage
             this.divImage = document.createElement("div");
             obj = this.divImage;
             obj.style.position = "absolute";
             obj.style.width = this.height / 2 + "px";
             obj.style.height = this.height + "px";
             this.divBox.appendChild(obj);
             // imgImage
             this.imgImage = document.createElement("img");
             obj = this.imgImage;
             obj.style.width = this.height * 0.25 + "px";
             obj.style.height = this.height * 0.5 + "px";
             obj.style.marginTop = this.height * 0.25 + "px";
             obj.style.marginLeft = this.height * 0.25 + "px";
             obj.src = this.srcImage;
             this.divImage.appendChild(obj);
         }

         // divMessage
         if ( this.isMessage ) {
             // divMessage
             this.divMessage = document.createElement("div");
             obj = this.divMessage;
             obj.style.position = "absolute";
             if ( this.isImage ) {
                 obj.style.width = this.width - this.height * 0.7 + "px";
                 obj.style.marginLeft = this.height * 0.7 + "px";
             }
             else {
                 obj.style.width = this.width + "px";
                 obj.style.marginLeft = 0 + "px";
             }
             obj.style.height = this.height + "px";
             this.divBox.appendChild(obj);
             // divMessageTxt
             this.divMessageTxt = document.createElement("div");
             obj = this.divMessageTxt;
             obj.style.height = this.height + "px";
             obj.style.width = this.divMessage.style.width;
             if ( this.isImage ) obj.style.paddingRight = this.height * 0.1 + "px";
             else obj.style.textAlign = "center";
             obj.style.fontSize = this.fontSize + "px";
             obj.style.display = "table-cell";
             obj.style.verticalAlign = "middle";
             obj.innerHTML = this.txtMessage;
             this.divMessage.appendChild(obj);
         }

     } // The end of show()

     //////////////////////////////////////////////////////////////////////////////////////////////////
     // This release
     //////////////////////////////////////////////////////////////////////////////////////////////////

     this.release = function() {

         this.divFog.parentNode.removeChild( this.divFog );

     }

     //////////////////////////////////////////////////////////////////////////////////////////////////

}

//****************************************************************************************************
