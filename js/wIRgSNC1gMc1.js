/*****************************
 Responsive Slideshow
 ----------------------------
 How to use: 
  ResponsiveSlideshowNew.init( 
    [
      { id: "#id for slideshow", upto: media point in pixels },
      .........
    ],
    {unslider plugin setting}
  )

Example:
ResponsiveSlideshowNew.init(
    [
      { id: "#slider-mobile", upto: 840 },
      { id: "#slider-desktop", upto: 1370 },
      { id: "#slider-desktop-wide", upto: 99999 }
    ],
    {
      autoplay: true,
      infinite: true,
      delay: 7000,
      speed: 500,
      keys: false,
      arrows: false,
    }
)
******************************/

var ResponsiveSlideshowNew = (function () {
  var sliders = []
  var slider_options
  var current = -1

  function stop(index) {
    if(sliders[index].slider_on) {
      sliders[index].slider.unslider('stop')
    }
    current = -1
    sliders[index].container.hide()
  }

  function start(index) {
    if ( sliders[index].slider_counter > 1 ) {
      if (sliders[index].slider_on) {
        sliders[index].slider.unslider('start')
      } else {
        sliders[index].slider.unslider(slider_options)
        sliders[index].slider_on = true
      }
    }
    current = index
    sliders[index].container.show()
  }

  function setActiveSlider() {
    var vp_width, // viewport width
        diff, 
        min = -1, 
        current_tmp = -1;

        vp_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)

    // Find current viewport corresponding index
    for ( var i=0; i<sliders.length; i++ ) {

      diff = sliders[i].upto - vp_width

      if ( diff < 0 ) continue // viewport bigger then i's media point

      // selecting media point that bigger but mostly closer to viewport
      if ((min < 0) || (min > diff)) {
        min = diff
        current_tmp = i
      }
    }

    // If no slideshow to show
    if (current_tmp == -1) {
      if (current >= 0 ) stop(current)
      return
    }

    // Keep the same slideshow
    if (current == current_tmp) return

    // Change slideshow
    if (current >= 0) { stop(current) }
    start(current_tmp)
    current = current_tmp
  }

  function init (_sliders, _slider_options) {
    var slider_obj
    var slider_container
    var slider_counter

    slider = _sliders
    slider_options = _slider_options

    for ( var i=0; i<_sliders.length; i++ ) {

      slider_obj = $j(_sliders[i].id)
      slider_container = slider_obj.closest('[data-responsive-slideshow-container]')
      slider_counter = slider_obj.find('li').length

      slider_container.hide() // let's hide all on start

      if( slider_counter == 0 ) { continue }  // no slides

      if (slider_container.length == 0) {
        console.error('Slider ' + _sliders[i].id + ' must be contained in a div with a data-responsive-slideshow-container attribute' )
        break
      }

      sliders.push({
          id: _sliders[i].id,
          upto: _sliders[i].upto, // viewport top point where it works (@media)
          container: slider_obj.closest('[data-responsive-slideshow-container]'),
          slider_counter: slider_counter,
          slider: $j(_sliders[i].id),
          slider_on: false   //  slideshow initiated
        })
    }

    $j(window).on('resize', setActiveSlider)
    setActiveSlider()
  }

  return {
    init: init
  }

}())
