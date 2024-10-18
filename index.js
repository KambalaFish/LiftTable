const buttonsUp = document.querySelectorAll('.ergonomics__button_up');
const buttonsDown = document.querySelectorAll('.ergonomics__button_down');

const buttonsContainers = document.querySelectorAll('.ergonomics__buttons');
const deskTops = document.querySelectorAll('.desk__top');

let step = 5;
let currentPosition = 0;
let downLimit = -80;
let topLimit = 70;

document.addEventListener('DOMContentLoaded', () => {
    const desktopEngagement = document.querySelector('.ergonomics__engagement_desktop');
    const compStylesDesktopEngagement = getComputedStyle(desktopEngagement);
    const desktopEngagementDisplayValue = compStylesDesktopEngagement.getPropertyValue('display');
    console.log(`desktopEngagementDisplayValue: ${desktopEngagementDisplayValue}`)
    if (desktopEngagementDisplayValue === 'none') {
        step = 1;
        topLimit = 26;
        downLimit = -31;
    }
})


buttonsDown.forEach(button => {
    button.addEventListener('click', (e) => {
        if (currentPosition > downLimit) {
            currentPosition-=step;
            console.log(`currentPosition=${currentPosition}`);
            buttonsContainers.forEach(container => {
                container.style.bottom = `calc(25% + ${currentPosition}px)`
            })
            deskTops.forEach(deskTop => {
                deskTop.style.top = `${-currentPosition}px`
            })
        }
    })
})

buttonsUp.forEach(button => {
    button.addEventListener('click', (e) => {
        if (currentPosition < topLimit) {
            currentPosition+=step;
            console.log(`currentPosition=${currentPosition}`);
            buttonsContainers.forEach(container => {
                container.style.bottom = `calc(25% + ${currentPosition}px)`;
            })
            deskTops.forEach(deskTop => {
                deskTop.style.top = `${-currentPosition}px`
            })
        }
    })
})