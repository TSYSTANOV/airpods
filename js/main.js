let activeID = 'color--black'

addAndRemoveClasses(activeID,true)

document.querySelector(`[data-button='${activeID}']`).classList.add('choose-color__btn--active')

let btns = document.querySelectorAll('.choose-color__btn')
btns.forEach((el)=>
{
    el.addEventListener('click',()=>
    {
        addAndRemoveClasses(activeID,false)
        
        document.querySelector(`[data-button='${activeID}']`).classList.remove('choose-color__btn--active')
        activeID = event.target.dataset.button
        document.querySelector(`[data-button='${activeID}']`).classList.add('choose-color__btn--active')

        addAndRemoveClasses(activeID,true)


    })
})

function addAndRemoveClasses(param,boolean)
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