console.log(' Страница Main (60) \n Проверка верстки +7 \n Вёрстка соответствует макету +35 \n Требования к css +6 \n Интерактивность элементов +12 \n Страница Pets (40) \n Проверка верстки +7 \n Вёрстка соответствует макету +15 \n Требования к css +4 \n Интерактивность элементов +14 \n Итоговая оценка за задание 100 баллов')

console.log(' Вёрстка страницы Main соответствует макету при ширине экрана 1280px: +14 \n Вёрстка страницы Main соответствует макету при ширине экрана 768px: +14 \n Вёрстка страницы Main соответствует макету при ширине экрана 320px: +14 \n Вёрстка страницы Pets соответствует макету при ширине экрана 1280px: +6 \n Вёрстка страницы Pets соответствует макету при ширине экрана 768px: +6 \n Вёрстка страницы Pets соответствует макету при ширине экрана 320px: +6 \n Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки +20 \n Верстка резиновая +8 \n При ширине экрана меньше 768px на обеих страницах меню в хедере скрывается, появляется иконка бургер-меню: +4 \n Верстка обеих страниц валидная +8 \n Итоговая оценка за задание 100 баллов')

console.log(' Реализация burger menu на обеих страницах: +26\n Реализация слайдера-карусели на странице Main: +36\n Реализация пагинации на странице Pets: +36\n Реализация попап на обеих страницах: +12')

const burger = document.querySelector('.burger')
const overlay = document.querySelector('.burger__overlay')
const menu = document.querySelector('.burger-menu')
const items = document.querySelectorAll('.burger-menu__item')

burger.addEventListener('click', () => {
    document.body.classList.toggle('lock')
    overlay.classList.toggle('active')
    burger.classList.toggle('active')
    menu.classList.toggle('animate')
})

overlay.addEventListener('click', () => {
    document.body.classList.toggle('lock')
    burger.classList.toggle('active')
    overlay.classList.toggle('active')
    menu.classList.toggle('animate')
})

items.forEach(item => item.addEventListener('click', () => {
    document.body.classList.remove('lock')
    overlay.classList.remove('active')
    burger.classList.remove('active');
    menu.classList.remove('animate');
}))

const petsArr = [
    {
      "name": "Jennifer",
      "img": "../assets/pets-jennifer.png",
      "type": "Dog",
      "breed": "Labrador",
      "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      "age": "2 months",
      "inoculations": ["none"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Sophia",
      "img": "../assets/pets-sophia.png",
      "type": "Dog",
      "breed": "Shih tzu",
      "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      "age": "1 month",
      "inoculations": ["parvovirus"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Woody",
      "img": "../assets/pets-woody.png",
      "type": "Dog",
      "breed": "Golden Retriever",
      "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      "age": "3 years 6 months",
      "inoculations": ["adenovirus", "distemper"],
      "diseases": ["right back leg mobility reduced"],
      "parasites": ["none"]
    },
    {
      "name": "Scarlett",
      "img": "../assets/pets-scarlet.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      "age": "3 months",
      "inoculations": ["parainfluenza"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Katrine",
      "img": "../assets/pets-katrine.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      "age": "6 months",
      "inoculations": ["panleukopenia"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Timmy",
      "img": "../assets/pets-timmy.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      "age": "2 years 3 months",
      "inoculations": ["calicivirus", "viral rhinotracheitis"],
      "diseases": ["kidney stones"],
      "parasites": ["none"]
    },
    {
      "name": "Freddie",
      "img": "../assets/pets-freddie.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      "age": "2 months",
      "inoculations": ["rabies"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Charly",
      "img": "../assets/pets-charly.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"]
    }
  ]
const data = []
const newArr = []

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

let count
let item
if (window.innerWidth >= 1280) {
    count = 6
    item = 8
}
else if (window.innerWidth < 1280 && window.innerWidth > 650) {
    count = 8
    item = 6
}
else if (window.innerWidth <= 650) {
    count = 16
    item = 3
}
getRandom(0, 7)

function getRandom(min, max) {

    for (i = 0; i < 6; i++) {
        let arr = Array.from(Array(max - min + 1).keys(), x => x + min);

        shuffle(arr)
        newArr.push(...arr);
    }

    return newArr
  }



console.log(newArr)

for (i  = 0; i < 48; i++) {
  data.push(petsArr[newArr[i]])
}

console.log(data)

const container = document.querySelector('.our-friends__container')

function main() {
  let curPage = 1
  const next = document.querySelector('.next-page')
  const end = document.querySelector('.end')
  const prev = document.querySelector('.prev-page')
  const first = document.querySelector('.first-page')
  const navBtn = document.querySelector('.selected')
  const closeBtn = document.querySelector('.popup__close')
  const popupOverlay = document.querySelector('.popup__overlay')


  

  function displayCard(info, pageItems, page) {
    page--
    container.innerHTML = ''
    let start = pageItems * page
    let end = start + pageItems
    let paginatedData = info.slice(start, end)

    console.log(paginatedData)

    paginatedData.forEach(el => {
      let wrapper = document.createElement('div')
      wrapper.classList.add('our-friends__card')
      let img = document.createElement('img')
      img.src = el.img
      img.alt = el.name
      let h4 = document.createElement('h4')
      h4.innerHTML = el.name
      let button = document.createElement('button')
      button.classList.add('button')
      button.classList.add('card_button')
      button.innerHTML = 'Learn more'
      wrapper.append(img)
      wrapper.append(h4)
      wrapper.append(button)
      container.append(wrapper)
      wrapper.addEventListener('click', () => {

        document.body.classList.add('lock')
        closeBtn.style.display = 'block'
        popupOverlay.classList.add('active')
        let popup = document.createElement('div')
        let popupLeft = document.createElement('div')
        popupLeft.classList.add('popup-left')
        let popupright = document.createElement('div')
        popupright.classList.add('popup-right')
        popup.classList.add('popup__container')
        let popupImg = document.createElement('img')
        popupImg.src = el.img
        popupImg.alt = el.name
        let popupH3 = document.createElement('h3')
        popupH3.innerText = el.name
        let popupH4 = document.createElement('h4')
        popupH4.innerText = `${el.type}  - ${el.breed}`
        let popupH5 = document.createElement('h5')
        popupH5.classList.add('popup-text')
        popupH5.innerText = el.description
        let age = document.createElement('h5')
        age.classList.add('popup-list')
        age.innerHTML = `<h5 style="font-weight:700; display:inline; margin:0px"> Age:</h5> ${el.age}`
        let inoculations = document.createElement('h5')
        inoculations.classList.add('popup-list')
        inoculations.innerHTML = `<h5 style="font-weight:700; display:inline; margin:0px"> Inoculations:</h5> ${el.inoculations}`
        let diseases = document.createElement('h5')
        diseases.classList.add('popup-list')
        diseases.innerHTML = `<h5 style="font-weight:700; display:inline; margin:0px"> Diseases:</h5> ${el.diseases}`
        let parasites = document.createElement('h5')
        parasites.classList.add('popup-list')
        parasites.innerHTML = `<h5 style="font-weight:700; display:inline; margin:0px"> Parasites:</h5> ${el.parasites}`
        popupright.append(popupH3)
        popupright.append(popupH4)
        popupright.append(popupH5)
        popupright.append(age)
        popupright.append(inoculations)
        popupright.append(diseases)
        popupright.append(parasites)
        popupLeft.append(popupImg)
        popup.append(popupLeft)
        popup.append(popupright)
        wrapper.append(popup)


        closeBtn.addEventListener('click', () => {
          popup.style.display = 'none'
          closeBtn.style.display = 'none'
          document.body.classList.remove('lock')
          popupOverlay.classList.remove('active')
        })

        popupOverlay.addEventListener('click', () => {
          popup.style.display = 'none'
          closeBtn.style.display = 'none'
          document.body.classList.remove('lock')
          popupOverlay.classList.remove('active')
        })
      })
    }    
  )
}


  let nextHandler = () => {
    if (curPage === count) {
      next.removeEventListener('click',nextHandler)
    }
    else if (curPage === count -1) {
      curPage = curPage+ 1
      displayCard(data, item, curPage)
      end.classList.remove('next')
      end.classList.add('prev')
      next.classList.remove('next')
      next.classList.add('prev')
      navBtn.innerHTML = curPage
    }
    else{
    curPage = curPage+ 1
      displayCard(data, item, curPage)
      first.classList.remove('prev')
      first.classList.add('next')
      prev.classList.remove('prev')
      prev.classList.add('next')
      first.addEventListener('click', fistHandler)
      prev.addEventListener('click', prevHandler)}
      navBtn.innerHTML = curPage
  }
  
  let endHandler = () => {
    curPage = count
    displayCard(data, item, curPage)
    end.classList.remove('next')
    end.classList.add('prev')
    next.classList.remove('next')
    next.classList.add('prev')
    first.classList.remove('prev')
    first.classList.add('next')
    prev.classList.remove('prev')
    prev.classList.add('next')
    next.removeEventListener('click',nextHandler)
    end.removeEventListener('click', endHandler)
    first.addEventListener('click', fistHandler)
    prev.addEventListener('click', prevHandler)
    navBtn.innerHTML = curPage
  }

  let prevHandler = () => {
    if (curPage === 1) {
      
      prev.removeEventListener('click', prevHandler)

    } 
    else if (curPage === 2) {
      curPage = curPage -1
      displayCard(data, item, curPage)
      prev.classList.remove('next')
      prev.classList.add('prev')
      first.classList.remove('next')
      first.classList.add('prev')
      navBtn.innerHTML = curPage
    }
    else {
    curPage = curPage -1
    displayCard(data, item, curPage)
    next.addEventListener('click', nextHandler)
    end.addEventListener('click', endHandler)
    next.classList.remove('prev')
    next.classList.add('next')
    end.classList.remove('prev')
    end.classList.add('next')}
    navBtn.innerHTML = curPage
  }

  let fistHandler = () => {
    curPage = 1
    displayCard(data, item, curPage)
    prev.classList.remove('next')
    prev.classList.add('prev')
    first.classList.remove('next')
    first.classList.add('prev')
    next.classList.remove('prev')
    next.classList.add('next')
    end.classList.remove('prev')
    end.classList.add('next')
    first.removeEventListener('click',fistHandler)
    prev.removeEventListener('click', prevHandler)
    next.addEventListener('click', nextHandler)
    end.addEventListener('click', endHandler)
    navBtn.innerHTML = curPage
  }

  first.addEventListener('click', fistHandler)

  prev.addEventListener('click', prevHandler)

  next.addEventListener('click', nextHandler)

  end.addEventListener('click', endHandler)



  displayCard(data, item, curPage)

}

main()



const mediumWidthMediaQuery = window.matchMedia('(min-width: 650px) and (max-width: 1279px)'); 
const lowWidthMediaQuery = window.matchMedia('(max-width: 649px)')
const highWidthMediaQuery = window.matchMedia('(min-width: 1280px)')

function mediumMediaEvent(e) {
  if (e.matches) {
      container.innerHTML = null
      count = 8
      item = 6
      main()
  }
}

function lowMediaEvent(e) {
  if (e.matches) {
    container.innerHTML = null
    count = 13
    item = 3
    main()
  }
}

function highMediaEvent(e) {
  if (e.matches) {
    container.innerHTML = null
    count = 6
    item = 8
    main()
  }
}
mediumWidthMediaQuery.addEventListener('change', mediumMediaEvent);

lowWidthMediaQuery.addEventListener('change', lowMediaEvent)

highWidthMediaQuery.addEventListener('change', highMediaEvent)
