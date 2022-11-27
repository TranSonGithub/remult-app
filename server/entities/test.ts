import { Entity, Fields } from "remult";

@Entity("tests", {
	allowApiCrud: true,
})
export class Test {
	@Fields.uuid()
	id!: string;

	@Fields.string()
	name = "";

	@Fields.number()
	unitPrice = 0;
}
