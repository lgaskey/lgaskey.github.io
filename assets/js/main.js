

$(function() {

// add lightbox class to all image links
  $(
    "a[href$='.jpg'],a[href$='.jpeg'],a[href$='.JPG'],a[href$='.png'],a[href$='.gif'],a[href$='.webp']"
  ).has("> img").addClass("image-popup");

  // Magnific-Popup options
  $(".image-popup").magnificPopup({
    // disableOn: function() {
    //   if( $(window).width() < 500 ) {
    //     return false;
    //   }
    //   return true;
    // },
    type: "image",
    tLoading: "Loading image #%curr%...",
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">Image #%curr%</a> could not be loaded.'
    },
    removalDelay: 500, // Delay in milliseconds before popup is removed
    // Class that is added to body when popup is open.
    // make it unique to apply your CSS animations just to this exact popup
    mainClass: "mfp-zoom-in",
    callbacks: {
      beforeOpen: function() {
        // just a hack that adds mfp-anim class to markup
        this.st.image.markup = this.st.image.markup.replace(
          "mfp-figure",
          "mfp-figure mfp-with-anim"
        );
      }
    },
    closeOnContentClick: true,
    midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
  });
});



/**
 *  
 * @param {HTMLImageElement} img
 */
function saveAspectRatio(img) {
  if(!img.complete){
    //TODO remove this alert and log instead
    alert("trying to calculate Aspect ratio on an unloaded image! ignoring!")
    return
  }
  ar =  img.naturalHeight / img.naturalWidth
  img.dataset.aspectRatio = ar
  console.log(`saved aspect ratio as ${ar}`)
}


/**
 * 
 * @param {Element} img 
 * @param {NodeListOf<Element>} columns 
 */
function InsertElement(img, columns){
  shortestIndex = -1
  shortestHeight = Number.MAX_SAFE_INTEGER
  for (let i = 0; i < columns.length; i++) {
    if(columns[i].offsetHeight < shortestHeight){
      shortestHeight = columns[i].offsetHeight
      shortestIndex = i
    }
  }
  if(shortestIndex != -1){
    console.log(`shortest index was ${shortestIndex} at height ${shortestHeight}`)
    columns[shortestIndex].appendChild(img)
  }else{
    console.log(`no shortest column found! bad.`)
  }
}

/**
 * 
 * @param {Element} gallery 
 */
function organizeSpikeGallery(gallery) {
  unsorted = gallery.querySelector('.unsorted-images')
  columnsToFill = gallery.querySelectorAll('.column')
  console.log(`generating gallery. columns to fill: ${columnsToFill.length}, images ${unsorted.children.length}`)

  //looping over live collection bad. fixed
  for (const child of Array.from(unsorted.children)){
    img = child.firstElementChild
    if(img.complete){
      //console.log(`complete ${child.href}`)
      InsertElement(child, columnsToFill)
    }else{
      img.onload = function() {
        InsertElement(this.parentElement, columnsToFill)
      }
    }
  }
}

const galleries = document.querySelectorAll('.spike-gallery');
galleries.forEach(gallery => organizeSpikeGallery(gallery));

