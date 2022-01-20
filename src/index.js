import routes from './routes'
import footer from './component/layout/footer'
import Header from './component/layout/header';


const display = async (page,afterRender) => {
    document.querySelector('.header').innerHTML = await page;
    if (afterRender) {
        await afterRender()
        
    }
    
   
    
}

document.querySelector('.header').innerHTML = display(Header.render(),Header.afterRender)
document.querySelector('.footer').innerHTML = footer.render();


window.addEventListener('DOMContentLoaded', routes())


