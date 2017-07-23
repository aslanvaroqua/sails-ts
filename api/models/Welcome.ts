export class Welcome {
   attributes: any = {
    id: {
      type: 'integer',
      primaryKey: true
    },
    message: {
      type: 'string',
      required: true,
      defaultsTo: 'default message'
    }
  };
}


