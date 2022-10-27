// _______Sidebar_____
var menuItem = document.querySelectorAll(".menu-item");

// remove active class
var changeActive = ()=>{
    menuItem.forEach(item=>{
            item.classList.remove('active');
    })
}

//add active class in left side and notification count & ppup
menuItem.forEach(item =>{
    item.addEventListener('click', ()=>{
        changeActive();
        item.classList.add('active');
        if (item.id != 'notification') {
            document.querySelector('.notification-popup').style.display='none';
        }else{
            let popup = document.querySelector('.notification-popup');
            popup.style.display='block';
            document.querySelector("#notification .notification-count").style.display='none';
            // popup.style.boxShadow= '0 0 1rem var(--color-primary)';
            // setTimeout(()=>{
            //     popup.style.boxShadow='none'
            // } , 2000)
        }
    })
})

// _______Messages_______
var messagesItem = document.querySelector('#messages');
var messages = document.querySelector('main .right .messages');

var message = document.querySelectorAll('.right .message');
var searchBox = document.querySelector('.right #search-box');

// remove count and heilight messages
messagesItem.addEventListener('click' , ()=>{
    document.querySelector('.message-count').style.display='none';
    messages.style.boxShadow = '0 0 1rem var(--color-primary)'
    setTimeout(()=>{
        messages.style.boxShadow ='none';
    } ,2000)
})

// Search Box Messages
const searchMessage = () =>{
    const filtr =searchBox.value.toLowerCase();    
    message.forEach((chat) =>{
        let txt = chat.textContent;
        if(txt.toLowerCase().includes(filtr.toLowerCase())){
            chat.style.display='flex';
        }else{
            chat.style.display='none'
        }
    })
}
searchBox.addEventListener('keyup' , searchMessage)

// ___________Themes______________
const themeItem = document.querySelector('#theme');
const themes = document.querySelector('.themes');
const temeCard = document.querySelector('.card-them');

// open theme popup
const openTheme = ()=>{
    themes.style.display='flex';
}
themeItem.addEventListener('click' , openTheme);

// close theme popup
const closeThemes= (e)=>{
    if(e.target.classList.contains('themes')){
        themes.style.display='none';
    }
}
themes.addEventListener('click' , closeThemes);

// Custom font size
const fonts = document.querySelectorAll('.font-choise span');
const root = document.querySelector(':root');

// remove active 
const removeActive= ()=>{
    fonts.forEach(item =>{
        item.classList.remove('active');
    })
}

fonts.forEach(size =>{
    
    size.addEventListener('click' , ()=>{
        removeActive();
        let fontsize;
        size.classList.toggle('active');

        if(size.classList.contains('font-1')){
            fontsize='10px'
            root.style.setProperty('--sticky-left' , '5.4rem');
            root.style.setProperty('--sticky-right', '5.4rem');
        }
        else if(size.classList.contains('font-2')){
            fontsize='13px'
            root.style.setProperty('--sticky-left' , '5.4rem');
            root.style.setProperty('--sticky-right', '-7rem');
        }
        else if(size.classList.contains('font-3')){
            fontsize='16px'
            root.style.setProperty('--sticky-left' , '6rem');
            root.style.setProperty('--sticky-right', '-18rem');
        }
        else if(size.classList.contains('font-4')){
            fontsize='18px'
            root.style.setProperty('--sticky-left' , '-5rem');
            root.style.setProperty('--sticky-right', '-25rem');
        }
        else if(size.classList.contains('font-5')){
            fontsize='19px'
            root.style.setProperty('--sticky-left' , '-12rem');
            root.style.setProperty('--sticky-right', '-35rem');
        }

        document.querySelector('html').style.fontSize=fontsize;
    })

})

// _____Color____
const colors = document.querySelectorAll('.color-option span');

// remove active
const removeAct = ()=>{
    colors.forEach(item =>{
        item.classList.remove('active-color');
    })
}

colors.forEach(color =>{
    color.addEventListener('click' , (e)=>{
        removeAct();
        color.classList.toggle('active-color');
        document.documentElement.style.setProperty('--color-primary' , e.target.dataset.color);
    })
})

// ____BackGround Color Mode

const bg1 = document.querySelector('.bg-choise1');
const bg2 = document.querySelector('.bg-choise2');
const bg3 = document.querySelector('.bg-choise3');

bg1.addEventListener('click' , ()=>{
    document.body.style.backgroundColor='#EEF2E6';
    document.documentElement.style.setProperty('--color-white' ,'#ffffff');
})

bg2.addEventListener('click' , ()=>{
    document.body.style.backgroundColor='#3C4048';
    document.documentElement.style.setProperty('--color-white' ,'#EAEAEA');
})

bg3.addEventListener('click' , ()=>{
    document.body.style.backgroundColor='#000000';
    document.documentElement.style.setProperty('--color-white' ,'#181818');
})

// ___________Messages-category_____
var messCategory = document.querySelectorAll('.category h5');

const rmvclass = ()=>{
    messCategory.forEach(cat=>{
        cat.classList.remove('active');
    })
}

messCategory.forEach(el =>{
    el.addEventListener('click',()=>{
        rmvclass();
        el.classList.toggle('active');
    })
})

