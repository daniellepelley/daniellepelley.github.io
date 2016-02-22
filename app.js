var app = angular.module("app", []);

app.controller("channelsCtrl", function($scope) {
    $scope.channels = [
        {
            url: "http://www.bbc.co.uk/iplayer/live/bbcone",
            img: "bbc1.png"
        },
        {
            url: "http://www.bbc.co.uk/iplayer/live/bbctwo",
            img: "bbc2.png"
        },
        {
            url: "http://www.bbc.co.uk/iplayer/live/bbcthree",
            img: "bbc3.png"
        }
    ];
});