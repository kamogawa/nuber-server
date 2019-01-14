import { Resolvers } from "../../../types/resolvers";
import privateResolver from "src/utils/privateResolver";

const resolvers: Resolvers ={ 
    Query: {
        GetNearByDrivers: privateResolver(async(_, __, {req}) => Promise<Getnear> {

        })
    }
};
export default resolvers;