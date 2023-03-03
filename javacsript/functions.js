// The OCS & QSA Qs Functions
/*The O like object Function.If an object is passed to the function, it just returns that object back again. Otherwise,
it assumes that an ID has been passed and returns the object to which the ID refers.*/
let O = (i)=>{ return typeof(i) == 'object' ? i : document.getElementById(i) }

/* The C like Class Function. It return the object that refer the class i*/
let C = (i)=>{ return document.getElementsByClassName(i) }

/*The S like Style Function. It gives easy access to the style (or CSS) properties of an object*/
let S =(i)=>{ return O(i).style }

/* The QSA like QuerySelectorAll function */
let QSA = (i)=>{ return querySelectorAll(i) }
let QSAd = (i)=>{ return document.querySelectorAll(i) }

/* The Qs like QuerySelector function */
let Qs = (i)=>{ return querySelector(i)}
let Qsd = (i)=>{ return document.querySelector(i)}

// End of OCS & QSA Qs functions

// Transform text object
var textTransform = {
    //lowercase allow to transform the first letter at Uppercase et the remains at lowercase like as (Mitondji)
    lowerCase: (text)=>{
        var s = " "
        if (text && typeof(text) === 'string') {
            for (let index = 0; index < text.length; index++) {
                s += text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()+" "
                return s.substring(0, (s.length-1))      
            }
        }else{
            console.log('null')
        } 
    }, // end of lowercase
    // The uppercase funtions allow to transform letter to uppercase like as (JUSTINE)
    upperCase: (text) =>{
        var s = " "
        if (text && typeof(text) === 'string') {
            s = text.toUpperCase();
            return s
        }
    }//end of upercase function
}
// These function allow to use the methods of the textTransform object 
var elementLower = (element) =>{
    var e = textTransform.lowerCase(element);
    return e;
}
var elementUpper = (element) =>{
    var e = textTransform.upperCase(element);
    return e;
}