let activeID = 'color--black'

addAndRemoveClasses(activeID,true)

document.querySelector(`[data-button='${activeID}']`).classList.add('choose-color__btn--active')

let btns = document.querySelectorAll('.choose-color__btn')
btns.forEach((el)=>
{
    el.addEventListener('click',()=>
    {
        addAndRemoveClasses(activeID,false)

        visibleBlock(activeID)
        activeID = event.target.dataset.button
        document.querySelector(`[data-button='${activeID}']`).style.opacity = '0'
        setTimeout(()=>
        {
            document.querySelector(`[data-button='${activeID}']`).classList.add('choose-color__btn--active')
        },500)
        addAndRemoveClasses(activeID,true)
    })
})

function visibleBlock(id)
{
    setTimeout(()=>
    {
    document.querySelector(`[data-button='${id}']`).style.opacity = '0'
    document.querySelector(`[data-button='${id}']`).classList.remove('choose-color__btn--active')
    },500)
    setTimeout(()=>
    {
    document.querySelector(`[data-button='${id}']`).style.opacity = '1'
    },1000)
}


function addAndRemoveClasses(param, boolean)
{
    let a = document.querySelectorAll(`.${param}`)
        a.forEach((el)=>
        {
            if(boolean)
            {
                el.classList.add('content-item--aсtive')
            }
            else{
                el.classList.remove('content-item--aсtive')               
            }
        })
}