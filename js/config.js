/**
 * Created by Administrator on 2017/1/29.
 */
angular.module("mapp")
    .config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProcider){
        $stateProvider
            .state("home",{
                url: "/home",
                templateUrl: "views/home.html",
                controller: "home"
            })
            .state("SignIn",{
                url: "/SignIn",
                templateUrl: "views/Signin.html"
            })
            .state("register",{
                url: "/register",
                templateUrl: "views/register.html"
            })
            .state("personal",{
                url: "/personal",
                templateUrl: "views/personal.html"
            })
            .state("profile",{
                url: "/profile",
                templateUrl: "views/profile.html"
            })
            .state("edit",{
                url: "/edit",
                templateUrl: "views/edit.html"
            })
            .state("Social_search",{
                url: "/Social_search",
                templateUrl: "views/Social_search.html"
            })
            .state("Social_chat",{
                url: "/Social_chat",
                templateUrl: "views/Social_chat.html"
            })
            .state("Social_all",{
                url: "/Social_all",
                templateUrl: "views/Social_all.html"
            })
            .state("news",{
                url: "/news",
                templateUrl: "views/news.html"
            })
            .state("news_list",{
                url: "/news_list",
                templateUrl: "views/news_list.html"
            })
            .state("new_modern",{
                url: "/new_modern",
                templateUrl: "views/new_modern.html"
            })
            .state("Shop",{
                url: "/Shop",
                templateUrl: "views/Shop.html"
            })
            .state("Shop_list",{
                url: "/Shop_list",
                templateUrl: "views/Shop_list.html"
            })
            .state("search",{
                url: "/search",
                templateUrl: "views/search.html"
            })
        $urlRouterProcider
            .otherwise("home")
    }])
