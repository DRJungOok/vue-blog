<template>
	<div class="side">
				<ul>
					<li @click="toggleMenu('front')" :aria-expanded="isMenuOpen('front')" :class="{ 'active': 'front' }">
						<a href="javascript: void(0);" class="main-menu"><span>front-end</span></a>
						<ul v-show="isMenuOpen('front')" class="sub-menu">
							<li>
								<router-link to="/front/FrontHtml">
										<span>html</span>
								</router-link>
							</li>
							<li>
								<router-link to="/front/FrontCss">
									<span>css</span>
								</router-link>
							</li>
                            <li>
								<router-link to="/front/FrontJs">
									<span>js</span>
								</router-link>
							</li>
                            <li>
								<router-link to="/front/FrontVue">
									<span>vue</span>
								</router-link>
							</li>
                        </ul>
					</li>
					<li @click="toggleMenu('back')" :aria-expanded="isMenuOpen('back')" :class="{ 'active': 'back' }">
						<a href="javascript: void(0);" :class="{ 'expanded': isMenuOpen('back') }" class="main-menu"><span>back-end</span></a>
						<ul v-show="isMenuOpen('back')" class="sub-menu">
							<li>
								<router-link to="/back/BackJava">
									<span>java</span>
								</router-link>
							</li>
                            <li>
								<router-link to="/back/BackSpring">
									<span>springboot</span>
								</router-link>
							</li>
						</ul>
					</li>
                    <li @click="toggleMenu('database')" :aria-expanded="isMenuOpen('database')" :class="{ 'active': 'database' }">
						<a href="javascript: void(0);" :class="{ 'expanded': isMenuOpen('database') }" class="main-menu"><span>DataBases</span></a>
						<ul v-show="isMenuOpen('database')" class="sub-menu">
							<li>
								<router-link to="/database/DBmySql">
									<span>mysql</span>
								</router-link>
							</li>
                            <li>
								<router-link to="/database/DBMariadb">
									<span>mariaDB</span>
								</router-link>
							</li>
                            <li>
								<router-link to="/database/DBpostgres">
									<span>postgreSQL</span>
								</router-link>
							</li>
						</ul>
					</li>
					<li @click="toggleMenu('server')" :aria-expanded="isMenuOpen('server')" :class="{ 'active': 'server' }">
						<a href="javascript: void(0);" :class="{ 'expanded': isMenuOpen('server') }" class="main-menu"><span>Servers</span></a>
						<ul v-show="isMenuOpen('server')" class="sub-menu">
							<li>
								<router-link to="/server/apache">
									<span>Apache</span>
								</router-link>
							</li>
                            <li>
								<router-link to="/server/geoserver">
									<span>Geoserver</span>
								</router-link>
							</li>
						</ul>
					</li>
					<router-view />
				</ul>
			</div>
</template>

<script setup>
import { ref } from 'vue';

const openMenus = ref([]);

const toggleMenu = (menuId) => {
	console.log(`menuId >> ${menuId} << click`)
	if (openMenus.value.includes(menuId)) {
		openMenus.value = [];
	} else {
		openMenus.value = [menuId];
	}
};

const isMenuOpen = (menuId) => openMenus.value.includes(menuId);
</script>

<style scoped></style>
