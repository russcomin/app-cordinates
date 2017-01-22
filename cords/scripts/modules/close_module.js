const node = "x";

	let closer = document.createElement('a');

	this.closerNode = document.createTextNode(node);
		closer.appendChild(this.closerNode);
		closer.id = "close-menu";

	let menu = document.getElementById('menudiv');
		menu.appendChild(closer);
		
        closer.style.marginLeft = "120px";
		closer.style.display = 'none';