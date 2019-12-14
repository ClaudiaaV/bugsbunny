const { User }=require("./../models/models");

const user = { 
    create: async (user)=>{
        try{ 
            const result=await User.create(user);
            return result;
            
        }catch(err){
            throw new Error(err.message);
        }
    },
    getAll: async () => {
        try {
            const users = await User.findAll();
            return users;
        } catch(err) {
            throw new Error(err.message);
        }
    }
    
}
module.exports=user;