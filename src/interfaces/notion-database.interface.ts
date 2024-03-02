export interface NotionDatabaseInterface {
	data: Datum[]
}

export interface Datum {
	object: string
	id: string
	created_time: Date
	last_edited_time: Date
	created_by: CreatedBy
	last_edited_by: CreatedBy
	cover: null
	icon: Icon
	parent: Parent
	archived: boolean
	properties: Properties
	url: string
	public_url: null
}

export interface CreatedBy {
	object: Object
	id: string
}

export enum Object {
	User = 'user',
}

export interface Icon {
	type: string
	external: External
}

export interface External {
	url: string
}

export interface Parent {
	type: string
	database_id: string
}

export interface Properties {
	github_url: URL
	Tecnologias: Tecnologias
	demo_url: URL
	'Nombre del proyecto': NombreDelProyecto
	Propietario: Propietario
	Estado: Estado
	Finalización: Finalización
	Prioridad: Prioridad
	Fechas: Fechas
	Resumen: Resumen
	Tareas: Tareas
}

export interface Estado {
	id: string
	type: string
	status: Status
}

export interface Status {
	id: string
	name: string
	color: string
}

export interface Fechas {
	id: string
	type: string
	date: null
}

export interface Finalización {
	id: string
	type: string
	rollup: Rollup
}

export interface Rollup {
	type: string
	number: null
	function: string
}

export interface NombreDelProyecto {
	id: string
	type: string
	title: Title[]
}

export interface Title {
	type: TitleType
	text: Text
	annotations: Annotations
	plain_text: string
	href: null | string
}

export interface Annotations {
	bold: boolean
	italic: boolean
	strikethrough: boolean
	underline: boolean
	code: boolean
	color: Color
}

export enum Color {
	Default = 'default',
}

export interface Text {
	content: string
	link: External | null
}

export enum TitleType {
	Text = 'text',
}

export interface Prioridad {
	id: string
	type: string
	select: Status | null
}

export interface Propietario {
	id: string
	type: string
	people: CreatedBy[]
}

export interface Resumen {
	id: string
	type: ResumenType
	rich_text: Title[]
}

export enum ResumenType {
	RichText = 'rich_text',
}

export interface Tareas {
	id: string
	type: string
	relation: any[]
	has_more: boolean
}

export interface Tecnologias {
	id: string
	type: string
	multi_select: Status[]
}

export interface URL {
	id: ID
	type: ResumenType
	rich_text: Title[]
}

export enum ID {
	Ejao = 'Ejao',
	HVdC = 'hVdC',
}
