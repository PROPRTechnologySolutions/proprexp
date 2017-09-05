$.getScript('https://cdn.pannellum.org/2.3/pannellum.js', function() {

pannellum.viewer('merwinDam', {
    "type": "equirectangular",
    "autoLoad" : true,
    "vaov": "135",
    "setPitch": "-15",
    "maxPitch": "-3",
    "autoRotate": "-5",
    
    "panorama": "https://s3.amazonaws.com/propr/panoramas/halfSize/merwinDamArielWA98603-CC.jpg"
});

}