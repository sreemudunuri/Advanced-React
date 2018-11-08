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
};

module.exports = Mutations;
