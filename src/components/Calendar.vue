<template>
	<div class="container">
		<div class="row">
			<div class="card col-md-6 col-12">
				<div class="card-body">
					<h3 class="card-title">Crear nuevo empleado:</h3>
					<form @submit.prevent="anadirNuevoEmpleado()">
						<div class="form-row">
							<div class="form-group col">
								<label for="input">Nombre(un nombre)</label>
								<input type="text" class="form-control" v-model="nuevoEmpleado" required>
							</div>						
							<div class="form-group col-12">
								<button type="submit" class="btn btn-primary mb-2">Agregar</button>
							</div>	
						</div>						
					</form>
				</div>
			</div>
			<div class="card col-md-6 col-12">
				<div class="card-body">
					<h3 class="card-title">Asignar actividad:</h3>
					<form @submit.prevent="anadirActividad()">
						<div class="form-row">
							<div class="form-group col">
								<label for="inputState">Empleado</label>
								<select id="inputState" class="form-control" v-model="empleado" required>
									<option v-for="(empleado, index) in data" :key="index" :value="empleado.name">{{ empleado.name }}</option>
								</select>
							</div>							
							<div class="form-group col">
								<label for="inputState">Actividad</label>
								<select id="inputState" class="form-control" v-model="actividad" required>
									<option v-for="(actividad, index) in actividades" :key="index" :value="actividad">{{ actividad }}</option>
								</select>
							</div>
							<div class="form-group col">
								<label for="inputState">Horario</label>
								<select id="inputState" class="form-control" v-model="horario" required>
									<option v-for="(horario, index) in columns" :key="index" :value="horario.name">{{ horario.th }}</option>
								</select>
							</div>
							<div class="form-group col-12">
								<button type="submit" class="btn btn-primary mb-2">Agregar</button>
							</div>																				
						</div>
					</form>	
				</div>
			</div>
			<div class="card col-12">
				<div class="table-responsive card-body">
					<h3 class="card-title">Horarios y actividades:</h3>
					<table class="table table-striped table-sm table-bordered">
						<thead class="thead-dark">
							<tr>
								<th></th>
								<th v-for="(cl, index) in columns" :key="index">{{ cl.th}}</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="(item, index) in data" :key="index">
								<td>{{ item.name }}</td>
								<td :class="getClass(item.c1)">{{ item.c1 }}</td>
								<td :class="getClass(item.c2)">{{ item.c2 }}</td>
								<td :class="getClass(item.c3)">{{ item.c3 }}</td>
								<td :class="getClass(item.c4)">{{ item.c4 }}</td>
								<td :class="getClass(item.c5)">{{ item.c5 }}</td>
								<td :class="getClass(item.c6)">{{ item.c6 }}</td>
								<td :class="getClass(item.c7)">{{ item.c7 }}</td>
								<td :class="getClass(item.c8)">{{ item.c8 }}</td>
								<td :class="getClass(item.c9)">{{ item.c9 }}</td>
								<td :class="getClass(item.c10)">{{ item.c10 }}</td>
								<td :class="getClass(item.c11)">{{ item.c11 }}</td>
								<td :class="getClass(item.c12)">{{ item.c12 }}</td>
								<td :class="getClass(item.c13)">{{ item.c13 }}</td>
								<td :class="getClass(item.c14)">{{ item.c14 }}</td>
								<td :class="getClass(item.c15)">{{ item.c15 }}</td>
								<td :class="getClass(item.c16)">{{ item.c16 }}</td>
								<td :class="getClass(item.c17)">{{ item.c17 }}</td>
								<td :class="getClass(item.c18)">{{ item.c18 }}</td>
								<td :class="getClass(item.c19)">{{ item.c19 }}</td>
								<td :class="getClass(item.c20)">{{ item.c20 }}</td>
								<td :class="getClass(item.c21)">{{ item.c21 }}</td>
								<td :class="getClass(item.c22)">{{ item.c22 }}</td>
								<td :class="getClass(item.c23)">{{ item.c23 }}</td>
								<td :class="getClass(item.c24)">{{ item.c24 }}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<div class="card col-12">
				<div class="table-responsive card-body">
					<h3 class="card-title">Empleados disponibles por horario:</h3>
					<table class="table table-striped table-sm table-bordered">
						<thead class="thead-dark">
							<tr>
								<th v-for="(cl, index) in columns" :key="index">{{ cl.th}}</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="(item, index) in disponibilidad" :key="index">
								<td :class="getClass(item.c1)">{{ item.c1 }}</td>
								<td :class="getClass(item.c2)">{{ item.c2 }}</td>
								<td :class="getClass(item.c3)">{{ item.c3 }}</td>
								<td :class="getClass(item.c4)">{{ item.c4 }}</td>
								<td :class="getClass(item.c5)">{{ item.c5 }}</td>
								<td :class="getClass(item.c6)">{{ item.c6 }}</td>
								<td :class="getClass(item.c7)">{{ item.c7 }}</td>
								<td :class="getClass(item.c8)">{{ item.c8 }}</td>
								<td :class="getClass(item.c9)">{{ item.c9 }}</td>
								<td :class="getClass(item.c10)">{{ item.c10 }}</td>
								<td :class="getClass(item.c11)">{{ item.c11 }}</td>
								<td :class="getClass(item.c12)">{{ item.c12 }}</td>
								<td :class="getClass(item.c13)">{{ item.c13 }}</td>
								<td :class="getClass(item.c14)">{{ item.c14 }}</td>
								<td :class="getClass(item.c15)">{{ item.c15 }}</td>
								<td :class="getClass(item.c16)">{{ item.c16 }}</td>
								<td :class="getClass(item.c17)">{{ item.c17 }}</td>
								<td :class="getClass(item.c18)">{{ item.c18 }}</td>
								<td :class="getClass(item.c19)">{{ item.c19 }}</td>
								<td :class="getClass(item.c20)">{{ item.c20 }}</td>
								<td :class="getClass(item.c21)">{{ item.c21 }}</td>
								<td :class="getClass(item.c22)">{{ item.c22 }}</td>
								<td :class="getClass(item.c23)">{{ item.c23 }}</td>
								<td :class="getClass(item.c24)">{{ item.c24 }}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: "Calendar",
	mounted () {
		this.hallarDisponibilidad();
	},
	methods: {
		getClass(item){
			switch(item){
				case 'DISPONIBLE':
					return 'bg-success';
				case 'REUNION':
					return 'bg-primary';
				case 'ALMUERZO':
					return 'bg-warning'
				case 'EXTRAS':
					return 'bg-info';
				case 'OFF':
					return 'bg-danger';
				case '--':
					return '';	
				default:
					return 'bg-success';
			}
		},
		anadirNuevoEmpleado() {
			const horario = { ...this.horarioNuevo };
			horario.name = this.nuevoEmpleado;
			this.data.push(horario);
			this.nuevoEmpleado = null;
			this.hallarDisponibilidad();
		},
		anadirActividad() {
			this.data.forEach(item => {
				if(item.name.includes(this.empleado)) {
					item[this.horario] = this.actividad;
				}
			})
			this.hallarDisponibilidad();
		},
		hallarDisponibilidad(){
			this.disponibilidad = [];
			this.data.forEach(item => {
				const empleado = {};
				empleado.name = item.name;
				this.columns.forEach( horario => {
					if(item[horario.name].includes('DISPONIBLE')) {
						empleado[horario.name] = item.name;
					}else{
						empleado[horario.name] = "--";
					}
				})
				this.disponibilidad.push(empleado)
			})
		}
	},
	data() {
		return {
			empleado: null,
			nuevoEmpleado: null,
			actividad: null,
			horario: null,
			disponibilidad: [],
			actividades: ['OFF', 'DISPONIBLE', 'ALMUERZO', 'REUNION'],
			horarioNuevo:
				{
					name: null,
					c1: "OFF",
					c2: "OFF",
					c3: "DISPONIBLE",
					c4: "DISPONIBLE",
					c5: "DISPONIBLE",
					c6: "DISPONIBLE",
					c7: "DISPONIBLE",
					c8: "DISPONIBLE",
					c9: "DISPONIBLE",
					c10: "DISPONIBLE",
					c11: "ALMUERZO",
					c12: "ALMUERZO",
					c13: "DISPONIBLE",
					c14: "DISPONIBLE",
					c15: "DISPONIBLE",
					c16: "DISPONIBLE",
					c17: "DISPONIBLE",
					c18: "DISPONIBLE",
					c19: "DISPONIBLE",
					c20: "DISPONIBLE",
					c21: "DISPONIBLE",
					c22: "DISPONIBLE",
					c23: "OFF",
					c24: "OFF"					
				},
			data: [
				{
					name: "Kilie",
					c1: "OFF",
					c2: "OFF",
					c3: "DISPONIBLE",
					c4: "DISPONIBLE",
					c5: "DISPONIBLE",
					c6: "DISPONIBLE",
					c7: "DISPONIBLE",
					c8: "DISPONIBLE",
					c9: "DISPONIBLE",
					c10: "DISPONIBLE",
					c11: "ALMUERZO",
					c12: "ALMUERZO",
					c13: "DISPONIBLE",
					c14: "REUNION",
					c15: "DISPONIBLE",
					c16: "REUNION",
					c17: "DISPONIBLE",
					c18: "DISPONIBLE",
					c19: "DISPONIBLE",
					c20: "DISPONIBLE",
					c21: "OFF",
					c22: "OFF",
					c23: "REUNION",
					c24: "OFF"
				},
				{
					name: "Paul",
					c1: "REUNION",
					c2: "OFF",
					c3: "DISPONIBLE",
					c4: "DISPONIBLE",
					c5: "REUNION",
					c6: "DISPONIBLE",
					c7: "DISPONIBLE",
					c8: "DISPONIBLE",
					c9: "DISPONIBLE",
					c10: "DISPONIBLE",
					c11: "ALMUERZO",
					c12: "ALMUERZO",
					c13: "DISPONIBLE",
					c14: "DISPONIBLE",
					c15: "DISPONIBLE",
					c16: "DISPONIBLE",
					c17: "REUNION",
					c18: "REUNION",
					c19: "DISPONIBLE",
					c20: "DISPONIBLE",
					c21: "OFF",
					c22: "OFF",
					c23: "OFF",
					c24: "OFF"
				},
				{
					name: "Alex",
					c1: "OFF",
					c2: "OFF",
					c3: "REUNION",
					c4: "DISPONIBLE",
					c5: "DISPONIBLE",
					c6: "REUNION",
					c7: "DISPONIBLE",
					c8: "DISPONIBLE",
					c9: "DISPONIBLE",
					c10: "DISPONIBLE",
					c11: "ALMUERZO",
					c12: "REUNION",
					c13: "DISPONIBLE",
					c14: "DISPONIBLE",
					c15: "DISPONIBLE",
					c16: "DISPONIBLE",
					c17: "REUNION",
					c18: "DISPONIBLE",
					c19: "DISPONIBLE",
					c20: "DISPONIBLE",
					c21: "OFF",
					c22: "OFF",
					c23: "OFF",
					c24: "OFF"
				},
				{
					name: "Luis",
					c1: "OFF",
					c2: "OFF",
					c3: "DISPONIBLE",
					c4: "DISPONIBLE",
					c5: "REUNION",
					c6: "DISPONIBLE",
					c7: "DISPONIBLE",
					c8: "DISPONIBLE",
					c9: "DISPONIBLE",
					c10: "DISPONIBLE",
					c11: "ALMUERZO",
					c12: "ALMUERZO",
					c13: "DISPONIBLE",
					c14: "REUNION",
					c15: "DISPONIBLE",
					c16: "DISPONIBLE",
					c17: "REUNION",
					c18: "REUNION",
					c19: "DISPONIBLE",
					c20: "DISPONIBLE",
					c21: "OFF",
					c22: "OFF",
					c23: "OFF",
					c24: "OFF"
				},
				{
					name: "Jairo",
					c1: "OFF",
					c2: "OFF",
					c3: "REUNION",
					c4: "DISPONIBLE",
					c5: "REUNION",
					c6: "DISPONIBLE",
					c7: "DISPONIBLE",
					c8: "DISPONIBLE",
					c9: "DISPONIBLE",
					c10: "DISPONIBLE",
					c11: "ALMUERZO",
					c12: "ALMUERZO",
					c13: "DISPONIBLE",
					c14: "DISPONIBLE",
					c15: "DISPONIBLE",
					c16: "DISPONIBLE",
					c17: "DISPONIBLE",
					c18: "DISPONIBLE",
					c19: "DISPONIBLE",
					c20: "DISPONIBLE",
					c21: "OFF",
					c22: "OFF",
					c23: "REUNION",
					c24: "OFF"
				},
				{
					name: "Sonia",
					c1: "OFF",
					c2: "OFF",
					c3: "REUNION",
					c4: "DISPONIBLE",
					c5: "DISPONIBLE",
					c6: "DISPONIBLE",
					c7: "DISPONIBLE",
					c8: "DISPONIBLE",
					c9: "DISPONIBLE",
					c10: "DISPONIBLE",
					c11: "ALMUERZO",
					c12: "REUNION",
					c13: "DISPONIBLE",
					c14: "REUNION",
					c15: "DISPONIBLE",
					c16: "DISPONIBLE",
					c17: "DISPONIBLE",
					c18: "REUNION",
					c19: "DISPONIBLE",
					c20: "DISPONIBLE",
					c21: "OFF",
					c22: "OFF",
					c23: "OFF",
					c24: "OFF"
				},
				{
					name: "Byron",
					c1: "OFF",
					c2: "OFF",
					c3: "DISPONIBLE",
					c4: "DISPONIBLE",
					c5: "DISPONIBLE",
					c6: "DISPONIBLE",
					c7: "DISPONIBLE",
					c8: "DISPONIBLE",
					c9: "DISPONIBLE",
					c10: "DISPONIBLE",
					c11: "ALMUERZO",
					c12: "REUNION",
					c13: "DISPONIBLE",
					c14: "DISPONIBLE",
					c15: "DISPONIBLE",
					c16: "DISPONIBLE",
					c17: "DISPONIBLE",
					c18: "DISPONIBLE",
					c19: "DISPONIBLE",
					c20: "DISPONIBLE",
					c21: "OFF",
					c22: "OFF",
					c23: "OFF",
					c24: "OFF"
				}
			],			
			columns:[
				{name:"c1",  th:" 7:00-7:30"},
				{name:"c2",  th:" 7:30-8:00"},
				{name:"c3",  th:" 8:00-8:30"},
				{name:"c4",  th:" 8:30-9:00"},				
				{name:"c5",  th:" 9:00-9:30"},
				{name:"c6",  th:" 9:30-10:00"},
				{name:"c7",  th:"10:00-10:30"},
				{name:"c8",  th:"10:30-11:00"},				
				{name:"c9",  th:"11:00-11:30"},
				{name:"c10", th:"11:30-12:00"},				
				{name:"c11", th:"12:00-12:30"},
				{name:"c12", th:"12:30-13:00"},
				{name:"c13", th:"13:00-13:30"},
				{name:"c14", th:"13:30-14:00"},
				{name:"c15", th:"14:00-14:30"},
				{name:"c16", th:"14:30-15:00"},
				{name:"c17", th:"15:00-15:30"},
				{name:"c18", th:"15:30-16:00"},
				{name:"c19", th:"16:00-16:30"},
				{name:"c20", th:"16:30-17:00"},
				{name:"c21", th:"17:00-17:30"},
				{name:"c22", th:"17:30-18:00"},
				{name:"c23", th:"18:00-18:30"},
				{name:"c24", th:"18:30-19:00"}
			]
		}
	}
}
</script>