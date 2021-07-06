  
const loadingScreen = document.getElementById('loadingScreen');
console.log(loadingScreen);
// window.addEventListener('load', () => {
//     loadingScreen.style.display = 'none';
//     console.log('hidden');

// })

$(window).on("load",function(){
    setTimeout(function(){
        $(loadingScreen).fadeOut("slow")
    }, 2000);
    
    
});
