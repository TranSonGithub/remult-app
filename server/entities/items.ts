import { Entity, Fields } from 'remult';

@Entity('items', {
  allowApiCrud: true,
})
export class Item {
  @Fields.uuid()
  id: string;

  @Fields.string()
  description: string;
}
