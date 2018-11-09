const Mutations = {
    async createItem(parent, args, ctx, info) {
        // access db
        // ctx will return a prmoise 
        const item = await ctx.db.mutation.createItem({
            data: {
                ...args
            },
        }, info);

        return item;
    },

    async createUser(parent, args, ctx, info) {
        const user = await ctx.db.mutation.createUser({
            data: {
                ...args
            }
        }, info);

        return user;
    }
};

module.exports = Mutations;
