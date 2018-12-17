import { Resolvers } from "../../../types/resolvers";
import { EmailSignUpMutationArgs, EmailSignInResponse } from "../../../types/graph";
import User from "../../../entities/User";

const resolvers: Resolvers = {
    Mutation: {
        EmailSignUp: async(_, args: EmailSignUpMutationArgs): Promise<EmailSignInResponse> => {
            const { email } = args;
            try {
                const existingUser = await User.findOne({email});
                if(existingUser){
                    return {
                        ok: false,
                        error: "You should sign in instead",
                        token:null
                    };
                } else {
                    const newUser = await User.create({...args}).save();
                    return {
                        ok: true,
                        error: null,
                        token: "Comming soon!"
                    };
                }
            } catch (error) {
                return {
                    ok: false,
                    error: error.message,
                    token: null
                };
            }
        }
    }
};
export default resolvers;