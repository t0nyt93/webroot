
angular.module('routerApp').controller( 'ProjectsCtrl',[
    '$scope',
    function($scope){
        $scope.message = 'HelloWorld from the projects controller!';
        $scope.projects =   [
            { "name":"Ray Trace Engine",
                "picRoot" : "graphics/ray-trace/",
                "image" : "five.png",
                "github" : "https://github.com/t0nyt93/RayTraceEngine",
                "desc" : "A simple C++ Ray Trace Engine that includes shadows as well as OpenMP multiprocessing. \n REQUIRES: Visual Studio, OpenGL, and OpenMP. ",
                "inShowcase" : true,
            },
            { "name":"Image Processing",
                "picRoot" : "shaders/image-manipulation",
                "image" : "base.png",
                "github" : "https://github.com/t0nyt93/Image-Modification",
                "desc" : " Bitmap Manipulation using GLSL. A circular or Rectangular \"Magic Lens\" provides the ability to rotate, magnify, and sharpen a subsection of the image. \n REQUIRES: OpenGL, GlMan ( See the About Page ), Windows.",
                "inShowcase" : true,
            },
            { "name":"Texture Mapping w/Shaders",
                "picRoot" : "shaders/mapping",
                "image" : "bumpMappedDisplace.png",
                "github" : "TBA",
                "desc" : "Basic Image Mapping using Displacement and Bump mapping techniques",
                "inShowcase" : true,
            },
            { "name":"Gemetric Displacement using Shaders",
                "picRoot" : "shaders/sin-sheet",
                "image" : "a\=2.png",
                "github" : "https://github.com/t0nyt93/Displacement-and-Noise",
                "desc" : "Sends Cosine waves along the X and Y coordinates of a flat surface\. Their is also control over lighting which allows for the use of Bump Mapping.",
                "inShowcase" : true,
            },
            { "name":"Missionaries and Cannibals Search Algorithms",
                "picRoot" : "ai/search",
                "image" : "cover.jpg",
                "github" : "https://github.com/t0nyt93/MissionairiesAndCannibals",
                "desc" : "Python Application which compares the runtime of Breadth-First, Depth-First, Iterative Deepening, and A-Star search Algorithms. These Algorithms are implemented in a game of Missionaries and Cannibals, the scripts usage is available in the Github README.",
                "inShowcase" : true,
            },
            { "name":"Sarcasm Detection Learning Algorithm",
                "picRoot" : "ai/learning",
                "image" : "cover.jpg",
                "github" : "https://github.com/t0nyt93/SarcasmDetector",
                "desc" : "Learning Algorithm written in Python that is meant to determine where or not a sentence is sarcastic based on training data. ",
                "inShowcase" : true,
            }];

        $scope.showcase = function(){
            var return_list = [];
            for( var i = 0; i < $scope.projects.length; i++)
                {
                if ($scope.projects[i].inShowcase)
                    {
                    return_list.push($scope.projects[i]);
                    }
                }
            return return_list;
        };

        $scope.get_image_location = function(project){
            var stack = project.picRoot.split('/');
            stack.push( project.image );
            return stack.join("/");
        }

    }]);


//function get_showcase(){
//    var scope = angular.element(document.getElementbyId("project_showcase")).scope();
//    scope.$apply(function() {
//        scope.showcase
//    });
//}
