<template>
	<div class="container">

		<div class="row">
			<div class="col-4"></div>
			<div class="col-8 card p-4">
				<DataTable
					:footer="true"
					:paginatable="true" 
					:data="data"
					:columns="columns"
					:index="true"
				/>
			</div>
		</div>
		{{ data }}
	</div>

  
</template>

<script>
import DataTable from "@/utils/DataTable.vue"
export default {
	name: "Calendar",
	components: {DataTable},
	data() {
		return {
			data: [
				{
					horario: "8:00",
					nombre: "Fulano",
					puesto: "Nose"
				},
				{
					horario: "8:00",
					nombre: "Fulano",
					puesto: "Nose"
				},
				{
					horario: "8:00",
					nombre: "Fulano",
					puesto: "Nose"
				}								
			],			
			columns:[
				{name:"horario", th:"Horario"},
				{name:"nombre", th:"Nombre"},
				{name:"puesto", th:"Nose"},
			]
		}
	}

}
</script>

<style>

</style>