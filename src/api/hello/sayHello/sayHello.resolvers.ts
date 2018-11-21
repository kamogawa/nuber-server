import { Greeting } from "../../../types/graph";

const resolvers = {
  Query: {
    sayHello: () : Greeting => {
      return {
        error: false,
        text: 'hello graphQl!!'
      };
    }
  }
};
export default resolvers;