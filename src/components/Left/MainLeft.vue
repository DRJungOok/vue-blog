<template>
	<div class="side">
				<ul>
					<li @click="toggleMenu('front')" :aria-expanded="isMenuOpen('front')" :class="{ 'active': 'front' }">
						<a href="javascript: void(0);"><span>front-end</span></a>
						<ul v-show="isMenuOpen('front')" class="sub-menu">
							<li>
								<RouterLink to="/front/FrontHtml">
										<span>html</span>
								</RouterLink>
							</li>
							<li>
								<RouterLink to="/front/FrontCss">
									<span>css</span>
								</RouterLink>
							</li>
                            <li>
								<RouterLink to="/front/FrontJs">
									<span>js</span>
								</RouterLink>
							</li>
                            <li>
								<RouterLink to="/front/FrontVue">
									<span>vue</span>
								</RouterLink>
							</li>
                        </ul>
					</li>
					<li @click="toggleMenu('back')" :aria-expanded="isMenuOpen('back')" :class="{ 'active': 'back' }">
						<a href="javascript: void(0);" :class="{ 'expanded': isMenuOpen('back') }"><span>back-end</span></a>
						<ul v-show="isMenuOpen('back')" class="sub-menu">
							<li>
								<RouterLink to="/back/BackJava">
									<span>java</span>
								</RouterLink>
							</li>
                            <li>
								<RouterLink to="/back/BackSpring">
									<span>springboot</span>
								</RouterLink>
							</li>
						</ul>
					</li>
                    <li @click="toggleMenu('database')" :aria-expanded="isMenuOpen('database')" :class="{ 'active': 'database' }">
						<a href="javascript: void(0);" :class="{ 'expanded': isMenuOpen('database') }"><span class="sub-menu">DataBases</span></a>
						<ul v-show="isMenuOpen('database')" class="sub-menu">
							<li>
								<RouterLink to="/database/DBmySql">
									<span>mysql</span>
								</RouterLink>
							</li>
                            <li>
								<RouterLink to="/database/DBMariadb">
									<span>mariaDB</span>
								</RouterLink>
							</li>
                            <li>
								<RouterLink to="/database/DBpostgres">
									<span>postgreSQL</span>
								</RouterLink>
							</li>
						</ul>
					</li>
					<li @click="toggleMenu('server')" :aria-expanded="isMenuOpen('server')" :class="{ 'active': 'server' }">
						<a href="javascript: void(0);" :class="{ 'expanded': isMenuOpen('server') }"><span>Servers</span></a>
						<ul v-show="isMenuOpen('server')" class="sub-menu">
							<li>
								<RouterLink to="/server/apache">
									<span>Apache</span>
								</RouterLink>
							</li>
                            <li>
								<RouterLink to="/server/geoserver">
									<span>Geoserver</span>
								</RouterLink>
							</li>
						</ul>
					</li>
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
