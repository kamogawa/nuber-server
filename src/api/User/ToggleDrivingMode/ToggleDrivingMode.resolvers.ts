import { Resolvers } from "../../../types/resolvers";
import privateResolver from "../../../utils/privateResolver";
import User from "../../../entities/User";
import { ToggleDrivingModeResponse } from "../../../types/graph";

const resolvers: Resolvers = {
    Mutation: {
        ToggleDrivingMode: privateResolver(async(_, __, { req }) : Promise<ToggleDrivingModeResponse>=>{
            const user: User = req.user;
            try {
                user.isDriving = !user.isDriving;
                user.save();
                return {
                    ok: true,
                    error: null
                };
            } catch (error) {
                return {
                    ok: false,
                    error
                }
            }
        })
    } 
};
export default resolvers;