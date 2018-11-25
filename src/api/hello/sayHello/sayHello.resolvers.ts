import { SayHelloResponse, SayHelloQueryArgs } from "../../../types/graph";

const resolvers = {
  Query: {
    sayHello: (_, arg: SayHelloQueryArgs) : SayHelloResponse => {
      return {
        error: false,
        text: `hello ${arg.name}`
      };
    }
  }
};
export default resolvers;