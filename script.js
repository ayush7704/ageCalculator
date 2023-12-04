// gsap animation
const tm = gsap.timeline()
tm.from('header h4,.click', {
    y: -100,
    duration: 1,
    delay: 0.4,
    opacity: 0,
    fontSize: '1.3rem',
    stagger: 0.3
})

// our animation 
const animation = document.querySelectorAll('.animation');
const options = {}
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle('anm', entry.isIntersecting);
        console.log(entry)
    })
}, options)
animation.forEach(animation => {
    observer.observe(animation)
})

// copy to clipbord
const copy = document.querySelectorAll('.number')
Array.from(copy).forEach(element => {
    element.addEventListener('click', function (e) {
        navigator.clipboard.writeText(9754742477)
        navigator.vibrate(150, 50)
        setTimeout(() => {
            document.querySelector('.copy').style.display = 'block'
        }, 100)
        setTimeout(() => {
            document.querySelector('.copy').style.display = 'none'
        }, 2000)
    })
});


// navbar hamburguer
let wrap = document.querySelector('.click');
wrap.addEventListener('click', function () {

    const header = document.querySelector('Header')
    const h2 = document.querySelector('h2')

    const h2after = window.getComputedStyle(h2, '::after')
    const h2before = window.getComputedStyle(h2, '::before')

    setTimeout(() => {
        if (h2after.bottom == '-8px') {
            h2.style.cssText = 'background:transparent;'
            document.documentElement.style.setProperty('--top', '0')
            document.documentElement.style.setProperty('--bottom', '0')
            document.documentElement.style.setProperty('--before', '135deg')
            document.documentElement.style.setProperty('--after', '-135deg')
        }
        else {
            h2.style.cssText = 'background:white;'
            document.documentElement.style.setProperty('--top', '-8px')
            document.documentElement.style.setProperty('--bottom', '-8px')
            document.documentElement.style.setProperty('--before', '0deg')
            document.documentElement.style.setProperty('--after', '0deg')
        }


        document.querySelector('.wrap').style.cssText = `margin-top:${header.offsetHeight + 1}px`
        document.querySelector('.wrap').classList.toggle('block')
    }, 300)
})

const years = document.getElementById('years')
const months = document.getElementById('months')
const days = document.getElementById('days')


// calculation section 
function calculator(event) {
    const dob = new Date(document.getElementById('dob').value);
    const tilldate = new Date(document.getElementById('tilldate').value);
    const nextmonths = document.getElementById('nextmonths')
    const nextdays = document.getElementById('nextdays')
    const dobday = document.getElementById('dobday')
    const todayday = document.getElementById('todayday')
    const whichday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', '']
    // const whichday = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const caldate = new Date();

    // dob.setDate(dob.getDate() + 1)
    // tilldate.setDate(tilldate.getDate() + 1)

    caldate.setFullYear(tilldate.getFullYear() - dob.getFullYear())
    caldate.setMonth(tilldate.getMonth() - dob.getMonth())
    caldate.setDate(tilldate.getDate() - dob.getDate())

    console.log(dob.getDay())
    console.log(tilldate.getDay())
    if (dob == 'Invalid Date' || tilldate == 'Invalid Date' || dob == tilldate) {
        // if Date is not filled 
        dob == 'Invalid Date' ? document.querySelector('.error').innerHTML = 'Choose Your DOB please' : document.querySelector('.error').innerHTML = 'Choose A Date To Compare';
        navigator.vibrate([30, 50])
        document.querySelector('.error').style.cssText = 'display:block;'
    }
    else if (caldate.getFullYear() <= -1) {
        // if Date is equal or dob is greater than today's date
        document.querySelector('.error').innerHTML = "Date of birth needs to be earlier than today's date";
        navigator.vibrate([30, 50])
        document.querySelector('.error').style.cssText = 'display:block;'
        years.innerHTML = 0;
        months.innerHTML = 0;
        days.innerHTML = 0;
        nextdays.innerHTML = 0
        nextmonths.innerHTML = 0
    }
    else {
        document.querySelector('.error').style.cssText = 'display:none;'
        const year = caldate.getFullYear();
        const month = caldate.getMonth();
        let day = caldate.getDate();
        const n = dob;

        dobday.innerHTML = whichday[dob.getDay()]
        todayday.innerHTML = whichday[tilldate.getDay()]

        console.log(dob.getDate())
        console.log(tilldate.getDate())

        years.innerHTML = year;
        months.innerHTML = month;
        days.innerHTML = day;

        n.setFullYear(tilldate.getFullYear())
        const gap = new Date()
        gap.setMonth(n.getMonth() - tilldate.getMonth())
        gap.setDate(n.getDate() - tilldate.getDate())

        if (gap.getMonth() == 11 && gap.getDate() == 31) {
            alert("Happy Birthday! enjoy your day dear.")
            nextdays.innerHTML = 0
            nextmonths.innerHTML = 0
        } else {
            nextdays.innerHTML = gap.getDate()
            nextmonths.innerHTML = gap.getMonth()
        }
    }
    return false
}

// refresh the page
function doclear() {
    location.reload()
}
