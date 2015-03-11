var contact = function () {

    return {
        // ---------------------------------------------------------------------------------------
        //Map
        initMap: function () {
            var map;
            $(document).ready(function () {
                map = new GMaps({
                    div: '#map',
                    lat: 28.888341,
                    lng: 76.605665
                var marker = map.addMarker({
                    lat: 28.888341,
                    lng: 76.605665,
                    title: 'Shravan,Rohtak'
                });
            });
        }
    };
}();