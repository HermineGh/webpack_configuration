function createAnalitics(): object {
	let counter:number = 0, isDestroyed :boolean = false
	const listener = () :number => counter++
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
window['analitics'] = createAnalitics();