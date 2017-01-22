function myMap() {


		let belgrade = new google.maps.LatLng(44.796,20.45);
		const noviSad = new google.maps.LatLng(45.256,19.8353);
		const zrenjanin = new google.maps.LatLng(45.381,20.3675);


			  let mapCanvas = document.getElementById("map");
			  let mapOptions = {center: belgrade, zoom: 8};
			  let map = new google.maps.Map(mapCanvas, mapOptions);


			const search = document.getElementById('search').addEventListener('click',search_focus_cords);
			const find_cods = document.getElementById('find_cords').addEventListener('click',funct_find_cords);


				function funct_find_cords () {

						let lat = document.getElementById('lat').value;
						let lng = document.getElementById('lng').value;

							if(lat.length == 0 || lng.length == 0) {
								error_box_div.style.display = 'block';
						
								
								this.close_button = document.getElementById('close');
								this.close_button.addEventListener('click',close_funct);

									function close_funct () {
										error_box_div.style.display = 'none';
									}

							}



						let new_position = new google.maps.LatLng(lat,lng);
						let new_position_marker = new google.maps.Marker({position:new_position}).setMap(map);;
						map.setCenter(new_position);
						map.zoom(10);	


				}

				function search_focus_cords () {
					
						this.lat = document.getElementById('lat');
						this.lat.focus();

				}				


}

		this.welcome_c = document.getElementById('welcomeclose').addEventListener('click',closeWelcome);

			function closeWelcome () {
				welcome_modal.style.transition = '1s';
				welcome_modal.style.opacity = '0';				
				welcome_modal.style.top = '-400px';				
			}


		const sidenav = document.getElementById('menu').addEventListener('click',openMenu);
		let menucount = 0;

				function openMenu () {
					

					console.log(menucount);
					this.menu = document.getElementById('menudiv');
					this.menu.style.transition = '1s';
					this.menu.style.left = '0';
					closer.style.display = 'block';
					//close buttton
					close_about();
					close_usage();
					close_contact();

					menucount++;
					if(menucount == 2) { 
							this.menu = document.getElementById('menudiv');				
							this.menu.style.transition = '1s';
							this.menu.style.left = '-150px';
							menucount = 0;
							
					 }							

						closer.addEventListener('click',closeMenu);
						
						function closeMenu () {
							this.menu = document.getElementById('menudiv');				
							this.menu.style.transition = '1s';
							this.menu.style.left = '-150px';
						}

				}




	const openAbout = document.getElementById('openAbout').addEventListener('click',open_about_modal);

		function open_about_modal () {

			about_modal.style.transition = '1s';
			about_modal.style.opacity = '0.95';
			about_modal.style.left = '0';
			
			let menu = document.getElementById('menudiv');				
				menu.style.transition = '1s';
				menu.style.left = '-150px';

		}
		const closeAbout = document.getElementById('aboutclose').addEventListener('click',close_about);
			function close_about () {
				about_modal.style.transition = '2s';
				about_modal.style.opacity = '0';
				about_modal.style.left = '-2090px';
			}


	const openUsage = document.getElementById('openUsage').addEventListener('click',open_usage_modal);

		function open_usage_modal () {
			usage_modal.style.transition = '1s';
			usage_modal.style.top = '100px';
	
			menu.style.transition = '1s';
			menu.style.left = '-150px';	

		}

		const closeUsage = document.getElementById('usageclose').addEventListener('click',close_usage);
			function close_usage () {
				usage_modal.style.transition = '3s';
				usage_modal.style.top = '-1000px';
			}

	const openContact = document.getElementById('openContact').addEventListener('click',open_contact_modal);

		function open_contact_modal () {
			contact_modal.style.transition = '1s';
			contact_modal.style.opacity = '0.95';
			contact_modal.style.left = '0px';
			menu.style.transtion = '1s';
			menu.style.left = '-150px';
		}
	
		const closeContact = document.getElementById('contactclose').addEventListener('click',close_contact);

		function close_contact () {
			contact_modal.style.transition = '3s';
			contact_modal.style.opacity = '0';
			contact_modal.style.left = '-2000px';
		}