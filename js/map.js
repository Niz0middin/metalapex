  ymaps.ready(init);
    var myMap,
    myPlacemark;

    function init(){     
        myMap = new ymaps.Map("map", {
            center: [41.2693,69.2366],
            zoom: 14
        });
         myPlacemark1 = new ymaps.Placemark([41.2693,69.2362], { hintContent: 'Metal-Apex', balloonContent: 'Фасадные панели' 
     });
          myMap.geoObjects.add(myPlacemark1);
    }
    