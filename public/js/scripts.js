    // Set up the image files to be used.
    var theImages = new Array() // do not change this
    // To add more image files, continue with the
    // pattern below, adding to the array. Rememeber
    // to increment the theImages[x] index!
    
    theImages[0] = 'honkthirst.jpg'
    theImages[1] = 'honkthirst2.jpg'
    
    // ======================================
    // do not change anything below this line
    // ======================================
    
    var j = 0
    var p = theImages.length;
    
    var preBuffer = new Array()
    for (i = 0; i < p; i++){
       preBuffer[i] = new Image()
       preBuffer[i].src = theImages[i]
    }
    
    var whichImage = Math.round(Math.random()*(p-1));
    function showImage(){
    document.write('<img src="'+theImages[whichImage]+'">');
    }