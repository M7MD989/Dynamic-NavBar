
//All features are usable across modern desktop,phone browsers.
//A Responsive layout of the landing page
//the navigation bar is responsive too across all these devices.
//Responsiveness had been tested by using the Developer Tools option on Google Chrome Browser.


//This is a function that creats a NavBar dynamically as an unordered list
function creatSections(){
    const sections  = document.querySelectorAll('section');
    // using document fragment to decrease the reflow and repaint
	const fragment = new DocumentFragment();
    //looping through sections and putting it in a list
	sections.forEach(element => {
		const listItems =  document.createElement('li');
		const itemLink = document.createElement('a');
		const itemName = element.getAttribute('id');

		itemLink.setAttribute('href',`#${itemName}`);
		itemLink.textContent = itemName;

		listItems.appendChild(itemLink);
		fragment.appendChild(listItems);
	});
	document.getElementById('navbar__list').appendChild(fragment);
}

//looping through section with class 'landing__container'	
window.addEventListener('scroll', () => {
    const sectionsElements = document.querySelectorAll('section');
    //looping through section	
    for (let i = 0; i < sectionsElements.length; i++) {
        //getting section information bygetBoundingClientRect()
        const sectionInfo = sectionsElements[i].getBoundingClientRect();
        if (sectionInfo.top <= 150 && sectionInfo.bottom >= 150){
            let activeElement = document.getElementsByClassName('your-active-class');  
            //making sure that there is not more than 1 active class
            //by using nested if 
            if (activeElement.length > 0) {
                activeElement[0].classList.remove('your-active-class');
            }
            //lastly adding active class to the section with correct conditions
            sectionsElements[i].classList.add('your-active-class');
        };
    };
}); 

//smooth scroll between sections
//using onload to make sure that all html elements are created ans then applying the function
window.onload = function(){
    const links = document.querySelectorAll("a");
    //looping through each (a) tag
    links.forEach(link =>{
        function smoothScroll(e) { 
            for (var i = 0 ; i < links.length; i++) {
                //removing defalt values
                e.preventDefault();
                //getting the href attribute
                const href = this.getAttribute("href");
                const offsetTop = document.querySelector(href).offsetTop;
                //setting scroll behavior to it
                scroll({
                    top: offsetTop,
                    behavior: "smooth"
                });
            };
        };
        //adding eventlistener to each (a) tag and executes the function with a click on it
        link.addEventListener('click' , smoothScroll) ;
    })
};

//from Suggestions to Make Your Project Stand Out!
//Added an active state to your navigation items when a section is in the viewport.

//looping through section with class 'landing__container'	
window.addEventListener('scroll', () => {
    const sectionID = document.getElementsByClassName('landing__container');
    //looping through section with class 'landing__container'		
    for (let i = 0; i < sectionID.length; i++) {
        //getting section information bygetBoundingClientRect()
        const sectionInfo = sectionID[i].getBoundingClientRect();
        if (sectionInfo.top <= 150 && sectionInfo.bottom >= 150){
            let activeElement = document.getElementsByClassName("active");  
            //making sure that there is not more than 1 active class
            //by using nested if 
            if (activeElement.length > 0) {
                activeElement[0].classList.remove("active");
            }
            //lastly adding active class to the li with correct conditions
            let activeLinks = document.getElementById("navbar__list").querySelectorAll('li');
            activeLinks[i].classList.add("active");
        };
    };
}); 
 
//calling functions
creatSections();