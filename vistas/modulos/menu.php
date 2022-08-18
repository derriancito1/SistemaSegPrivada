<aside class="main-sidebar">
	 <section class="sidebar">
		<ul class="sidebar-menu">
		<?php
		if($_SESSION["perfil"] == "Administrador"){
			echo '<li>
					<a href="inicio">
						<i class="fa fa-home"></i>
						<span>Inicio</span>
					</a>
				</li>';
				echo '<li>
					<a href="usuarios">
						<i class="fa fa-user"></i>
						<span>Usuarios</span>
					</a>
				</li>';


		}

		if($_SESSION["perfil"] == "Administrador" || $_SESSION["perfil"] == "Especial"){
			echo '<li>
				<a href="listado-nominal">
					<i class="fa fa-th"></i>
					<span>Listado Nominal</span>
				</a>
			</li>';
			echo '<li>
				<a href="reportes">
					<i class="fas fa-poll"></i>
					<span>Reportes</span>
				</a>
			</li>';
		}

		if($_SESSION["perfil"] == "Administrador" || $_SESSION["perfil"] == "Vendedor"){



		}

		if($_SESSION["perfil"] == "Administrador" || $_SESSION["perfil"] == "Vendedor"){







				echo '</ul>
			</li>';
		}

		?>

		</ul>

	 </section>
</aside>
