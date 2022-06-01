const story = document.querySelector(".story-content")
const container = document.querySelector(".container")
const blurLayout = document.querySelector(".blur-layout")
const storyWithImg = document.querySelector(".story-with-image")
const choice = document.querySelector(".choice")
const noGift = document.querySelector(".no-gift")
const gift = document.querySelector(".gift")


let index = 0


const fullStory = ["Ngày xửa ngày xưa <br> ...",
    "Ở một ngôi làng nọ <br> ...",
    "Vào một ngày đẹp trời không mây không sao trưa hè tháng 6 năm nọ <br> ...",
    "Có một cô gái xinh xắn đáng yêu đam mê làm Powerpoint chính thức cất tiếng khóc chào đời <br> ...", 
    "Rồi bỗng một ngày <br> ...",
    "Cô nhận được inbox từ một người đáng thương tội nghiệp <br> ...",
    "Nhờ cô làm hộ đúng thứ cô đam mê cô yêu thích <br> ...",
    "Sau đó vì để cảm ơn ơn người nọ đã bí mật làm cho cô món quà <br> ...", 
    "Do đó <br> ...", 
    "Haizz, nếu u đã nhất quyết không muốn quà, thì thôi con không ép vậy <br> ...",
    "Chúc u một tuổi mới vui vẻ thành công, học tập thật tốt <br> ...",
    "Và hãy sống hết mình cho đam mê Powerpoint <br> ...", 
    "Mỗi khi con nhờ nhé",
    "Thân gửi, ",
    "Con của u"]

//story.innerHTML = "<div class='story'>" + fullStory[0] + "</div>"


const promises = []


const telling = function (index) {
    story.innerHTML = "<div class='story'>" + fullStory[index] + "</div>"
}


const sleep = function (delayTime) {
    return new Promise((resolve) => {
        setTimeout(resolve, delayTime)
    })
}


const sleepTime = 5500


sleep(2000)
    .then(() => {
        telling(0)
        return sleep(sleepTime)
    })
    .then(() => {
        telling(1)
        return sleep(sleepTime)
    })
    .then(() => {
        telling(2)
        return sleep(sleepTime)
    })
    .then(() => {
        telling(3)
        return sleep(sleepTime)
    })
    .then(() => {
        container.classList.remove('story-telling-background')
        container.classList.add("story-background")
        telling(4)
        //blurLayout.classList.remove("display-none")
        return sleep(sleepTime)
    })
    .then(() => {
        telling(5)
        return sleep(sleepTime)
    })
    .then(() => {
        telling(6)
        return sleep(sleepTime)
    })
    .then(() => {
        telling(7)
        return sleep(sleepTime)
    })
    .then(() => {
        story.classList.add("display-none")
        storyWithImg.classList.remove("display-none")
        container.classList.remove("story-background")
        container.classList.add("story-telling-background")
        return sleep(sleepTime)
    })
    .then(() => {
        telling(8)
        story.classList.remove("display-none")
        storyWithImg.classList.add("display-none")
        return sleep(sleepTime)
    })
    .finally(() => {
        story.classList.add("display-none")
        story.innerHTML = ""
        choice.classList.remove("display-none")
        container.classList.remove("story-telling-background")
        container.classList.add("happy-background")
        
    }
    )



noGift.addEventListener("click", () => {
    story.classList.remove("display-none")
    container.classList.remove("happy-background")
    container.classList.add("story-telling-background")
    choice.classList.add("display-none")
    sleep(1500).
        then(()=> {
            telling(9)
            return sleep(sleepTime)
        })
        .then(() => {
            telling(10) 
            return sleep(sleepTime)
        })
        .then(() => {
            telling(11) 
            return sleep(sleepTime)
        })
        .then(() => {
            telling(12) 
            return sleep(sleepTime)
        })
        .then(() => {
            telling(13) 
            return sleep(sleepTime)
        })
        .then(() => {
            telling(14) 
            return sleep(sleepTime)
        })
})


gift.addEventListener("mouseover", (e) => {
    console.log(e)
    let newRight = Math.random() * 80 + 10
    let newBottom = Math.random() * 80 + 10

    gift.style.right = newRight + "%"
    gift.style.bottom = newBottom + "%"
})



gift.addEventListener("click", (e) => {
    console.log(e)
    let newRight = Math.random() * 80 + 10
    let newBottom = Math.random() * 80 + 10

    gift.style.right = newRight + "%"
    gift.style.bottom = newBottom + "%"
})
