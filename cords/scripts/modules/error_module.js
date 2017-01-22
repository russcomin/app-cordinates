	const err = "There is some error";
	const errNote = "Check input fields";
				
		let error_box_div = document.createElement("div");
			error_box_div.id = "error";
					

			this.error = document.createTextNode(err);
				error_box_div.appendChild(this.error); 

				this.break = document.createElement('br');
					error_box_div.appendChild(this.break);

				this.span = document.createElement('p');
				this.errNote = document.createTextNode(errNote);
				this.span.appendChild(this.errNote);
					error_box_div.appendChild(this.span);
						
				this.close = document.createElement('a');
				this.close.id = 'close';
				this.closeNode = document.createTextNode('X');
				this.close.appendChild(this.closeNode); 
					error_box_div.appendChild(this.close);
						
				this.contain = document.getElementById('container');
				this.contain.appendChild(error_box_div);
				
				error_box_div.style.display = 'none';