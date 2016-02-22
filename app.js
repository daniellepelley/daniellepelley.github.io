var app = angular.module("app", []);

app.controller("channelsCtrl", function ($scope) {
    $scope.providers = [
            {
                title: "BBC",
                channels: [
               {
                   url: "http://www.bbc.co.uk/iplayer/live/bbcone",
                   img: "bbc1.png"
               },
               {
                   url: "http://www.bbc.co.uk/iplayer/live/bbctwo",
                   img: "bbc2.png"
               },
               {
                   url: "http://www.bbc.co.uk/iplayer/live/bbcnews",
                   img: "bbcnews.png"
               }]
            },
            {
                title: "ITV",
                channels: [
               {
                   url: "http://www.itv.com/hub/itv",
                   img: "itv.png"
               },
               {
                   url: "http://www.itv.com/hub/itv2",
                   img: "itv2.jpg"
               }]
        }];
});