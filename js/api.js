// Get Sliders in Var

var imageSlider = Array.from(document.querySelectorAll('.slid_container img'));


// get number of slid

var slidCount = imageSlider.length;

// set first shown img

var firstIndex = 1;

var numContainer = document.getElementById('slid_number');

// previous and next

var prevBtn = document.getElementById('prev');
var nextBtn = document.getElementById('next');

prevBtn.onclick = prevClick;
nextBtn.onclick = nextClick;


var ulElement = document.createElement('ul');
ulElement.setAttribute('id' , 'ulE');

// create list item equal to the imgs
for (var i = 1 ; i<=slidCount ; i++)
{
    var liIems = document.createElement('li');
    liIems.setAttribute('data-value' , i);
    liIems.appendChild(document.createTextNode(i));
    ulElement.appendChild(liIems);
}

document.getElementById('indicators').appendChild(ulElement);
var items = Array.from(document.querySelectorAll('#ulE li'));

// get the ul inprogress 
var ulInfo = document.getElementById('ulE');
if(firstIndex == 1){
    prevBtn.classList.add('disable');
}

else{
    prevBtn.classList.remove('disable');

}

if(firstIndex == slidCount - 1){
    nextBtn.classList.add('disable');
}

else{
    nextBtn.classList.remove('disable');

}
theChecker();


function prevClick()
{
    console.log('previous');
}
function nextClick()
{
    console.log('next');
}


function theChecker()
{

    numContainer.textContent = 'slide # ' + firstIndex;
    imageSlider[firstIndex - 1].classList.add('active');
    ulInfo.children[firstIndex - 1].classList.add('active');
    removeAllActive();

}

function removeAllActive(){
    imageSlider.forEach(function(imgloop)
    {
        imgloop.classList.remove('active');
    });

    items.forEach(function(itm){
        itm.classList.remove('active');
        });
}