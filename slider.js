let models = [
    {
        name: 'Bmw 418d',
        image : 'slider-img/bmw.jpg',
        link: 'http://www.arabalar.com.tr/bmw/4-serisi/2018/418d-2-0-gran-coupe'
    },

    {
        name: 'Mazda CX-3',
        image: 'slider-img/mazda.jpg',
        link : 'http://www.arabalar.com.tr/mazda/cx-3/2017/1-5-sky-d-motion'
    },
    {
        name: 'Volvo S60',
        image: 'slider-img/volvo.jpg',
        link : 'http://www.arabalar.com.tr/volvo/s60/2018/1-5-t3-advance'
    },
    {
        name: 'Skoda Superb',
        image: 'slider-img/skoda.jpg',
        link : 'http://www.arabalar.com.tr/skoda/superb/2018/1-4-tsi-active'
    },
    {
        name: 'Honda Civic',
        image: 'slider-img/honda.jpg',
        link : 'http://www.arabalar.com.tr/honda/civic/2018/1-6-elegance'
    },
    {
        name: 'Delonghi Civic',
        image: 'slider-img/honda.jpg',
        link : 'http://www.arabalar.com.tr/honda/civic/2018/1-6-elegance'
    },
]

let index = 3;
let slaytCount = models.length;

let settings={
    duration: '2000',
    random: false
};

init(settings);

document.querySelector('.fa-arrow-circle-left').addEventListener('click', function(){
    index--;
    showSlide(index);
    console.log(index)
})

document.querySelector('.fa-arrow-circle-right').addEventListener('click', function(){
    index++;
    showSlide(index);
    console.log(index)
})

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseenter', function(){
        clearInterval(interval);
    });
});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseleave', function(){
        init(settings);
    })
})

function init(settings){
    var prev;

    interval=setInterval(function(){

        if(settings.random){
            do{
                index = Math.floor(Math.random() * slaytCount);
            }while(index == prev)
                prev = index;
        }else{
            if(slaytCount == index+1){
                index = -1;
            }
            showSlide(index);
            console.log(index);
            index++;
        }
        showSlide(index);

    }, settings.duration)
}

function showSlide(i){
    i = index;

    if(i < 0){
        index = slaytCount -1;
    }
    if(i >= slaytCount){
        index = 0;
    }


    document.querySelector('.card-title').textContent = models[index].name;
    document.querySelector('.card-img-top').setAttribute('src', models[index].image);
    document.querySelector('.card-link').setAttribute('href', models[index].link);
}

