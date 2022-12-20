import { Entity, Fields } from 'remult';

@Entity('items', {
  allowApiCrud: true,
})
export class Admin {
  @Fields.uuid()
  id: string;

  @Fields.string()
  name: string;

  @Fields.string()
  password: string;

  @Fields.object()
  restaurantInfo: {
    name: string;
    address: string;
  };

  @Fields.date()
  createdAt: string;

  @Fields.date()
  updatedAt: string;
}
