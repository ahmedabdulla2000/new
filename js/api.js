var sliderImages = Array.from(document.querySelectorAll('.slid_container img'));

var slidCount = sliderImages.length;

var currentSlide = 1;

var slid_NumberIlement = document.getElementById('slid_number');


var prev = document.getElementById('left_btn');
var next = document.getElementById('right_btn');

var items = document.querySelectorAll('#ul li');

var ulItem = document.getElementById('ul');


prev.onclick = prevClick;
next.onclick = nextClick;

function prevClick(){
    if(prev.classList.contains('disabled')){
        
        
    }
    else{
    currentSlide--;
   checker();
    }
}

function nextClick(){
    
    if(next.classList.contains('disabled')){
        
        
    }
    else{
    currentSlide++;
   checker();
    }

}

items[currentSlide - 1].classList.add('active');

checker();


for(var i = 0 ; i<items.length ; i++){
items[i].onclick = function(){
currentSlide = parseInt(this.getAttribute('data-value'));
    checker();
}
}
function checker(){
    
    slid_NumberIlement.textContent = 'slide # ' + currentSlide + ' of ' + slidCount;
    removeActive();
    sliderImages[currentSlide - 1].classList.add('active');
    items[currentSlide - 1].classList.add('active');
    if(currentSlide == 1){
        prev.classList.add('disabled');
    }
    
    else {
    prev.classList.remove('disabled');
    }
    
    if(currentSlide == slidCount){
        next.classList.add('disabled');
    }
    
    else {
    next.classList.remove('disabled');
    }
}


function removeActive(){
sliderImages.forEach(function(slide)
{
slide.classList.remove('active');
});
    items.forEach(function(itemz)
{
itemz.classList.remove('active');
});
}


var colored = document.querySelectorAll('#coloredUl li');
for(var i = 0;i<colored.length;i++){
    console.log(i);
    console.log(colored[i]);
    colored[i].addEventListener('click',function(){
        next.classList.add(this.getAttribute('data-color'));
        prev.classList.add(this.getAttribute('data-color'));
        slid_NumberIlement.classList.add(this.getAttribute('data-color'));
    
        for(var x=0;x<items.length;x++)
        {
            items[x].classList.add(this.getAttribute('data-color'));
        }
    });
}


