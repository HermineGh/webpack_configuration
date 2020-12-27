//counting clicks on the document
import * as $ from 'jquery'; 
function createAnalitics() {
	let counter = 0, isDestroyed = false
	const listener = () => counter++
	document.addEventListener('click', listener)
	return {
		// by calling this method createAnalitics function will stop its action
		destroy(){
			document.removeEventListener('click', listener);
			isDestroyed = true;
		},
		getClicks(){
				if(isDestroyed){
					return 'Analitics is destroyed'
				}
				return counter
		}
	}
}
//creating analytics method for window object to make createAnalitics() globally usable
window.analitics = createAnalitics();