var map = L.map('map').setView([21.03529, 105.80923], 11);
      mapLink = "<a href='http://openstreetmap.org'>OpenStreetMap</a>";
      L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', { 
        attribution: 'Leaflet &copy; ' + mapLink + ', contribution', maxZoom: 18 }).addTo(map);

var baseLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png',

    {

        attribution: '&copy; ' + mapLink + ' Contributors',
        maxZoom: 18
    }).addTo(map);
var map = L.map("map", {
    center: [21.047, 105.806],

    Zoom: 5,

    zoomControl: false,

    layers: [baseLayer],

    contextmenu: true,

    contextmenuWidth: 140,
    contextmenuItems: [{

        text: 'Start from here',

        callback: startHere
    }, {

        text: 'Go to here',
        callback: goHere
    }
    ]
})



var control = L.Routing.control({

    waypoints: [
        L.latLng(21.02732, 105.82036),
        L.latLng(21.035980508686396, 105.83949775559634)
    ],
    createllarker: function (i, waypoints, n) {

        var startIcon = L.icon({

            iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/marker-shadow.png',

            iconSize: [25, 41],

            iconAnchor: [12, 41],

            popupAnchor: [1, -34],
            shadowSize: [41, 41]
        });
        var sampahIcon = L.icon({

            iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-yellow.png',

            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/marker-shadow.png',
            iconSize: [25, 41],

            iconAnchor: [12, 41],

            popupAnchor: [1, -34],
            shadowSize: [41, 41]
        });
        var destinationIcon = L.icon({

            iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/marker-shadow.png',

            iconSize: [25, 41],

            iconAnchor: [12, 41],

            popupAnchor: [1, -34],
            shadowSize: [41, 41]

        });

        if (i == 0) {
            marker_icon = startIcon

        } else if (i > 0 && i < n - 1) {

            marker_icon = sampahIcon
        }
        else if (i == n - 1) {

            marker_icon = destinationIcon
        }
        var marker = L.marker(waypoints.latLng, {

            draggable: true,
            bounceOnAdd: true,

            bounceOnAddOptions: {

                duration: 1000,
                height: 800,
                function() {

                    (bindPopup(myPopup).openOn(mymap))

                }

            },

            icon: marker_icon

        });

        return marker

    },
    showAlternatives: true,

    altlineOptions: {

        styles: [

            { color: 'black', opacity: 0.15, weight: 9 },

            { color: 'white', opacity: 0.8, weight: 6 },

            { color: 'blue', opacity: 0.5, weight: 2 }

        ],
        geocoder: L.Control.Geocoder.nominatim()

    }
}).addTo(map);
function startHere(e) {

    control.splicewaypoints(0, 1, e.lating);
}

function goHere(e) {

    control.splicewaypoints(control.getwaypoints().length - 1, 1, e.lating);
}
function Graph(v){
    this.vertices = v;
    this.edges = 0;
    this.adj = [];
    for(var i=0; i<this.vertices;i++){
        this.adj[i] = [];
        this.adj[i].push("");
    }
    this.addEdge = addEdge;
    this.showGraph = showGraph;
    this.dfs=dfs;
    this.marked = [];
    for(var i=0; i<this.vertices; i++){
        this.marked[i] = false;
    }
}

function addEdge(v, w){
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
}
function showGraph(){
    for(var i=0; i<this.vertices; i++){
        console.log(i+" ->");
        for(var j=0; j<this.vertices; j++){
           if(this.adj[i][j] != undefined)
           console.log(this.adj[i][j] + "");
        }
    console.log();
    }
}

function dfs(v){
    this.marked[v] = true;
    if(this.adj[v] != true){
        console.log("Visid Vertex: " +v);
    }
    var w = " ";
    foreach(w in this.adj[v])
        if(!this.marked[w]){
            this.dfs(w);
        }
    }


g = new Graph(5)

g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);

g.showGraph();
g.dfs(0)

