const { forwardTo } = require('prisma-binding')
const Query = {
//   async items(parent, args, ctx, info) {
//     const items = await ctx.db.query.items();
//     return items;
//   },
//  can also be written as - using forward to
    items: forwardTo('db'),
    users: forwardTo('db'),
};

module.exports = Query;
